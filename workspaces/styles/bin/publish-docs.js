/**
 *              Copyright (c) 2025 Visa, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **/
const axios = require('axios'); 
const changeCase = require('change-case'); 
const data = require('../dist/api.json'); 

const API_HOST_PROD = 'https://component-api.visa.com'; 
const API_HOST_DEV = 'http://localhost:3491'; 
const DELAY = 250; // delay between requests to avoid overloading server

// process incoming args/parameters with following format: --arg=value
const processArgs = (args) => {
  const params = {}; 
  
  args
    .filter(x => x.indexOf('--') >= 0 && x.indexOf('=') >= 0) // remove args that don't follow pattern 
    .map(x => x.indexOf('--') === 0 ? x.replace('--', '').split('=') : null) // split them into an array [arg, value]
    .filter(x => x !== null)
    .reduce((o, i) => o[i[0]] = i[1], params); // store in params as object key/value pair 
  
  return params; 
}; 

// main process to publish metadata 
const Process = async ({...args}) => {
  const API_HOST = (args.env && args.env.toUpperCase() === 'PROD') || process.env.NODE_ENV === 'PROD' 
    ? API_HOST_PROD 
    : API_HOST_DEV; 
  
  console.log(args); 
  console.log(API_HOST); 
  console.log(`Uploading metadata for library ${data.library.name}@${data.library.version}`);
  const library = await axios.post(`${API_HOST}/libraries`, data.library); 
  const libraryId = library.data.library._id;
  // const libraryId = 2134;

  for (var i in data.components) {
    const _component = data.components[i]; 
    const componentData = {
      name: _component.name, 
      version: _component.version, 
      description: _component.description, 
      category: _component.catgory, 
      libraryId: libraryId
    }; 

    console.log(`Uploading metadata for ${libraryId} component ${componentData.name}`); 
    const component = await axios.post(`${API_HOST}/components`, componentData); 
    const componentId = component.data.component._id; 
    // const componentId = 9867 + ( 1000 * i) + i; 

    for (var j in _component.examples) {
      const _example = _component.examples[j]; 
      const exampleData = { ..._example }; 
      exampleData.componentId = componentId; 
      exampleData.libraryId = libraryId; 

      console.log(`Uploading metadata for ${libraryId} component ${componentId} example "${exampleData.name}"`)
      await axios.post(`${API_HOST}/examples`, exampleData);
    }

    for (var j in _component.properties) {
      const _property = _component.properties[j]; 
      const propertyData = { ..._property }; 
      propertyData.componentId = componentId; 
      propertyData.libraryId = libraryId; 
      
      // remove bit for HX tables 
      if ("data" in propertyData) {
        delete propertyData["data"]; 
      }

      console.log(`Uploading metadata for ${libraryId} component ${componentId} property "${propertyData.name}"`);
      await axios.post(`${API_HOST}/properties`, propertyData); 
    }

    // for (var j in _component.variables) {
    //   const _variable = _component.variables[j]; 
    //   const variableData = { ..._variable }; 
    //   variableData.componentId = componentId; 
    //   variableData.libraryId = libraryId; 

    //   console.log(`Uploading metadata for ${libraryId} component ${componentId} variable ${variableData.name}`);
    //   await axios.post(`${API_HOST}/properties`, variableData); 
    // }
  }
}; 

// start process 
try {
  const args = processArgs(process.argv); 
  Process({...args}); 
} catch(error) {
  console.log("Error publishing library/component metadata"); 
  console.error(error); 
}
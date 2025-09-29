/**
 *              © 2025 Visa
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
const changeCase = require('change-case');
const docs = require('../dist/data.json');
const fs = require('node:fs'); 
const path = require('node:path'); 

const DESTINATION = '../dist';
const OUTPUT = 'api.json';

const getFilesRecursively = (directory) => {
  let files = [];
  const items = fs.readdirSync(directory);

  items.forEach((item) => {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getFilesRecursively(fullPath));
    } else {
      files.push(fullPath);
    }
  });

  return files;
};

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

// return object with components metadata including associated examples, classes, and variables
const itemizeComponent = (name, category, data, baseDir) => {
  const exampleFiles = getFilesRecursively(baseDir);

  return {
    name: name,
    version: "0.0.1",
    description: data.length > 0 ? data[0].description : "",
    category: category,
    examples: data
      .map((x) => {
        if (!x.markup) return null;

        // Attempt to find the exact file path for the example by matching the title
        const exampleFile = exampleFiles.find((file) => {
          try {
            const fileContent = fs.readFileSync(file, 'utf-8');
            const titleMatch = fileContent.match(/^title:\s*(.+)$/m);
            const title = titleMatch ? titleMatch[1].trim() : null;
            return title === x.name;
          } catch (err) {
            console.error(`Error reading or parsing file: ${file}`, err);
            return false;
          }
        });

        return {
          'name': x.name, 
          'description': x.description,
          'snippet': x.markup,
          'tags': x.tags, 
          'order': x.order, 
          'section': x.section,
          'url': {
            iframe: `${category === "base" ? category : `${category}s`}/${changeCase.paramCase(name)}/example/${changeCase.paramCase(x.name)}`,
            github: exampleFile
              ? `workspaces/styles/${path.relative(process.cwd(), exampleFile)}`
              : null,
          },
        };
      })
      .filter((x) => x !== null),
    properties: data
      .map((x) =>
        x.classes.map((y) => ({
          'name': y,
          'type': 'class',
          'description': '',
        }))
      )
      .flat()
      .filter((x) => {
        // console.log(x); 
        return (
          x.name.indexOf('(') < 0 && // remove sass mixins/functions 
          x.name.indexOf('%') < 0 // remove sass placeholder-classes 
        );
      })
      .filter(
        (x, i, self) =>
          i ===
          self.findIndex((j) => j.place === x.place && j.name === x.name) // removing duplicates. some examples highlight the same class. 
      )
      .flat(),
    variables: Object.keys(docs.entries.variables)
      .map((x) =>
        (category === "base" && name === "sizes" && x.indexOf('--size') === 0) ||
        (category === "base" && name === "elevation" && x.indexOf('--elevation') === 0) ||
        (category === "base" && x.indexOf(name) === 0) ||
        x.indexOf(`v-${name}`) >= 0
          ? {
              'name': x, 
              'type': 'variable',
              'value': docs.entries.variables[x],
            }
          : null
      )
      .filter((x) => x !== null),
  };
};

const parseCategory = (category, oorder=0) => {
  const _split = category.split("-")
  return (_split.length <= 1 || isNaN(parseInt(_split[0]))) 
    ? {
      name: category === "default" ? "examples" : category,
      order: oorder, 
      description: ""
    }
    : {
      name: _split.slice(1).join("-"), 
      order: parseInt(_split[0]), 
      description: ""
    }
}; 

// main process to publish metadata 
const Process = async ({...args}) => {
  // console.log(args); 

  const PATH = path.resolve(args.dest || DESTINATION)

  // create holding directory 
  fs.mkdirSync(
    PATH,
    { recursive: true }
  ); 

  // Format library metadata 
  console.log(`Formatting library data ${docs.name}@${docs.version}`);
  const libraryData = {
    name: docs.name,
    version: docs.version
  };

  // Flatten itemized list of abstracts, base, components and patterns
  console.log("Grouping components, examples, classes, and variables"); 
const flatData = []
  .concat(
    Object.keys(docs.entries.abstracts).map((x) =>
      itemizeComponent(x, "abstract", docs.entries.abstracts[x], path.resolve(__dirname, "../src"))
    )
  )
  .concat(
    Object.keys(docs.entries.base).map((x) =>
      itemizeComponent(x, "base", docs.entries.base[x], path.resolve(__dirname, "../src"))
    )
  )
  .concat(
    Object.keys(docs.entries.components).map((x) =>
      itemizeComponent(x, "component", docs.entries.components[x], path.resolve(__dirname, "../src"))
    )
  )
  .concat(
    Object.keys(docs.entries.patterns || {}).map((x) =>
      itemizeComponent(x, "pattern", docs.entries.patterns[x], path.resolve(__dirname, "../src"))
    )
  );

  const componentData = []

  // Format component metadata 
  for (var i in flatData) {
    console.log(`Formatting component data ${flatData[i].name}`)
    const component = flatData[i]; 
    const _component = { 
      name: component.name,
      version: component.version,
      description: component.description,
      category: component.category,
      libraryId: null,
      exampleSections: [],
      examples: [],
      propertySections: [],
      properties: []
    }; 

    const _exampleSectionsMap = {}; 

    for (var j in component.examples) {
      console.log(`Formatting component data ${_component.name} : example "${component.examples[j].name}"`)
      const example = component.examples[j]; 
      const sectionObj = parseCategory(example.section); 
      _exampleSectionsMap[example.section] = sectionObj; 
      
      const _example = {
        name: example.name,
        description: example.description,
        snippets: _component.category === "pattern"
          ? { 
              // Remove '/example/' from the path for the snippet key
              [`${example.url.iframe.replace('/example/', '/')}.html`]: example.snippet
            }
          : { "html": example.snippet },
        url: example.url,
        tags: example.tags, 
        order: example.order,
        section: sectionObj.name,
        componentId: null, 
        libraryId: null 
      }; 

      _component.examples.push(_example); 
    } 

    _component.exampleSections = Object.keys(_exampleSectionsMap).map(k => _exampleSectionsMap[k])

    for (var j in component.properties) {
      console.log(`Formatting component data ${_component.name} : property "${component.properties[j].name}"`)
      const property = component.properties[j]; 
      const _property = {
        name: property.name, 
        description: property.description, 
        type: property.type, 
        section: "classes",
        componentId: null, 
        libraryId: null, 
        data: {
          name: property.name 
        }
      }; 

      _component.properties.push(_property); 
    }

    for (var j in component.variables) {
      const variable = component.variables[j]; 
      const _variable = {
        name: variable.name, 
        type: variable.type, 
        default: variable.value, 
        section: "variables",
        componentId: null, 
        libraryId: null,
        data: {
          variable: variable.name, 
          value: variable.value
        }
      }; 

      _component.properties.push(_variable); 
    }

  const hasClasses = _component.properties.some(prop => prop.section === "classes");
  const hasVariables = _component.properties.some(prop => prop.section === "variables");

  if (hasClasses || hasVariables) {
    _component.propertySections.push({
      name: "classes",
      order: 0,
      description: ""
    });

    _component.propertySections.push({
      name: "variables",
      order: 1,
      description: ""
    });
  }

    componentData.push(_component); 
  }

  console.log("\nFormatting themes")
  const themeData = Object.keys(docs.entries.themes).map(t => {
    console.log(`Formatting theme data ${t}`); 
    return {
      name: t, 
      description: docs.entries.themes[t].docs.description, 
      variables: docs.entries.themes[t].variables
    }}
  ); 

  fs.writeFileSync(
    path.resolve(PATH, OUTPUT),
    JSON.stringify({
      "library": libraryData,
      "components": componentData, 
      "themes": themeData
    })
  ); 
  
  return; 
}; 

// start process 
try {
  const args = processArgs(process.argv); 
  Process({...args}); 
} catch(error) {
  console.log("Error publishing library/component metadata"); 
  console.error(error); 
}
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
"use strict"

const Process = require('../../../bin/process'); 
const chokidar = require('chokidar');
const fs = require('fs'); 
const moment = require('moment'); 
const parseMD = require('parse-md').default;
const path = require('path');
const postcss = require('postcss');

const { uglify, removeLayers } = require('./css-utils'); 

const SOURCE = './src';
const OUTPUT = './dist'; 
const COMPILED = `${OUTPUT}/styles.css`;

module.exports = Process((args) => {
  // console.log('building docs...', args);

  const getVariables = (filePath) => {
    const file = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const flat = removeLayers(uglify(file));

    const root = postcss.parse(flat, {
      from: path.resolve(filePath), 
      parser: null
    });
  
    const vars = {};
    root.walkRules((rule) => {
      if (rule.selectors.indexOf(':root') < 0) {
        return;
      }
  
      rule.each((decl) => {
        if (
          Boolean(decl.value) && 
          decl.prop.startsWith('--')
        ) {
          const name = decl.prop; // .slice(2);
          vars[name] = decl.value;
        }
      });
    });
  
    return vars;
  };

  const getExamples = (directoryPath, category, component, section="default") => {
    const examples = []; 

    if (fs.lstatSync(directoryPath).isDirectory() === false) {
      return examples; 
    }

    fs.readdirSync(directoryPath).forEach((example) => {
      const examplePath = path.resolve(`${directoryPath}/${example}`);

      if (fs.lstatSync(examplePath).isDirectory()) {
        const exampleObjects = getExamples(examplePath, category, component, example); 
        examples.push(exampleObjects);
        return; 
      } 
      
      const exampleFile = fs.readFileSync(examplePath, 'utf-8');
      const { metadata, content}  = parseMD(exampleFile);

      const exampleObject = {
        "name": metadata.title,
        "description": metadata.description,
        "order": metadata.order,
        "classes": metadata.classes,
        "tags": metadata.tags,
        "markup": content,
        "example": `${category}/${component}/example/${example.replace('.md', '')}`,
        "section": section
      }; 

      examples.push(exampleObject); 
    }); 

    return examples.flat(); 
  }; 

  const buildDocs = () => {
    console.log("Building docs.");
    const _package = fs.readFileSync(path.resolve('./package.json'), 'utf-8'); 
    const packageFile = JSON.parse(_package);

    const entries = {}; 

    // get examples
    fs.readdirSync(SOURCE).forEach((category) => {
      const categoryPath = path.resolve(`${SOURCE}/${category}`);

      if (fs.lstatSync(categoryPath).isDirectory() === false) {
        // console.log("No category found for", category);
        return;
      }

      if (category === 'components' || category === 'base' || category === 'abstracts') {
        console.log(` - Getting ${category} data.`);
        fs.readdirSync(categoryPath).forEach((component) => {
          const componentPath = path.resolve(`${categoryPath}/${component}`);
          
          if (fs.lstatSync(componentPath).isDirectory() === false) {
            // console.log("No component found for", component);
            return; 
          }
          
          const examplesPath = path.resolve(`${categoryPath}/${component}/examples`);
          if (
            !fs.existsSync(examplesPath) || 
            fs.lstatSync(examplesPath).isDirectory() === false
          ) {
            // console.log("No examples found for", component);
            return; 
          }

          // console.log(" - Getting examples for", category, component);
          const exampleObjects = getExamples(examplesPath, category, component); 
          exampleObjects.forEach((example) => {
            if (!(category in entries)) {
              entries[category] = {};
            }

            if (!(component in entries[category])) {
              entries[category][component] = [];
            }

            entries[category][component].push(example);
          }); 
        });
      } else if (category === 'themes') {
        console.log(" - Getting theme data.");
        entries['themes'] = {}

        fs.readdirSync(categoryPath).forEach((theme) => {
          if (fs.lstatSync(path.resolve(`${categoryPath}/${theme}`)).isDirectory() === false) {
            return; 
          }

          const compiledThemePath = `${OUTPUT}/themes/${theme}/index.css`;

          // console.log(" - Getting data for", category, theme);
          entries['themes'][theme] = {
            docs: {
              "name": theme,
              "description": '',
              "classes": [],
              "markup": ''
            },
            variables: getVariables(compiledThemePath)
          }; 
        });
      } else if (category === 'vendor' || category === 'default') {
        return; 
      } else {

      }
    }); 

    // get variables 
    console.log(" - Getting variables data."); 
    
    entries['variables'] = getVariables(COMPILED);

    // save data file 
    // console.log(`Saving data file (${Object.keys(entries).length})`)
    console.log("Saving docs data file.\n"); 
    const data = {
      "name": packageFile.name, 
      "version": packageFile.version,
      "datetime": moment().format('YYYY/MM/DD HH:mm:ss:SSSS'),
      "entries": entries
    }; 

    fs.writeFileSync(
      path.resolve(path.resolve(`${OUTPUT}/data.json`)), 
      JSON.stringify(data)
    ); 
  }; 

  buildDocs(); 

  if (args['watch']) {
    chokidar.watch(path.resolve(`${SOURCE}/**/*.md`)).on('change', (e, p) => {
      // console.log("chokidar", e, p);
      setTimeout(() => {
        buildDocs();
      }, 200); 
    }); 
  } 
}); 
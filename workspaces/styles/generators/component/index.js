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
const { writeFileSync, existsSync } = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const changeCase = require('change-case');
const terminal = require('terminal-kit').terminal;

const Templates = require('./templates.js');
const Exports = require('./exports.js');

const generator = async (target = 'test', targetPath = 'src/components') => {
  const DEFAULT_VERSION = '0.0.1';

  let name = null;
  let description = null; 
  let version = null; 
  let keywords = []; 
  let template = null;
  let project = 'vpds-styles';
  let library = 'styles';

  const categories = Object.keys(Templates); 

  console.log("component generator\n");
  terminal('name: ');
  await terminal.inputField(
    {},
    async (err1, responseName) => {
      name = responseName;

      console.log();
      terminal('description (optional): '); 
      await terminal.inputField(
        {},
        async (err2, responseDescription) => {
          description = responseDescription === null || responseDescription.length === 0
            ? `${changeCase.capitalCase(name)} description`
            : responseDescription; 
          
          console.log();
          terminal(`version (${DEFAULT_VERSION}): `); 
          await terminal.inputField(
            {},
            async (err3, responseVersion) => {
              version = responseVersion === null || responseVersion.length === 0 
                ? DEFAULT_VERSION 
                : `${responseVersion}`; 

              console.log();
              terminal('keywords ([]): ');
              await terminal.inputField(
                {}, 
                async (err4, responseKeywords) => {
                  keywords = responseKeywords == null || responseKeywords.length === 0 
                    ? [] 
                    : responseKeywords.split(',').map(x => x.trim());

                  console.log();
                  terminal('template:');
                  await terminal.singleColumnMenu(categories, async (err5, responseTemplate) => {
                    const directory = path.resolve(`${targetPath}/${changeCase.paramCase(name)}`);
                    template = responseTemplate.selectedText; 
            
                    console.log();
                    await mkdirp(directory).then((made, err3) => {
                      console.log('created directory', made); 
                      if (err3) {
                        return console.error(err3);
                      }
            
                      console.log('copying files'); 
                      Templates[template].forEach(templ => {
                        if (!existsSync(path.resolve(`${directory}/${templ.path}`))) {
                          writeFileSync(
                            path.resolve(`${directory}/${templ.path}`), 
                            templ.content(
                              changeCase.pascalCase(name), 
                              description, 
                              version, 
                              keywords,
                              project,
                              library
                            )
                          );
                          console.log(`  ${target}/${templ.path} created.`);
                        }
                      }); 
            
                      console.log('adding to exports'); 
                      Exports(); 
            
                      console.log(); 
                      console.log(`${changeCase.paramCase(name)} component created!`);
                      return; 
                    }); 
            
                    process.exit();
                  });
                }
              ); 
            }
          ); 
        }
      ); 
    }
  );
};

module.exports = generator;

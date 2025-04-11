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
"use strict"

const Process = require('./process'); 
const { readFileSync, writeFileSync } = require('fs'); 
const path = require('path'); 

const ROOT_PACKAGE_JSON = './package.json'; 
const WORKSHOP_PACKAGE_JSON = './workspaces/workshop/package.json'; 
const STYLES_PACKAGE_JSON = './workspaces/styles/package.json'; 

// Temporary fix to resolve Jenkins automatic versioning for publishing 
// currently, all versions across root project and workspaces need to match for Jenkins 
// to coordinate the updte tand publishing. 
// in the future, we'll need to modify the versions separately via Jenkins 
// if we keep the monorepo approach 
module.exports = Process((args) => {
  // load files 
  const rootJSON = JSON.parse(readFileSync(path.resolve(ROOT_PACKAGE_JSON), 'utf-8'));
  const stylesJSON = JSON.parse(readFileSync(path.resolve(STYLES_PACKAGE_JSON), 'utf-8'));  
  const workshopJSON = JSON.parse(readFileSync(path.resolve(WORKSHOP_PACKAGE_JSON), 'utf-8'));

  // get target version
  const targetVersion = args['v'] 
    ? args['v']
    : stylesJSON.version;

  // update versions
  stylesJSON.version = targetVersion;
  rootJSON.version = targetVersion;
  workshopJSON.version = targetVersion;

  // write files
  writeFileSync(path.resolve(STYLES_PACKAGE_JSON), JSON.stringify(stylesJSON, null, 2));
  writeFileSync(path.resolve(ROOT_PACKAGE_JSON), JSON.stringify(rootJSON, null, 2));
  writeFileSync(path.resolve(WORKSHOP_PACKAGE_JSON), JSON.stringify(workshopJSON, null, 2));
})
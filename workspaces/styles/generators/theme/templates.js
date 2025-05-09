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
const lightTemplate = require('./templates/light.js'); 
const darkTemplate = require('./templates/dark.js');
const hybridTemplate = require('./templates/hybrid.js'); 

module.exports = {
  "light": lightTemplate,
  "dark": darkTemplate,
  "hybrid": hybridTemplate
}; 
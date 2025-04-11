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

const index = name => `/**
* @name ${changeCase.capitalCase(name)}
* @description ${changeCase.capitalCase(name)} component.
*/
@use './_vars' as *;

/**
  * @name Default
  * @description Default ${changeCase.noCase(name)}.
  *
  * @class .v-${changeCase.paramCase(name)} Default class.
  *
  * @markup
  * <div class="v-${changeCase.paramCase(name)}">Example</div>
  *
  * @section ${changeCase.capitalCase(name)}
  */
@layer components {
  .v-${changeCase.paramCase(name)} {
    $root: &; 
    
  }
}
`;

const vars = name => `$vars: (

);

// generate component css variables 
@layer components {
  :root,
  .v-alternate {
    @each $token, $value in $vars {
      #{--v-${changeCase.paramCase(name)}-#{$token}}: #{$value};
    }
  }
}
`;

const package = (name, description, version, keywords, project, library) => `{
  "name": "vpds-styles/${changeCase.paramCase(name)}",
  "version": "${version}",
  "description": "${description}",
  "keywords": [${keywords.map(x => `"${x}"`)}],
  "template": "blank",
  "project": "${project}",
  "library": "${library}"
}`; 

module.exports = [
  {
    content: index,
    path: 'index.scss'
  },
  {
    content: vars, 
    path: '_vars.scss'
  },
  {
    content: package, 
    path: 'package.json'
  }
];
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
  * <div class="v-${changeCase.paramCase(name)}">
  *   Secondary
  * </div> 
  * <br />
  * <span class="v-${changeCase.paramCase(name)}">
  *   Secondary
  * </span>
  *
  * @section ${changeCase.capitalCase(name)}
  */
@layer components {
  .v-${changeCase.paramCase(name)} {
    $root: &; 
    
    background-color: var(--v-${changeCase.paramCase(name)}-background);
    border-color: var(--v-${changeCase.paramCase(name)}-border-color);
    border-radius: var(--v-${changeCase.paramCase(name)}-border-radius);
    border-style: var(--v-${changeCase.paramCase(name)}-border-style); 
    border-width: var(--v-${changeCase.paramCase(name)}-border-size);
    color: var(--v-${changeCase.paramCase(name)}-foreground);
    font-size: var(--v-${changeCase.paramCase(name)}-font-size);
    font-weight: var(--v-${changeCase.paramCase(name)}-font-weight);
    letter-spacing: var(--v-${changeCase.paramCase(name)}-letter-spacing); 
    line-height: var(--v-${changeCase.paramCase(name)}-line-height); 

    /** 
    * @name Alternate
    * @description Alternate ${changeCase.paramCase(name)}. 
    *
    * @class .v-${changeCase.paramCase(name)}.v-alternate ${changeCase.paramCase(name)}.
    *
    * @markup 
    * <div class="v-surface v-alternate" style="padding: var(--size-responsive-10);">
    *   <div class="v-${changeCase.paramCase(name)}">
    *     Alternate
    *   </div>
    *   <br />
    *   <span class="v-${changeCase.paramCase(name)}">
    *     Alternate
    *   </span>
    * </div>
    *
    * @section ${changeCase.capitalCase(name)}
    */ 
  }
}
`;

const vars = name => `$vars: (
  block-size: 36px,
  font-size: var(--typography-label-font-size),
  font-weight: 600,
  letter-spacing: .5px,
  line-height: var(--typography-label-line-height),
  padding-block: calc(10px - var(--v-${changeCase.paramCase(name)}-border-size)),
  padding-inline: calc(14px - var(--v-${changeCase.paramCase(name)}-border-size)),
  
  // default 
  background: var(--palette-default-surface-1),
  border-color: var(--palette-default-active),
  border-radius: var(--size-rounded-medium),
  border-size: var(--theme-border-size),
  border-style: solid,
  foreground: var(--palette-default-active),
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
  "template": "action-secondary-stateless",
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
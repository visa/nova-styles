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
  *   Example
  * </div>
  *
  * @section ${changeCase.capitalCase(name)}
  */
@layer components {
  .v-${changeCase.paramCase(name)} {
    $root: &; 
    
    background-color: var(--v-${changeCase.paramCase(name)}-background);
    border-color: var(--v-${changeCase.paramCase(name)}-border-color);
    border-style: var(--v-${changeCase.paramCase(name)}-border-style);
    border-width: var(--v-${changeCase.paramCase(name)}-border-size);
    color: var(--v-${changeCase.paramCase(name)}-text);
    padding-block: var(--v-${changeCase.paramCase(name)}-padding-block); 
    padding-inline: var(--v-${changeCase.paramCase(name)}-padding-inline); 

    /**
    * @name Default/Info
    * @description Informational ${changeCase.noCase(name)}, same as default. 
    *
    * @class .v-${changeCase.paramCase(name)} Match default messaging colors.
    * @class .v-${changeCase.paramCase(name)}-info Match info messaging colors.
    *  
    * @markup 
    * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-info">
    *   Example 
    * </div>
    *
    * @section ${changeCase.capitalCase(name)}
    */
    &,
    &-info {
      background-color: var(--v-${changeCase.paramCase(name)}-background);
      border-color: var(--v-${changeCase.paramCase(name)}-border-color);
      border-style: var(--v-${changeCase.paramCase(name)}-border-style);
      border-width: var(--v-${changeCase.paramCase(name)}-border-size);
      color: var(--v-${changeCase.paramCase(name)}-text-info);
    }

    /**
    * @name Success
    * @description ${changeCase.noCase(name)} to indicate success. 
    *
    * @class .v-${changeCase.paramCase(name)}-success Match messaging colors.
    *  
    * @markup 
    * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-success">
    *   Example
    * </div>
    *
    * @section ${changeCase.capitalCase(name)}
    */
    &-success {
      background-color: var(--v-${changeCase.paramCase(name)}-background-success);
      border-color: var(--v-${changeCase.paramCase(name)}-border-color-success);
      border-style: var(--v-${changeCase.paramCase(name)}-border-style);
      border-width: var(--v-${changeCase.paramCase(name)}-border-size); 
      color: var(--v-${changeCase.paramCase(name)}-text-success);
    }

    /**
    * @name Warning
    * @description ${changeCase.noCase(name)} to indicate a warning. 
    *
    * @class .v-${changeCase.paramCase(name)}-warning Match messaging colors.
    *  
    * @markup 
    * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-warning">
    *   Example
    * </div>
    *
    * @section ${changeCase.capitalCase(name)}
    */
    &-warning {
      background-color: var(--v-${changeCase.paramCase(name)}-background-warning);
      border-color: var(--v-${changeCase.paramCase(name)}-border-color-warning);
      border-style: var(--v-${changeCase.paramCase(name)}-border-style);
      border-width: var(--v-${changeCase.paramCase(name)}-border-size);
      color: var(--v-${changeCase.paramCase(name)}-text-warning);
    }

    /**
    * @name Error
    * @description Error ${changeCase.noCase(name)}. 
    *
    * @class .v-${changeCase.paramCase(name)}-error Match messaging colors.
    *  
    * @markup 
    * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-error">
    *   Example
    * </div>
    *
    * @section ${changeCase.capitalCase(name)}
    */
    &-error {
      background-color: var(--v-${changeCase.paramCase(name)}-background-error);
      border-color: var(--v-${changeCase.paramCase(name)}-border-color-error);
      border-style: var(--v-${changeCase.paramCase(name)}-border-style);
      border-width: var(--v-${changeCase.paramCase(name)}-border-size);
      color: var(--v-${changeCase.paramCase(name)}-text-negative);
    }
  }
}
`;

const vars = name => `$vars: (
  border-style: solid,
  border-size: var(--theme-border-size),
  padding-block: 16px,
  padding-inline: 16px,

  // default/info
  background: var(--palette-messaging-highlight-info),
  border-color: var(--palette-messaging-graphics-info),
  graphics: var(--palette-messaging-graphics-info),
  text: var(--palette-default-text),

  // positive
  background-success: var(--palette-messaging-highlight-positive),
  border-color-success: var(--palette-messaging-graphics-positive),
  graphics-success: var(--palette-messaging-graphics-positive),
  text-success: var(--palette-default-text),

  // warning
  background-warning: var(--palette-messaging-highlight-warning),
  border-color-warning: var(--palette-messaging-graphics-warning),
  graphics-warning: var(--palette-messaging-graphics-warning),
  text-warning: var(--palette-default-text),

  // error
  background-error: var(--palette-messaging-highlight-negative),
  border-color-error: var(--palette-messaging-graphics-negative),
  graphics-error: var(--palette-messaging-graphics-negative),
  text-error: var(--palette-default-text),
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
  "template": "messaging",
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
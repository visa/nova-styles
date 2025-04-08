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
const cssbeautify = require('cssbeautify'); 
const path = require('path'); 
const replaceAll = require('replaceall'); 
const { readFileSync } = require('fs');

const { 
  getMapDefinition, 
  getBlockDefinition 
} = require('../../../bin/css-utils.js'); 

const index = name => `/**
 * @name ${changeCase.capitalCase(name)}
 * @description ${changeCase.capitalCase(name)} base definition.
 */ 
@use './vars' as *; 

/**
* @name Default
* @description ${changeCase.capitalCase(name)} default class.
*
* @class .v-${changeCase.paramCase(name)} ${changeCase.capitalCase(name)} default class.
*
* @markup
* <button class="v-${changeCase.paramCase(name)}">
*   Default
* </button> 
*
* @section ${changeCase.capitalCase(name)} 
*/
@layer components {
  .v-${changeCase.paramCase(name)} {
    background-color: var(--v-${changeCase.paramCase(name)}-background);
    block-size: var(--v-${changeCase.paramCase(name)}-block-size);
    border-color: var(--v-${changeCase.paramCase(name)}-border-color);
    border-radius: var(--v-${changeCase.paramCase(name)}-border-radius);
    border-style: var(--v-${changeCase.paramCase(name)}-border-style); 
    border-width:var(--v-${changeCase.paramCase(name)}-border-size);
    color: var(--v-${changeCase.paramCase(name)}-foreground);
    cursor: pointer;
    font-size: var(--v-${changeCase.paramCase(name)}-font-size);
    font-weight: var(--v-${changeCase.paramCase(name)}-font-weight);
    letter-spacing: var(--v-${changeCase.paramCase(name)}-letter-spacing); 
    line-height: var(--v-${changeCase.paramCase(name)}-line-height); 
    padding-block: var(--v-${changeCase.paramCase(name)}-padding-block); 
    padding-inline: var(--v-${changeCase.paramCase(name)}-padding-inline); 
    
    &:hover {
      #{--v-${changeCase.paramCase(name)}-background}: var(--v-${changeCase.paramCase(name)}-hover-background);
      #{--v-${changeCase.paramCase(name)}-border-color}: var(--v-${changeCase.paramCase(name)}-hover-border-color);
      #{--v-${changeCase.paramCase(name)}-foreground}: var(--v-${changeCase.paramCase(name)}-hover-foreground);
    }

    &:focus-visible {
      #{--v-${changeCase.paramCase(name)}-background}: var(--v-${changeCase.paramCase(name)}-focus-background);
      #{--v-${changeCase.paramCase(name)}-border-color}: var(--v-${changeCase.paramCase(name)}-focus-border-color);
      #{--v-${changeCase.paramCase(name)}-foreground}: var(--v-${changeCase.paramCase(name)}-focus-foreground);
    }

    &:active {
      #{--v-${changeCase.paramCase(name)}-background}: var(--v-${changeCase.paramCase(name)}-active-background);
      #{--v-${changeCase.paramCase(name)}-border-color}: var(--v-${changeCase.paramCase(name)}-active-border-color);
      #{--v-${changeCase.paramCase(name)}-foreground}: var(--v-${changeCase.paramCase(name)}-active-foreground);
    }

    /**
      * @name Disabled
      * @description Default disabled ${changeCase.noCase(name)}. 
      *
      * @class .v-${changeCase.paramCase(name)}[disabled] Disabled ${changeCase.noCase(name)}.
      *  
      * @markup 
      * <button type="button" class="v-${changeCase.paramCase(name)}" disabled>
      *   Disabled 
      * </button>
      *
      * @section ${changeCase.capitalCase(name)}
      */
    &:disabled {
      #{--v-${changeCase.paramCase(name)}-background}: var(--v-${changeCase.paramCase(name)}-disabled-background);
      #{--v-${changeCase.paramCase(name)}-border-color}: var(--v-${changeCase.paramCase(name)}-disabled-border-color);
      #{--v-${changeCase.paramCase(name)}-foreground}: var(--v-${changeCase.paramCase(name)}-disabled-foreground);
      cursor: default;
    }


    /** 
     * @name Alternate
     * @description ${changeCase.capitalCase(name)} alternate class. 
     *
     * @class .v-${changeCase.paramCase(name)}.v-alternate ${changeCase.capitalCase(name)} alternate class.
     *
     * @markup 
     * <div class="v-surface v-alternate">
     *   <button class="v-${changeCase.paramCase(name)}">
     *     Alternate
     *   </button>
     * </div>
     *
     * @section ${changeCase.capitalCase(name)}
     */ 

    /** 
     * @name Alternate Disabled 
     * @description Disabled alternate ${changeCase.noCase(name)} 
     * 
     * @class .v-${changeCase.paramCase(name)}.v-alternate[disabled]
     * 
     * @markup 
     * <div class="v-surface v-alternate">
     *   <button type="button" class="v-${changeCase.paramCase(name)}" disabled>
     *     Disabled
     *   </button>
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
  background: var(--palette-default-active),
  border-color: var(--palette-default-active),
  border-radius: var(--size-rounded-medium),
  border-size: var(--theme-border-size),
  border-style: solid,
  foreground: var(--palette-default-text-on-active),
  // default 
  // 
  hover-background: var(--palette-default-active-hover),
  hover-border-color: var(--palette-default-active-hover),
  hover-foreground: var(--palette-default-text-on-active),
  // 
  focus-background: var(--palette-default-active-hover),
  focus-border-color: var(--palette-default-active-hover),
  focus-foreground: var(--palette-default-text-on-active),
  //  
  active-background: var(--palette-default-active-pressed),
  active-border-color: var(--palette-default-active-pressed),
  active-foreground: var(--palette-default-text-on-active),
  //  
  disabled-background: var(--palette-default-disabled),
  disabled-border-color: var(--palette-default-disabled),
  disabled-foreground: var(--palette-default-text-on-active),
);

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
  "abstract": "action-primary",
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
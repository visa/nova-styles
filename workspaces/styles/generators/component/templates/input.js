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
  * @description Default ${changeCase.paramCase(name)}.
  *
  * @class .v-${changeCase.paramCase(name)} Default class.
  *
  * @markup
  * <div class="v-${changeCase.paramCase(name)}">
  *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-1">
  *     Label for ${changeCase.paramCase(name)}
  *   </label> 
  *   <div class="v-${changeCase.paramCase(name)}-bar">
  *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-1" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-1" />
  *   </div> 
  *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-1">
  *     Inline messaging 
  *   </span>
  * </div>
  *
  * @section ${changeCase.capitalCase(name)}
  */
@layer components {
  .v-${changeCase.paramCase(name)} {
    $root: &; 

    background-color: var(--v-${changeCase.paramCase(name)}-background);
    display: flex; 
    flex-direction: column; 
    gap: var(--v-${changeCase.paramCase(name)}-gap); // sass-lint:disable-line no-misspelled-properties
    
    &-label {
      color: var(--v-${changeCase.paramCase(name)}-label-color); 
      cursor: pointer;
      font-size: var(--v-${changeCase.paramCase(name)}-label-size);
      line-height: 18px;
    }

    &-bar {
      block-size: var(--v-${changeCase.paramCase(name)}-bar-block-size);
      border-color: var(--v-${changeCase.paramCase(name)}-bar-border-color);
      border-radius: var(--v-${changeCase.paramCase(name)}-border-radius);
      border-style: var(--v-${changeCase.paramCase(name)}-bar-border-style);
      border-width: var(--v-${changeCase.paramCase(name)}-bar-border-width); 
      display: flex; 
      flex-direction: row;
      gap: var(--v-${changeCase.paramCase(name)}-bar-gap); // sass-lint:disable-line no-misspelled-properties
      padding-block: var(--v-${changeCase.paramCase(name)}-bar-padding-block); 
      padding-inline: var(--v-${changeCase.paramCase(name)}-bar-padding-inline); 
    }

    &-field {
      background-color: transparent;
      border: 0px;
      flex-grow: 1; 
      font-size: var(--v-${changeCase.paramCase(name)}-field-font-size); 

      &:focus-visible {
        outline-width: 0px;
      }
    }


    /**
      * @name Affix
      * @description Affixes on an ${changeCase.paramCase(name)}.
      *
      * @class .v-${changeCase.paramCase(name)}-affix Default class.
      *
      * @section ${changeCase.capitalCase(name)}
      */

    /**
      * @name Prefix
      * @description Default ${changeCase.paramCase(name)}.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)}">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-2">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <span class="v-${changeCase.paramCase(name)}-affix">$</span>
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-2" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-2" />
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-2">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section Affix
      */
      
    /**
      * @name Suffix
      * @description Default ${changeCase.paramCase(name)}.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)}">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-3">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-3" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-3" />
      *     <span class="v-${changeCase.paramCase(name)}-affix">%</span>
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-3">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section Affix
      */
    
    &-affix {
      align-items: center;
      display: flex; 
      font-weight: 600;
    }

    &-message {
      color: var(--v-${changeCase.paramCase(name)}-message-color);
      font-size: var(--v-${changeCase.paramCase(name)}-message-size);
      line-height: 18px;
    }

    &:hover {
      #{$root}-bar {
        border-color: var(--v-${changeCase.paramCase(name)}-hover-bar-border);
      }
    }

    /**
      * @name Focused
      * @description Focused ${changeCase.paramCase(name)} requires a class at the top level.
      *
      * @class .v-${changeCase.paramCase(name)}-focus Default class.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-focus">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-4">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-4" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-4" />
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-4">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section ${changeCase.capitalCase(name)}
      */
    &-focus {
      #{$root}-label {
        color: var(--v-${changeCase.paramCase(name)}-focus-label-color); 
      }

      #{$root}-bar {
        border-color: var(--v-${changeCase.paramCase(name)}-focus-bar-border-color);
      }
    }

    /**
      * @name Read-only
      * @description Read-only ${changeCase.paramCase(name)} requires a class at the top level.
      *
      * @class .v-${changeCase.paramCase(name)}-readonly Default class.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-readonly">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-5">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" readonly id="${changeCase.paramCase(name)}-test-5" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-5" value="read only content" />
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-5">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section ${changeCase.capitalCase(name)}
      */
    &-readonly {
      #{$root}-bar {
        border-color: var(--v-${changeCase.paramCase(name)}-readonly-bar-border-color); 
        border-style: var(--v-${changeCase.paramCase(name)}-readonly-bar-border-style); 
      }

      /**
        * @name Read-only + Focus
        * @description Read-only and focused ${changeCase.paramCase(name)} requires a class at the top level.
        *
        * @class .v-${changeCase.paramCase(name)}-readonly Default class.
        *
        * @markup
        * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-readonly v-${changeCase.paramCase(name)}-focus">
        *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-6">
        *     Label for ${changeCase.paramCase(name)}
        *   </label> 
        *   <div class="v-${changeCase.paramCase(name)}-bar">
        *     <input class="v-${changeCase.paramCase(name)}-field" type="text" readonly id="${changeCase.paramCase(name)}-test-6" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-6" value="read only content" />
        *   </div> 
        *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-6">
        *     Inline messaging 
        *   </span>
        * </div>
        *
        * @section ${changeCase.capitalCase(name)}
        */
      &#{$root}-focus {
        #{$root}-label {
          color: var(--v-${changeCase.paramCase(name)}-focus-label-color); 
        }

        #{$root}-bar {
          border-color: var(--v-${changeCase.paramCase(name)}-focus-bar-border-color); 
        }
      }
    }

    /**
      * @name Disabled
      * @description Disabled ${changeCase.paramCase(name)} requires a class at the top level.
      *
      * @class .v-${changeCase.paramCase(name)}-disabled Default class.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-disabled">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-7">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" disabled id="${changeCase.paramCase(name)}-test-7" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-7" value="disabled field" />
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-7">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section ${changeCase.capitalCase(name)}
      */
    &#{$root}-disabled {
      #{$root}-label {
        color: var(--v-${changeCase.paramCase(name)}-disabled-label-color); 
      }

      #{$root}-bar {
        border-color: var(--v-${changeCase.paramCase(name)}-disabled-bar-border-color); 
        border-style: var(--v-${changeCase.paramCase(name)}-disabled-bar-border-style);
      }

      #{$root}-field {
        color: var(--v-${changeCase.paramCase(name)}-disabled-field-color); 
      }

      #{$root}-message {
        color: var(--v-${changeCase.paramCase(name)}-disabled-message-color); 
      }
    }

    /**
      * @name Error
      * @description Error ${changeCase.paramCase(name)} requires a class at the top level.
      *
      * @class .v-${changeCase.paramCase(name)}-error Default class.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)} v-${changeCase.paramCase(name)}-error">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-8">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-8" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-8" value="field with error" />
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-8">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section ${changeCase.capitalCase(name)}
      */
    &#{$root}-error {
      #{$root}-label {
        color: var(--v-${changeCase.paramCase(name)}-error-label-color); 
      }

      #{$root}-bar {
        border-color: var(--v-${changeCase.paramCase(name)}-error-bar-border-color); 
      }

      #{$root}-message {
        color: var(--v-${changeCase.paramCase(name)}-error-message-color); 
      }
    }


    /**
      * @name With Button
      * @description Example with a button ${changeCase.paramCase(name)}.
      *
      * @markup
      * <div class="v-${changeCase.paramCase(name)}">
      *   <label class="v-${changeCase.paramCase(name)}-label" for="${changeCase.paramCase(name)}-test-9">
      *     Label for ${changeCase.paramCase(name)}
      *   </label> 
      *   <div class="v-${changeCase.paramCase(name)}-bar">
      *     <input class="v-${changeCase.paramCase(name)}-field" type="text" id="${changeCase.paramCase(name)}-test-9" name="text-${changeCase.paramCase(name)}-field" aria-describedby="${changeCase.paramCase(name)}-message-test-9" />
      *     <button>X</button>
      *   </div> 
      *   <span class="v-${changeCase.paramCase(name)}-message" id="${changeCase.paramCase(name)}-message-test-9">
      *     Inline messaging 
      *   </span>
      * </div>
      *
      * @section ${changeCase.capitalCase(name)}
      */
  }
}
`; 

const vars = name => `$vars: (
  gap: 3px, 
  border-radius: 6px,
  background: var(--palette-default-surface-1),  
  // bar
  bar-block-size: calc(38px - (2 * var(--v-${changeCase.paramCase(name)}-bar-padding-block))),
  bar-border-color: var(--palette-default-active-subtle),
  bar-border-style: solid,
  bar-border-width: calc(var(--theme-border-size) / 2),
  bar-gap: 6px,
  bar-padding-block: 3px,
  bar-padding-inline: 8px,
  // field 
  field-font-size: var(--theme-font-size),
  // label 
  label-color: var(--palette-default-text-subtle),
  label-size: 12px,
  // message 
  message-color: var(--palette-default-text-subtle),
  message-size: 12px,

  // hover 
  hover-bar-border: var(--palette-default-active-hover),
  // focus 
  focus-bar-border-color: var(--palette-default-active-hover),
  focus-label-color: var(--palette-default-active-hover), 
  // read-only 
  readonly-bar-border-style: dashed,
  readonly-bar-border-color: var(--palette-default-active-subtle),
  // disabled 
  disabled-bar-border-style: dashed,
  disabled-bar-border-color: var(--palette-default-disabled),
  disabled-label-color: var(--palette-default-disabled), 
  disabled-field-color: var(--palette-default-disabled),
  disabled-message-color: var(--palette-default-disabled),
  // error 
  error-bar-border-color: var(--palette-messaging-graphics-negative), 
  error-label-color: var(--palette-messaging-text-negative), 
  error-message-color: var(--palette-messaging-text-negative)

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
  "template": "input",
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
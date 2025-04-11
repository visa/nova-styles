<!--
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
 -->
---
title: Expanded combobox wih error
description: Combobox with invalid input, error message, and open menu. 
classes: ['.v-input[aria-invalid="true"]']
tags: ['docs']
order: 10
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="combobox-expanded-error" id="combobox-expanded-error-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input aria-autocomplete="list" aria-controls="combobox-expanded-error-listbox" aria-describedby="input-expanded-error-message" aria-expanded="true" aria-haspopup="listbox" aria-invalid="true" aria-owns="combobox-expanded-error-listbox" autocomplete="off" class="v-input" id="combobox-expanded-error" name="combobox-expanded-error" role="combobox" type="text" value=""/>
      <button aria-label="toggle" class="v-button v-button-icon v-button-tertiary v-button-small" tabindex="-1" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
    </div>
    <span class="v-input-message" id="input-expanded-error-message">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-error-tiny">
        </use>
      </svg>
      Inline messaging
    </span>
  </div>
  <div class="v-listbox-container">
    <ul aria-labelledby="combobox-expanded-error-label" class="v-listbox" id="combobox-expanded-error-listbox" role="listbox">
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Option A
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Option B
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Option C
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Option D
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Option E
      </li>
    </ul>
  </div>
</div>

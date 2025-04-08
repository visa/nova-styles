<!--
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
 -->
---
title: Expanded multiselect with disabled option
description: Default expanded multiselect with text field input.
classes: ['.v-label', '.v-input', '.v-surface', '.v-listbox']
tags: ['docs']
order: 15
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-expanded-disabled-option" id="multiselect-expanded-disabled-option-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <input aria-autocomplete="list" aria-controls="multiselect-expanded-disabled-option-listbox" aria-expanded="true" aria-haspopup="listbox" aria-owns="multiselect-expanded-disabled-option-listbox" autocomplete="off" class="v-input" id="multiselect-expanded-disabled-option" name="multiselect-expanded-disabled-option" role="combobox" type="text"/>
      <button aria-controls="multiselect-expanded-disabled-option-listbox" aria-expanded="true" aria-haspopup="listbox" aria-labelledby="multiselect-expanded-disabled-option-label" aria-owns="multiselect-expanded-disabled-option-listbox" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
      </div>
    </div>
    <div class="v-surface v-dropdown-menu v-elevation-xlarge">
      <ul aria-labelledby="multiselect-expanded-disabled-option-label" class="v-listbox" id="multiselect-expanded-disabled-option-listbox" role="listbox">
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option A
        </li>
        <li class="v-listbox-item" aria-selected="false" role="option" aria-disabled="true">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option B
        </li>
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option C
        </li>
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option D
        </li>
      </ul>
    </div>
  </div>
</div>

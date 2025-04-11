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
title: Expanded multiselect with scroll bar
description: Default expanded multiselect with text field input.
classes: ['.v-label', '.v-input', '.v-surface', '.v-listbox']
tags: ['docs']
order: 17
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-expanded-with-scroll-bar" id="multiselect-expanded-with-scroll-bar-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <input aria-autocomplete="list" aria-controls="multiselect-expanded-with-scroll-bar-listbox" aria-expanded="true" aria-haspopup="listbox" aria-owns="multiselect-expanded-with-scroll-bar-listbox" autocomplete="off" class="v-input" id="multiselect-expanded-with-scroll-bar" name="multiselect-expanded-with-scroll-bar" role="combobox" type="text"/>
      <button aria-controls="multiselect-expanded-with-scroll-bar-listbox" aria-expanded="true" aria-haspopup="listbox" aria-labelledby="multiselect-expanded-with-scroll-bar-label" aria-owns="multiselect-expanded-with-scroll-bar-listbox" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
      </div>
    </div>
    <div class="v-surface v-dropdown-menu v-elevation-xlarge" style="max-height: 210px">
      <ul aria-labelledby="multiselect-expanded-with-scroll-bar-label" class="v-listbox" id="multiselect-expanded-with-scroll-bar-listbox" role="listbox">
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option A
        </li>
        <li class="v-listbox-item" aria-selected="false" role="option">
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
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option E
        </li>
        <li class="v-listbox-item" aria-selected="false" role="option">
          <span class="v-checkbox v-flex-shrink-0"></span>
            Option F
        </li>
      </ul>
    </div>
  </div>
</div>

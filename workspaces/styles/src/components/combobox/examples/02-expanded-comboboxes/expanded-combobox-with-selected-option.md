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
title: Expanded combobox with selected option
description: Default combobox with menu open. 
classes: ['.v-combobox']
tags: ['docs']
order: 9
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="combobox-selected" id="combobox-selected-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input aria-activedescendant="combobox-selected-item" aria-autocomplete="list" aria-controls="combobox-selected-listbox" aria-expanded="true" aria-haspopup="listbox" aria-owns="combobox-selected-listbox" autocomplete="off" class="v-input" id="combobox-selected" name="combobox-selected" role="combobox" type="text" value="Option A"/>
      <button aria-label="toggle" class="v-button v-button-icon v-button-tertiary v-button-small" tabindex="-1" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
  <div class="v-listbox-container">
    <ul aria-labelledby="combobox-selected-label" class="v-listbox" id="combobox-selected-listbox" role="listbox">
      <li aria-selected="true" class="v-listbox-item" id="combobox-selected-item" role="option">
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
    </ul>
  </div>
</div>

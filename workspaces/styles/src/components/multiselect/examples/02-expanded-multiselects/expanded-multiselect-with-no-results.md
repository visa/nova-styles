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
title: Expanded multiselect with no results
description: Default multiselect with text field input. Required by default.
classes: ['.v-label', '.v-input', '.v-surface', '.v-listbox']
tags: ['docs']
order: 18
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-no-results" id="multiselect-no-results-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <input aria-autocomplete="list" aria-controls="multiselect-no-results-listbox" aria-expanded="true" aria-haspopup="listbox" aria-owns="multiselect-no-results-listbox" autocomplete="off" class="v-input" id="multiselect-no-results" name="multiselect-no-results" role="combobox" type="text" value="oh no!! no results found"/>
      <button aria-controls="multiselect-no-results-listbox" aria-expanded="true" aria-haspopup="listbox" aria-label="toggle" aria-labelledby="multiselect-no-results-label" aria-owns="multiselect-no-results-listbox" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
    </div>
    </div>
    <div class="v-surface v-dropdown-menu v-elevation-xlarge v-flex v-justify-content-center v-align-items-center">
      <ul class="v-flex v-justify-content-center v-align-items-center" id="multiselect-no-results-listbox" style="min-block-size: 180px">
        <li class="v-typography-label-large">
          No results found
        </li>
      </ul>
    </div>
</div>

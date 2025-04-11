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
title: Disabled multiselect
description: Disabled multiselect with text field input.
classes: ['.v-label', '.v-input']
tags: ['docs']
order: 3
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-disabled" id="multiselect-disabled-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <input class="v-input" id="multiselect-disabled" name="multiselect-disabled" required="" type="text" disabled=""/>
      <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="multiselect-disabled-label" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" disabled="">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
</div>

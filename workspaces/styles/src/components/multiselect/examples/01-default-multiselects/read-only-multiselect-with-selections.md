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
title: Read-only multiselect with selections
description: readonly multiselect with text field input and multiple selections.
classes: ['.v-label', '.v-input']
tags: ['docs']
order: 9
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-read-only-withoptions" id="multiselect-read-only-withoptions-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <div class="v-flex v-gap-2 v-flex-wrap v-flex-shrink-1 v-flex-grow">
        <div class="v-chip v-chip-compact">
            Option A
        </div>
        <div class="v-chip v-chip-compact">
            Option B
        </div>
        <div class="v-chip v-chip-compact">
            Option C
        </div>
        <input class="v-input v-flex v-flex-shrink-1" id="multiselect-read-only-withoptions" name="multiselect-read-only-withoptions" required="" style="flex-basis: 50px" type="text" readonly="" />
      </div>
      <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="multiselect-read-only-withoptions-label" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
</div>

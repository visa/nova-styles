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
title: Disabled multiselect with selections
description: Disabled multiselect with text field input and multiple selections.
classes: ['.v-label', '.v-input']
tags: ['docs']
order: 8
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-disabled-withoptions" id="multiselect-disabled-withoptions-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <div class="v-flex v-gap-2 v-flex-wrap v-flex-shrink-1 v-flex-grow">
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <label class="v-label" for="multiselect-disabled-withoptions-chip-1">
            Option A
          </label>
          <button aria-label="remove Option A" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button" id="multiselect-disabled-withoptions-chip-1" disabled="">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <label class="v-label" for="multiselect-disabled-withoptions-chip-2">
            Option B
          </label>
          <button aria-label="remove Option B" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button" id="multiselect-disabled-withoptions-chip-2" disabled="">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <label class="v-label" for="multiselect-disabled-withoptions-chip-3">
            Option C
          </label>
          <button aria-label="remove Option C" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button" id="multiselect-disabled-withoptions-chip-3" disabled="">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <input class="v-input v-flex v-flex-shrink-1" id="multiselect-disabled-withoptions" name="multiselect-disabled-withoptions" required="" style="flex-basis: 50px" type="text" disabled="" />
      </div>
      <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="multiselect-disabled-withoptions-label" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" disabled="">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
</div>

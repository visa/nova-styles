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
title: Expanded multiselect with select and unselect all buttons
description: Default multiselect with text field input. Required by default.
classes: ['.v-label', '.v-input', '.v-surface', '.v-listbox']
tags: ['docs']
order: 16
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="multiselect-selectall" id="multiselect-selectall-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <input aria-autocomplete="list" aria-controls="multiselect-selectall-listbox" aria-expanded="true" aria-haspopup="listbox" aria-owns="multiselect-selectall-listbox" autocomplete="off" class="v-input" id="multiselect-selectall" name="multiselect-expanded-multiple-selections" role="combobox" type="text" />
      <button aria-controls="multiselect-selectall-listbox" aria-expanded="true" aria-haspopup="listbox" aria-labelledby="multiselect-selectall-label" aria-owns="multiselect-selectall-listbox" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-up-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
    <div class="v-surface v-dropdown-menu v-flex-col v-elevation-xlarge">
      <div class="v-flex v-justify-content-between v-align-items-center v-px-8 v-py-2">
        <button class="v-button v-button-tertiary">
          Select all
        </button>
        <button class="v-button v-button-tertiary v-button-destructive">
          Clear all
        </button>
      </div>
      <hr class="v-divider v-divider-decorative"/>
      <ul aria-labelledby="multiselect-selectall-label" class="v-listbox" id="multiselect-selectall-listbox" role="listbox">
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
      </ul>
    </div>
  </div>

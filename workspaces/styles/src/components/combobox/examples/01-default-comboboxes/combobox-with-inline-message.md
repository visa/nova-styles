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
title: Combobox with inline message
description: Default combobox with inline message.
classes: ['.v-combobox', '.v-input-message']
tags: ['docs']
order: 2
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="combobox-inline-message" id="combobox-inline-message-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input aria-autocomplete="list" aria-describedby="input-inline-message-message" aria-expanded="false" aria-haspopup="listbox" aria-owns="combobox-inline-message-listbox" autocomplete="off" class="v-input" id="combobox-inline-message" name="combobox-inline-message" role="combobox" type="text"/>
      <button aria-label="toggle" class="v-button v-button-icon v-button-tertiary v-button-small" tabindex="-1" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
    <span class="v-input-message" id="input-inline-message-message">
      This is optional text that describes the label in more detail.
    </span>
  </div>
  <div class="v-surface">
    <ul aria-labelledby="combobox-inline-message-label" class="v-listbox" id="combobox-inline-message-listbox" role="listbox">
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Item 1
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Item 2
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-radio v-flex-shrink-0">
        </span>
        Item 3
      </li>
    </ul>
  </div>
</div>

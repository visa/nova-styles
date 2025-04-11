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
title: Combobox with error
description: Combobox with invalid input and error message.
classes: ['.v-input[aria-invalid="true"]']
tags: ['docs']
order: 5
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4">
    <label class="v-label" for="combobox-error">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input aria-autocomplete="list" aria-describedby="input-error-message" aria-expanded="false" aria-haspopup="listbox" aria-invalid="true" aria-owns="" autocomplete="off" class="v-input" id="combobox-error" name="combobox-error" role="combobox" type="text" value="Option"/>
      <button aria-label="toggle" class="v-button v-button-icon v-button-tertiary v-button-small" tabindex="-1" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
    <span class="v-input-message" id="input-error-message">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-error-tiny">
        </use>
      </svg>
      This is required text that describes the error in more detail.
    </span>
  </div>
</div>

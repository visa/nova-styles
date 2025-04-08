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
title: Multi-select listbox with error
description: Multiple select listbox with error. 
classes: ['.v-listbox-error']
tags: ['docs']
order: 20
---

<fieldset aria-invalid="true" aria-labelledby="multi-select-error-listbox-legend multi-select-error-listbox-message">
  <legend class="v-label" id="multi-select-error-listbox-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container v-listbox-error">
    <ul class="v-listbox v-listbox-scroll v-listbox-multiselect">
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-1">
          <input class="v-checkbox" id="checkbox-ms-error-1" name="multi-select-error" type="checkbox"/>
          <label class="v-label v-typography-label-large">
            Item A
          </label>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-2">
          <input class="v-checkbox" id="checkbox-ms-error-2" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item B
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-3">
          <input class="v-checkbox" id="checkbox-ms-error-3" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item C
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-4">
          <input class="v-checkbox" id="checkbox-ms-error-4" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item D
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-5">
          <input class="v-checkbox" id="checkbox-ms-error-5" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item E
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-6">
          <input class="v-checkbox" id="checkbox-ms-error-6" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item F
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-error-7">
          <input class="v-checkbox" id="checkbox-ms-error-7" name="multi-select-error" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item G
          </span>
        </label>
      </li>
    </ul>
  </div>
  <div class="v-input-message" id="multi-select-error-listbox-message">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </div>
</fieldset>

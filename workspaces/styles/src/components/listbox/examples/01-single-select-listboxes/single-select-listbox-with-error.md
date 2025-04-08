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
title: Single-select listbox with error
description: Single select listbox with error 
classes: ['.v-listbox-error']
tags: ['docs']
order: 8
---

<fieldset aria-invalid="true" aria-labelledby="single-select-error-listbox-legend single-select-error-listbox-message">
  <legend class="v-label" id="single-select-error-listbox-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container v-listbox-error">
    <div class="v-listbox v-listbox-scroll">
      <label class="v-listbox-item" for="single-select-radio-error-1">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-1" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item A
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-2">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-2" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item B
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-3">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-3" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item C
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-4">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-4" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item D
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-5">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-5" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item E
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-6">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-6" name="error-example" type="radio"/>
        <span class="v-label">
          Item F
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-error-7">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-error-7" name="error-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item G
        </span>
      </label>
    </div>
  </div>
  <div class="v-input-message" id="single-select-error-listbox-message">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </div>
</fieldset>

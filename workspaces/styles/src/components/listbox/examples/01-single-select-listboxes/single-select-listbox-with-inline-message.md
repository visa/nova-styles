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
title: Single-select listbox with inline message
description: Single select listbox with inline messaging. 
classes: ['.v-listbox']
tags: ['docs']
order: 2
---

<fieldset aria-labelledby="single-select-messaging-listbox-legend single-select-messaging-listbox-message">
  <legend class="v-label" id="single-select-messaging-listbox-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container">
    <div class="v-listbox v-listbox-scroll">
      <label class="v-listbox-item" for="single-select-radio-inline-1">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-1" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item A
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-2">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-2" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item B
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-3">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-3" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item C
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-4">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-4" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item D
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-5">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-5" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item E
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-6">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-6" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item F
        </span>
      </label>
      <label class="v-listbox-item" for="single-select-radio-inline-7">
        <input class="v-radio v-flex-shrink-0" id="single-select-radio-inline-7" name="listbox-inline-message-example" type="radio"/>
        <span class="v-label v-typography-label-large">
          Item G
        </span>
      </label>
    </div>
  </div>
  <span class="v-input-message" id="single-select-messaging-listbox-message">
    This is optional text that describes the label in more detail.
  </span>
</fieldset>

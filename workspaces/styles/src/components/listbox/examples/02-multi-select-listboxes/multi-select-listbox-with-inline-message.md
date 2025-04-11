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
title: Multi-select listbox with inline message 
description: Multi-select listbox with inline message. 
classes: ['.v-listbox', '.v-input-message']
tags: ['docs']
order: 16
---

<fieldset aria-labelledby="multi-select-messaging-listbox-legend multi-select-messaging-listbox-message">
  <legend class="v-label" id="multi-select-messaging-listbox-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container">
    <div class="v-listbox v-listbox-scroll">
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-1">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-1" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item A
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-2">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-2" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item B
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-3">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-3" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item C
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-4">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-4" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item D
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-5">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-5" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item E
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-6">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-6" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item F
        </span>
      </label>
      <label class="v-listbox-item" for="multi-select-messaging-checkbox-7">
        <input class="v-checkbox" id="multi-select-messaging-checkbox-7" name="multi-select-messaging-example" type="checkbox"/>
        <span class="v-label v-typography-label-large">
          Item G
        </span>
      </label>
    </div>
  </div>
  <span class="v-input-message" id="multi-select-messaging-listbox-message">
    This is optional text that describes the label in more detail.
  </span>
  <div class="v-listbox-container </fieldset>
</fieldset>

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
title: Multi-select listbox with disabled item 
description: Multiple select listbox with individual item disabled. 
classes: ['.v-checkbox[disabled]']
tags: ['docs']
order: 22
---

<fieldset aria-labelledby="multi-select-listbox-disabled-item-legend">
  <legend class="v-label" id="multi-select-listbox-disabled-item-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container">
    <ul class="v-listbox v-listbox-scroll v-listbox-multiselect">
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-1">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-1" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item A
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-2">
          <input class="v-checkbox" disabled="" id="checkbox-ms-disabled-item-2" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item B
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-3">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-3" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item C
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-4">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-4" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item D
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-5">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-5" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item E
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-6">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-6" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item F
          </span>
        </label>
      </li>
      <li>
        <label class="v-listbox-item" for="checkbox-ms-disabled-item-7">
          <input class="v-checkbox" id="checkbox-ms-disabled-item-7" name="disabled-multi-select-item" type="checkbox"/>
          <span class="v-label v-typography-label-large">
            Item G
          </span>
        </label>
      </li>
    </ul>
  </div>
</fieldset>

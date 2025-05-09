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
title: Multi-select listbox with inline message and role variant
description: Multi-select listbox with inline message and role variant. For all the role variants, make sure to handle the focus with javascript appropriately depending on the context, either via tabindex or via custom arrow key handlers. 
classes: ['.v-listbox', '.v-input-message']
tags: []
order: 17
---

<fieldset aria-labelledby="multi-select-messaging-listbox-legend multi-select-messaging-listbox-message">
  <legend class="v-label" id="multi-select-messaging-listbox-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container">
    <ul aria-labelledby="multi-select-listbox-label-2" class="v-listbox v-listbox-scroll v-listbox-multiselect" id="multi-select-listbox-2" role="listbox">
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item A
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item B
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item C
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item D
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item E
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item F
      </li>
      <li aria-selected="false" class="v-listbox-item" role="option">
        <span class="v-checkbox">
        </span>
        Item G
      </li>
    </ul>
  </div>
  <span class="v-input-message" id="multi-select-messaging-listbox-message">
    This is optional text that describes the label in more detail.
  </span>
  <div class="v-listbox-container </fieldset>
</fieldset>

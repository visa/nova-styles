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
title: Multi-select listbox with error and role variant
description: Multiple select listbox with error. For all the role variants, make sure to handle the focus with javascript appropriately depending on the context, either via tabindex or via custom arrow key handlers. 
classes: ['.v-listbox-item[role="option"]', '.v-listbox-error']
tags: []
order: 21
---

<label class="v-label" for="multi-select-error-listbox-2" id="multi-select-error-listbox-label-2">
  Label (required)
</label>
<div class="v-listbox-container v-listbox-error">
  <ul aria-describedby="multi-select-error-listbox-message-2" aria-labelledby="multi-select-error-listbox-label-2" class="v-listbox v-listbox-scroll v-listbox-multiselect" id="multi-select-error-listbox-2" role="listbox">
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item A
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item B
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item C
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item D
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item E
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item F
    </li>
    <li aria-invalid="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item G
    </li>
  </ul>
</div>
<div class="v-input-message" id="multi-select-error-listbox-message-2">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
    <use href="#visa-error-tiny">
    </use>
  </svg>
  This is required text that describes the error in more detail.
</div>

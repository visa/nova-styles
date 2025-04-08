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
title: Disabled multi-select listbox with role variant
description: Disabled multiple select listbox. For all the role variants, make sure to handle the focus with javascript appropriately depending on the context, either via tabindex or via custom arrow key handlers. 
classes: ['.v-listbox-disabled']
tags: []
order: 25
---

<label class="v-label" for="multi-select-disabled-listbox-2" id="multi-select-disabled-listbox-label-2">
  Label (required)
</label>
<div class="v-listbox-container v-listbox-disabled">
  <ul aria-describedby="multi-select-disabled-listbox-message-2" aria-labelledby="multi-select-disabled-listbox-label-2" class="v-listbox v-listbox-scroll v-listbox-multiselect" id="multi-select-disabled-listbox-2" role="listbox">
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item A
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item B
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item C
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item D
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item E
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item F
    </li>
    <li aria-disabled="true" aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-checkbox">
      </span>
      Item G
    </li>
  </ul>
</div>
<div class="v-input-message" id="multi-select-disabled-listbox-message-2">
  Inline messaging
</div>

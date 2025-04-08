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
title: Single-select listbox with resize property and role variant
description: Single select listbox with multiple items to cause scrolling. This class applies to single and multi select. Alternatively, override --v-listbox-block-size with a custom size. For all the role variants, make sure to handle the focus with javascript appropriately depending on the context, either via tabindex or via custom arrow key handlers. 
classes: ['.v-listbox-item[role="option"]', '.v-listbox-scroll']
tags: []
order: 7
---

<label class="v-label" for="single-select-scroll-listbox-2" id="single-select-scroll-listbox-label-2">
  Label (required)
</label>
<div class="v-listbox-container">
  <ul aria-labelledby="single-select-scroll-listbox-label-2" class="v-listbox" id="single-select-scroll-listbox-2" role="listbox">
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item A
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item B
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item C
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item D
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item E
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item F
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item G
    </li>
    <li aria-selected="false" class="v-listbox-item" role="option">
      <span class="v-radio v-flex-shrink-0">
      </span>
      Item H
    </li>
  </ul>
</div>

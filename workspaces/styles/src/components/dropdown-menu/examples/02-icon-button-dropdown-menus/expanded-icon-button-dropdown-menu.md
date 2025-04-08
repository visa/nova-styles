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
title: Expanded icon button dropdown menu
description: Expanded dropdown menu.
classes: ['.v-dropdown.v-button.v-button-icon']
tags: ['docs']
order: 3
---

<button aria-controls="dropdown-menu-icon-expanded" aria-expanded="true" aria-label="see more options" class="v-button v-button-icon v-dropdown" id="dropdown-button-icon-expanded">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-option-horizontal-low">
    </use>
  </svg>
</button>
<div aria-labelledby="dropdown-button-icon-expanded" class="v-dropdown-menu v-surface" id="dropdown-menu-icon-expanded" aria-hidden="false">
  <ul class="v-listbox">
    <li>
      <button class="v-listbox-item v-px-8 v-py-11">
        Label 1
      </button>
    </li>
    <li>
      <button class="v-listbox-item v-px-8 v-py-11">
        Label 2
      </button>
    </li>
    <li>
      <button class="v-listbox-item v-px-8 v-py-11">
        Label 3
      </button>
    </li>
    <li>
      <button class="v-listbox-item v-px-8 v-py-11">
        Label 4
      </button>
    </li>
  </ul>
</div>

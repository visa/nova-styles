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
title: Expanded custom icon button dropdown menu
description: Expanded custom dropdown menu.
classes: ['.v-dropdown.v-button.v-button-icon']
tags: ['custom']
order: 10
---

<button aria-controls="dropdown-menu-icon-expanded" aria-expanded="true" aria-label="see more options"  class="v-button v-button-icon v-dropdown" id="dropdown-button-icon-expanded">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-option-horizontal-low">
    </use>
  </svg>
</button>
<div aria-labelledby="dropdown-button-icon-expanded" class="v-surface" id="dropdown-menu-icon-expanded" role="listbox" aria-hidden="false">
  <div class="v-listbox">
    <button class="v-listbox-item v-px-8 v-py-11" role="option">
      Label 1
    </button>
    <button class="v-listbox-item v-px-8 v-py-11" role="option">
      Label 2
    </button>
    <button class="v-listbox-item v-px-8 v-py-11" role="option">
      Label 3
    </button>
    <button class="v-listbox-item v-px-8 v-py-11" role="option">
      Label 4
    </button>
  </div>
</div>

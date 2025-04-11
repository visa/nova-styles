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
title: Expanded text button dropdown menu
description: Dropdown menu expanded. 
classes: ['.v-dropdown[aria-expanded="true"]']
tags: ['docs']
order: 1
---

<button aria-controls="dropdown-menu-label-only-expanded" aria-expanded="true" class="v-button v-dropdown" id="dropdown-button-label-only-expanded">
  Action
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
    <use href="#visa-chevron-up-tiny">
    </use>
  </svg>
</button>
<div aria-labelledby="dropdown-button-label-only-expanded" class="v-dropdown-menu v-surface" id="dropdown-menu-label-only-expanded" aria-hidden="false">
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
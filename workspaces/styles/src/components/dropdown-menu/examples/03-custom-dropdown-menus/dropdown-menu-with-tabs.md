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
title: Dropdown menu with tabs
description: Custom dropdown menu with tabs.
classes: ['.v-dropdown', '.v-dropdown-menu']
tags: ['custom']
order: 4
---

<button aria-controls="dropdown-menu-icon-with-tabs" aria-expanded="true" aria-label="see more options" class="v-button v-button-icon v-dropdown" id="dropdown-button-icon-with-tabs">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-option-horizontal-low">
    </use>
  </svg>
</button>
<div aria-expanded="true" aria-labelledby="dropdown-button-icon-with-tabs" class="v-surface v-dropdown-menu" aria-hidden="false" id="dropdown-menu-icon-with-tabs" role="listbox">
  <ul class="v-gap-4 v-py-6 v-pr-8 v-tabs v-tabs-vertical" role="tablist">
    <li class="v-tab" role="none">
      <button aria-selected="false" class="v-button v-button-tertiary" role="tab">
        Label 1
      </button>
    </li>
    <li class="v-tab" role="none">
      <button aria-selected="true" class="v-button v-button-tertiary" role="tab">
        Label 2
      </button>
    </li>
    <li class="v-tab" role="none">
      <button aria-selected="false" class="v-button v-button-tertiary" role="tab">
        Label 3
      </button>
    </li>
    <li class="v-tab" role="none">
      <button aria-selected="false" class="v-button v-button-tertiary" role="tab">
        Label 4
      </button>
    </li>
  </ul>
</div>

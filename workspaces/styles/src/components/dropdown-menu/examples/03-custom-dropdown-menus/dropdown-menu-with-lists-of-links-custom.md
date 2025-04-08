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
title: Dropdown menu with custom list of links as children
description: Custom dropdown menu with custom links. 
classes: ['.v-dropdown', '.v-dropdown-menu']
tags: ['custom']
order: 13
---

<button class="v-button v-dropdown" id="dropdown-button-label-with-list-links" aria-controls="dropdown-menu-label-with-list-links" aria-expanded="true">
  Action
  <svg focusable="false" aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
    <use href="#visa-chevron-up-tiny" />
  </svg>
</button>
<div class="v-surface v-dropdown-menu" id="dropdown-menu-label-with-list-links" aria-labelledby="dropdown-button-label-with-list-links" aria-hidden="false">
  <ul class="v-listbox v-listbox-scroll">
    <li class="v-listbox-item v-flex">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 1 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 2 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 3 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 4 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 5 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 6 </a>
    </li>
    <li class="v-listbox-item">
      <a href="javascript:window.location.href=window.location.href" class="v-link v-link-no-underline v-flex v-flex-grow"> Label 7 </a>
    </li>
  </ul>
</div>
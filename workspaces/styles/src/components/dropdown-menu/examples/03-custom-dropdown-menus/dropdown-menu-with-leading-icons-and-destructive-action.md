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
title: Dropdown menu with leading icons and destructive action 
description: Custom dropdown menu with tabs. 
classes: ['.v-dropdown', '.v-dropdown-menu']
tags: ['docs', 'custom']
order: 5
---

<button aria-controls="dropdown-menu-label-with-icon-expanded" aria-expanded="true" class="v-button v-dropdown" id="dropdown-button-label-with-icon-expanded">
  Action
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
    <use href="#visa-chevron-up-tiny">
    </use>
  </svg>
</button>
<div aria-labelledby="dropdown-button-label-with-icon-expanded" class="v-surface v-dropdown-menu" id="dropdown-menu-label-with-icon-expanded" aria-hidden="false">
  <ul class="v-listbox">
    <li>
      <button class="v-listbox-item v-button v-button-tertiary v-button-subtle v-flex v-flex-row v-align-items-start v-gap-6 v-px-8 v-py-11">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-export-tiny">
          </use>
        </svg>
        <span class="v-listbox-item-label">
          Label 1
        </span>
      </button>
    </li>
    <li>
      <button class="v-listbox-item v-button v-button-tertiary v-button-subtle v-flex v-flex-row v-align-items-start v-gap-6 v-px-8 v-py-11" disabled>
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-copy-tiny">
          </use>
        </svg>
        <span class="v-listbox-item-label">
          Label 2
        </span>
      </button>
     </li>
    <li>
      <button class="v-listbox-item v-button v-button-tertiary v-button-subtle v-flex v-flex-row v-align-items-start v-gap-6 v-px-8 v-py-11">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-file-download-tiny">
          </use>
        </svg>
        <span class="v-listbox-item-label">
          Label 3
        </span>
      </button>
     </li>
    <li>
      <button class="v-listbox-item v-button v-button-tertiary v-button-destructive v-flex v-flex-row v-align-items-start v-gap-6 v-px-8 v-py-11">
        <span class="v-button-destructive v-flex v-gap-6">
          <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
            <use href="#visa-delete-tiny">
            </use>
          </svg>
          <span class="v-listbox-item-label">
            Label 4
          </span>
        </span>
      </button>
    </li>
  </ul>
</div>

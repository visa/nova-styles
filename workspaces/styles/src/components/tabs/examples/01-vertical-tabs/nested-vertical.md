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
title: Nested Vertical
description: nested tabs vertical class. Increase --v-tabs-vertical-nested-count for each nested tab group (first group is n = 0) 
classes: ['.v-tabs', '.v-tabs-vertical']
tags: ['custom']
order: 23
---

<ul class="v-tabs v-tabs-vertical">
  <li class="v-tab">
    <button aria-expanded="true" class="v-button v-button-tertiary">
      Label 1
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-tab-suffix" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny">
        </use>
      </svg>
    </button>
    <ul class="v-tabs v-tabs-vertical">
      <li class="v-tab">
        <button class="v-button v-button-tertiary">
          Label 1.1
        </button>
      </li>
      <li class="v-tab">
        <button aria-expanded="true" class="v-button v-button-tertiary">
          Label 1.2
          <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-tab-suffix" viewbox="0 0 16 16">
            <use href="#visa-chevron-down-tiny">
            </use>
          </svg>
        </button>
        <ul class="v-tabs v-tabs-vertical">
          <li class="v-tab">
            <button aria-current="page" class="v-button v-button-tertiary">
              Label 1.2.1
            </button>
          </li>
          <li class="v-tab">
            <button class="v-button v-button-tertiary">
              Label 1.2.2
            </button>
          </li>
          <li class="v-tab">
            <button class="v-button v-button-tertiary">
              Label 1.2.3
            </button>
          </li>
        </ul>
      </li>
      <li class="v-tab">
        <button class="v-button v-button-tertiary">
          Label 1.3
        </button>
      </li>
    </ul>
  </li>
  <li class="v-tab">
    <button class="v-button v-button-tertiary">
      Label 2
    </button>
  </li>
  <li class="v-tab">
    <button class="v-button v-button-tertiary">
      Label 3
    </button>
  </li>
</ul>

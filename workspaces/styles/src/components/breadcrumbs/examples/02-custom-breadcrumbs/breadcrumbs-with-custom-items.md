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
title: Breadcrumbs with custom items
description: Breadcrumbs with custom items and a custom svg separator.
classes: ['.v-breadcrumbs', '.v-breadcrumbs-custom']
tags: ['custom']
order: 4
---

<nav aria-label="Breadcrumb" class="v-breadcrumbs v-breadcrumbs-custom">
  <ol>
    <li>
      <a aria-label="Project root folder" class="v-button v-button-icon v-button-tertiary v-button-subtle" href="./breadcrumbs">
        <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-folder-tiny">
          </use>
        </svg>
      </a>
      <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-option-horizontal-tiny">
        </use>
      </svg>
      <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li>
      <span aria-current="page">
        L4 label
      </span>
    </li>
  </ol>
</nav>

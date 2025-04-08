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
title: Breadcrumbs with SVG separator
description: Breadcrumbs with a custom svg separator. Use the .v-breadcrumbs-custom class to override the default and add your own custom svg separator inside the list element. 
classes: ['.v-breadcrumbs', '.v-breadcrumbs-custom']
tags: ['docs']
order: 3
---

<nav aria-label="Breadcrumb" class="v-breadcrumbs v-breadcrumbs-custom">
  <ol>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L1 label
      </a>
      <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L2 label
      </a>
      <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L3 label
      </a>
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

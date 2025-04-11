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
title: Breadcrumbs with custom separator
description: Use the --v-breadcrumbs-pseudo-separator variable to set a custom separation character. 
classes: ['.v-breadcrumbs']
tags: []
order: 1
---

<nav aria-label="Breadcrumb" class="v-breadcrumbs" style="--v-breadcrumbs-pseudo-separator: '+';">
  <ol>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L1 label
      </a>
    </li>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L2 label
      </a>
    </li>
    <li>
      <a class="v-link" href="./breadcrumbs">
        L3 label
      </a>
    </li>
    <li>
      <span aria-current="page">
        L4 label
      </span>
    </li>
  </ol>
</nav>

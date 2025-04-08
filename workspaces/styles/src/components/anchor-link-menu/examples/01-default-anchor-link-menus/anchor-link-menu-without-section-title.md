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
title: Anchor link menu without section title
description: Anchor link menu without section title. Not that the section title is not added via the aria-label attribute. 
classes: ['.v-anchor-link-menu']
tags: ['docs']
order: 1
---

<aside aria-label="Section title" class="v-anchor-link-menu">
  <section>
    <ul>
      <li>
        <a aria-current="true" class="v-link" href="./anchor-link-menu">
          L1 label 1
        </a>
      </li>
      <li>
        <a class="v-link" href="./anchor-link-menu">
          L1 label 2
        </a>
      </li>
      <li>
        <a class="v-link" href="./anchor-link-menu">
          L1 label 3
        </a>
      </li>
      <li>
        <a class="v-link" href="./anchor-link-menu">
          L1 label 4
        </a>
      </li>
      <li>
        <a class="v-link" href="./anchor-link-menu">
          L1 label 5
        </a>
      </li>
    </ul>
  </section>
</aside>

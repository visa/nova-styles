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
title: Anchor link menu with nested items
description: Default anchor link menu. 
classes: ['.v-anchor-link-menu', '.v-anchor-link-menu-header']
tags: ['docs']
order: 2
---

<aside aria-labelledby="anchor-link-menu-header-example-nested" class="v-anchor-link-menu">
  <section>
    <header class="v-anchor-link-menu-header">
      <h2 class="v-typography-overline" id="anchor-link-menu-header-example-nested" aria-label="Section title for example with nested items">
        Section title
      </h2>
    </header>
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
        <ul>
          <li>
            <a class="v-link" href="./anchor-link-menu">
              L2 label 1
            </a>
          </li>
          <li>
            <a class="v-link" href="./anchor-link-menu">
              L2 label 2
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class="v-link" href="./anchor-link-menu">
          L1 label 3
        </a>
      </li>
    </ul>
  </section>
</aside>

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
title: Right to left anchor link menu 
description: Right to left anchor link menu. 
classes: ['.v-anchor-link-menu[dir="rtl"]', '.v-anchor-link-menu', '[dir="rtl"]']
tags: ['docs']
order: 3
---

<aside aria-labelledby="anchor-link-menu-header-example-rtl" class="v-anchor-link-menu" dir="rtl">
  <section>
    <header class="v-anchor-link-menu-header">
      <h2 class="v-typography-overline" id="anchor-link-menu-header-example-rtl" aria-label="Section title for right-to-left example">
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

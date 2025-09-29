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

title: Disabled subtle accordion
description: Collapsed subtle accordion
classes: ['.v-accordion', '.v-accordion-subtle', '.v-accordion-heading.v-button-tertiary']
tags: ['docs']
order: 7

---

<details class="v-accordion v-accordion-subtle">
  <summary class="v-button v-button-tertiary v-accordion-heading v-typography-body-2-medium"tabIndex="-1" aria-disabled="true">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-right-tiny">
      </use>
    </svg>
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-down-tiny">
      </use>
    </svg>
    Accordion title
  </summary>
  <div class="v-accordion-panel">
    <p>This is required text that describes the accordion section in more detail.</p>
  </div>
</details>

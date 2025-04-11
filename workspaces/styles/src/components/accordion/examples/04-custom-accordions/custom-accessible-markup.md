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
title: Custom accessible markup 
description: Accordion implemented without the HTML details element. 
classes: ['.v-accordion', '.v-accordion[aria-controls="panel-id"]', '.v-accordion[aria-expanded="false"]', '.v-accordion-panel[aria-hidden="false"]']
tags: ['custom']
order: 9
---

<div class="v-accordion">
  <button aria-controls="default-panel-1" aria-expanded="false" class="v-button v-button-secondary v-button-large v-accordion-heading">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-right-tiny">
      </use>
    </svg>
    Accordion title
  </button>
  <div aria-hidden="true" class="v-accordion-panel" id="default-panel-1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>

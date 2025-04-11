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
title: Accordion item with separate toggle button 
description: Accordion heading with kitchen sink of items + toggle button 
classes: ['.v-accordion', '.v-button[aria-controls="panel-id"]', '.v-button[aria-expanded="false"]', '.v-accordion-panel[aria-hidden="false"]']
tags: ['custom']
order: 10
---

<div class="v-accordion">
  <div class="v-accordion-heading v-align-items-center" id="accordion-heading-standalone">
    <input aria-labelledby="accordion-heading-standalone" class="v-checkbox" id="checkbox-default" type="checkbox"/>
    Accordion title
    <button aria-controls="kitchen-sink-panel" aria-expanded="true" aria-labelledby="accordion-heading-standalone" class="v-button v-button-icon v-button-small v-accordion-toggle v-ml-auto" style="--v-accordion-icon-color: var(--v-button-default-foreground)">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny">
        </use>
      </svg>
    </button>
  </div>
  <div aria-hidden="false" class="v-accordion-panel" id="kitchen-sink-panel">
    <p>This is required text that describes the accordion section in more detail.</p>
  </div>
</div>

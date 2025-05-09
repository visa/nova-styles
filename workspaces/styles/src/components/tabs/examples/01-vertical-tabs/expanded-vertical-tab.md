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
title: Expanded vertical tab 
description: Vertical tab using an unordered list. Please note that actual tab is the li element with the button clickable element within it, and the tab suffix. The expanded property applies to the inner button via the aria-expanded attribute. 
classes: ['.v-tab', 'li[role="none"]', 'button[aria-expanded="true"]', '.v-tab-suffix']
tags: ['docs']
order: 5
---

<ul class="v-tabs v-tabs-vertical" role="tablist">
  <li class="v-tab" role="none">
    <button aria-expanded="true" class="v-button v-button-tertiary" role="tab">
      Label
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-tab-suffix" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-up-tiny">
        </use>
      </svg>
    </button>
  </li>
</ul>

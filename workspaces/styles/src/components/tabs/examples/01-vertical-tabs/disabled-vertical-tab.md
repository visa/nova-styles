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
title: Disabled vertical tab 
description: Disabled vertical tab using an unordered list. Please note that actual tab is the li element with the button clickable element within it and the disabled attribute applies to the inner button. 
classes: ['.v-tab', 'li[role="none"]', 'button[disabled]']
tags: ['docs']
order: 3
---

<ul class="v-tabs v-tabs-vertical" role="tablist">
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-tertiary" disabled="" role="tab">
      Label
    </button>
  </li>
</ul>

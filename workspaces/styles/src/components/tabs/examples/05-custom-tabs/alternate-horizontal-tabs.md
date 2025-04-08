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
title: Alternate horizontal tabs 
description: Horizontal tabs with alternate class. 
classes: ['.v-alternate', '.v-tabs', '.v-button[aria-selected="true"]']
tags: ['custom', 'alternate']
order: 20
---

<ul class="v-tabs v-tabs-horizontal v-alternate" role="tablist">
  <li class="v-tab" role="none">
    <button aria-expanded="false" aria-selected="true" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 1
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 2
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 3
    </button>
  </li>
</ul>

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
title: Alternate link with trailing icon
description: Alternate link. 
classes: ['.v-link.v-alternate', '.v-link-no-underline']
tags: ['docs', 'alternate']
order: 3
---

<a class="v-link v-link-no-underline v-alternate" href="./link">
  Destination label
  <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny v-icon-information" focusable="false" viewbox="0 0 16 16">
    <use href="#visa-chevron-right-tiny">
    </use>
  </svg>
</a>

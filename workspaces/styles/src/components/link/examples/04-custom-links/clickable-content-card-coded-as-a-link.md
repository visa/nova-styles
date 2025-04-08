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
title: Clickable content card coded as a link
description: Use a card when you are adding more contextual information to your link. 
classes: ['.v-link.v-content-card-clickable']
tags: ['custom']
order: 10
---

<a class="v-link v-link-no-underline v-content-card v-content-card-clickable" href="./link">
  <div class="v-content-card-body v-flex v-flex-col v-gap-4">
    <div class="v-flex v-flex-row v-align-items-center v-gap-4">
      Print
      <svg aria-hidden="true" class="v-icon v-icon-generic v-icon-tiny v-icon-information" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-device-printer-tiny">
        </use>
      </svg>
    </div>
    <p>
      This is optional text that describes the link in more detail.
    </p>
  </div>
</a>

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
title: Error banner without close icon button
description: Nova error banner with icon and description.
classes:
  [
    '.v-banner',
    '.v-message',
    '.v-message-error',
    '.v-banner.v-message.v-message-error',
    '.v-message-icon',
    '.v-message-content',
  ]
tags: ['docs']
order: 23
---

<div class="v-message v-message-error v-banner">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-error-low">
    </use>
  </svg>
  <div class="v-message-content v-pl-2 v-pb-2">
    <p>
      This is required text that describes the banner in more detail.
    </p>
  </div>
</div>

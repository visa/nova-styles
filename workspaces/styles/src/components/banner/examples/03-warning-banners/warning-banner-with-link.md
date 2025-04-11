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
title: Warning banner with link
description: Nova warning banner with icon, description, and link. 
classes: ['.v-banner', '.v-message', '.v-message-warning', '.v-banner.v-message.v-message-warning', '.v-message-icon', '.v-message-content', '.v-link']
tags: ['docs']
order: 15
---

<div class="v-message v-message-warning v-banner">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-warning-low">
    </use>
  </svg>
  <div class="v-message-content v-pl-2 v-pb-2">
    <p class="v-mb-8">
      This is required text that describes the banner in more detail.
    </p>
    <a class="v-link" href="./banner">
      Destination label
    </a>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-small v-button-subtle -v-mt-8 -v-mr-16" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</div>

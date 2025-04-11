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
title: Error flag with link
description: Error flag with icon, title, description, and close button. 
classes: ['.v-flag', '.v-message.v-message-error', '.v-message-icon', '.v-message-content', '.v-link']
tags: ['docs']
order: 21
---

<div class="v-message v-message-error v-flag">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-error-low">
    </use>
  </svg>
  <div class="v-message-content v-pl-2 v-pb-2">
    <p class="v-mb-8">
      This is required text that describes the flag in more detail.
    </p>
    <a class="v-link" href="./flag">
      Destination label
    </a>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-small v-button-subtle -v-mt-8 -v-mr-8" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</div>

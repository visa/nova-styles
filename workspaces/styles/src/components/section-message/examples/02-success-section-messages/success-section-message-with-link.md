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
title: Success section message with link 
description: Nova success section message with icon, description, close button, and link. 
classes: ['.v-section', '.v-message', '.v-message-success', '.v-section.v-message.v-message-success', '.v-message-icon', '.v-message-content', '.v-link']
tags: ['docs']
order: 9
---

<div class="v-message v-message-success v-section">
  <svg aria-hidden="false" aria-label="Success" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-success-low">
    </use>
  </svg>
  <div class="v-message-content v-pl-2 v-pb-2">
    <p class="v-mb-8">
      This is required text that describes the section message in more detail.
    </p>
    <a class="v-link" href="./section-message">
      Destination label
    </a>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-small v-button-subtle -v-mt-8 -v-mr-8 v-ml-14 v-p-7" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</div>

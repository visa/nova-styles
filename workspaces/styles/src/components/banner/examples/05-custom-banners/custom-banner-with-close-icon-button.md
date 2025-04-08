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
title: Custom banner with close icon button
description: Custom banner with use of flex utility classes.
classes: ['.v-banner', '.v-message', '.v-message.v-banner', '.v-message-icon', '.v-message-content']
tags: ['custom']
order: 24
---

<style>
  .my-dismisible-message { --v-message-background: #eee; --v-message-border-color: #777; --v-message-icon-color: #777; --v-message-border-block-start-size: 0px; --v-message-border-block-end-size: 0px; --v-message-border-inline-start-size: 8px; --v-message-border-inline-end-size: 0px; --v-message-border-radius: 0px; }
</style>
<div class="v-message v-banner my-dismisible-message v-flex v-flex-row v-gap-8 v-justify-content-center v-align-items-center">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
    <use href="#visa-information-low">
    </use>
  </svg>
  <div class="v-message-content">
    <p>
      This is required text that describes the banner in more detail.
    </p>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-small v-button-subtle" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</div>

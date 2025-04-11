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
title: Custom banner without close icon button
description: Custom banner with different layout with use of flex utility classes.
classes: ['.v-banner', '.v-message', '.v-message.v-banner', '.v-message-icon', '.v-message-content']
tags: ['custom']
order: 25
---

<style>
  .my-persistent-message { --v-message-background: var(--palette-default-surface-1); --v-message-border-color: var(--palette-messaging-graphics-negative); --v-message-icon-color: var(--palette-messaging-text-negative); --v-message-border-block-start-size: var(--theme-border-size); --v-message-border-block-end-size: var(--theme-border-size); --v-message-border-inline-start-size: var(--theme-border-size); --v-message-border-inline-end-size: var(--theme-border-size); --v-message-border-radius: var(--theme-border-radius); }
</style>
<div class="v-message v-section my-persistent-message">
  <div class="v-message-content v-flex v-flex-col">
    <div class="v-flex v-flex-row v-gap-8 v-justify-content-between">
      <p class="v-typography-body-2-bold">
        Unable to process payment
      </p>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-error-low">
        </use>
      </svg>
    </div>
    <p class="v-message-content">
      There was an error processing your payment. Correct your credit card information and try again.
    </p>
  </div>
</div>

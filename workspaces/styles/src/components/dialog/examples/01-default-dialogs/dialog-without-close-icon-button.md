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
title: Dialog without close icon button
description: When the close icon button is not present, use a primary or secondary action button as a closing mechanism. 
classes: ['.v-dialog', '.v-message', '.v-message-error', '.v-dialog.v-message.v-message-error']
tags: ['docs']
order: 4
---

<button class="v-button v-button-primary" onclick="window.dialogCloseButton.showModal();">
  Open dialog without close icon
</button>
<dialog aria-describedby="no-close-icon-description" aria-labelledby="no-close-icon-title" aria-modal="true" class="v-dialog v-message v-message-error" id="dialogCloseButton" role="dialog">
  <div class="v-message-content v-pb-2 v-pr-2">
    <h2 class="v-dialog-header v-flex v-gap-6 v-align-items-center v-justify-content-start" id="no-close-icon-title">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-error-low">
        </use>
      </svg>
      <span>
        Error title
      </span>
    </h2>
    <p id="no-close-icon-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-start">
      <button class="v-button v-button-primary" onclick="window.dialogCloseButton.close();" type="button">
        Primary action
      </button>
    </div>
  </div>
</dialog>

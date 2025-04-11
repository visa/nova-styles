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
title: Warning dialog
description: While the messaging in the warning dialog is not as severe as an error, the situation is important enough to block the workflow and force the user to make an active choice to address the situation. 
classes: ['.v-dialog', '.v-message', '.v-message-warning', '.v-dialog.v-message.v-message-warning']
tags: ['docs']
order: 3
---

<button class="v-button v-button-primary" onclick="window.warningDialog.showModal();">
  Open warning dialog
</button>
<dialog aria-describedby="warning-description" aria-labelledby="warning-title" aria-modal="true" class="v-dialog v-message v-message-warning" id="warningDialog" role="dialog">
  <div class="v-message-content v-pb-2 v-pr-2">
    <h2 class="v-dialog-header v-flex v-gap-6 v-align-items-center v-justify-content-start" id="warning-title">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-warning-low">
        </use>
      </svg>
      <span>
        Warning title
      </span>
    </h2>
    <p id="warning-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-start">
      <button class="v-button v-button-primary" onclick="window.warningDialog.close();" type="button">
        Primary action
      </button>
    </div>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-subtle v-button-small -v-mt-20 -v-ml-12 -v-mr-18" onclick="window.warningDialog.close();" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</dialog>

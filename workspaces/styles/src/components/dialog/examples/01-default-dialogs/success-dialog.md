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
title: Success dialog
description: Use this dialog to reinforce feedback for a success completion of a workflow and allow users to take an immediate follow up action the user need to take as a next step. In most cases the secondary action is not "Cancel." These messages are still brief and critical to communicate to the user. 
classes: ['.v-dialog', '.v-message', '.v-message-success', '.v-dialog.v-message.v-message-success']
tags: ['docs']
order: 2
---

<button class="v-button v-button-primary" onclick="window.successDialog.showModal();">
  Open success dialog
</button>
<dialog aria-describedby="success-description" aria-labelledby="success-title" aria-modal="true" class="v-dialog v-message v-message-success" id="successDialog" role="dialog">
  <div class="v-message-content v-pb-2 v-pr-2">
    <h2 class="v-dialog-header v-flex v-gap-6 v-align-items-center v-justify-content-start" id="success-title">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-success-low">
        </use>
      </svg>
      <span>
        Success title
      </span>
    </h2>
    <p id="success-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-start">
      <button class="v-button v-button-primary" onclick="window.successDialog.close();" type="button">
        Primary action
      </button>
    </div>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-subtle v-button-small -v-mt-20 -v-ml-12 -v-mr-18" onclick="window.successDialog.close();" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</dialog>

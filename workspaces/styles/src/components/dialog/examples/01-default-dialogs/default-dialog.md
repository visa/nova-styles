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
title: Default dialog
description: Default dialog. Please note that dialogs are native HTML elements and they must be triggered to open. 
classes: ['.v-dialog', '.v-dialog-default', '.v-message', '.v-dialog.v-dialog-default.v-message', '.v-dialog-header', '.v-message']
tags: ['docs']
order: 0
---

<button class="v-button v-button-primary" onclick="window.defaultDialog.showModal();">
  Open default dialog
</button>
<dialog aria-describedby="default-description" aria-labelledby="default-title" aria-modal="true" class="v-dialog v-dialog-default v-message" id="defaultDialog" role="dialog">
  <div class="v-message-content v-pb-2 v-pr-2">
    <h2 class="v-dialog-header v-flex v-align-items-center v-justify-content-start" id="default-title">
      <span>
        Default title
      </span>
    </h2>
    <p id="default-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-start">
      <button class="v-button v-button-primary" onclick="window.defaultDialog.close();" type="button">
        Primary action
      </button>
      <button class="v-button v-button-secondary" onclick="window.defaultDialog.close();" type="button">
        Secondary action
      </button>
    </div>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-subtle v-button-small -v-mt-20 -v-ml-12 -v-mr-18" onclick="window.defaultDialog.close();" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</dialog>

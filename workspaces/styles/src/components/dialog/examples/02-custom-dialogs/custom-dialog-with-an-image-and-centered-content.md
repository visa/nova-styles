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

title: Custom dialog with an image and centered content
description: Custom dialog with an image and centered content.
classes: ['.v-dialog', '.v-dialog-default', '.v-flex', '.v-flex-col', '.v-dialog.v-dialog-default.v-flex.v-flex-col', '.v-content-card-image']
tags: ['custom']
order: 6

---

<style>
  .my-dialog { --v-message-padding-block-end: var(--size-scalable-8); --v-message-padding-block-start: 0px; --v-message-padding-inline-end: 0px; --v-message-padding-inline-start: 0px; --v-dialog-content-padding-block: var(--size-scalable-8); --v-dialog-content-padding-inline: var(--size-scalable-8); } .my-dialog[open] { display: flex; flex-direction: column;} .my-dialog-close { position: absolute; right: var(--size-scalable-22); top: var(--size-scalable-24);}
</style>
<button class="v-button v-button-primary" onclick="window.myCustomDialog.showModal();">
  Open custom dialog with image
</button>
<dialog aria-describedby="my-dialog-description" aria-labelledby="my-dialog-title" aria-modal="true" class="v-dialog v-dialog-default v-message my-dialog" id="myCustomDialog" role="dialog">
  <div class="v-content-card-image">
  </div>
  <div class="v-message-content" style="overflow:visible">
    <h2 class="v-dialog-header v-flex v-align-items-center v-justify-content-center" id="my-dialog-title">
      <span>
        Custom dialog with image title
      </span>
    </h2>
    <p id="my-dialog-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-center">
      <div class="v-flex v-flex-wrap v-gap-8 v-justify-content-between">
        <button class="v-button v-button-primary" type="button" onclick="window.myCustomDialog.close()">
          Primary action
        </button>
      </div>
    </div>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-subtle v-button-small -v-mt-20 -v-ml-12 -v-mr-18 my-dialog-close" onclick="window.myCustomDialog.close();" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</dialog>

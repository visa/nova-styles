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
title: Touring tips dialog
description: See touring tips in the patterns section for more guidance. 
classes: ['.v-dialog']
tags: ['docs', 'custom']
order: 5
---

<style>
  .app-tour-number { align-items: center; background-color: var(--palette-default-surface-highlight); block-size: 36px; border-radius: var(--size-rounded-pill); display: flex; inline-size: 36px; justify-content: center; }
</style>
<button class="v-button v-button-primary" onclick="window.touringTipsDialog.showModal();">
  Open touring tips dialog
</button>
<dialog aria-describedby="touring-tips-description" aria-labelledby="touring-tips-title" aria-modal="true" class="v-dialog v-dialog-default v-message" id="touringTipsDialog" role="dialog">
  <div class="v-message-content v-pb-2 v-pr-2">
    <h2 class="v-dialog-header v-flex v-align-items-center v-justify-content" id="touring-tips-title">
      <span>
        Touring tips title
      </span>
    </h2>
    <div class="v-flex v-gap-8 v-flex-row v-align-items-center v-pb-8">
      <div class="app-tour-number v-typography-subtitle-2">
        2
      </div>
      <p class="v-typography-body-2-bold">
        Touring tips instructions
      </p>
    </div>
    <p id="touring-tips-description">
      This is required text that describes the dialog title in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-8 v-pt-16 v-align-items-center v-justify-content-between">
      <p>
        2 of 4
      </p>
      <div class="v-flex v-flex-wrap v-gap-8 v-justify-content-between">
        <button class="v-button v-button-secondary" type="button">
          Previous
        </button>
        <button class="v-button v-button-primary" type="button">
          Next
        </button>
      </div>
    </div>
  </div>
  <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-subtle v-button-small -v-mt-20 -v-ml-12 -v-mr-18" onclick="window.touringTipsDialog.close();" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-close-tiny">
      </use>
    </svg>
  </button>
</dialog>

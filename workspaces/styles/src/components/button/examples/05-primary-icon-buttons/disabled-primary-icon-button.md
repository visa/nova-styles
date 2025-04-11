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
title: Disabled primary icon button 
description: Alternate button icon. 
classes: ['.v-button.v-button-icon[disabled]']
tags: ['docs']
order: 28
---

<div class="v-flex v-flex-row">
  <div class="v-flex v-flex-col v-gap-2 v-align-items-center">
    <button aria-labelledby="icon-button-label-disabled" class="v-button v-button-icon" disabled="" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-add-tiny">
        </use>
      </svg>
    </button>
    <span class="v-typography-label-small" id="icon-button-label-disabled" style="color: var(--palette-default-disabled);">
      Action
    </span>
  </div>
</div>

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
title: Custom radio button panel
description: Radio within action abstract class with inline message. Must click input or label to toggle radio 
classes: ['.v-action', '.v-action-secondary', '.v-radio-panel', '.v-input-message']
tags: ['custom']
order: 15
---

<fieldset class="v-flex v-flex-row v-gap-8">
  <label class="v-action v-action-secondary v-flex v-flex-col v-gap-10 v-radio-panel" for="custom-radio-panel-1a">
    <div class="v-flex v-gap-4">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-device-mobile-low">
        </use>
      </svg>
      <span class="v-label v-typography-subtitle-1">
        Label 1
      </span>
    </div>
    <div class="v-input-message" id="custom-radio-panel-message-1a">
      This is optional text that describes the label in more detail.
    </div>
    <div class="v-flex v-flex-row v-justify-content-center" style="background-color: var(--palette-default-surface-highlight)">
      <input aria-describedby="custom-radio-panel-message-1a" class="v-radio v-flex-shrink-0" id="custom-radio-panel-1a" name="custom-radio-panel" type="radio"/>
    </div>
  </label>
  <label class="v-action v-action-secondary v-flex v-flex-col v-gap-10 v-radio-panel" for="custom-radio-panel-1b">
    <div class="v-flex v-gap-4">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-device-laptop-low">
        </use>
      </svg>
      <span class="v-label v-typography-subtitle-1">
        Label 2
      </span>
    </div>
    <div class="v-input-message" id="custom-radio-panel-message-1b">
      This is optional text that describes the label in more detail.
    </div>
    <div class="v-flex v-flex-row v-justify-content-center" style="background-color: var(--palette-default-surface-highlight)">
      <input aria-describedby="custom-radio-panel-message-1b" class="v-radio v-flex-shrink-0" id="custom-radio-panel-1b" name="custom-radio-panel" type="radio"/>
    </div>
  </label>
  <label class="v-action v-action-secondary v-flex v-flex-col v-gap-10 v-radio-panel" for="custom-radio-panel-1c">
    <div class="v-flex v-gap-4">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-device-monitor-low">
        </use>
      </svg>
      <span class="v-label v-typography-subtitle-1">
        Label 3
      </span>
    </div>
    <div class="v-input-message" id="custom-radio-panel-message-1c">
      This is optional text that describes the label in more detail.
    </div>
    <div class="v-flex v-flex-row v-justify-content-center" style="background-color: var(--palette-default-surface-highlight)">
      <input aria-describedby="custom-radio-panel-message-1c" class="v-radio v-flex-shrink-0" id="custom-radio-panel-1c" name="custom-radio-panel" type="radio"/>
    </div>
  </label>
</fieldset>

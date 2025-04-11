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
title: Radio button panel group with error
description: Radio within action abstract class.
classes: ['.v-action', '.v-action-secondary', '.v-radio-panel', '.v-radio[aria-invalid="true"]', '.v-input-message']
tags: ['docs']
order: 14
---

<fieldset aria-labelledby="radio-panel-legend-4 radio-panel-message-4c">
  <legend class="v-typography-label" id="radio-panel-legend-4">
    Group label
  </legend>
  <div class="v-flex v-flex-col v-gap-8">
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-2a" aria-invalid="true" class="v-radio v-flex-shrink-0" id="radio-panel-4a" name="radio-panel-4" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-4a">
            Label 1
          </label>
          <div class="v-input-message" id="radio-panel-group-message-2a">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-2b" aria-invalid="true" class="v-radio v-flex-shrink-0" id="radio-panel-4b" name="radio-panel-4" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-4b">
            Label 2
          </label>
          <div class="v-input-message" id="radio-panel-group-message-2b">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-2c" aria-invalid="true" class="v-radio v-flex-shrink-0" id="radio-panel-4c" name="radio-panel-4" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-4c">
            Label 3
          </label>
          <div class="v-input-message" id="radio-panel-group-message-2c">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
  </div>
  <span class="v-input-message" id="radio-panel-message-4c">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

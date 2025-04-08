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
title: Checkbox panel group with error
description: Checkbox within action abstract class.
classes: ['.v-action', '.v-action-secondary', '.v-checkbox[disabled]', '.v-input-message']
tags: ['docs']
order: 20
---

<fieldset aria-labelledby="checkbox-panel-legend-4c checkbox-panel-group-message-4c">
  <legend class="v-label v-typography-label-large" id="checkbox-panel-legend-4c">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-4a" aria-invalid="true" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-4a" name="checkbox-panel-4" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-4a">
            Label 1
          </label>
          <div class="v-input-message" id="checkbox-panel-message-4a">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-4b" aria-invalid="true" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-4b" name="checkbox-panel-4" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-4b">
            Label 2
          </label>
          <div class="v-input-message" id="checkbox-panel-message-4b">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-4c" aria-invalid="true" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-4c" name="checkbox-panel-4" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-4c">
            Label 3
          </label>
          <div class="v-input-message" id="checkbox-panel-message-4c">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
  </ul>
  <span class="v-input-message" id="checkbox-panel-group-message-4c">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

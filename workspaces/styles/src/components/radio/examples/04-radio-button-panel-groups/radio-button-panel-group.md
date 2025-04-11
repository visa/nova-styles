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
title: Radio button panel group
description: Radio within action abstract class.
classes: ['.v-action', '.v-action-secondary', '.v-radio-panel']
tags: ['docs']
order: 13
---

<fieldset>
  <legend class="v-typography-label">
    Group label
  </legend>
  <div class="v-flex v-flex-col v-gap-8">
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-1a" class="v-radio v-flex-shrink-0" id="radio-panel-3a" name="radio-panel-3" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-3a">
            Label 1
          </label>
          <div class="v-input-message" id="radio-panel-group-message-1a">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-1b" class="v-radio v-flex-shrink-0" id="radio-panel-3b" name="radio-panel-3" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-3b">
            Label 2
          </label>
          <div class="v-input-message" id="radio-panel-group-message-1b">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
    <div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="radio-panel-group-message-1c" class="v-radio v-flex-shrink-0" id="radio-panel-3c" name="radio-panel-3" type="radio"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="radio-panel-3c">
            Label 3
          </label>
          <div class="v-input-message" id="radio-panel-group-message-1c">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </div>
  </div>
</fieldset>

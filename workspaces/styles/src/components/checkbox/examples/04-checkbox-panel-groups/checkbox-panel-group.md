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
title: Checkbox panel group
description: Checkbox within action abstract class.
classes: ['.v-action', '.v-action-secondary', '.v-checkbox-panel']
tags: ['docs']
order: 19
---

<fieldset>
  <legend class="v-label v-typography-label-large">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-3a" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-3a" name="checkbox-panel-3" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-3a">
            Label 1
          </label>
          <div class="v-input-message" id="checkbox-panel-message-3a">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-3b" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-3b" name="checkbox-panel-3" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-3b">
            Label 2
          </label>
          <div class="v-input-message" id="checkbox-panel-message-3b">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
    <li class="v-action v-action-secondary v-flex-col v-checkbox-panel v-align-items-start">
      <div class="v-flex v-gap-2" style="inline-size: 100%">
        <input aria-describedby="checkbox-panel-message-3c" class="v-checkbox v-flex-shrink-0" id="checkbox-panel-3c" name="checkbox-panel-3" type="checkbox"/>
        <div class="v-flex v-flex-col v-gap-2 v-my-8">
          <label class="v-label v-typography-label-large" for="checkbox-panel-3c">
            Label 3
          </label>
          <div class="v-input-message" id="checkbox-panel-message-3c">
            This is optional text that describes the label in more detail.
          </div>
        </div>
      </div>
    </li>
  </ul>
</fieldset>

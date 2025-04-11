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
title: Disabled radio button panel
description: Radio within action abstract class.
classes: ['.v-action', '.v-action-secondary', '.v-radio[disabled]', '.v-input-message']
tags: ['docs']
order: 12
---

<div class="v-action v-action-secondary v-flex-col v-radio-panel v-align-items-start">
  <fieldset aria-labelledby="radio-panel-message-2">
    <div class="v-flex v-gap-2" style="inline-size: 100%">
      <input class="v-radio v-flex-shrink-0" disabled="" id="radio-panel-3" type="radio"/>
      <div class="v-flex v-flex-col v-gap-2 v-my-8">
        <label class="v-label v-typography-label-large" for="radio-panel-3">
          Label
        </label>
        <div class="v-input-message" id="radio-panel-message-2">
          This is optional text that can be used to describe the label in more detail.
        </div>
      </div>
    </div>
  </fieldset>
</div>

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
title: Radio button with error
description: Radio with error.
classes: ['.v-radio[aria-invalid="true"]']
tags: ['docs']
order: 4
---

<fieldset aria-labelledby="radio-message-error">
  <div class="v-flex v-align-items-center v-gap-2">
    <input aria-invalid="true" class="v-radio" id="radio-error" name="radio-test-6" type="radio"/>
    <label class="v-label v-typography-label-large" for="radio-error" id="radio-error-label">
      Label
    </label>
  </div>
  <span class="v-input-message v-mt-4" id="radio-message-error">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

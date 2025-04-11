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
title: Radio button group with error
description: Radio group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute.
classes: []
tags: ['docs']
order: 8
---

<fieldset aria-invalid="true" aria-labelledby="radio-group-error-legend radio-message-test-12">
  <legend class="v-typography-label" id="radio-group-error-legend">
    Group label
  </legend>
  <div class="v-flex v-flex-col v-gap-4">
    <div class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-radio" id="radio-test-12a" name="radio-test-12" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-12a">
        Label 1
      </label>
    </div>
    <div class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-radio" id="radio-test-12b" name="radio-test-12" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-12b">
        Label 2
      </label>
    </div>
    <div class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-radio" id="radio-test-12c" name="radio-test-12" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-12c">
        Label 3
      </label>
    </div>
  </div>
  <span class="v-input-message" id="radio-message-test-12">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

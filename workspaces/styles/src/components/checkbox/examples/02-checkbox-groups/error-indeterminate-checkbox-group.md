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
title: Indeterminate checkbox group with error
description: Checkbox group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute.
classes: []
tags: ['docs']
order: 14
---

<fieldset aria-invalid="true" aria-labelledby"checkbox-group-indeterminate-lagend="" checkbox-group-indeterminate-with-error-message"="" style="--v-checkbox-group-gap: 8px">
  <legend class="v-label v-typography-label-large" id="checkbox-group-indeterminate-lagend">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-flex v-flex-col">
      <div class="v-flex v-align-items-center v-gap-2">
        <input aria-checked="mixed" aria-invalid="true" class="v-checkbox" id="checkbox-indeterminate-error-parent-a" name="checkbox-indeterminate-parent" type="checkbox"/>
        <label class="v-label v-typography-label-large" for="checkbox-indeterminate-error-parent-a">
          L1 Label
        </label>
      </div>
      <ul class="v-flex v-flex-col v-ml-16">
        <li class="v-flex v-align-items-center v-gap-2">
          <input aria-invalid="true" class="v-checkbox" id="checkbox-indeterminate-error-group-a" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-error-group-a">
            L2 label 1
          </label>
        </li>
        <li class="v-flex v-align-items-center v-gap-2">
          <input aria-invalid="true" checked="" class="v-checkbox" id="checkbox-indeterminate-error-group-b" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-error-group-b">
            L2 label 2
          </label>
        </li>
        <li class="v-flex v-align-items-center v-gap-2">
          <input aria-invalid="true" class="v-checkbox" id="checkbox-indeterminate-error-group-c" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-error-group-c">
            L2 label 3
          </label>
        </li>
      </ul>
    </li>
  </ul>
  <span class="v-input-message" id="checkbox-group-indeterminate-with-error-message">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

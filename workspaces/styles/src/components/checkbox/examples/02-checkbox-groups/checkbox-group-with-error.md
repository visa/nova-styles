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
title: Checkbox group with error
description: Checkbox group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute.
classes: []
tags: ['docs']
order: 9
---

<fieldset aria-invalid="true" aria-labelledby="checkbox-group-with-error-label checkbox-group-with-error-message">
  <legend class="v-label v-typography-label-large" id="checkbox-group-with-error-label">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-checkbox" id="checkbox-group-with-error-1" name="checkbox-group-with-error" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-with-error-1">
        Label 1
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-checkbox" id="checkbox-group-with-error-2" name="checkbox-group-with-error" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-with-error-2">
        Label 2
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-checkbox" id="checkbox-group-with-error-3" name="checkbox-group-with-error" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-with-error-3">
        Label 3
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input aria-invalid="true" class="v-checkbox" id="checkbox-group-with-error-4" name="checkbox-group-with-error" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-with-error-4">
        Label 4
      </label>
    </li>
  </ul>
  <span class="v-input-message" id="checkbox-group-with-error-message">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</fieldset>

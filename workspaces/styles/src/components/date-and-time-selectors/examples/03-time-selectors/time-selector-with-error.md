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
title: Time selector with error
description: Example with an input ot type date.
classes: ['.v-input[type="date"]', '.v-input[aria-invalid="true"]', '.v-input[aria-describedby="id"]']
tags: ['docs']
order: 11
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="time-selector-error">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="time-selector-error" name="time-selector-error" type="time" aria-invalid="true" aria-describedby="time-selector-error-message" />
  </div>
  <span class="v-input-message" id="time-selector-error-message" aria-atomic="true" aria-live="assertive">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</div>
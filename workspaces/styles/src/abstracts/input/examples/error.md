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
title: Error
description: Error input requires a class at the top level.
classes: ['.v-input-error', '.v-input[aria-invalid="true"]']
tags: []
order: 6
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-7">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input aria-describedby="input-message-test-7" aria-invalid="true" class="v-input" id="input-test-7" name="text-input-field" type="text"/>
  </div>
  <span class="v-input-message" id="input-message-test-7">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</div>

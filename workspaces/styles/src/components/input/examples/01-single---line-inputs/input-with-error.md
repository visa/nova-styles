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
title: Input with error
description: Error input requires a class at the container level. 
classes: ['.v-input[aria-invalid="true"]']
tags: ['docs']
order: 6
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-error">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input aria-describedby="input-message-test-error" aria-invalid="true" class="v-input" id="input-test-error" name="text-input-error" type="text"/>
  </div>
  <span class="v-input-message" id="input-message-test-error">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-error-tiny">
      </use>
    </svg>
    This is required text that describes the error in more detail.
  </span>
</div>

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
title: With Button
description: Example with a button input.
classes: []
tags: []
order: 9
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-11">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input aria-describedby="input-message-test-11" class="v-input" id="input-test-11" name="text-input-field" type="text"/>
    <button aria-label="clear" class="v-button v-button-icon v-button-subtle v-button-tertiary v-button-small" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-clear-alt-tiny">
        </use>
      </svg>
    </button>
    <button aria-label="show password" class="v-button v-button-icon v-button-tertiary v-button-small" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-password-hide-tiny">
        </use>
      </svg>
    </button>
  </div>
  <span class="v-input-message" id="input-message-test-11">
    This is optional text that describes the label in more detail.
  </span>
</div>

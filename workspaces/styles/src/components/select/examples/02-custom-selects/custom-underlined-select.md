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
title: Custom underlined select
description: Custom select input example. 
classes: ['select.v-input', '.v-input-control']
tags: ['custom']
order: 7
---

<style>
  .my-underlined-select { --v-input-indicator-size: calc(1.5 * var(--theme-border-size)); --v-select-control-color: var(--v-input-container-border-color); --v-surface-border-radius: 0px; --v-surface-border-size: 0px; }
</style>
<fieldset aria-labelledby="select-underlined-label" class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="select-underlined-field" id="select-underlined-label">
    Label (required)
  </label>
  <div class="v-input-container v-surface my-underlined-select">
    <select aria-describedby="select-underlined-message" class="v-input" id="select-underlined-field" name="select-underlined-example" required="">
      <option value="">
      </option>
      <option value="1">
        Option A
      </option>
      <option value="2">
        Option B
      </option>
      <option value="3">
        Option C
      </option>
      <option value="4">
        Option D
      </option>
    </select>
    <div class="v-input-control">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny">
        </use>
      </svg>
    </div>
  </div>
</fieldset>

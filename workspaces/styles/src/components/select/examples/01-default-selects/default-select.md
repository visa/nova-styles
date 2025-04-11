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
title: Default select
description: Default select input. 
classes: ['select.v-input', '.v-input-control']
tags: ['docs']
order: 0
---

<fieldset aria-labelledby="select-default-label" class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="select-default-field" id="select-default-label">
    Label (required)
  </label>
  <div class="v-input-container v-surface">
    <select aria-describedby="select-default-message" class="v-input" id="select-default-field" name="select-default-example" required="">
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

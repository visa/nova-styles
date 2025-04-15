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
title: Read-only select
description: Read-only select example. 
classes: []
tags: ['docs']
order: 4
---

<fieldset aria-labelledby="select-readonly-label" class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="select-readonly-field" id="select-readonly-label">
    Label (required)
  </label>
  <div class="v-input-container v-surface">
    <select aria-describedby="select-readonly-message" class="v-input" id="select-readonly-field" name="select-readonly-example" readonly="" required="">
      <option value="">
      </option>
      <option disabled="" selected="" value="1">
        Option
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

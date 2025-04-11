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
title: Input with leading icon
description: Use of an icon before the input field, within the input conatiner. 
classes: []
tags: ['docs']
order: 11
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-account">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <span class="v-typography-body-2-bold v-flex v-flex-col v-justify-content-center">
      <svg class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24">
        <use href="#visa-account-low">
        </use>
      </svg>
    </span>
    <input class="v-input" id="input-test-account" name="text-input-field" type="text"/>
  </div>
</div>

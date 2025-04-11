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
title: Horizontal radio button group
description: Horizontal radio group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute. 
classes: []
tags: []
order: 9
---

<fieldset>
  <legend class="v-typography-label">
    Group label
  </legend>
  <div class="v-flex v-flex-row v-flex-wrap v-gap-24">
    <div class="v-flex v-align-items-center v-gap-2">
      <input class="v-radio" id="radio-test-13a" name="radio-test-13" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-13a">
        Label 1
      </label>
    </div>
    <div class="v-flex v-align-items-center v-gap-2">
      <input class="v-radio" id="radio-test-13b" name="radio-test-13" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-13b">
        Label 2
      </label>
    </div>
    <div class="v-flex v-align-items-center v-gap-2">
      <input class="v-radio" id="radio-test-13c" name="radio-test-13" type="radio"/>
      <label class="v-label v-typography-label-large" for="radio-test-13c">
        Label 3
      </label>
    </div>
  </div>
</fieldset>

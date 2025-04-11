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
title: Checkbox group
description: Checkbox group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute.
classes: []
tags: ['docs']
order: 8
---

<fieldset>
  <legend class="v-label v-typography-label-large">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="checkbox-group-1" name="checkbox-group" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-1">
        Label 1
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="checkbox-group-2" name="checkbox-group" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-2">
        Label 2
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="checkbox-group-3" name="checkbox-group" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-3">
        Label 3
      </label>
    </li>
    <li class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="checkbox-group-4" name="checkbox-group" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="checkbox-group-4">
        Label 4
      </label>
    </li>
  </ul>
</fieldset>

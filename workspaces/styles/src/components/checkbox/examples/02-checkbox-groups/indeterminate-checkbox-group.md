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
title: Indeterminate checkbox group
description: Checkbox group example. Note that native grouping happens when all input fields within fieldset are provided the same [name] attribute.
classes: []
tags: ['docs']
order: 13
---

<fieldset style="--v-checkbox-group-gap: 8px">
  <legend class="v-label v-typography-label-large">
    Group label
  </legend>
  <ul class="v-flex v-flex-col">
    <li class="v-flex v-flex-col">
      <div class="v-flex v-align-items-center v-gap-2">
        <input aria-checked="mixed" class="v-checkbox" id="checkbox-indeterminate-parent-a" name="checkbox-indeterminate-parent" type="checkbox"/>
        <label class="v-label v-typography-label-large" for="checkbox-indeterminate-parent-a">
          L1 Label
        </label>
      </div>
      <ul class="v-flex v-flex-col v-ml-16">
        <li class="v-flex v-align-items-center v-gap-2">
          <input class="v-checkbox" id="checkbox-indeterminate-group-a" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-group-a">
            L2 label 1
          </label>
        </li>
        <li class="v-flex v-align-items-center v-gap-2">
          <input checked="" class="v-checkbox" id="checkbox-indeterminate-group-b" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-group-b">
            L2 label 2
          </label>
        </li>
        <li class="v-flex v-align-items-center v-gap-2">
          <input class="v-checkbox" id="checkbox-indeterminate-group-c" name="checkbox-indeterminate-group" type="checkbox"/>
          <label class="v-label v-typography-label-large" for="checkbox-indeterminate-group-c">
            L2 label 3
          </label>
        </li>
      </ul>
    </li>
  </ul>
</fieldset>

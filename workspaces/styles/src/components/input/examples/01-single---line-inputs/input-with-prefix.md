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
title: Input with prefix
description: Use of an element before the input field, within the input conatiner. 
classes: []
tags: ['docs']
order: 7
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-prefix">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <span class="v-typography-body-2-bold" id="prefix-example">
      $
    </span>
    <input aria-describedby="prefix-example" class="v-input" id="input-test-prefix" name="text-input-field" type="text"/>
  </div>
</div>

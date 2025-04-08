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
title: Input with initial value
description: Example of an input field with a pre-defined/initial value. This example uses the native input value attribute. 
classes: ['.v-input']
tags: ['docs']
order: 1
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-initial">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-test-initial" name="text-input-initial" type="text" value="Initial value" />
  </div>
</div>

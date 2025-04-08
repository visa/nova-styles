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
title: Contained Label
description: Example with a label inside the input container. 
classes: []
tags: ['custom']
order: 13
---

<div class="v-flex v-flex-col v-gap-4">
  <div class="v-input-container v-surface v-flex-col v-align-items-start">
    <label class="v-label" for="input-test-13">
      Label (required)
    </label>
    <input aria-describedby="input-message-test-13" class="v-input" id="input-test-13" name="text-input-field" type="text"/>
  </div>
  <span class="v-input-message" id="input-message-test-13">
    This is optional text that describes the label in more detail.
  </span>
</div>

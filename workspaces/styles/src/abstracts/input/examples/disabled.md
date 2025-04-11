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
title: Disabled
description: Disabled input example. 
classes: []
tags: ['docs']
order: 5
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-6">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input aria-describedby="input-message-test-6" class="v-input" disabled="" id="input-test-6" name="text-input-field" type="text" value="Disabled example text."/>
  </div>
  <span class="v-input-message" id="input-message-test-6">
    This is optional text that describes the label in more detail.
  </span>
</div>

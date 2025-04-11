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
title: Textarea with native rows attribute 
description: Example with a textarea and inline message as character counter. 
classes: ['textarea.v-input[rows]', 'textarea.v-input[rows="3"]']
tags: []
order: 17
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="textarea-with-rows">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <textarea class="v-input v-input-resize-none" id="textarea-with-rows" name="textarea-with-rows" rows="3"></textarea>
  </div>
</div>

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
title: Checkbox with description
description: Checkbox with inline message to provide additional context.
classes: ['.v-checkbox+.v-label+.v-input-message']
tags: ['docs']
order: 2
---

<fieldset aria-labelledby="checkbox-message-1">
  <div class="v-flex v-gap-2">
    <input class="v-checkbox" id="checkbox-message" type="checkbox"/>
    <div class="v-flex v-flex-col v-gap-2 v-my-10">
      <label class="v-label v-typography-label-large" for="checkbox-message" id="checkbox-message-label">
        Label
      </label>
      <div class="v-input-message" id="checkbox-message-1">
        This is optional text that describes the label in more detail.
      </div>
    </div>
  </div>
</fieldset>

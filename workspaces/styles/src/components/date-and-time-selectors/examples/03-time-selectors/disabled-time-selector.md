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
title: Disabled time selector
description: Example with an input ot type date.
classes: ['.v-input[type="time"]', '.v-input[type="time"][disabled]']
tags: ['docs']
order: 10
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="time-selector-disabled">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="time-selector-disabled" name="time-selector-disabled" type="time" disabled />
  </div>
</div>

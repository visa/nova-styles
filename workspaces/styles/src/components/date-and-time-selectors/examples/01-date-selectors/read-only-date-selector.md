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
title: Read-only date selector
description: Example with an input ot type date.
classes: ['.v-input[type="date"]', '.v-input[type="date"][readonly]']
tags: ['docs']
order: 2
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="date-selector-test-read-only">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="date-selector-test-read-only" name="date-selector-read-only" type="date" readonly />
  </div>
</div>

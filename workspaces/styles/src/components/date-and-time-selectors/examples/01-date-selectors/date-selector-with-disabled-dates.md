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
title: Date selector with disabled dates
description: Example with an input ot type date with disabled dates, leveraging HTML input's native value, min, and max attributes.
classes: ['.v-input[type="date"]', '.v-input[type="date"][min=""]', '.v-input[type="date"][max=""]']
tags: ['docs']
order: 5
---

<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-default">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-test-default" name="text-input-default" type="date" value="2024-04-23" min="2024-04-11" max="2024-04-30" />
  </div>
</div>

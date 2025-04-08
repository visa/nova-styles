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
title: Stacked date range selector
description: Example with 2 inputs of type date to enable range selection, laid out vertically.
classes: ['.v-input[type="date"]']
tags: ['docs']
order: 7
---

<div class="v-flex v-flex-col v-gap-16">
    <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="date-selector-range-stacked-from">
            Label 1 (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
            <input class="v-input" id="date-selector-range-stacked-from" name="date-selector-range-stacked-from" type="date" placeholder="" />
        </div>
    </div>
    <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="date-selector-range-stacked-to">
            Label 2 (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
            <input class="v-input" id="date-selector-range-stacked-to" name="date-selector-range-stacked-to" type="date" placeholder="" />
        </div>
    </div>
</div>

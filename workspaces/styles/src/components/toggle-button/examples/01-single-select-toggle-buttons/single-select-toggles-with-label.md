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
title: Single-select toggles with label
classes: ['.v-toggle', '.v-toggle-container']
tags: ['docs']
order: 1
---

<fieldset aria-labelledby="single-select-toggle-legend">
    <legend class="v-label" id="single-select-toggle-legend">Label</legend>
    <div class="v-toggle-container v-mt-4">
        <button class="v-toggle v-gap-6" aria-pressed="true">
            Label 1
        </button>
        <button class="v-toggle v-gap-6" aria-pressed="false">
            Label 2
        </button>
        <button class="v-toggle v-gap-6" aria-pressed="false">
            Label 3
        </button>
    </div>
</fieldset>

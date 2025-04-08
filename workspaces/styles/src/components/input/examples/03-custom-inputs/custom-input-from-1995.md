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
title: Custom input from 1995
description: Customized input with css variables. 
classes: []
tags: ['custom']
order: 19
---

<style>
  .my-input-1995 { --typography-font-family: courier; --v-input-border-color: var(--palette-default-border); --v-input-border-size: var(--theme-border-size); --v-input-background: var(--palette-default-surface-1); } .my-label-1995 { --typography-font-family: courier; }
</style>
<div class="v-flex v-flex-row v-gap-4">
  <label class="v-label my-label-1995" for="input-test-1995">
    Label
  </label>
  <input class="v-input my-input-1995" id="input-test-1995" name="text-input-1995" type="text"/>
</div>

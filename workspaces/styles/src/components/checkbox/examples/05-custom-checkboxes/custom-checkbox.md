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
title: Custom checkbox
description: Custom checkbox.
classes: ['.v-checkbox', '.v-checkbox+.v-label']
tags: ['custom']
order: 21
---

<style>
  .my-checkbox { --v-checkbox-border-radius: 1px; --v-checkbox-hover-glow-color: transparent; --v-checkbox-focus-glow-color: transparent; --v-checkbox-active-glow-color: transparent; --v-checkbox-glow-offset: 2px; --v-checkbox-outline-radius: 1px; --v-checkbox-color: #928b80; --v-checkbox-hover-color: #615d56; --v-checkbox-focus-color: #615d56; --v-checkbox-active-color: #4e4d49; } .v-label:has(.my-checkbox) { background-color: #f9f8f6; border-radius: 1px; } .v-label:has(.my-checkbox:hover), .v-label:has(.my-checkbox:focus-visible) { background-color: #f4f2ed; } .v-label:has(.my-checkbox:active) { background-color: #edeae3; }
</style>
<label class="v-label v-typography-label-large v-flex v-gap-6 v-p-6" for="checkbox-custom">
  <input class="v-checkbox my-checkbox" id="checkbox-custom" type="checkbox"/>
  Label
</label>

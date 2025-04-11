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
title: Custom horizontal tab 
description: Tabs with custom look and feel 
classes: []
tags: ['custom']
order: 28
---

<style>
  .my-tabs { --v-tabs-active-line-padding: 0px; --v-tabs-active-foreground: #000; --v-tabs-selected-background: #dbbfff; --v-tabs-selected-highlight: #a158fe; --v-tabs-selected-highlight-border-size: 4px; --v-tabs-group-gap: 0; --v-button-default-border-radius: var(--size-rounded-none); --v-button-tertiary-background: transparent; --v-button-tertiary-foreground: #333; --v-button-tertiary-hover-background: #ebcfff; --v-button-tertiary-hover-foreground: #000; --v-button-tertiary-focus-background: #ebcfff; --v-button-tertiary-focus-foreground: #000; --v-button-tertiary-active-background: #e6d4fc; --v-button-tertiary-active-foreground: #000; }
</style>
<ul class="v-tabs my-tabs" role="tablist">
  <li class="v-tab" role="none">
    <button aria-selected="true" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 1
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 2
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 3
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-selected="false" class="v-button v-button-large v-button-tertiary" role="tab">
      Label 4
    </button>
  </li>
</ul>

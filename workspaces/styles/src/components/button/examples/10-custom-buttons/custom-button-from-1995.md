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
title: Custom button from 1995
description: Button customized with css variables. 
classes: []
tags: ['custom']
order: 47
---

<style>
  .my-button-1995 { --theme-focus-outline-offset: calc(-1 * var(--size-scalable-4)); --typography-button-medium-font-family: courier; --v-button-default-border-radius: var(--size-rounded-none); --v-button-default-background: #bbb; --v-button-default-foreground: #111; --v-button-default-block-size: var(--size-scalable-28); --v-button-default-padding-block: var(--size-scalable-6); --v-button-default-padding-inline: var(--size-scalable-8); } .my-button-1995:hover { --v-button-default-background: #ccc; --v-button-default-foreground: #000; } .my-button-1995:focus { --v-button-default-background: #ccc; --v-button-default-foreground: #000; } .my-button-1995:active { --v-button-default-background: #999; --v-button-default-foreground: #eee; }
</style>
<button class="v-button my-button-1995" type="button">
  Action
</button>

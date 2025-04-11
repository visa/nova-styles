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
title: Link with custom color states 
description: Clickable card surface with link. 
classes: []
tags: ['custom']
order: 12
---

<style>
  .my-custom-link { --v-link-background: transparent; --v-link-hover-background: var(--palette-messaging-highlight-negative); --v-link-focus-background: var(--palette-messaging-lowlight-negative); --v-link-active-background: var(--palette-messaging-surface-negative); --v-link-foreground: var(--palette-messaging-text-negative); --v-link-hover-foreground: var(--palette-messaging-text-hover-negative); --v-link-focus-foreground: var(--palette-messaging-text-hover-negative); --v-link-active-foreground: var(--palette-messaging-text-pressed-negative); }
</style>
<a class="v-link my-custom-link" href="./link">
  Destination label (red)
</a>

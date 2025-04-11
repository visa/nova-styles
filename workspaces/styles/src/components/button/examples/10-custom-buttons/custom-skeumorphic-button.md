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
title: Custom skeumorphic button
description: Button customized mostly with css variables. 
classes: []
tags: ['custom']
order: 48
---

<style>
  .my-button-skeumorphic { --my-button-background: var(--palette-messaging-highlight-positive); --my-button-foreground: var(--palette-messaging-text-positive); --my-button-elevation: var(--size-scalable-3); --theme-focus-outline-offset: calc(-1 * var(--size-scalable-4)); --typography-button-medium-font-size: 1.25rem; --v-button-default-border-radius: var(--size-scalable-40); --v-button-default-background: var(--my-button-background); --v-button-default-border-size: var(--theme-border-size); --v-button-default-border-color: var(--my-button-foreground); --v-button-default-foreground: var(--my-button-foreground); --v-button-default-block-size: var(--size-scalable-40); --v-button-default-padding-block: var(--size-scalable-12); --v-button-default-padding-inline: var(--size-scalable-16); box-shadow: 0px var(--my-button-elevation) var(--my-button-foreground); position: relative; top: calc(-1 * var(--my-button-elevation)); } .my-button-skeumorphic:hover, .my-button-skeumorphic:focus-visible { --my-button-background:var(--palette-messaging-lowlight-positive); --my-button-foreground: var(--palette-messaging-text-hover-positive); --my-button-elevation: var(--size-scalable-5); } .my-button-skeumorphic:active { --my-button-background: var(--palette-messaging-surface-positive); --my-button-foreground: var(--palette-messaging-text-pressed-positive); --my-button-elevation: var(--size-scalable-1); }
</style>
<button class="v-button my-button-skeumorphic" type="button">
  Action
</button>

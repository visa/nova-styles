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
title: Custom badge
description: Default badge.
classes: ['.v-badge']
tags: ['custom']
order: 58
---

<style>
  .my-badge { --v-badge-background: #d0d6b3; --v-badge-border-radius: 8px; --v-badge-border-width: 2px; --v-badge-border-color: #AAAE7F; --v-badge-foreground: #143109; --v-badge-gap: 4px; --v-badge-icon-color: #768a49; --v-badge-padding-block: 8px; --v-badge-padding-inline: 9px; --typography-label-small-font-size: 1rem; }
</style>
<span class="v-badge my-badge">
  <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
    <use href="#visa-bonus-points-tiny">
    </use>
  </svg>
  Label
</span>

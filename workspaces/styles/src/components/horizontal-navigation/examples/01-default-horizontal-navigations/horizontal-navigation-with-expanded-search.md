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
title: Horizontal navigation with expanded search
description: Horizontal responsive navigation bar with expanded search. Note that while the responsive behavior is provided via container utility classes, you can also modify this to use media-query utility classes. Also note that dropdown expand/collapse behavior needs to be implemented via javascript. For more info, refer to base/breakpoints and components/dropdown documentation.
classes:
  ['.v-nav', '.v-nav-horizontal', '.v-desktop-container-hide', '.v-mobile-container-hide', '.v-xs-container-hide']
tags: ['docs']
order: 4
---

<header class="v-nav v-nav-horizontal v-justify-content-between">
  <div class="v-surface v-flex" style="--v-surface-background: var(--palette-default-surface-3); --v-surface-border-radius: var(--size-rounded-medium); --v-surface-padding-inline: var(--size-scalable-8)">
    <div class="v-input-container v-surface v-flex-row">
      <svg class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24">
        <use href="#visa-search-low"></use>
      </svg>
      <input class="v-input" id="navigation-search-field" name="navigation-search-field" required type="search" aria-label="Search" placeholder="Search" />
    </div>
    <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-large" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-close-low"></use>
      </svg>
  </button>
  </div>
</header>

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
title: Stacked horizontal navigation with expanded search
description: Horizontal responsive navigation bar with logo, application cobranding name, button icons, notifications, expanded search, user menu, and a secondary level for links. Note that while the responsive behavior is provided via container utility classes, you can also modify this to use media-query utility classes. Also note that dropdown expand/collapse behavior needs to be implemented via javascript. For more info, refer to base/breakpoints and components/dropdown documentation.
classes:
  ['.v-nav', '.v-nav-horizontal', '.v-desktop-container-hide', '.v-mobile-container-hide', '.v-xs-container-hide']
tags: ['docs']
order: 6
---

<header class="v-nav v-nav-horizontal v-justify-content-between">
  <button aria-label="open menu" class="v-button v-button-icon v-button-tertiary v-button-large v-desktop-container-hide" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-low" focusable="false" viewbox="0 0 24 24">
      <use href="#visa-menu-low">
      </use>
    </svg>
  </button>

  <div class="v-surface v-flex">
    <div class="v-input-container v-surface v-flex-row">
      <svg class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24">
        <use href="#visa-search-low"></use>
      </svg>
      <input class="v-input" id="navigation-stacked-search-field" name="navigation-stacked-search-field" required type="search" aria-label="Search" placeholder="Search" />
    </div>
    <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-large" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" focusable="false" viewbox="0 0 24 24">
        <use href="#visa-close-low"></use>
      </svg>
    </button>
  </div>

</header>
<nav aria-label="Stacked horizontal with expanded search" class="v-nav v-mobile-container-hide" style="--v-surface-background: var(--palette-default-surface-2); --v-tabs-active-line-padding: var(--size-responsive-10)">
  <ul class="v-tabs v-tabs-horizontal v-gap-8">
    <li class="v-tab">
      <a class="v-button v-button-tertiary v-button-large" href="javascript:window.location.href=window.location.href">
        L2 label 1
      </a>
    </li>
    <li class="v-tab">
      <a class="v-button v-button-tertiary v-button-large" href="javascript:window.location.href=window.location.href">
        L2 label 2
      </a>
    </li>
    <li class="v-tab">
      <a class="v-button v-button-tertiary v-button-large" href="javascript:window.location.href=window.location.href">
        L2 label 3
      </a>
    </li>
  </ul>
</nav>

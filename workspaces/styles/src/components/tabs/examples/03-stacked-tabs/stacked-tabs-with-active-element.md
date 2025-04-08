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
title: Stacked tabs with active element
description: Active stacked tab using an unordered list. Please note that actual tab is the li element with the button clickable element within it and the selected property applies to the inner button via the aria-selected attribute. 
classes: ['.v-tab', 'li[role="none"]']
tags: ['docs']
order: 19
---

<ul class="v-tabs" role="tablist">
  <li class="v-tab" role="none">
    <button aria-describedby="tab-notification-badge-1" aria-selected="true" class="v-button v-button-tertiary v-button-stacked" role="tab">
      <span>
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" viewbox="0 0 24 24">
          <use href="#visa-home-low">
          </use>
        </svg>
        <sup aria-label="3 unread notifications" class="v-badge v-badge-number" id="tab-notification-badge-1">
          3
        </sup>
      </span>
      Label 1
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-describedby="tab-notification-badge-2" aria-selected="false" class="v-button v-button-tertiary v-button-stacked" role="tab">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" viewbox="0 0 24 24">
        <use href="#visa-analytics-low">
        </use>
      </svg>
      <sup aria-label="3 unread notifications" class="v-badge v-badge-number" id="tab-notification-badge-2">
        3
      </sup>
      Label 2
    </button>
  </li>
  <li class="v-tab" role="none">
    <button aria-describedby="tab-notification-badge-3" aria-selected="false" class="v-button v-button-tertiary v-button-stacked" role="tab">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-low" viewbox="0 0 24 24">
        <use href="#visa-transactions-low">
        </use>
      </svg>
      <sup aria-label="3 unread notifications" class="v-badge v-badge-number" id="tab-notification-badge-2">
        3
      </sup>
      Label 3
    </button>
  </li>
</ul>

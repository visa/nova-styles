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
title: Small UI icon button with badge
description: UI Icon icon with badge. 
classes: ['.v-button.v-button-icon.v-button-tertiary']
tags: []
order: 41
---

<button aria-describedby="button-badge-1" class="v-button v-button-icon v-button-tertiary v-button-small" type="button">
  <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
    <use href="#visa-notifications-tiny">
    </use>
  </svg>
  <sup aria-label="9 unread notifications" class="v-badge v-badge-number" id="button-badge-1">
    9
  </sup>
</button>

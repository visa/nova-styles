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
title: Compact removable chip with icon
description: Compact delete chip with a leading Icon.
classes: ['.v-chip', '.v-chip-compact']
tags: []
order: 12
---

<div class="v-chip v-chip-compact v-flex">
  <svg class="v-icon v-icon-visa v-icon-tiny" height="18" viewbox="0 0 16 16" width="18">
    <use href="#visa-account-tiny">
    </use>
  </svg>
  <span>
    Label
  </span>
  <button aria-label="clear" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
    <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-clear-alt-tiny">
      </use>
    </svg>
  </button>
</div>

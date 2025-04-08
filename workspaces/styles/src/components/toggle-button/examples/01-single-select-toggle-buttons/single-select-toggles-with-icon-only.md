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
title: Single-select toggles with icon only
classes: ['.v-toggle-container', '.v-toggle', '.v-toggle-icon']
tags: ['docs']
order: 4
---

<fieldset class="v-toggle-container">
  <button aria-label="Label 1" class="v-toggle v-toggle-icon" aria-pressed="true">
    <svg aria-hidden="true" class="v-icon v-icon-low" focusable="false" height="24" viewbox="0 0 24 24" width="24">
      <use href="#visa-map-location-low">
      </use>
    </svg>
  </button>
  <button aria-label="Label 2" class="v-toggle v-toggle-icon" aria-pressed="false">
    <svg aria-hidden="true" class="v-icon v-icon-low" focusable="false" height="24" viewbox="0 0 24 24" width="24">
      <use href="#visa-view-list-low">
      </use>
    </svg>
  </button>
  <button aria-label="Label 3" class="v-toggle v-toggle-icon" aria-pressed="false">
    <svg aria-hidden="true" class="v-icon v-icon-low" focusable="false" height="24" viewbox="0 0 24 24" width="24">
      <use href="#visa-view-grid-low">
      </use>
    </svg>
  </button>
</fieldset>

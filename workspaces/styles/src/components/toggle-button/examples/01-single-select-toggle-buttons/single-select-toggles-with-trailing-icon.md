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
title: Single-select toggles with trailing icon
classes: ['.v-toggle-container', '.v-toggle']
tags: ['docs']
order: 3
---

<fieldset class="v-toggle-container">
  <button class="v-toggle v-gap-6" aria-pressed="true">
    Label 1
    <svg aria-hidden="true" class="v-icon v-icon-tiny" focusable="false" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-map-location-tiny">
      </use>
    </svg>
  </button>
  <button class="v-toggle v-gap-6" aria-pressed="false">
    Label 2
    <svg aria-hidden="true" class="v-icon v-icon-tiny" focusable="false" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-view-list-tiny">
      </use>
    </svg>
  </button>
  <button class="v-toggle v-gap-6" aria-pressed="false">
    Label 3
    <svg aria-hidden="true" class="v-icon v-icon-tiny" focusable="false" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-view-grid-tiny">
      </use>
    </svg>
  </button>
</fieldset>

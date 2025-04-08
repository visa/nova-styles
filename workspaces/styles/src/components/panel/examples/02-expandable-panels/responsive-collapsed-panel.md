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
title: Responsive collapsed panel
description: Expandable panel in collapse. Note that the position of the container of the panel "v-ml-auto", the inline-size/block-size, and the relative positioning of the toggle button is for demonstration purpose only.
classes: ['.v-panel', '.v-panel-expandable', '.v-panel-content', '.v-panel-toggle']
tags: []
order: 4
---

<div class="v-ml-auto v-panel v-panel-expandable">
  <button aria-expanded="false" aria-label="expand panel" class="v-panel-toggle v-button v-button-large v-button-icon v-ml-auto" style="position: relative" type="button">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-icon-two-color" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-media-rewind-tiny">
      </use>
    </svg>
  </button>
</div>

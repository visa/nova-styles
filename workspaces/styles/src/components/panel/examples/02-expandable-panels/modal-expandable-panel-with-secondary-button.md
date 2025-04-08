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
title: Modal expandable panel with secondary button
description: Expandable panel in collapse. Note that the position of the container of the panel "v-ml-auto", the inline-size/block-size, and the relative positioning of the toggle button is for demonstration purpose only.
classes: ['.v-panel', '.v-panel-expandable', '.v-panel-content', '.v-panel-toggle']
tags: ['iframe']
order: 5
---

<div class="v-ml-auto v-panel v-panel-expandable">
  <button aria-expanded="false" aria-label="collapse panel" class="v-panel-toggle v-button v-button-large v-button-icon v-button-secondary" type="button" onclick="window.modalPanelExpandableWithSecondary.showModal()">
    <svg aria-hidden="true" class="v-icon v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-media-rewind-tiny" />
      </use>
    </svg>
  </button>
</div>
<dialog aria-describedby="modal-panel-description" aria-labelledby="modal-panel-title" aria-modal="true" class="v-panel v-panel-expandable" id="modalPanelExpandableWithSecondary" role="dialog">
  <button aria-expanded="true" aria-label="collapse panel" class="v-panel-toggle v-button v-button-large v-button-icon v-button-secondary" type="button" onclick="window.modalPanelExpandableWithSecondary.close()" autofocus>
    <svg aria-hidden="true" class="v-icon v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-media-fast-forward-tiny" />
      </use>
    </svg>
  </button>
  <div class="v-panel-content v-surface">
    <header class="v-panel-header">
      <h2 class="v-typography-headline-3">
        Panel title
      </h2>
    </header>
    <div class="v-panel-body">
      <h3 class="v-typography-subtitle-2">
        Panel subtitle
      </h3>
      <p>
        This is required text that can be used to describe the panel title and subtitle in more detail.
      </p>
    </div>
  </div>
</dialog>
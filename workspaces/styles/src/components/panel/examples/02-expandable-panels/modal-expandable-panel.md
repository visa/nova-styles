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
title: Modal expandable panel
description: Expandable panel. Note that the position of the container of the panel "v-ml-auto" and the inline-size/block-size is for demonstration purpose only.
classes: ['.v-panel', '.v-panel-expandable', '.v-panel-content', '.v-panel-toggle']
tags: ['iframe']
order: 2
---

<div class="v-ml-auto v-panel v-panel-expandable v-icon-two-color">
  <button aria-expanded="false" aria-label="collapse panel" class="v-panel-toggle v-button v-button-large v-button-icon" type="button" onclick="window.modalPanelExpandable.showModal()">
    <svg aria-hidden="true" class="v-icon v-icon v-icon-visa v-icon-tiny v-icon-two-color" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-media-rewind-tiny" />
      </use>
    </svg>
  </button>
</div>
<dialog aria-describedby="modal-panel-description" aria-labelledby="modal-panel-title" aria-modal="true" class="v-panel v-panel-expandable" id="modalPanelExpandable" role="dialog">
  <button aria-expanded="true" aria-label="collapse panel" class="v-panel-toggle v-button v-button-large v-button-icon" type="button" onclick="window.modalPanelExpandable.close()" autofocus>
    <svg aria-hidden="true" class="v-icon v-icon v-icon-visa v-icon-tiny v-icon-two-color" focusable="false" viewbox="0 0 16 16">
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
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
title: Default responsive panel
description: Modal panel (responsive). Note that the position of the container of the panel "v-ml-auto" and the inline-size/block-size for the panel is for demonstration purpose only.
classes: ['.v-panel', '.v-panel-responsive', '.v-panel-content']
tags: []
order: 1
---

<div class="v-ml-auto v-panel v-panel-responsive">
  <div class="v-panel-content v-surface">
    <header class="v-flex v-flex-row v-justify-content-between v-gap-4">
      <h3 class="v-typography-headline-3">
        Panel title
      </h3>
      <button aria-label="close panel" class="v-button-subtle v-button v-button-icon v-button-tertiary v-button-small -v-mt-3 -v-mr-8" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-close-tiny">
          </use>
        </svg>
      </button>
    </header>
    <div class="v-panel-body">
      <h4 class="v-typography-subtitle-2">
        Panel subtitle
      </h4>
      <p>
        This is required text that can be used to describe the panel title and subtitle in more detail.
      </p>
    </div>
  </div>
</div>

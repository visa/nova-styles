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
title: Combobox with chips
description: Example with an input and chips. 
classes: []
tags: ['custom']
order: 14
---

<style>
  .my-combobox-with-chips { --v-input-padding-block: var(--size-scalable-16); --v-input-hover-indicator-color: var(--palette-default-active-hover); --v-input-hover-indicator-size: 0px; --v-input-focus-indicator-color: var(--palette-default-active); --v-input-focus-indicator-size: 3px; --v-input-active-indicator-color: var(--palette-default-active-pressed); --v-input-active-indicator-size: 0px; --v-input-container-border-radius: var(--size-rounded-pill); --v-input-container-border-width: 0; --v-input-container-padding-inline: var(--size-scalable-12); }
</style>
<div class="v-combobox my-combobox-with-chips v-flex v-flex-col v-flex-grow">
  <label class="v-label" for="combobox-custom-chips" style="line-height: var(--v-input-container-block-size)">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <div class="v-chip v-flex v-flex-shrink-0">
      <span>
        Option A
      </span>
      <button aria-label="clear" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-clear-alt-tiny">
          </use>
        </svg>
      </button>
    </div>
    <div class="v-chip v-flex v-flex-shrink-0">
      <span>
        Option B
      </span>
      <button aria-label="clear" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-clear-alt-tiny">
          </use>
        </svg>
      </button>
    </div>
    <input aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" aria-owns="" autocomplete="off" class="v-input" id="combobox-custom-chips" name="combobox-custom-chips" role="combobox" type="text"/>
    <button aria-label="toggle" class="v-button v-button-icon v-button-tertiary v-button-small" tabindex="-1" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny">
        </use>
      </svg>
    </button>
  </div>
</div>

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
title: Custom selected state and indicator placement
description: Default single select listbox. 
classes: ['.v-listbox']
tags: ['custom']
order: 27
---

<style>
  .my-custom-listbox { --v-listbox-group-gap: 0px; --v-listbox-padding-initial: 0px; --v-listbox-padding: 0px; --v-listbox-container-border-radius: 0px; --v-listbox-container-border-size-initial: 0px; --v-listbox-container-border-size: 0px; --v-listbox-container-margin-block: var(--size-scalable-8); --v-listbox-item-selected-background: var(--palette-default-surface-1); --v-listbox-item-selected-foreground: var(--palette-default-active); --v-listbox-item-padding-block: var(--size-scalable-12); --v-listbox-item-padding-inline: var(--size-scalable-8); --v-listbox-item-border-color: var(--palette-default-border); --v-action-secondary-border-radius: 0px; --v-checkbox-color: var(--palette-default-active); --v-checkbox-hover-color: var(--palette-default-active-hover); --v-checkbox-focus-color: var(--palette-default-active-hover); --v-checkbox-active-color: var(--palette-default-active-pressed); } .my-custom-listbox .v-listbox-item:has(input:checked) { --v-action-secondary-foreground: var(--palette-default-active); --v-label-color: var(--palette-default-active); --v-listbox-checkbox-color: var(--palette-default-active); }
</style>
<fieldset aria-labelledby="single-select-listbox-custom-indicator-legend">
  <legend class="v-label" id="single-select-listbox-custom-indicator-legend">
    Label (required)
  </legend>
  <div class="v-listbox-container my-custom-listbox">
    <div class="v-listbox">
      <label class="v-listbox-item" for="single-select-custom-1">
        <span class="v-label v-typography-label-large">
          Item A
        </span>
        <input class="v-radio v-flex-shrink-0" id="single-select-custom-1" name="custom-example" type="radio"/>
      </label>
      <label class="v-listbox-item" for="single-select-custom-2">
        <span class="v-label v-typography-label-large">
          Item B
        </span>
        <input checked="" class="v-radio v-flex-shrink-0" id="single-select-custom-2" name="custom-example" type="radio"/>
      </label>
      <label class="v-listbox-item" for="single-select-custom-3">
        <span class="v-label v-typography-label-large">
          Item C
        </span>
        <input class="v-radio v-flex-shrink-0" id="single-select-custom-3" name="custom-example" type="radio"/>
      </label>
      <label class="v-listbox-item" for="single-select-custom-4">
        <span class="v-label v-typography-label-large">
          Item D
        </span>
        <input class="v-radio v-flex-shrink-0" id="single-select-custom-4" name="custom-example" type="radio"/>
      </label>
    </div>
  </div>
</fieldset>

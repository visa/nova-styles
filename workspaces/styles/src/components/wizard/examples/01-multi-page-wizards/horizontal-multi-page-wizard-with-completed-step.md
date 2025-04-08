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
title: Horizontal multi-page wizard with completed step
description: Horizontal multi-page wizard with completed step.  
classes: ['.v-wizard']
tags: []
order: 2
---
<div class="v-flex v-flex-col v-gap-16">
  <ol class="v-wizard">
    <li class="v-wizard-step" aria-label="Completed Step 1 of 5">
      <span class="v-badge v-badge-icon v-badge-stable v-badge-clear">
        <svg class="v-icon v-icon-tiny" aria-label="complete" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-checkmark-tiny">
          </use>
        </svg>
      </span>
      Step 1 label
      <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li class="v-wizard-step">
      <button class="v-wizard-step v-button v-button-tertiary v-typography-label-large-active v-typography-color-default" aria-label="Step 2 of 5">
        <span class="v-badge v-badge-icon v-badge-active">
          2
        </span>
        Step 2 label
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </button>
    </li>
    <li class="v-wizard-step" aria-label="Step 3 of 5">
      <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
        3
      </span>
      Step 3 label
      <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li class="v-wizard-step" aria-label="Step 4 of 5">
      <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
        4
      </span>
      Step 4 label
      <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-chevron-right-tiny">
        </use>
      </svg>
    </li>
    <li class="v-wizard-step" aria-label="Step 5 of 5">
      <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
        5
      </span>
      Step 5 label
    </li>
  </ol>
  <div class="v-flex v-flex-col v-gap-4">
    <label class="v-label" for="input-test-default">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
    </div>
  </div>
  <div class="v-flex v-flex-row v-justify-content-between">
    <div class="v-flex v-flex-row v-gap-12">
      <button class="v-button v-button-secondary" type="button">
        Save
      </button>
      <button class="v-button v-button-tertiary" type="button">
        Exit
      </button>
    </div>
    <div class="v-flex v-flex-row v-gap-12">
      <button class="v-button v-button-secondary" type="button">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-arrow-back-tiny">
          </use>
        </svg>
        Back
      </button>
      <button class="v-button v-icon-two-color" type="button">
        Next
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-arrow-forward-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
</div>

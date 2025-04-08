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
title: Multiselect with multiple selections and vertical scroll
description: Default multiselect with text field input and multiple selections that are shown wrapping.
classes: ['.v-label', '.v-input']
tags: ['docs']
order: 7
---

<div class="v-combobox">
  <div class="v-dropdown v-flex v-flex-col v-gap-4" style="max-inline-size: 290px;">
    <label class="v-label" for="multiselect-withwrapping" id="multiselect-withwrapping-label">
      Label (required)
    </label>
    <div class="v-input-container v-surface v-flex-row v-py-3 v-pl-3 v-pr-6">
      <div class="v-flex v-gap-2 v-flex-wrap v-flex-shrink-1 v-flex-grow" style="max-block-size: 140px; overflow-y: auto">
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option A
          </span>
          <button aria-label="remove Option A" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option B
          </span>
          <button aria-label="remove Option B" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option C
          </span>
          <button aria-label="remove Option C" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option D
          </span>
          <button aria-label="remove Option D" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option E
          </span>
          <button aria-label="remove Option E" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option F
          </span>
          <button aria-label="remove Option F" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option G
          </span>
          <button aria-label="remove Option G" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option H
          </span>
          <button aria-label="remove Option H" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option I
          </span>
          <button aria-label="remove Option I" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option J
          </span>
          <button aria-label="remove Option J" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option K
          </span>
          <button aria-label="remove Option K" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <div class="v-chip v-chip-compact v-flex v-flex-shrink-0">
          <span>
            Option L
          </span>
          <button aria-label="remove Option L" class="v-button v-button-icon v-button-tertiary v-button-subtle" type="button">
            <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-clear-alt-tiny">
              </use>
            </svg>
          </button>
        </div>
        <input class="v-input v-flex v-flex-shrink-1" id="multiselect-withwrapping" name="multiselect-withwrapping" required="" style="flex-basis: 50px" type="text"/>
      </div>
      <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="multiselect-withwrapping-label" class="v-button v-button-icon v-button-tertiary v-button-small" type="button" tabindex="-1">
        <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-chevron-down-tiny">
          </use>
        </svg>
      </button>
    </div>
  </div>
</div>

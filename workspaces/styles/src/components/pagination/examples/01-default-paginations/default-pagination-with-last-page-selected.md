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
title: Default pagination with last page selected
description: Use 3 digits sparingly. Avoid page number sets that go above 100.
classes: ['.v-pagination', '.v-pagination-overflow']
tags: ['docs']
order: 2
---

<nav aria-label="3 digit pagination" role="navigation">
  <ul class="v-pagination v-flex v-flex-row v-align-items-center v-gap-4">
    <li class="v-mobile-container-hide">
      <button aria-label="Go to first page" class="v-button v-button-icon v-button-small v-button-tertiary v-mobile-container-hide" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-arrow-start" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-arrow-start-tiny">
          </use>
        </svg>
      </button>
    </li>
    <li>
      <button aria-label="Go to previous page" class="v-button v-button-icon v-button-small v-button-tertiary" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-left" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-left-tiny">
          </use>
        </svg>
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 1" class="v-button v-button-tertiary" type="button">
        1
      </button>
    </li>
    <li class="v-flex v-align-items-center v-pagination-overflow v-mobile-container-hide">
      <svg class="v-icon v-icon-visa v-icon-tiny v-icon-option-horizontal" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-option-horizontal-tiny">
        </use>
      </svg>
    </li>
    <li>
      <button aria-label="Page 96" class="v-button v-button-tertiary" type="button">
        96
      </button>
    </li>
    <li>
      <button aria-label="Page 97" class="v-button v-button-tertiary" type="button">
        97
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 98" class="v-button v-button-tertiary" type="button">
        98
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 99" class="v-button v-button-tertiary" type="button">
        99
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-current="true" aria-label="Page 100" class="v-button v-button-tertiary" type="button">
        100
      </button>
    </li>
    <li>
      <button aria-label="Go to next page" class="v-button v-button-icon v-button-small v-button-tertiary" disabled="" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-right" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Go to last page" class="v-button v-button-icon v-button-small v-button-tertiary v-mobile-container-hide" disabled="" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-arrow-end" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-arrow-end-tiny">
          </use>
        </svg>
      </button>
    </li>
  </ul>
</nav>

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
title: Slim
description: Utilize the Slim version for compact pagination with focus on effective search results on the first few pages. Unit count displays the amount of items on the current page. The number of pages listed may not display total amount of pages that contain the total results. 
classes: ['.v-pagination']
tags: ['docs']
order: 3
---

<nav aria-label="slim pagination" role="navigation">
  <ul class="v-pagination v-flex v-flex-row v-align-items-center v-gap-4">
    <li>
      <button aria-label="Go to previous page" class="v-button v-button-icon v-button-small v-button-tertiary" disabled="" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-left" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-left-tiny">
          </use>
        </svg>
      </button>
    </li>
    <li>
      <button aria-current="true" aria-label="Page 1" class="v-button v-button-tertiary" type="button">
        1
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 2" class="v-button v-button-tertiary" type="button">
        2
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 3" class="v-button v-button-tertiary" type="button">
        3
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 4" class="v-button v-button-tertiary" type="button">
        4
      </button>
    </li>
    <li class="v-mobile-container-hide">
      <button aria-label="Page 5" class="v-button v-button-tertiary" type="button">
        5
      </button>
    </li>
    <li>
      <button aria-label="Go to next page" class="v-button v-button-icon v-button-small v-button-tertiary" type="button">
        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-right" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </button>
    </li>
  </ul>
</nav>

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
title: Native search input
description: Example with an input of type search. 
classes: []
tags: ['custom']
order: 20
---

<div class="v-input-container v-surface v-flex-row">
  <input aria-describedby="input-message-search" class="v-input" id="input-search" name="search-input-field" type="search" aria-label="Search" />
  <button aria-label="action" class="v-button v-button-icon v-button-tertiary v-button-small" type="button">
    <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-search-tiny"></use>
    </svg>
  </button>
</div>
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
title: Disabled clickable content card as a link
description: Clickable card with disabled state. 
classes: ['a[role="link"][aria-disabled="true"].v-content-card']
tags: ['custom']
order: 10
---

<a aria-disabled="true" class="v-content-card v-flex-col" role="link">
  <div class="v-content-card-body v-flex v-flex-col v-gap-4 v-align-items-start">
    <h3 class="v-content-card-title v-typography-headline-4">
      Headline
      <svg class="v-icon v-icon-tiny" height="17" viewbox="0 0 16 17" width="16">
        <use href="#visa-security-lock-tiny">
        </use>
      </svg>
    </h3>
    <h4 class="v-content-card-subtitle v-typography-subtitle-3">
      Subtitle
    </h4>
    <p class="v-typography-body-2 v-pt-4">
      This is optional text that describes the headline in more detail.
    </p>
  </div>
</a>

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
title: Clickable content card as a link
description: Clickable content card. 
classes: ['a.v-content-card']
tags: ['custom']
order: 9
---

<a class="v-content-card v-flex-col" href="javascript:window.location.href=window.location.href">
  <span class="v-content-card-body v-flex v-flex-col v-gap-4 v-align-items-start">
    <span class="v-content-card-title v-typography-headline-4 v-content-card-title-link v-flex v-align-items-center">
      Headline
      <svg class="v-icon v-icon-tiny v-icon-move" height="16" viewbox="0 0 16 16" width="16">
        <use href="#visa-chevron-link-tiny">
        </use>
      </svg>
    </span>
    <span class="v-content-card-subtitle v-typography-subtitle-3">
      Subtitle
    </span>
    <span class="v-typography-body-2 v-pt-4">
      This is optional text that describes the headline in more detail.
    </span>
  </span>
</a>

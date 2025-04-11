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
title: Content card with icon
description: card with icon. 
classes: []
tags: ['docs']
order: 6
---

<div class="v-content-card">
  <div class="v-content-card-body v-flex v-flex-col v-gap-4">
    <div class="v-flex v-pb-12">
      <svg class="v-icon v-icon-visa v-icon-high" height="48" viewbox="0 0 48 48" width="48">
        <use href="#visa-security-lock-high">
        </use>
      </svg>
    </div>
    <h3 class="v-content-card-title v-typography-headline-4">
      Headline
    </h3>
    <hr aria-hidden="true" class="v-divider v-card-divider"/>
    <p class="v-pt-4">
      This is optional text that describes the headline and subtitle in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-12 v-pt-12 v-align-items-center">
      <a class="v-link v-link-no-underline v-align-items-center" href="./content-card" style="--v-link-icon-transformation: none;">
        Destination label
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-link-tiny">
          </use>
        </svg>
      </a>
    </div>
  </div>
</div>

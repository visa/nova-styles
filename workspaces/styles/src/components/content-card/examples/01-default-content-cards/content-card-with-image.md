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
title: Content card with image
description: card with image. 
classes: ['.v-content-card-image']
tags: ['docs']
order: 7
---

<div class="v-content-card" style="inline-size:50%">
   <img class="v-content-card-image" src="https://productdesignsystem.visa.com/angular/assets/imgs/content-card.png" alt="" style="inline-size: 100%; block-size: auto; object-fit: contain; overflow: hidden">
  </img>
  <div class="v-content-card-body v-flex v-flex-col v-gap-4">
    <h3 class="v-content-card-title v-typography-headline-4">
      Headline
    </h3>
    <h4 class="v-content-card-subtitle v-typography-subtitle-3">
      Subtitle
    </h4>
    <p class="v-pt-4">
      This is optional text that describes the headline and subtitle in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-12 v-pt-12 v-align-items-center">
      <button class="v-button" type="button">
        Primary action
      </button>
      <a class="v-link v-link-no-underline v-align-items-center" href="javascript:window.location.href=window.location.href" style="--v-link-icon-transformation: none;">
        Destination label
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-link-tiny">
          </use>
        </svg>
      </a>
    </div>
  </div>
</div>

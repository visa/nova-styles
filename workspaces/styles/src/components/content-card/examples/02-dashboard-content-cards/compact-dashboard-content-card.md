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
title: Compact dashboard content card
description: card with image. 
classes: []
tags: ['docs']
order: 8
---

<div class="v-content-card">
  <div class="v-content-card-body v-flex v-flex-col v-gap-4">
    <div class="v-flex v-flex-row v-align-items-center v-justify-content-between">
      <h3 class="v-content-card-title v-typography-headline-4">
        <span class="v-align-self-end">
          Headline
        </span>
      </h3>
      <div class="v-flex v-align-items-center v-gap-8">
        <button aria-label="Export headline" class="v-button v-button-icon v-button-small v-button-tertiary">
          <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 17" width="16">
            <use href="#visa-share-tiny">
            </use>
          </svg>
        </button>
        <button aria-label="Favorite headline" class="v-button v-button-icon v-button-small v-button-tertiary">
          <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
            <use href="#visa-favorite-star-outline-tiny">
            </use>
          </svg>
        </button>
      </div>
    </div>
    <p class="v-pt-4">
      This is optional text that describes the headline and subtitle in more detail.
    </p>
    <div class="v-flex v-flex-wrap v-gap-12 v-pt-12 v-align-items-center">
      <span class="v-typography-display-2" style="color: var(--palette-messaging-text-positive)">
        0,000
      </span>
      <div class="v-flex v-flex-col v-gap-4 v-align-items-center v-align-content-end v-mt-8">
        <svg aria-label="increasing trend" class="v-icon v-icon-tiny v-icon-arrow-up" viewbox="0 0 16 16">
          <use href="#visa-arrow-up-tiny">
          </use>
        </svg>
        Label
      </div>
    </div>
  </div>
</div>

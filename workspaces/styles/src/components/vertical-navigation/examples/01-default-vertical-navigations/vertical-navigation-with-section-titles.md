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
title: Vertical navigation with section titles
description: Vertical navigation with section titles.
classes: ['.v-nav-vertical', 'v-tab-section-title']
tags: ['docs']
order: 4
---

<header class="v-nav v-nav-vertical" style="max-inline-size: 242px; block-size: 740px">
  <a class="v-link v-skip-link" href="javascript:window.location.href=window.location.href">Skip to content</a>
  <a aria-label="VISA Application Name Home" class="v-link v-link-no-underline v-flex v-flex-col v-mt-16 v-mb-30 v-ml-24 v-mr-14 v-gap-12" href="./nav" style="background-color: transparent">
    <svg class="v-flex v-flex-shrink-0 v-logo" fill="none" height="23" viewbox="0 0 71 23" width="71">
      <path clip-rule="evenodd" d="M50.6986 15.3377C50.7123 11.8369 47.8134 10.3152 45.4937 9.09755C43.9358 8.27981 42.6393 7.59921 42.6617 6.54843C42.6781 5.75329 43.4371 4.90557 45.0931 4.692C47.0325 4.5045 48.9864 4.8451 50.7479 5.67771L51.7566 0.985714C50.0419 0.341244 48.2261 0.00745647 46.3943 0C40.7429 0 36.7376 3.013 36.7014 7.33043C36.6653 10.5143 39.5501 12.3017 41.7286 13.363C43.9629 14.4473 44.7153 15.1439 44.7054 16.1164C44.7054 17.6049 42.9213 18.2587 41.2751 18.285C38.4794 18.3296 36.8224 17.5564 35.5085 16.9434L35.3839 16.8853L34.3357 21.7416C35.6763 22.3593 38.1504 22.8949 40.7166 22.9211C46.7393 22.9211 50.6821 19.9443 50.7019 15.3377H50.6986ZM26.9429 0.404143L17.6541 22.5729H11.592L7.02157 4.88257C6.74229 3.79171 6.50243 3.39414 5.658 2.93414C4.27143 2.18829 2.00429 1.48514 0 1.04814L0.138 0.391H9.89329C11.2059 0.396383 12.3201 1.35458 12.5219 2.65157L14.9369 15.4823L20.9234 0.404143H26.9429ZM70.9714 22.5663H65.6683L64.975 19.2641H57.6183L56.4223 22.5729H50.4029L59.0016 2.03057C59.409 1.04254 60.3741 0.399575 61.4429 0.404143H66.3419L70.9714 22.5663ZM59.2677 14.72L62.2873 6.394L64.0254 14.72H59.2677ZM30.3994 22.5729L35.1571 0.404143H29.4071L24.6626 22.5729H30.3994Z" fill-rule="evenodd">
      </path>
    </svg>
    <div class="v-typography-subtitle-1 v-nav-app-name">
      Application Name
    </div>
  </a>
  <nav aria-label="Vertical with section titles">
    <ul class="v-tabs v-tabs-vertical">
      <li class="v-tab v-tab-section-title">
        Section Title 1
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 1
        </a>
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 2
        </a>
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 3
        </a>
      </li>
      <li class="v-tab v-tab-section-title">
        Section Title 2
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 4
        </a>
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 5
        </a>
      </li>
      <li class="v-tab">
        <a class="v-button v-button-tertiary" href="javascript:window.location.href=window.location.href">
          L1 label 6
        </a>
      </li>
    </ul>
  </nav>
  <div class="v-flex v-flex-col v-align-self-stretch v-gap-4 v-mt-auto">
    <hr class="v-divider v-divider-decorative v-my-6"/>
    <div class="v-tab">
      <button aria-label="Alex Miller" class="v-button v-button-large v-button-tertiary">
        <svg aria-hidden="true" class="v-avatar v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
          <use href="#visa-account-tiny">
          </use>
        </svg>
        Alex Miller
      </button>
    </div>
    <button aria-expanded="true" aria-label="side bar" class="v-button v-button-small v-button-icon v-button-tertiary v-button-subtle v-ml-auto v-mr-8" type="button">
      <svg aria-hidden="true" class="v-icon v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-media-rewind-tiny">
        </use>
      </svg>
    </button>
  </div>
</header>

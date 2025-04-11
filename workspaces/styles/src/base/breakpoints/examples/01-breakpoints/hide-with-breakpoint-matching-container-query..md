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
title: Hide with breakpoint-matching container query. 
description: Classes to hide element on specific breakpoint-matching container queries. Resize your screen to see it in action.
classes: ['.v-xs-container-hide', '.v-sm-container-hide', '.v-md-container-hide', '.v-lg-container-hide', '.v-xl-container-hide', '.v-xxl-container-hide', '.v-mobile-container-hide', '.v-desktop-container-hide']
tags: []
order: 1
---

<div class="v-flex v-flex-row v-gap-8 v-flex-wrap" style="container-type: inline-size">
  <div class="v-avatar v-xs-container-hide" style="--v-avatar-background: #e50000">
    XS
  </div>
  <div class="v-avatar v-sm-container-hide" style="--v-avatar-background: orange; --v-avatar-foreground: black">
    SM
  </div>
  <div class="v-avatar v-md-container-hide" style="--v-avatar-background: yellow; --v-avatar-foreground: black">
    MD
  </div>
  <div class="v-avatar v-lg-container-hide" style="--v-avatar-background: green">
    LG
  </div>
  <div class="v-avatar v-xl-container-hide" style="--v-avatar-background: blue">
    XL
  </div>
  <div class="v-avatar v-xxl-container-hide" style="--v-avatar-background: purple">
    XXL
  </div>
  <div class="v-avatar v-mobile-container-hide">
    <svg aria-label="Showing a laptop to indicate we're on a desktop-sized container" class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24">
      <use href="#visa-device-laptop-low">
      </use>
    </svg>
  </div>
  <div class="v-avatar v-desktop-container-hide">
    <svg aria-label="Showing a mobile device to indicate we're on a mobile-sized container" class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24">
      <use href="#visa-device-mobile-low">
      </use>
    </svg>
  </div>
</div>

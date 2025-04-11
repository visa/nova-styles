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
title: Default color selector
description: Example with an input of type color. Tooltip must be triggered via Javascript or a third-party tool.
classes: ['.v-input[type="color"]']
tags: ['docs']
order: 1
---
<!-- Tooltip is hidden by default. In order to be visible, the tooltip must be triggered via Javascript or a third-party tool. -->
<div class="v-flex v-gap-6 v-align-items-center v-flex-wrap">
  <input 
    class="v-flex v-input v-flex-grow-0"
    type="color"
    id="default-color-selector-input"
    aria-describedby="default-a11y-color-tooltip"
  />
  <label class="v-label" for="default-color-selector-input">Label</label>
  <button 
    class="v-button v-button-icon v-button-small v-button-tertiary"
    type="button" 
    aria-label="Color selector accessibility information"
    aria-describedby="default-a11y-color-tooltip" >
    <svg class="v-icon v-icon-visa v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
      <use href="#visa-accessibility-tiny"></use></svg>
  </button>
  <span class="v-tooltip v-surface v-sr" id="default-a11y-color-tooltip">For RGB, use values between 0–255. For HSL, use H values between 0–359, S and L values between 0–100%. For hex use the format #RRGGBB and values between 0–9 or A–F.</span>
</div>
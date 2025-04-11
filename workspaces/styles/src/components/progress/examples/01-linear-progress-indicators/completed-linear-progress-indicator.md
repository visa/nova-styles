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
title: Completed linear progress indicator
description: Completed Determinate progress bar. 
classes: ['.v-progress', '.v-progress-bar', '.v-progress-complete', '.v-progress-label']
tags: ['docs']
order: 4
---

<progress class="v-progress v-progress-bar v-progress-complete v-mb-8" id="progress-bar-complete" max="100" value="100">
</progress>
<label class="v-progress-label" for="progress-bar-complete">
  <span class="v-flex v-gap-4">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-success-tiny">
      </use>
    </svg>
    File is now uploaded
  </span>
  <span>
    100%
  </span>
</label>

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
title: Slower indeterminate circular progress indicator
description: Smaller indeterminate circular progress spinner. Note that to meet WCAG2.1 SC 2.2.2, we use a pause/play button to stop the animation on demand. 
classes: ['.v-progress', '.v-progress-circular', '.v-progress-circular-track', '.v-progress-circular-background', '.v-progress-circular-foreground', '.v-progress-indeterminate', '.v-progress-circular-small']
tags: ['animation', 'custom']
order: 14
---

<style>
  .slower-progress { --v-progress-animation-factor: 2; }
</style>
<div aria-label="small progress spinner" class="v-progress v-progress-circular v-progress-indeterminate v-progress-circular-small slower-progress" role="progressbar">
  <svg class="v-progress-circular-track">
    <circle class="v-progress-circular-background">
    </circle>
    <circle class="v-progress-circular-bar">
    </circle>
  </svg>
</div>

<!--
 *              Copyright (c) 2025 Visa, Inc.
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
title: Small determinate circular progress indicator
description: Small determinate circular progress bar. 
classes: ['.v-progress', '.v-progress-circular', '.v-progress-circular-track', '.v-progress-circular-background', '.v-progress-circular-foreground', '.v-progress-circular-small', '.v-progress-label']
tags: ['docs']
order: 8
---

<div aria-labelledby="progress-percentage-5" class="v-progress v-progress-circular v-progress-circular-small" role="progressbar">
  <svg class="v-progress-circular-track">
    <circle class="v-progress-circular-background" cx="24" cy="24" r="22">
    </circle>
    <circle class="v-progress-circular-bar" cx="24" cy="24" r="22" style="stroke-dasharray: 125.664, 125.664; stroke-dashoffset: 35.1858;">
    </circle>
  </svg>
  <div class="v-progress-label v-typography-body-2-bold" id="progress-percentage-5">
    72%
  </div>
</div>

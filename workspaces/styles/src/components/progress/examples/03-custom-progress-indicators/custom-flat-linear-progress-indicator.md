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
title: Custom flat linear progress indicator
description: This type of progress style could be used for an app-level loading animation 
classes: ['.v-input-message', '.v-input-error']
tags: ['animation', 'custom']
order: 12
---

<style>
  .my-progress { --v-progress-bar-border-radius: 0px; --v-progress-bar-background-color: #0099ff11; --v-progress-bar-foreground-color: #0099ff; --v-progress-bar-thickness: 6px; }
</style>
<progress class="v-progress v-progress-bar my-progress" role="presentation">
</progress>

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
title: Padding Inherit
description: Inherits padding from parent value. [inherit]
classes: ['.v-p-inherit', '.v-pt-inherit', '.v-pb-inherit', '.v-pl-inherit', '.v-pr-inherit', '.v-py-inherit', '.v-px-inherit']
tags: []
order: 20
---

<div class="v-flex">
  <div class="v-pt-24" style="text-align: center; border: 1px dashed var(--palette-default-active-subtle); background: var(--palette-default-surface-highlight);">
    Parent with top padding
    <div class="v-surface v-pt-inherit" style="border: 1px dashed var(--palette-default-active-subtle); border-inline: 0; border-block-end: 0">
      Child inherits padding from parent
    </div>
  </div>
</div>

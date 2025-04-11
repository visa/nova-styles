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
title: Margin Inherit
description: Inherits margin from parent value. [inherit]
classes: ['.v-m-inherit', '.v-mt-inherit', '.v-mb-inherit', '.v-ml-inherit', '.v-mr-inherit', '.v-my-inherit', '.v-mx-inherit']
tags: []
order: 12
---

<div class="v-flex">
  <div style="background: var(--palette-default-surface-highlight);">
    <div class="v-mt-24" style="text-align: center; border: 1px dashed var(--palette-default-active-subtle); background: var(--palette-messaging-highlight-positive);">
      <p>Parent with top margin</p>
      <div class="v-surface v-mt-inherit content-card" style="border: 1px dashed var(--palette-default-active-subtle); border-inline: 0; border-block-end: 0">
        Child inherits top margin from parent
      </div>
    </div>
  </div>
</div>

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

title: Custom chip
description: Custom chip
classes: ['.v-chip']
tags: ['custom']
order: 18

---

<style>
  .my-custom-chip { --v-chip-background-color: #eacffa; --v-chip-border-color: #c58cf5; --v-chip-border-width: 2px; --v-chip-border-radius: var(--size-rounded-small); --v-chip-gap: var(--size-scalable-6); --v-chip-padding-block: var(--size-scalable-4); --v-chip-padding-inline-end: var(--size-scalable-6); --v-chip-padding-inline-start: var(--size-scalable-6); }
</style>
<div class="v-chip my-custom-chip">
  <img alt="Alex Miller" class="v-avatar" src="/alex-miller-stock.png"/>
  <span>
    Label
  </span>
</div>

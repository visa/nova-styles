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
title: Link with custom typography
description: Clickable card surface with link.
classes: []
tags: ['custom']
order: 11
---

<style>
  .my-custom-link { --typography-text-decoration: unset }
</style>
<a class="v-link v-typography-headline-3 my-custom-link" href="./link">
  Destination label (headline 3)
</a>

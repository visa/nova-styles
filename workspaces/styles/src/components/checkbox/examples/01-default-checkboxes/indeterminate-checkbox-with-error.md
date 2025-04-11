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
title: Indeterminate checkbox with error
description: Checkbox with aria-invalid="true" and aria-checked="mixed" attributes.
classes: ['.v-checkbox[aria-invalid="true"][aria-checked="mixed"]']
tags: []
order: 11
---

<div class="v-flex v-align-items-center v-gap-2">
  <input aria-checked="mixed" aria-invalid="true" class="v-checkbox" id="checkbox-error-indeterminate" type="checkbox"/>
  <label class="v-label v-typography-label-large" for="checkbox-error-indeterminate">
    Label
  </label>
</div>

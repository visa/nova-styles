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
title: Switch with description
description: switch with more description.
classes: ['.v-switch', '.v-switch-label']
tags: ['docs']
order: 1
---

<div class="v-flex v-gap-10 v-justify-content-between v-m-8" style="max-inline-size: 288px">
  <div class="v-flex v-flex-col v-gap-2 v-mt-2 v-flex-shrink-1">
    <label class="v-switch-label v-label-large" for="switch-control-4">
      Label
    </label>
    <span class="v-input-message v-typography-body-3" id="switch-message-1" subtle>
      This is optional text that can be used to describe the label in more detail.
    </span>
  </div>
  <input aria-describedby="switch-message-1" class="v-switch" id="switch-control-4" name="default-switch" role="switch" type="checkbox"/>
</div>

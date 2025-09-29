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

title: Leading icon with background list item
description: Leading icon with background list item.
classes: []
tags: ["docs"]
order: 5

---

<ul style="max-inline-size: 343px;">
    <li class="v-surface v-px-8 v-py-6 v-flex v-align-items-center v-gap-8 v-typography-label-large" style="min-block-size: 64px">
        <div class="v-flex v-p-8" style="background-color: var(--palette-default-surface-3); border-radius: 4px">
            <svg class="v-icon v-icon-low" height="24" viewbox="0 0 24 24" width="24" style="color: var(--palette-default-text-subtle); --v-icon-primary: currentColor; --v-icon-secondary: currentColor;">
                <use href="#visa-account-low">
                </use>
            </svg>
        </div>
        <span>Item label</span>
    </li>
</ul>

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

title: Default list with section title and hyperlink
description: Default list with section title and hyperlink.
classes: []
tags: ["docs"]
order: 28

---

<section aria-label="Section title" style="max-inline-size: 343px;">
    <div class="v-flex v-align-items-center v-justify-content-between v-typography-label v-mb-6">
        <div>Section title</div>
        <a class="v-link v-link-no-underline v-typography-label" href="./list-item">
        Hyperlink
            <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
                <use href="#visa-chevron-right-tiny">
                </use>
            </svg>
        </a>
    </div>
    <ul class="v-content-card v-p-4" style="--v-content-card-border: 0px;  --v-content-card-border-radius: 8px;">
        <li class="v-surface v-px-8 v-py-6 v-flex v-align-items-center v-justify-content-between v-typography-label-large" style="min-block-size: 64px">
            <span>Item A label 1</span>
            <span>Item A label 2</span>
        </li>
        <li class="v-surface v-px-8 v-py-6 v-flex v-align-items-center v-justify-content-between v-typography-label-large" style="min-block-size: 64px">
            <span>Item B label 1</span>
            <span>Item B label 2</span>
        </li>
        <li class="v-surface v-px-8 v-py-6 v-flex v-align-items-center v-justify-content-between v-typography-label-large" style="min-block-size: 64px">
            <span>Item C label 1</span>
            <span>Item C label 2</span>
        </li>
        <li class="v-surface v-px-8 v-py-6 v-flex v-align-items-center v-justify-content-between v-typography-label-large" style="min-block-size: 64px">
            <span>Item D label 1</span>
            <span>Item D label 2</span>
        </li>
    </ul>
</section>

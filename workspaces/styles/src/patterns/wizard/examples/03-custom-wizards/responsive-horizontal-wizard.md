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

title: Responsive horizontal wizard
description: The compact wizard example is visible when the example container width is mobile width or smaller. At greater than mobile width, the default horizontal wizard will render.
classes: ['.v-wizard', '.v-wizard-compact', '.v-wizard-step']
tags: ['docs', 'patterns']
order: 11

---

<div class="v-flex v-flex-col v-gap-40 v-align-items-center" style="container-type: inline-size">
  <nav aria-label="Responsive horizontal wizard - mobile" class="v-desktop-container-hide" style="inline-size: 100%">
    <ol class="v-wizard v-wizard-compact v-justify-content-center v-desktop-container-hide">
      <li aria-current="step" class="v-wizard-step" aria-label="Step 1 of 5">
        <div aria-label="Label for step 1" class="v-badge v-badge-icon v-badge-active v-typography-label-active">
          1
        </div>
      </li>
      <li class="v-wizard-step" aria-label="Step 2 of 5">
        <div aria-label="Label for step 2" class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-typography-label">
        2
        </div>
      </li>
      <li class="v-wizard-step" aria-label="Step 3 of 5">
        <div aria-label="Label for step 3" class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-typography-label">
        3
        </div>
      </li>
      <li class="v-wizard-step" aria-label="Step 4 of 5">
        <div aria-label="Label for step 4" class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-typography-label">
        4
        </div>
      </li>
      <li class="v-wizard-step" aria-label="Step 5 of 5">
        <div aria-label="Label for step 5" class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-typography-label">
        5
        </div>
      </li>
    </ol>
  </nav>
  <nav aria-label="Responsive horizontal wizard - desktop" class="v-xs-container-hide v-sm-container-hide" class="v-flex v-justify-content-center" style="inline-size: 100%">
    <ol class="v-wizard v-justify-content-center v-sm-container-hide v-xs-container-hide">
      <li class="v-wizard-step">
        <button class="v-button v-button-tertiary v-typography-label-large-active v-typography-color-default" aria-label="Step 1 of 5">
          <div class="v-flex v-gap-8">
            <span class="v-badge v-badge-icon v-badge-active">
              1
            </span>
            <span>Step 1 label</span>
          </div>
          <svg class="v-icon v-icon-tiny v-typography-color-subtle" height="16" viewbox="0 0 16 16" width="16">
            <use href="#visa-chevron-right-tiny">
            </use>
          </svg>
        </button>
      </li>
      <li class="v-wizard-step" aria-label="Step 2 of 5">
        <div class="v-flex v-gap-8">
          <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
            2
          </span>
          <span>Step 2 label</span>
        </div>
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </li>
      <li class="v-wizard-step" aria-label="Step 3 of 5">
        <div class="v-flex v-gap-8">
          <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
            3
          </span>
          <span>Step 3 label</span>
        </div>
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </li>
      <li class="v-wizard-step" aria-label="Step 4 of 5">
        <div class="v-flex v-gap-8">
          <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
            4
          </span>
        <span>Step 4 label</span>
        </div>
        <svg class="v-icon v-icon-tiny" height="16" viewbox="0 0 16 16" width="16">
          <use href="#visa-chevron-right-tiny">
          </use>
        </svg>
      </li>
      <li class="v-wizard-step" aria-label="Step 5 of 5">
        <div class="v-flex v-gap-8">
          <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
            5
          </span>
          <span>Step 5 label</span>
        </div>
      </li>
    </ol>
  </nav>
  <div style="max-inline-size: 603px; inline-size: 100%">
    <div class="v-content-card v-flex v-flex-col v-gap-24 v-p-48" style="box-shadow: none">
      <div class="v-flex v-flex-col v-gap-8">
        <span class="v-typography-headline-2">Step 1 label</span>
        <span class="v-typography-body-1">* Indicates a required field.</span>
      </div>
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-compact">
          * Label
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-compact" name="text-input-compact" type="text"/>
        </div>
      </div>
    </div>
    <div class="v-mt-10 v-typography-body-3">Changes have been automatically saved.</div>
    <div class="v-xs-container-hide">
    <div class="v-flex v-flex-wrap v-gap-24 v-justify-content-between v-mt-40">
      <div class="v-flex v-flex-row v-gap-16">
        <button class="v-button v-button-secondary" type="button">
          Save
        </button>
        <button class="v-button v-button-tertiary" type="button">
          Exit
        </button>
      </div>
      <div class="v-flex v-flex-wrap v-gap-24 v-justify-content-end">
        <button class="v-button v-icon-two-color" type="button">
          Next
          <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
            <use href="#visa-arrow-forward-tiny">
            </use>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="v-sm-container-hide v-flex v-flex-col v-gap-16 v-desktop-container-hide v-mt-40" style="container-type: inline-size">
    <button class="v-button v-button-secondary" type="button">
      Save
    </button>
    <button class="v-button v-button-tertiary" type="button">
      Exit
    </button>
    <button class="v-button v-icon-two-color" type="button">
      Next
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-arrow-forward-tiny">
        </use>
      </svg>
    </button>
  </div>
</div>

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

title: Vertical multi-page wizard with error step
description: Vertical multi-page wizard with error step.
classes: ['.v-wizard', '.v-wizard-vertical', '.v-wizard-step']
tags: ['patterns']
order: 6

---

<div class="v-flex v-flex-row v-gap-40 v-flex-wrap" style="margin: 0 auto; max-inline-size: 878px">
  <nav aria-label="Vertical multi-page wizard with error step" style="max-inline-size: 235px; inline-size: 100%">
    <ol class="v-wizard v-wizard-vertical">
      <li class="v-wizard-step">
        <button class="v-button v-button-tertiary v-typography-label-large-active v-typography-color-default" aria-label="Error Step 1 of 5">
          <span class="v-badge v-badge-icon v-badge-critical">
            <svg class="v-icon v-icon-tiny" aria-label="error" height="16" viewbox="0 0 16 16" width="16">
              <use href="#visa-error-alt-tiny">
              </use>
            </svg>
          </span>
          Step 1 label
        </button>
      </li>
      <li class="v-wizard-step" aria-label="Step 2 of 5">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
          2
        </span>
        Step 2 label
      </li>
      <li class="v-wizard-step" aria-label="Step 3 of 5">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
          3
        </span>
        Step 3 label
      </li>
      <li class="v-wizard-step" aria-label="Step 4 of 5">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
          4
        </span>
        Step 4 label
      </li>
      <li class="v-wizard-step" aria-label="Step 5 of 5">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle">
          5
        </span>
        Step 5 label
      </li>
    </ol>
  </nav>
  <div class="v-flex-grow" style="max-inline-size: 603px;">
    <div class="v-content-card v-flex v-flex-col v-gap-24 v-p-48" style="box-shadow: none">
      <div class="v-flex v-flex-col v-gap-16">
        <span class="v-typography-headline-2">Step 1 label</span>
        <span class="v-message v-message-error v-section">
          <svg aria-hidden="false" aria-label="Error" class="v-icon v-icon-visa v-icon-low v-message-icon" focusable="false" viewbox="0 0 24 24">
            <use href="#visa-error-low">
            </use>
          </svg>
          <span class="v-message-content v-pl-2 v-pb-2">
            <p>
              One or more required fields are missing. Complete all required fields to continue.
            </p>
          </span>
          <button aria-label="close" class="v-button v-button-icon v-button-tertiary v-button-small v-button-subtle -v-mt-8 -v-mr-8 v-ml-14 v-p-7" type="button">
            <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
              <use href="#visa-close-tiny">
              </use>
            </svg>
          </button>
        </span>
        <span class="v-typography-body-1">* Indicates a required field.</span>
      </div>
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-vertical-error">
          * Label
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input aria-describedby="input-message-test-vertical-error" aria-invalid="true" class="v-input" id="input-test-vertical-error" name="text-input-vertical-error" type="text"/>
        </div>
        <span class="v-input-message" id="input-message-test-vertical-error">
          <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
            <use href="#visa-error-tiny">
            </use>
          </svg>
          This is a required field.
        </span>
      </div>
    </div>
    <div class="v-mt-10 v-typography-body-3">Changes have been automatically saved.</div>
      <div class="v-flex v-flex-row v-justify-content-between v-mt-40 v-gap-10 v-flex-wrap">
        <div class="v-flex v-flex-row v-gap-16">
          <button class="v-button v-button-secondary" type="button">
            Save
          </button>
          <button class="v-button v-button-tertiary" type="button">
            Exit
          </button>
        </div>
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
</div>

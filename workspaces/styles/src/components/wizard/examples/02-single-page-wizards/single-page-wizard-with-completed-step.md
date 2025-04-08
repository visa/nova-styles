<!--
 *              Copyright (c) 2025 Visa, Inc.
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
title: Single-page wizard with completed step
description: Wizard with completed step using accordion for form completion in the same page.
classes: []
tags: ["docs"]
order: 8
---

<div class="v-wizard v-flex v-flex-col v-gap-16">
  <details class="v-accordion v-wizard-step" aria-label="Completed Step 1 of 5">
    <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between">
      <div class="v-flex v-align-items-center v-gap-6">
        <span class="v-badge v-badge-icon v-badge-stable v-badge-clear">
          <svg class="v-icon v-icon-tiny" aria-label="complete" height="16" viewbox="0 0 16 16" width="16">
            <use href="#visa-checkmark-tiny"></use></svg>
        </span>
        Step 1 label
      </div>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use></svg>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-down-tiny"></use></svg>
    </summary>
    <div class="v-accordion-panel v-flex v-flex-col v-gap-16">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-default">
          Label (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
        </div>
      </div>
      <div class="v-flex v-flex-row v-justify-content-between">
        <div class="v-flex v-flex-row v-gap-12">
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
            <use href="#visa-arrow-right-tiny"></use></svg>
        </button>
      </div>
    </div>
  </details>
  <details class="v-accordion v-wizard-step" open aria-label="Step 2 of 5">
    <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between">
      <div class="v-flex v-align-items-center v-gap-6">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-accordion-toggle-icon v-accordion-toggle-icon-closed v-m-auto">
          2
        </span>
        <span class="v-badge v-badge-icon v-badge-active v-accordion-toggle-icon v-accordion-toggle-icon-open v-m-auto">
          2
        </span>
        Step 2 label
      </div>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use></svg>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny"></use></svg>
    </summary>
    <div class="v-accordion-panel v-flex v-flex-col v-gap-16">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-default">
          Label (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
        </div>
      </div>
      <div class="v-flex v-flex-row v-justify-content-between">
        <div class="v-flex v-flex-row v-gap-12">
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
            <use href="#visa-arrow-right-tiny"></use></svg>
        </button>
      </div>
    </div>
  </details>
  <details class="v-accordion v-wizard-step" aria-label="Step 3 of 5">
    <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between">
      <div class="v-flex v-align-items-center v-gap-6">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-accordion-toggle-icon v-accordion-toggle-icon-closed v-m-auto">
          3
        </span>
        <span class="v-badge v-badge-icon v-badge-active v-accordion-toggle-icon v-accordion-toggle-icon-open v-m-auto">
          3
        </span>
        Step 3 label
      </div>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use></svg>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny"></use></svg>
    </summary>
    <div class="v-accordion-panel v-flex v-flex-col v-gap-16">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-default">
          Label (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
        </div>
      </div>
      <div class="v-flex v-flex-row v-justify-content-between">
        <div class="v-flex v-flex-row v-gap-12">
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
            <use href="#visa-arrow-right-tiny"></use></svg>
        </button>
      </div>
    </div>
  </details>
  <details class="v-accordion v-wizard-step" aria-label="Step 4 of 5">
    <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between">
      <div class="v-flex v-align-items-center v-gap-6">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-accordion-toggle-icon v-accordion-toggle-icon-closed v-m-auto">
          4
        </span>
        <span class="v-badge v-badge-icon v-badge-active v-accordion-toggle-icon v-accordion-toggle-icon-open v-m-auto">
          4
        </span>
        Step 4 label
      </div>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use></svg>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny"></use></svg>
    </summary>
    <div class="v-accordion-panel v-flex v-flex-col v-gap-16">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-default">
          Label (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
        </div>
      </div>
      <div class="v-flex v-flex-row v-justify-content-between">
        <div class="v-flex v-flex-row v-gap-12">
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
            <use href="#visa-arrow-right-tiny"></use></svg>
        </button>
      </div>
    </div>
  </details>
  <details class="v-accordion v-wizard-step" aria-label="Step 5 of 5">
    <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between">
      <div class="v-flex v-align-items-center v-gap-6">
        <span class="v-badge v-badge-icon v-badge-clear v-badge-subtle v-accordion-toggle-icon v-accordion-toggle-icon-closed v-m-auto">
          5
        </span>
        <span class="v-badge v-badge-icon v-badge-active v-accordion-toggle-icon v-accordion-toggle-icon-open v-m-auto">
          5
        </span>
        Step 5 label
      </div>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use></svg>
      <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
        <use href="#visa-chevron-down-tiny"></use></svg>
    </summary>
    <div class="v-accordion-panel v-flex v-flex-col v-gap-16">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="input-test-default">
          Label (required)
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
        </div>
      </div>
      <div class="v-flex v-flex-row v-justify-content-between">
        <div class="v-flex v-flex-row v-gap-12">
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
            <use href="#visa-arrow-right-tiny"></use></svg>
        </button>
      </div>
    </div>
  </details>
</div>

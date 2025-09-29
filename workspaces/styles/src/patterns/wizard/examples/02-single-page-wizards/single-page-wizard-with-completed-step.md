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

title: Single-page wizard with completed step
description: Wizard with completed step using accordion for form completion in the same page.
classes: ['.v-wizard', '.v-wizard-step']
tags: ['docs', 'patterns']
order: 8

---

<nav aria-label="Single-page wizard with completed step">
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
      <div class="v-accordion-panel v-flex v-flex-col v-gap-16 v-p-0">
        <div class="v-flex v-flex-col">
          <div class="v-flex v-flex-col v-gap-4 v-py-24 v-px-40">
            <p class="v-mb-16">* Indicates a required field.</p>
            <label class="v-label" for="input-test-single-completed-1">
              * Label
            </label>
            <div class="v-input-container v-surface v-flex-row">
              <input class="v-input" id="input-test-single-completed-1" name="text-input-single-completed-1" value="Input value" type="text"/>
            </div>
          </div>
          <hr aria-hidden="true" class="v-divider v-divider-decorative"/>
          <div class="v-flex v-flex-row v-justify-content-between v-px-40 v-py-24 v-gap-10 v-flex-wrap">
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
                <use href="#visa-arrow-forward-tiny"></use></svg>
            </button>
          </div>
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
      <div class="v-accordion-panel v-flex v-flex-col v-gap-16 v-p-0">
        <div class="v-flex v-flex-col">
          <div class="v-flex v-flex-col v-gap-4 v-py-24 v-px-40">
            <p class="v-mb-16">* Indicates a required field.</p>
            <label class="v-label" for="input-test-single-completed-2">
              * Label
            </label>
            <div class="v-input-container v-surface v-flex-row">
              <input class="v-input" id="input-test-single-completed-2" name="text-input-single-completed-2" type="text"/>
            </div>
          </div>
          <hr aria-hidden="true" class="v-divider v-divider-decorative"/>
          <div class="v-flex v-flex-row v-justify-content-between v-px-40 v-py-24 v-gap-10 v-flex-wrap">
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                Save
              </button>
              <button class="v-button v-button-tertiary" type="button">
                Exit
              </button>
            </div>
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
                  <use href="#visa-arrow-back-tiny">
                  </use>
                </svg>
                Back
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
        </div>
      </div>
    </details>
    <details class="v-accordion v-wizard-step" aria-label="Step 3 of 5" tabIndex="-1">
      <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between" disabled>
        <div class="v-flex v-align-items-center v-gap-6 v-typography-color-subtle">
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
      <div class="v-accordion-panel v-flex v-flex-col v-gap-16 v-p-0">
        <div class="v-flex v-flex-col">
          <div class="v-flex v-flex-col v-gap-4 v-py-24 v-px-40">
            <p class="v-mb-16">* Indicates a required field.</p>
            <label class="v-label" for="input-test-single-completed-3">
              * Label
            </label>
            <div class="v-input-container v-surface v-flex-row">
              <input class="v-input" id="input-test-single-completed-3" name="text-input-single-completed-3" type="text"/>
            </div>
          </div>
          <hr aria-hidden="true" class="v-divider v-divider-decorative"/>
          <div class="v-flex v-flex-row v-justify-content-between v-px-40 v-py-24 v-gap-10 v-flex-wrap">
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                Save
              </button>
              <button class="v-button v-button-tertiary" type="button">
                Exit
              </button>
            </div>
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
                  <use href="#visa-arrow-back-tiny">
                  </use>
                </svg>
                Back
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
        </div>
      </div>
    </details>
    <details class="v-accordion v-wizard-step" aria-label="Step 4 of 5" tabIndex="-1">
      <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between" disabled>
        <div class="v-flex v-align-items-center v-gap-6 v-typography-color-subtle">
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
      <div class="v-accordion-panel v-flex v-flex-col v-gap-16 v-p-0">
        <div class="v-flex v-flex-col">
          <div class="v-flex v-flex-col v-gap-4 v-py-24 v-px-40">
            <p class="v-mb-16">* Indicates a required field.</p>
            <label class="v-label" for="input-test-single-completed-4">
              * Label
            </label>
            <div class="v-input-container v-surface v-flex-row">
              <input class="v-input" id="input-test-single-completed-4" name="text-input-single-completed-4" type="text"/>
            </div>
          </div>
          <hr aria-hidden="true" class="v-divider v-divider-decorative"/>
          <div class="v-flex v-flex-row v-justify-content-between v-px-40 v-py-24 v-gap-10 v-flex-wrap">
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                Save
              </button>
              <button class="v-button v-button-tertiary" type="button">
                Exit
              </button>
            </div>
          <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
                  <use href="#visa-arrow-back-tiny">
                  </use>
                </svg>
                Back
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
        </div>
      </div>
    </details>
    <details class="v-accordion v-wizard-step" aria-label="Step 5 of 5" tabIndex="-1">
      <summary class="v-button v-button-secondary v-button-large v-accordion-heading v-justify-content-between" disabled>
        <div class="v-flex v-align-items-center v-gap-6 v-typography-color-subtle">
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
      <div class="v-accordion-panel v-flex v-flex-col v-gap-16 v-p-0">
        <div class="v-flex v-flex-col">
          <div class="v-flex v-flex-col v-gap-4 v-py-24 v-px-40">
            <p class="v-mb-16">* Indicates a required field.</p>
            <label class="v-label" for="input-test-single-completed-5">
              * Label
            </label>
            <div class="v-input-container v-surface v-flex-row">
              <input class="v-input" id="input-test-single-completed-5" name="text-input-single-completed-5" type="text"/>
            </div>
          </div>
          <hr aria-hidden="true" class="v-divider v-divider-decorative"/>
          <div class="v-flex v-flex-row v-justify-content-between v-px-40 v-py-24 v-gap-10 v-flex-wrap">
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                Save
              </button>
              <button class="v-button v-button-tertiary" type="button">
                Exit
              </button>
            </div>
            <div class="v-flex v-flex-row v-gap-16">
              <button class="v-button v-button-secondary" type="button">
                <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny" focusable="false" viewbox="0 0 16 16">
                  <use href="#visa-arrow-back-tiny">
                  </use>
                </svg>
                Back
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
        </div>
      </div>
    </details>
  </div>
</nav>

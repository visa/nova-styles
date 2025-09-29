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

title: Horizontal application layout
description: Horizontal application layout.  
classes: []
tags: ['patterns']
order: 0

---
<style>
    /* overrides just for documentation app */
    body.w-code-box-pattern:has(.v-nav.v-nav-horizontal, .layout-example),
    div.w-code-demo:has(.layout-example) { 
        padding: 0 !important;
    }
    div.w-code-demo .layout-example {
        height: 300px; /* for library */
    }
</style>
<style>
    .layout-horizontal {
        height: 100vh;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: "header" "content";
        background-color: var(--palette-default-surface-3, #f0f0f0);
    }
    .layout-horizontal .layout-header {
        z-index: 3;
        position: relative;
        grid-area: header;
    }
    .layout-horizontal .layout-content {
        position: relative;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        grid-area: content;
    }
    .layout-horizontal main {
        display: block;
        flex-grow: 1;
    }

    /* customize the default footer color */
    .layout-horizontal footer {
        --v-footer-background-color: var(--v-palette-default-surface-3);
    }
    
    /* breakpoints */
    @container (max-width: 1003px) {
        .layout-horizontal .v-mobile-container-hide {
            display: none;
        }
        .layout-horizontal .v-desktop-container-hide {
            display: block;
        }
        .layout-horizontal .v-desktop-container-hide.v-hide {
            display: none;
        }
    }
    @container (min-width: 1004px) {
        .layout-horizontal .v-mobile-container-hide {
            display: flex;
        }
        .layout-horizontal .v-desktop-container-hide {
            display: none;
        }
    }
</style>

<div class="layout layout-example layout-horizontal">
    <div class="layout-header">
        <div><a class="v-link v-skip-link" href="#content-mixed">Skip to content</a>
            <header class="v-nav v-nav-horizontal v-justify-content-between" id="horizontal-nav">
                <button class="v-button v-button-large v-button-tertiary v-button-icon v-dropdown v-desktop-container-hide" aria-controls="horizontal-nav-mobile-menu" aria-expanded="false" aria-label="open menu" id="horizontal-nav-mobile-menu-button">
                    <svg class="v-icon v-icon-visa v-icon-low v-icon-menu" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                        <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M23 3H1V1H23V3ZM23 23H1V21H23V23ZM1 13H23V11H1V13Z"></path>
                    </svg>
                </button>
                <a class="v-link v-link-no-underline v-flex v-gap-16" aria-label="Visa Application Name Home" href="./application-layouts" id="horizontal-nav-home-link" style="background-color: transparent;">
                    <svg aria-hidden="true" class="v-logo" height="23" viewBox="0 0 71 23" width="71" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M50.6986 15.3377C50.7123 11.8369 47.8134 10.3152 45.4937 9.09755C43.9358 8.27981 42.6393 7.59921 42.6617 6.54843C42.6781 5.75329 43.4371 4.90557 45.0931 4.692C47.0325 4.5045 48.9864 4.8451 50.7479 5.67771L51.7566 0.985714C50.0419 0.341244 48.2261 0.00745647 46.3943 0C40.7429 0 36.7376 3.013 36.7014 7.33043C36.6653 10.5143 39.5501 12.3017 41.7286 13.363C43.9629 14.4473 44.7153 15.1439 44.7054 16.1164C44.7054 17.6049 42.9213 18.2587 41.2751 18.285C38.4794 18.3296 36.8224 17.5564 35.5085 16.9434L35.3839 16.8853L34.3357 21.7416C35.6763 22.3593 38.1504 22.8949 40.7166 22.9211C46.7393 22.9211 50.6821 19.9443 50.7019 15.3377H50.6986ZM26.9429 0.404143L17.6541 22.5729H11.592L7.02157 4.88257C6.74229 3.79171 6.50243 3.39414 5.658 2.93414C4.27143 2.18829 2.00429 1.48514 0 1.04814L0.138 0.391H9.89329C11.2059 0.396383 12.3201 1.35458 12.5219 2.65157L14.9369 15.4823L20.9234 0.404143H26.9429ZM70.9714 22.5663H65.6683L64.975 19.2641H57.6183L56.4223 22.5729H50.4029L59.0016 2.03057C59.409 1.04254 60.3741 0.399575 61.4429 0.404143H66.3419L70.9714 22.5663ZM59.2677 14.72L62.2873 6.394L64.0254 14.72H59.2677ZM30.3994 22.5729L35.1571 0.404143H29.4071L24.6626 22.5729H30.3994Z"
                        fill-rule="evenodd"></path>
                    </svg>
                    <div class="v-nav-app-name v-mobile-container-hide">
                        <p class="v-typography-headline-3 v-xs-container-hide">Application name</p>
                    </div>
                </a>
                <nav aria-label="global" class="v-mobile-container-hide v-flex v-flex-grow v-justify-content-end v-ml-auto">
                    <ul class="v-tabs v-tabs-horizontal v-gap-4">
                        <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 1</a></li>
                        <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 2</a></li>
                        <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 3</a></li>
                        <li class="v-tab">
                            <button class="v-button v-button-large v-button-tertiary v-dropdown" aria-expanded="false" id="horizontal-nav-label-dropdown-button">L1 label 4
                                <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-down v-tab-suffix" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                    <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M2.47597 4.00049L1 5.39358L8 12.0005L15 5.39358L13.524 4.00049L8 9.21431L2.47597 4.00049Z"></path>
                                </svg>
                            </button>
                        </li>
                        <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 5</a></li>
                    </ul>
                </nav>
                <div class="v-flex v-gap-8 v-ml-8">
                    <button class="v-button v-button-large v-button-tertiary v-button-icon" aria-label="search site">
                        <svg class="v-icon v-icon-visa v-icon-low v-icon-search" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M9 7V5C11.2056 5 13 6.79443 13 9H11C11 7.89697 10.103 7 9 7ZM16.5181 15L24 22.4819L22.4819 24L15 16.5181C15.5551 16.0636 16.0636 15.5551 16.5181 15Z"></path>
                            <path class="v-icon-primary" d="M9 1C4.58887 1 1 4.58887 1 9C1 13.4111 4.58887 17 9 17C13.4111 17 17 13.4111 17 9C17 4.58887 13.4111 1 9 1ZM9 15C5.69141 15 3 12.3086 3 9C3 5.69141 5.69141 3 9 3C12.3086 3 15 5.69141 15 9C15 12.3086 12.3086 15 9 15Z"></path>
                        </svg>
                    </button>
                    <button class="v-button v-button-large v-button-tertiary v-button-icon v-mobile-container-hide" aria-label="notifications" aria-describedby="horizontal-nav-notifications-badge">
                        <svg class="v-icon v-icon-visa v-icon-low v-icon-notifications" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M12 0C8.13401 0 5 3.13401 5 7V14H7V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.2386 17 7.00003V11C17 12.9259 17.8249 14.2261 18.9157 15.0115C19.5873 15.4951 20.3332 15.7664 21 15.8979V16H1V18H22C22.5523 18 23 17.5523 23 17V15C23 14.4477 22.5523 14 22 14C21.4934 14 20.7111 13.8398 20.0843 13.3885C19.5085 12.9739 19 12.2741 19 11V7.00003C19 3.13404 15.866 0 12 0ZM12 6C12.5523 6 13 6.44772 13 7V11H15V7C15 5.34315 13.6569 4 12 4V6Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M9 20V21C9 22.6569 10.3431 24 12 24C13.6569 24 15 22.6569 15 21V20H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20H9Z"></path>
                        </svg><sup class="v-badge v-badge-number v-typography-label-active" id="horizontal-nav-notifications-badge">3</sup></button>
                    <div class="v-tab v-mobile-container-hide">
                        <button class="v-avatar v-button v-button-large v-button-tertiary v-dropdown" aria-expanded="false" aria-label="Alex Miller">
                            <svg class="v-icon v-icon-visa v-icon-low v-icon-account" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M12 14C7.58172 14 4 17.5817 4 22V24H2V22C2 16.4772 6.47715 12 12 12C17.5228 12 22 16.4772 22 22V24H20V22C20 17.5817 16.4183 14 12 14Z"></path>
                                <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 10C14.7614 10 17 7.76142 17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5C7 7.76142 9.23858 10 12 10Z"></path>
                            </svg>
                            <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-down v-tab-suffix" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M2.47597 4.00049L1 5.39358L8 12.0005L15 5.39358L13.524 4.00049L8 9.21431L2.47597 4.00049Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <nav class="v-nav v-nav-vertical v-desktop-container-hide v-hide" aria-label="global menu" aria-hidden="true" id="horizontal-nav-mobile-menu">
                <ul class="v-tabs v-tabs-vertical">
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 1</a></li>
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 2</a></li>
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 3</a></li>
                    <li class="v-tab"> <button class="v-button v-button-large v-button-tertiary" aria-expanded="false" aria-controls="undefined" id="horizontal-nav-mobile-menu-label-dropdown-button">L1 label 4
                            <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-down v-tab-suffix" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M2.47597 4.00049L1 5.39358L8 12.0005L15 5.39358L13.524 4.00049L8 9.21431L2.47597 4.00049Z"></path>
                            </svg>
                        </button>
                    </li>
                    <li class="v-tab">
                        <button class="v-button v-button-large v-button-tertiary" style="word-break: break-word; block-size: max-content;">Notifications<sup class="v-badge v-badge-number v-typography-label-active" style="position: relative;">3</sup></button>
                    </li>
                </ul>
                <hr aria-hidden="true" class="v-divider v-divider-decorative v-mt-5">
                <div class="v-tab v-mt-6 v-tabs-vertical">
                    <button class="v-button v-button-large v-button-tertiary" aria-expanded="false" aria-controls="horizontal-nav-account-sub-menu" aria-label="Alex Miller">
                        <svg class="v-icon v-icon-visa v-icon-low v-icon-account" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M12 14C7.58172 14 4 17.5817 4 22V24H2V22C2 16.4772 6.47715 12 12 12C17.5228 12 22 16.4772 22 22V24H20V22C20 17.5817 16.4183 14 12 14Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 10C14.7614 10 17 7.76142 17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5C7 7.76142 9.23858 10 12 10Z"></path>
                        </svg>Alex Miller
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-chevron-down v-tab-suffix" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M2.47597 4.00049L1 5.39358L8 12.0005L15 5.39358L13.524 4.00049L8 9.21431L2.47597 4.00049Z"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    </div>
    <div id="content-mixed" class="layout-content" tabindex="-1">
        <main class="layout-main">
            <!-- <h1> and other content  -->
        </main>
        <footer class="v-footer v-row-gap-16 v-col-gap-10">
            <div class="v-flex v-mr-1">
            <svg fill="none" height="23" viewbox="0 0 71 23" width="71" class="v-logo">
                <path clip-rule="evenodd" d="M50.6986 15.3377C50.7123 11.8369 47.8134 10.3152 45.4937 9.09755C43.9358 8.27981 42.6393 7.59921 42.6617 6.54843C42.6781 5.75329 43.4371 4.90557 45.0931 4.692C47.0325 4.5045 48.9864 4.8451 50.7479 5.67771L51.7566 0.985714C50.0419 0.341244 48.2261 0.00745647 46.3943 0C40.7429 0 36.7376 3.013 36.7014 7.33043C36.6653 10.5143 39.5501 12.3017 41.7286 13.363C43.9629 14.4473 44.7153 15.1439 44.7054 16.1164C44.7054 17.6049 42.9213 18.2587 41.2751 18.285C38.4794 18.3296 36.8224 17.5564 35.5085 16.9434L35.3839 16.8853L34.3357 21.7416C35.6763 22.3593 38.1504 22.8949 40.7166 22.9211C46.7393 22.9211 50.6821 19.9443 50.7019 15.3377H50.6986ZM26.9429 0.404143L17.6541 22.5729H11.592L7.02157 4.88257C6.74229 3.79171 6.50243 3.39414 5.658 2.93414C4.27143 2.18829 2.00429 1.48514 0 1.04814L0.138 0.391H9.89329C11.2059 0.396383 12.3201 1.35458 12.5219 2.65157L14.9369 15.4823L20.9234 0.404143H26.9429ZM70.9714 22.5663H65.6683L64.975 19.2641H57.6183L56.4223 22.5729H50.4029L59.0016 2.03057C59.409 1.04254 60.3741 0.399575 61.4429 0.404143H66.3419L70.9714 22.5663ZM59.2677 14.72L62.2873 6.394L64.0254 14.72H59.2677ZM30.3994 22.5729L35.1571 0.404143H29.4071L24.6626 22.5729H30.3994Z" fill-rule="evenodd" id="Visa">
                </path>
            </svg>
            </div>
            <div class="v-flex v-flex-grow v-flex-wrap v-justify-content-between v-gap-16 v-flex-wrap-reverse">
            <p class="v-typography-color-subtle">
                Copyright © YYYY-YYYY Visa. All rights reserved.
            </p>
            <ul class="v-gap-16 v-flex v-flex-wrap v-footer-links">
                <li>
                <a class="v-link" href="./application-layouts">
                    Contact us
                </a>
                </li>
                <li>
                <a class="v-link" href="./application-layouts">
                    Privacy
                </a>
                </li>
                <li>
                <a class="v-link" href="./application-layouts">
                    Terms of use
                </a>
                </li>
            </ul>
            </div>
        </footer>
    </div>
</div>
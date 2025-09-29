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

title: Mixed application layout
description: Mixed application layout.  
classes: []
tags: ['patterns']
order: 3

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
    .layout-mixed {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: "header header" "nav content";
        height: 100vh;
        background-color: var(--palette-default-surface-3, #f0f0f0);
    }

    /* open nav */
    .layout-mixed:has(.mixed-vertical-tabs) {
        grid-template-columns: 242px 1fr !important;
    }

    .layout-mixed .layout-header {
        z-index: 3;
        position: relative;
        grid-area: header;
    }

    .layout-mixed .layout-vertical-mixed {
        grid-area: nav;
    }

    .layout-mixed .layout-content {
        position: relative;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        grid-area: content;
    }

    .layout-mixed main {
        display: block;
        flex-grow: 1;
    }

    /* customize the default footer color */
    .layout-mixed footer {
        --v-footer-background-color: var(--v-palette-default-surface-3);
    }

    /* breakpoints */
    @container (max-width: 1003px) {

        .layout-mixed .v-mobile-container-hide {
            display: none;
        }

        .layout-mixed .v-desktop-container-hide {
            display: block;
        }

        .layout-mixed .v-hide {
            display: none;  
        }
    }
    
    @container (min-width: 1004px) {
        .layout-mixed .v-mobile-container-hide {
            display: flex;
        }

        .layout-mixed .v-desktop-container-hide {
            display: none;
        }
    }
</style>

<div class="layout layout-example layout-mixed">
    <div class="layout-header">
        <div><a class="v-link v-alternate v-skip-link" href="#content-mixed">Skip to content</a>
            <header class="v-nav v-alternate v-nav-horizontal v-justify-content-between" id="alternate-horizontal-nav">
                <button class="v-button v-button-large v-button-tertiary v-button-icon v-dropdown v-desktop-container-hide" aria-controls="alternate-horizontal-nav-mobile-menu" aria-expanded="false" aria-label="open menu" id="alternate-horizontal-nav-mobile-menu-button">
                    <svg class="v-icon v-icon-visa v-icon-low v-icon-menu" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                        <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M23 3H1V1H23V3ZM23 23H1V21H23V23ZM1 13H23V11H1V13Z"></path>
                    </svg>
                </button>
                <a class="v-link v-link-no-underline v-flex v-gap-16" aria-label="Visa Application Name Home" href="./application-layouts" id="alternate-horizontal-nav-home-link" style="background-color: transparent;">
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
                            <button class="v-button v-button-large v-button-tertiary v-dropdown" aria-expanded="false" id="alternate-horizontal-nav-label-dropdown-button">L1 label 4
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
                    <button class="v-button v-button-large v-button-tertiary v-button-icon v-mobile-container-hide" aria-label="notifications" aria-describedby="alternate-horizontal-nav-notifications-badge">
                        <svg class="v-icon v-icon-visa v-icon-low v-icon-notifications" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M12 0C8.13401 0 5 3.13401 5 7V14H7V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.2386 17 7.00003V11C17 12.9259 17.8249 14.2261 18.9157 15.0115C19.5873 15.4951 20.3332 15.7664 21 15.8979V16H1V18H22C22.5523 18 23 17.5523 23 17V15C23 14.4477 22.5523 14 22 14C21.4934 14 20.7111 13.8398 20.0843 13.3885C19.5085 12.9739 19 12.2741 19 11V7.00003C19 3.13404 15.866 0 12 0ZM12 6C12.5523 6 13 6.44772 13 7V11H15V7C15 5.34315 13.6569 4 12 4V6Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M9 20V21C9 22.6569 10.3431 24 12 24C13.6569 24 15 22.6569 15 21V20H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20H9Z"></path>
                        </svg><sup class="v-badge v-badge-number v-typography-label-active" id="alternate-horizontal-nav-notifications-badge">3</sup></button>
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
            <nav class="v-nav v-alternate v-nav-vertical v-desktop-container-hide v-hide" aria-label="global menu" aria-hidden="true" id="alternate-horizontal-nav-mobile-menu">
                <ul class="v-tabs v-tabs-vertical">
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 1</a></li>
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 2</a></li>
                    <li class="v-tab"><a href="./application-layouts" class="v-button v-button-large v-button-tertiary">L1 label 3</a></li>
                    <li class="v-tab">
                        <button class="v-button v-button-large v-button-tertiary" aria-expanded="false" aria-controls="undefined" id="alternate-horizontal-nav-mobile-menu-label-dropdown-button">L1 label 4
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
                    <button class="v-button v-button-large v-button-tertiary" aria-expanded="false" aria-controls="alternate-horizontal-nav-account-sub-menu" aria-label="Alex Miller">
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
    <nav class="v-nav v-nav-vertical layout-vertical-mixed" id="vertical-mixed-navigation" aria-label="primary">
        <div class="mixed-vertical-tabs v-align-self-stretch">
            <ul class="v-tabs v-tabs-vertical v-gap-8">
                <li class="v-tab">
                    <a href="./application-layouts" class="v-button v-button-tertiary">
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-statistics" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M7 0H8C12.4183 0 16 3.58172 16 8V9H7V0ZM9 2.08296V7H13.917C13.4955 4.4875 11.5125 2.50448 9 2.08296Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M5 0.578125C4.65376 0.718269 4.3195 0.881945 3.99927 1.06719C1.61068 2.44891 0 5.03393 0 7.99632C0 12.4146 3.58172 15.9963 8 15.9963C10.9624 15.9963 13.5474 14.3856 14.9291 11.997C15.1144 11.6768 15.278 11.3426 15.4182 10.9963H13.1975C12.1585 12.7919 10.2193 13.9963 8 13.9963C4.68629 13.9963 2 11.31 2 7.99632C2 5.77703 3.20439 3.83786 5 2.79882V0.578125Z"></path>
                        </svg>L2 label 1</a>
                </li>
                <li class="v-tab">
                    <a href="./application-layouts" class="v-button v-button-tertiary">
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-settings" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" d="M7 6.99609H9V8.99609H7V6.99609Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.63803 0.02404 7.28167 0.0706105 6.93244L2.0783 6.44497C2.75428 6.28084 3.07507 5.50638 2.71314 4.91233L1.63846 3.14845C2.07228 2.58047 2.58045 2.07231 3.14842 1.63848L4.91231 2.71316C5.50636 3.0751 6.28082 2.7543 6.44495 2.07832L6.93242 0.0706128C7.28166 0.0240408 7.63802 0 8 0C8.36198 0 8.71834 0.0240405 9.06757 0.070612L9.55504 2.07832C9.71917 2.7543 10.4936 3.0751 11.0877 2.71316L12.8516 1.63848C13.4196 2.0723 13.9277 2.58047 14.3615 3.14844L13.2869 4.91233C12.9249 5.50638 13.2457 6.28084 13.9217 6.44497L15.9294 6.93244C15.976 7.28167 16 7.63803 16 8C16 8.36199 15.976 8.71836 15.9294 9.0676L13.9217 9.55507C13.2457 9.7192 12.9249 10.4937 13.2869 11.0877L14.3615 12.8516C13.9277 13.4196 13.4195 13.9277 12.8515 14.3615L11.0877 13.2869C10.4936 12.9249 9.71917 13.2457 9.55504 13.9217L9.06758 15.9294C8.71834 15.976 8.36198 16 8 16C7.63802 16 7.28165 15.976 6.93241 15.9294L6.44495 13.9217C6.28082 13.2457 5.50636 12.9249 4.9123 13.2869L3.14845 14.3615C2.58047 13.9277 2.0723 13.4195 1.63848 12.8516L2.71314 11.0877C3.07507 10.4937 2.75428 9.7192 2.07829 9.55507L0.0706159 9.0676C0.0240418 8.71836 0 8.36199 0 8ZM11 8.00004C11 9.65689 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65689 4.99999 8.00004C4.99999 6.34318 6.34314 5.00004 7.99999 5.00004C9.65685 5.00004 11 6.34318 11 8.00004Z"></path>
                        </svg>L2 label 2</a>
                </li>
                <li class="v-tab">
                    <a href="./application-layouts" class="v-button v-button-tertiary">
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-security" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M6.88793 5.81987C6.33951 6.09204 5.71415 6.2011 5.08826 6.11717C5.04154 6.1109 5 6.14724 5 6.19438V6.4515C5 6.54476 5.00202 6.63775 5.00602 6.73041C5.02639 7.20176 5.09818 7.66467 5.21748 8.11198C5.21974 8.12042 5.222 8.12886 5.22429 8.13729C5.63652 9.65795 6.59852 10.9963 7.9564 11.8704C7.98295 11.8875 8.01705 11.8875 8.0436 11.8704C9.40148 10.9963 10.3635 9.65795 10.7757 8.13729C10.778 8.12886 10.7803 8.12042 10.7825 8.11198C10.9018 7.66467 10.9736 7.20176 10.994 6.73041C10.998 6.63775 11 6.54476 11 6.4515V6.19438C11 6.14724 10.9585 6.1109 10.9117 6.11717C10.2858 6.2011 9.66049 6.09204 9.11207 5.81987C8.72745 5.62898 8.38067 5.35787 8.0981 5.01684L8 4.89844L7.9019 5.01684C7.61933 5.35787 7.27255 5.62898 6.88793 5.81987ZM7.22448 7.84629C7.39459 8.36078 7.65752 8.84022 8 9.26029C8.34248 8.84022 8.60541 8.36078 8.77552 7.84629C8.50796 7.75064 8.24851 7.63277 8 7.49381C7.7515 7.63277 7.49204 7.75064 7.22448 7.84629Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M6.24443 1.44916L7.22998 0.259705H8.77002L9.75557 1.44916C10.4155 2.24563 11.4392 2.64597 12.4644 2.50849L15 2.16846V6.67106C15 9.73158 13.4447 12.5823 10.8712 14.2388L8.54125 15.7386H7.45875L5.12879 14.2388C2.55531 12.5823 1 9.73158 1 6.67106V2.16846L3.53563 2.50849C4.56081 2.64597 5.58449 2.24563 6.24443 1.44916ZM8 2.46508L7.78447 2.7252C6.68458 4.05265 4.97844 4.71987 3.26981 4.49075L3 4.45457V6.67106C3 9.05146 4.20968 11.2687 6.21128 12.5571L8 13.7085L9.78872 12.5571C11.7903 11.2687 13 9.05146 13 6.67106V4.45457L12.7302 4.49075C11.0216 4.71987 9.31542 4.05265 8.21553 2.7252L8 2.46508Z"></path>
                            <defs>
                                <clipPath>
                                    <rect width="16" height="15.9989"></rect>
                                </clipPath>
                            </defs>
                        </svg>L2 label 3</a>
                </li>
                <li class="v-tab">
                    <a href="./application-layouts" class="v-button v-button-tertiary">
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-notes" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M6 8H10V6H6V8ZM6 12H10V10H6V12Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M3 0V2H2V4H12V14H4V6H2V16H14V2H13V0H11V2H9V0H7V2H5V0H3Z"></path>
                        </svg>L2 label 4</a>
                </li>
                <li class="v-tab">
                    <a href="./application-layouts" class="v-button v-button-tertiary">
                        <svg class="v-icon v-icon-visa v-icon-tiny v-icon-support-ticket" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                            <path class="v-icon-secondary" d="M8 5.99609H10V9.99609H8V5.99609Z"></path>
                            <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M14 3.99609H2V5.1668C3.16519 5.57864 4 6.68988 4 7.99609C4 9.30231 3.16519 10.4136 2 10.8254V11.9961H14V10.8254C12.8348 10.4136 12 9.30231 12 7.99609C12 6.68988 12.8348 5.57864 14 5.1668V3.99609ZM0 1.99609V6.99609H1C1.55228 6.99609 2 7.44381 2 7.99609C2 8.54838 1.55228 8.99609 1 8.99609H0V13.9961H16V8.99609H15C14.4477 8.99609 14 8.54838 14 7.99609C14 7.44381 14.4477 6.99609 15 6.99609H16V1.99609H0Z"></path>
                        </svg>L2 label 5</a>
                </li>
            </ul>
        </div>
        <div class="v-align-self-stretch v-flex v-flex-col v-gap-4 v-mt-auto">
            <hr aria-hidden="true" class="v-divider v-divider-decorative v-mb-4">
            <button class="v-button v-button-small v-button-tertiary v-button-icon v-button-subtle v-ml-auto v-mr-8" aria-label="Side bar" aria-expanded="true">
                <svg class="v-icon v-icon-visa v-icon-tiny v-icon-media-rewind v-icon-rtl" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                    <path class="v-icon-secondary" fill-rule="evenodd" clip-rule="evenodd" d="M13.6069 1L7 8L13.6069 15L15 13.524L9.78617 8L15 2.47597L13.6069 1Z"></path>
                    <path class="v-icon-primary" fill-rule="evenodd" clip-rule="evenodd" d="M7.60691 1L1 8L7.60691 15L9 13.524L3.78617 8L9 2.47597L7.60691 1Z"></path>
                </svg>
            </button>
        </div>
    </nav>
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
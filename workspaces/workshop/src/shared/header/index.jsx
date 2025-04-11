/**
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
 **/
import React, { useContext, useEffect, useState } from 'react';
import { sentenceCase } from 'change-case';

/* Data Sources */ 
import useGlobalState from '../../data/global-state';
import actionTypes from '../../data/global-state/action-types';
import docs from '../../data/docs/metadata';

const PUBLIC_URL = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== 'undefined'
  ? import.meta.env.BASE_URL 
  : '';

const Header = React.forwardRef((props, ref) => {
  const { version, ...remainingProps } = props;
  const { dispatch, globalState } = useContext(useGlobalState); 
  // const [mode, setMode] = useStickyState(globalState.mode, 'w-mode'); 
  const [isHybrid, setIsHybrid] = useState(false); 

  const handleThemeChange = (e) => {
    const _theme = e.target.value; 

    dispatch({
      type: actionTypes.setTheme,
      payload: _theme
    }); 

    // reset mode if theme is no longer hybrid 
    if (_theme.indexOf('hybrid') < 0) {
      dispatch({
        type: actionTypes.setMode, 
        payload: "light"
      }); 
    }
  }; 

  const handleModeChange = (e) => {
    dispatch({
      type: actionTypes.setMode,
      payload: e.target.checked ? "dark" : "light"
    })
  }

  useEffect(() => {
    const elem = document.querySelector('html'); 
    if (isHybrid) {
      elem.setAttribute('data-theme', globalState.mode); 
    } else {
      elem.removeAttribute('data-theme'); 
    }
  }, [globalState.mode, isHybrid]); 

  useEffect(() => {
    setIsHybrid(globalState.theme.indexOf('hybrid') >= 0); 
  }, [globalState.theme])
  
  const toggleSideNav = () => {
    dispatch({type: actionTypes.setSideNav, payload: !globalState.sideNavOpen})
  };

  return (
    <header
      role="banner"
      className="w-header v-nav v-nav-horizontal v-flex v-justify-content-between v-gap-4 v-alternate"
      {...remainingProps}
      ref={ref || null}
    >
      <div className="v-flex v-gap-10">
        <button type="button" onClick={() => toggleSideNav()} className="v-button v-button-icon v-button-tertiary v-desktop-container-hide"
        aria-label={globalState.sideNavOpen ? 'Close menu' : 'Open menu'}>
          <svg focusable="false" aria-hidden="true" className="v-icon v-icon-tiny" viewBox="0 0 16 16">
            <use href={globalState.sideNavOpen ? '#visa-close-tiny' : '#visa-menu-tiny'}></use>
          </svg>
        </button>
        <a href={`${PUBLIC_URL || "/"}`} className="v-flex v-mx-auto v-flex-shrink v-link-unstyled v-flex-grow" aria-label="Visa Workshop/HTML and CSS Styles Home" id="get-started">
          <svg
            width="71"
            height="23"
            viewBox="0 0 71 23"
            className="v-flex v-flex-shrink-0 v-mx-auto v-logo"
          >
            <path
              id="logo-2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.6986 15.3377C50.7123 11.8369 47.8134 10.3152 45.4937 9.09755C43.9358 8.27981 42.6393 7.59921 42.6617 6.54843C42.6781 5.75329 43.4371 4.90557 45.0931 4.692C47.0325 4.5045 48.9864 4.8451 50.7479 5.67771L51.7566 0.985714C50.0419 0.341244 48.2261 0.00745647 46.3943 0C40.7429 0 36.7376 3.013 36.7014 7.33043C36.6653 10.5143 39.5501 12.3017 41.7286 13.363C43.9629 14.4473 44.7153 15.1439 44.7054 16.1164C44.7054 17.6049 42.9213 18.2587 41.2751 18.285C38.4794 18.3296 36.8224 17.5564 35.5085 16.9434L35.3839 16.8853L34.3357 21.7416C35.6763 22.3593 38.1504 22.8949 40.7166 22.9211C46.7393 22.9211 50.6821 19.9443 50.7019 15.3377H50.6986ZM26.9429 0.404143L17.6541 22.5729H11.592L7.02157 4.88257C6.74229 3.79171 6.50243 3.39414 5.658 2.93414C4.27143 2.18829 2.00429 1.48514 0 1.04814L0.138 0.391H9.89329C11.2059 0.396383 12.3201 1.35458 12.5219 2.65157L14.9369 15.4823L20.9234 0.404143H26.9429ZM70.9714 22.5663H65.6683L64.975 19.2641H57.6183L56.4223 22.5729H50.4029L59.0016 2.03057C59.409 1.04254 60.3741 0.399575 61.4429 0.404143H66.3419L70.9714 22.5663ZM59.2677 14.72L62.2873 6.394L64.0254 14.72H59.2677ZM30.3994 22.5729L35.1571 0.404143H29.4071L24.6626 22.5729H30.3994Z"
            />
          </svg>
          <span className="v-mobile-container-hide v-ml-16 v-flex-grow v-mr-auto v-typography-headline-3 v-nav-app-name">VPDS Nova <span className="v-mx-8">|</span> Styles</span>
        </a>
      </div>
      <div className="v-flex v-gap-10 v-align-items-center v-justify-content-end">
        <a 
          className="v-button v-button-tertiary v-button-small"
          target="_blank" 
          rel="noopener noreferrer" 
          href="http://productdesignsystem.visa.com"
        >
          VPDS Home 
          <svg aria-hidden="true" className="v-icon v-icon-generic v-icon-tiny v-icon-information" focusable="false" viewBox="0 0 16 16">
            <use href="#visa-maximize-tiny"></use>
          </svg>
        </a>
        <a 
          className="v-button v-button-tertiary v-button-small" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://bookmarks.visa.com/vpds-styles-create-ticket"
        >
          Submit a Jira ticket (internal only)
          <svg aria-hidden="true" className="v-icon v-icon-generic v-icon-tiny v-icon-information" focusable="false" viewBox="0 0 16 16">
            <use href="#visa-maximize-tiny"></use>
          </svg>
        </a>
        {/* <a 
          href="themes/visa-light"
          className="v-badge v-badge-subtle v-xs-container-hide v-justify-content-end"
          style={{ color: 'var(--palette-default-text)' }}
        >
          Visa light theme
        </a> */}
        {/* 
          Commenting out while we prep docs for theming. 
          Still linking to current Nova theme docs for now. 
        */}

        <fieldset className="v-flex v-flex-row v-align-items-center v-mobile-container-hide" aria-labelledby="select-theme-label">
          <label className="v-label" htmlFor="select-theme-field" id="select-theme-label" style={{ inlineSize: '120px' }}>Site theme</label>
          <div className="v-input-container v-surface v-flex-row v-py-0 v-my-0">
            <select 
              className="v-input" 
              id="select-theme-field" 
              name="select-theme-example"
              value={globalState.theme}
              onChange={handleThemeChange}
            >
              <option value="none">None</option>
              {
                Object.keys(docs.entries.themes).map((t, i) => (
                  t === "nova" || t === "default" 
                    ? null 
                    : <option value={t} key={i}>{sentenceCase(t)}</option>
                ))
              }
            </select>
            <div className="v-input-control">
              <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                <use href="#visa-chevron-down-tiny"></use>
              </svg>
            </div>
          </div> 
        </fieldset>

        {isHybrid 
          ? <fieldset className="v-flex v-flex-row">
            <label className="v-switch-label v-label v-mr-8" htmlFor="select-mode-field">Dark mode</label>
            <input className="v-switch" id="select-mode-field" name="default-switch" role="switch" type="checkbox" onChange={handleModeChange} checked={globalState.mode === "dark"} />
          </fieldset>
          : null 
        }

        {/* 
          @TODO Temporarily left as badge. 
          Update to dropdown to link to available versions above. 
        */}

        {props.version ? (
          <span
            className="v-badge v-badge-subtle v-xs-container-hide v-justify-content-end"
            style={{ color: 'var(--palette-default-text)' }}
          >
            {`v${props.version}`}
          </span>
        ) : null}
      </div> 
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

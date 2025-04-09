/**
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
 **/
import React, { useContext, useEffect, useRef } from 'react'; 
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 

/* Shared Components */
import Header from '../../shared/header';
import Menu from '../../shared/menu';
import SkipToContent from '../../shared/skip-to-content';

/* Data Sources */ 
import useGlobalState from '../../data/global-state';
import docs from '../../data/docs/metadata'; 

/* VPDS Nova Icons */
import GenericSprite from '@visa/nova-icons-sprite/generic.svg?react'; 
import VisaSprite from "@visa/nova-icons-sprite/visa.svg?react";

ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);

const NotFound = ({...props}) => {
  const { globalState } = useContext(useGlobalState);
  const { pathname } = useLocation();

  const contentRef = useRef(); 
  const headerRef = useRef(); 

  // On page change, scroll to top
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, [pathname]);

  return (<>
    <Helmet>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Development site for Visa Product Design System's CSS library." />
      <title>Not Found | Visa Product Design System</title>
    </Helmet>
    <SkipToContent />
      <div className={[
        "w-app",
        globalState.sideNavOpen
          ? "w-app-side-nav" 
          : '',
        ].join(' ').trim()
      }>
      <Header ref={headerRef} version={docs.version} />
      <Menu />
      <main id="content" className="w-content">
        <div className="w-area" ref={contentRef}>
          <div style={{ 
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
            blockSize: '100%',
            inlineSize: '100%'
          }}>
            <div className="v-flex v-gap-30 v-align-items-center">
              <span className="v-typography-display-1" style={{ color: 'var(--palette-default-active' }}>
                404
              </span>
              <span className="v-typography-headline-2">
                This page could not be found.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div> 
    <VisaSprite />
      <GenericSprite />
  </>); 
}; 

export default NotFound; 

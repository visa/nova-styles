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
import React, { useContext, useEffect, useRef } from 'react'; 
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet'; 
import Markdown from 'react-markdown'; 

/* Shared Components */ 
import SkipToContent from '../../shared/skip-to-content';
import Header from '../../shared/header';
import Menu from '../../shared/menu';

/* Data Sources */
import useGlobalState from '../../data/global-state';
import changelog from '../../data/docs/changelog'; 
import docs from '../../data/docs/metadata';

/* VPDS Nova Icons */ 
import GenericSprite from '@visa/nova-icons-sprite/generic.svg?react'; 
import VisaSprite from "@visa/nova-icons-sprite/visa.svg?react";

ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);

const Changelog = () => {
  const { globalState } = useContext(useGlobalState);
  const mdRef = useRef(null);

  const transformHeader = (element) => {
    if(element.innerHTML.indexOf('<a') === 0) {
      element.outerHTML = '<h2>' + element.innerHTML + '</h2>';
    }
    return element;
  }

  useEffect(() => {
    mdRef.current.querySelectorAll('h1').forEach(transformHeader); 
    mdRef.current.querySelectorAll('h3').forEach(transformHeader);

    mdRef.current.querySelectorAll('h1').forEach(element => { element.className = 'v-typography-headline-1' });
    mdRef.current.querySelectorAll('h2').forEach(element => { element.className = 'v-typography-headline-2 v-mt-20' });
    mdRef.current.querySelectorAll('h2 a').forEach(element => {
      element.className = 'v-typography-headline-2';
      element.setAttribute("style", "--typography-text-decoration: var(--v-link-text-decoration);")
    });
    mdRef.current.querySelectorAll('h3').forEach(element => { element.className = 'v-typography-subtitle-1' });
    mdRef.current.querySelectorAll('li').forEach(element => { element.className = 'v-typography-body-1' });
    mdRef.current.querySelectorAll('a').forEach(element => { 
      element.className = [element.className, 'v-link'].join(' ') 
    }); 
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Development site for Visa Product Design System's CSS library." />
        <title>Changelog | Styles | Visa Product Design System</title>
      </Helmet>
      <SkipToContent />
      <div className={[
        "w-app",
        globalState.sideNavOpen
          ? "w-app-side-nav" 
          : '',
        ].join(' ').trim()
      }>
        <Header version={docs.version} />
        <Menu 
          selectedType={'changelog'} 
        />
        <main className="w-area v-p-30" id="content">
          <div 
            className="v-surface v-mx-auto v-flex v-flex-col v-px-20 v-py-20" 
            style={{ 
              maxWidth: '960px'
            }}
            ref={mdRef}
          >
            <Markdown>
              {changelog}
            </Markdown>
          </div>
        </main>
      </div>
      <VisaSprite />
      <GenericSprite />
    </>
  )

}

export default Changelog; 
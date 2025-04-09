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
import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 
import { capitalCase } from 'change-case';

/* Shared Components */ 
import SkipToContent from '../../shared/skip-to-content';
import Header from '../../shared/header';
import Menu from '../../shared/menu';

/* Internal Components */
import WorkshopTheme from './theme'; 
import WorkshopComponent from './component'; 

/* Data Sources */
import useGlobalState from '../../data/global-state';
import docs from '../../data/docs/metadata'; 

/* Styles */
import './styles.css'; 

/* VPDS Nova Icons */ 
import GenericSprite from '@visa/nova-icons-sprite/generic.svg?react'; 
import VisaSprite from "@visa/nova-icons-sprite/visa.svg?react";

ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);

const Workshop = ({ type, item, ...props }) => {
  const { globalState } = useContext(useGlobalState);
  const { pathname } = useLocation();

	// On page change, scroll to top
	useEffect(() => {
		window?.scrollTo(0, 0);
	}, [pathname]);

  useEffect(() => {
    console.log("Workshop", type, item, docs); 
  }, [item, type]); 

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Development site for Visa Product Design System's CSS library." />
        <title>{capitalCase(item)} {capitalCase(type)} | Styles | Visa Product Design System</title>
      </Helmet>
      <SkipToContent />
      <div className={[
        "w-app",
        globalState.sideNavOpen
          ? "w-app-side-nav" 
          : '',
        type === "components" ||
        type === "abstracts" || 
        type === "base"
          ? "w-app-drawer"
          : ''
        ].join(' ').trim()
      }>
        <Header version={docs.version} />
        <Menu 
          selectedType={type} 
          selectedItem={item} 
        />
        {
          type === 'themes'
          ? <WorkshopTheme type={type} item={item} />
          : <WorkshopComponent type={type} item={item} />
        }
      </div>
      <VisaSprite />
      <GenericSprite />
    </>
  ); 
}; 

export default Workshop; 

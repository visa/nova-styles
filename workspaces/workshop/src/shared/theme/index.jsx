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

/* Data Sources */ 
import useGlobalState from '../../data/global-state'; 

/* Nova themes */
import themeDefault from '@visa/nova-styles/dist/themes/default/index.css?raw';
import themeDefaultLight from '@visa/nova-styles/dist/themes/default-light/index.css?raw';
import themeDefaultDark from '@visa/nova-styles/dist/themes/default-dark/index.css?raw';
import themeDefaultHybrid from '@visa/nova-styles/dist/themes/default-hybrid/index.css?raw';
import themeNova from '@visa/nova-styles/dist/themes/nova/index.css?raw';
import themeVisaLight from '@visa/nova-styles/dist/themes/visa-light/index.css?raw';
import themeVisaDark from '@visa/nova-styles/dist/themes/visa-dark/index.css?raw';
import themeVisaHybrid from '@visa/nova-styles/dist/themes/visa-hybrid/index.css?raw';
import themeVisaDarkAlt from '@visa/nova-styles/dist/themes/visa-dark-alt/index.css?raw';
import themeVisaHybridAlt from '@visa/nova-styles/dist/themes/visa-hybrid-alt/index.css?raw';
import themeVault from '@visa/nova-styles/dist/themes/vault/index.css?raw'; 

const themesMap = {
  "default": themeDefault,
  "default-light": themeDefaultLight,
  "default-dark": themeDefaultDark,
  "default-hybrid": themeDefaultHybrid,
  "nova": themeNova,
  "visa-light": themeVisaLight,
  "visa-dark": themeVisaDark,
  "visa-hybrid": themeVisaHybrid,
  "visa-dark-alt": themeVisaDarkAlt,
  "visa-hybrid-alt": themeVisaHybridAlt,
  "vault": themeVault,
}; 

const Theme = ({...props}) => {
  const { globalState } = useContext(useGlobalState); 
  const styleRef = useRef();

  useEffect(() => {
    styleRef.current.textContent = globalState.theme in themesMap 
      ? themesMap[globalState.theme]
      : ''; 
  }, [globalState.theme]); 

  return (<>
    <style ref={styleRef}></style>
    {props.children}
  </>)
}; 

export default Theme; 
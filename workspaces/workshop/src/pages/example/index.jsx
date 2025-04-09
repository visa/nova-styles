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

/* VPDS Nova Icons */ 
import GenericSprite from '@visa/nova-icons-sprite/generic.svg?react'; 
import VisaSprite from "@visa/nova-icons-sprite/visa.svg?react";

/* Data Sources */ 
import useGlobalState from '../../data/global-state';
import useStickyState from '../../data/use-sticky-state'; 

const ExamplePage = ({ example, alternate=false, ...props}) => {
  const { globalState } = useContext(useGlobalState); 
  const [mode] = useStickyState(globalState.mode, 'w-mode'); 

  useEffect(() => {
    document.body.style.setProperty(
      'background',
      `repeating-conic-gradient(var(--w-background-darker) 0%, var(--w-background-darker) 25%, var(--w-background-lighter) 0%, var(--w-background-lighter) 50%) 50% center / 20px 20px`
    );
    document.body.style.setProperty(
      'padding',
      'var(--size-responsive-20)'
    );
    document.body.className = [
      'w-code-box',
      alternate ? 'w-code-box-alt' : ''
    ].join(' ').trim(); 
  }, [alternate]); 

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', mode); 
  }, [mode]);

  return (
    <>
      <div dangerouslySetInnerHTML={{__html:example}}></div>
      <VisaSprite />
      <GenericSprite />
    </>
  ); 
}; 

export default ExamplePage; 
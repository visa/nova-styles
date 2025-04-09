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
import React, { useRef } from 'react'; 

const Accordion = ({ id, label, expanded, onClick, children, ...props }) => {
  const accordionRef = useRef(null); 

  const handleClick = () => {
    if (typeof onClick === 'function') {
      setTimeout(() => {
        onClick(accordionRef.current.hasAttribute('open')); 
      }, 0); 
    }
  }; 

  return (
    <details className="v-accordion" ref={accordionRef} {...props}>
      <summary className="v-button v-button-secondary v-button-large v-accordion-toggle v-accordion-heading" onClick={handleClick}>
        <svg 
          focusable="false" 
          aria-hidden="true" 
          className="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" 
          viewBox="0 0 16 16"
        >
          <use href="#visa-chevron-right-tiny"></use>
        </svg>
        <svg 
          focusable="false" 
          aria-hidden="true" 
          className="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open"
          viewBox="0 0 16 16"
        >
          <use href="#visa-chevron-down-tiny"></use>
        </svg>
        {label}
      </summary>
      <div className="v-accordion-panel">
        {children}
      </div>
    </details> 
  )
}; 

export default Accordion; 
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

import "./styles.css"

const Search = ({label, id, onKeyUp, value, ...props}) => {
  const inputRef = useRef();

  const handleValue = (v) => {
    if (onKeyUp && typeof onKeyUp === 'function') {
      onKeyUp(v); 
    }
  }; 

  const clearValue = () => {
    handleValue(''); 
    inputRef.current.focus(); 
  }; 

  return (
    <div className="v-flex v-flex-col v-gap-4" {...props}>
      <label className="v-label" htmlFor={id}>
        {label}
      </label>
      <div className="w-search v-input-container v-surface v-flex-row">
        <div className="v-flex v-align-items-center v-gap-4">
          <svg focusable="false" aria-hidden="true" className="v-icon v-icon-tiny" viewBox="0 0 16 16">
              <use href="#visa-search-tiny" />
          </svg>
        </div> 
        <input 
          className="v-input" 
          type="text" 
          id={id} 
          name={id} 
          value={value} 
          onKeyUp={(e) => handleValue(e.target.value)} 
          onChange={(e) => handleValue(e.target.value)}
          ref={inputRef}
        />
        { value && value.length > 0 
          ? <div className="v-flex v-align-items-center v-gap-4">
            <button type="button" className="v-button v-button-icon v-button-tertiary v-button-small" aria-label="clear search" onClick={clearValue}>
                <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                    <use href="#visa-close-tiny"></use>
                </svg>
            </button>
          </div> 
          : null 
        }
      </div> 
    </div>
  )
}; 

export default Search; 
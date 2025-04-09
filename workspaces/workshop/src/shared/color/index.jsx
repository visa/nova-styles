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
import React, { useCallback, useEffect, useState } from 'react'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactGA from 'react-ga4';

/* Data Sources */
// import useGlobalState from '../../data/global-state';
import docs from '../../data/docs/metadata';

/* Static Assets */
import './styles.css';

const Color = ({ token, value, ...props}) => {
  // const { globalState } = useContext(useGlobalState); 
  const [tree, setTree] = useState([]); 

  const copyTokenVarToClipboard = (tokenVar) => {
    if (!tokenVar) return;
    const eventLabel = ['variable', tokenVar].join('=').toLowerCase();
    ReactGA.event({
      category: 'Nova Styles',
      action: 'copy_code',
      label: eventLabel,
    });
  }

  const getVarValue = useCallback((v) => (
    v in docs.entries.variables 
      ? docs.entries.variables[v] 
      : v in docs.entries.themes.nova.variables 
      ? docs.entries.themes.nova.variables[v]
      : null
  ), []); 

  useEffect(() => {
    const _tree = []; 

    if (
      token in docs.entries.variables ||
      token in docs.entries.themes.nova.variables 
    ) {
      let _value = getVarValue(token); 

      _tree.push(`var(${token})`); 

      while (_value !== null && _value.indexOf('var(') === 0) {
        _tree.push(_value);
        _value = getVarValue(_value.substring(_value.indexOf('--') + 2, _value.length - 1)); 
      }

      _tree.push(_value);
      setTree(_tree);
    }
  }, [token, getVarValue]); 

  return (
    <div className="w-color">
      <div className="w-color-token">
        {(
          value.indexOf('var(') === 0 || 
          value.indexOf('rgb') === 0 || 
          value.indexOf('hsl') === 0 || 
          value.indexOf('#') === 0
        ) 
          ? <div className="w-color-head">
            <div className="w-color-box">
              <div className="w-color-box-value" style={{ backgroundColor: `${value}` }}></div>
            </div>
          </div>
          : null 
        }
        <div className="w-color-variable">
          {`${token}`}
        </div>
      </div>
      {
        tree.map((t, i) => {
          const copyable = t !== null && t.indexOf('var(') === 0 ; // && t.indexOf('var(--color') < 0; 
          const isLast = i === tree.length - 1; 

          return (
            <div 
              key={i} 
              className={[
                "w-color-definition",
                "v-typography-body-2",
                copyable ? " w-color-copyable" : "",
                isLast ? "w-color-last" : ""
              ].join(' ').trim()}
            >
              {t} 
              {
                copyable
                  ? <CopyToClipboard text={t.replace('var(', '').replace(')', '')}>
                      <button 
                        className="v-button v-button-tertiary v-button-small" 
                        aria-label={`Copy the ${t} css variable code`}
                        onClick={() => copyTokenVarToClipboard(t)}
                      >
                        <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                          <use href="#visa-copy-tiny"></use>
                        </svg>
                        copy
                      </button>
                    </CopyToClipboard>
                  : null 
              }
            </div>
          );
        })
      }
    </div>
  )
}; 

export default Color; 
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
import React, { useContext, useEffect, useRef, useState } from 'react'; 
// import CodeMirror from '@uiw/react-codemirror';
// import { html } from '@codemirror/lang-html';
// import { oneDark } from '@codemirror/theme-one-dark'; 
import { Highlight, themes } from 'prism-react-renderer'; 
// import Beautify from 'beautify'; 
import { paramCase, sentenceCase } from 'change-case';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactGA from 'react-ga4';

/* Data Sources */
import useGlobalState from '../../data/global-state';

/* Shared Components */ 
import Link from '../link';
import Accordion from '../accordion';
import { sentenceCaseHelper } from '../utils/string-utils';

/* Styles */
import './styles.css'; 

const PUBLIC_URL = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "undefined"
  ? import.meta.env.BASE_URL
  : ''; 

const CodeView = ({ name = null, description = '', tags=[], markup, format = 'html', classes = [], exampleLink, component, renderMarkup = true, expanded = false, flat = false, iframed = false, ...props }) => {
  const { globalState } = useContext(useGlobalState);

  // const [isDarkMode, setDarkMode] = useState(false); 
  const [toRender, setToRender] = useState(markup);
  const [showCode, setShowCode] = useState(expanded); 
  const [showDescription, setShowDescription] = useState(false);
  const [showProgress, setShowProgress] = useState(!!iframed);
  // const [height, setHeight] = useState(42);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [copied, setCopied] = useState(false); 
  const iframeRef = useRef();

  const HASHTAGS = ["#docs", "#alternate", "#animation", "#custom"];

  const cleanDescription = (description) => {
    HASHTAGS.map(hashtag => description = description.replace(hashtag, '')); 
    return description;
  };

  const copyToClipboard = (component, name, copyClassType, className) => {
    const eventLabelClass = copyClassType && className ? [copyClassType, className.toLowerCase()].join("=") : null;
    const eventLabelComponent = [component, name.split(' ').join('-').toLowerCase()].join('-');
    const eventLabel = eventLabelClass ? [eventLabelComponent, eventLabelClass].join('-') : eventLabelComponent;

    setCopied(true); 
    window.setTimeout(() => setCopied(false), 2000); 

    ReactGA.event({
      category: 'Nova Styles',
      action: 'copy_code',
      label: eventLabel,
    });
  }

  const toggleShowCode = (val = null) => {
    setShowCode(val !== null ? val : !showCode);
  };

  const toggleShowDescription = () => {
    setShowDescription(!showDescription); 
  }; 

  const getCopyClassType = (name) => {
    return !name ? '' :
          name.indexOf('.') === 0 ? 'class' :
          name.indexOf('%') === 0 ? 'placeholder' : 
          name.indexOf('var') === 0 ? 'variable' :
          name.indexOf('(') > 0 ? 'mixin' : '';
  }

  const toggleAnimation = () => {
    setAnimationPaused(!animationPaused);
  }

  const loadProgress = () => {
    if (!iframeRef.current) return;
  
    iframeRef.current.removeEventListener('load', () => {}); 
    iframeRef.current.addEventListener('load', () => {
      setShowProgress(false);
    });
  }; 
  
  useEffect(() => {
    setToRender(markup.trim());
  }, [markup]);

  useEffect(() => {
    if (!iframeRef.current) return;
    loadProgress(); 
  }, [iframeRef]);

  return (<>
    {/* @TODO yarn add classnames */}
    <div className={[
      'w-code-box',
      'v-surface', 
      flat ? 'w-code-box-flat' : '', 
      tags.indexOf('alternate') >= 0 ? "w-code-box-alt" : ""
    ].join(' ').trim()} { ...props }>
      { (name || description) && renderMarkup
        ? <>
          <div className="w-code-header v-flex-wrap">
            { name 
              ? <div className="w-code-name">
                <h3 className="v-typography-headline-3" id={paramCase(name)}>
                  {sentenceCaseHelper(sentenceCase(name))}
                </h3>
              </div>
              : null 
            }
            <div className="w-code-actions v-flex-wrap">
            { tags.indexOf('animation') >= 0 
                ? (
                  <button
                    type="button"
                    className="v-button v-button-icon v-button-tertiary"
                    aria-label="toggle animation"
                    onClick={() => toggleAnimation()}
                  >
                    {animationPaused ? (
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        className="v-icon v-icon-visa v-icon-tiny"
                        viewBox="0 0 16 16"
                      >
                        <use href="#visa-media-play-alt-tiny"></use>
                      </svg>
                    ) : (
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        className="v-icon v-icon-visa v-icon-tiny"
                        viewBox="0 0 16 16"
                      >
                        <use href="#visa-media-pause-alt-tiny"></use>
                      </svg>
                    )}
                  </button>
                )
                : null 
              }
              { tags.indexOf('docs') >= 0 
                ? <div className="v-badge v-badge-neutral">#docs</div>
                : null 
              }
              { tags.indexOf('alternate') >= 0 
                ? <div className="v-badge v-badge-warning">#alternate</div>
                : null 
              }
              { tags.indexOf('custom') >= 0 
                ? <div className="v-badge v-badge-stable">#custom</div>
                : null 
              }
              {exampleLink
                ? <Link route={exampleLink} newWindow className="v-link" aria-label={`Example of ${name}; Opens in a new tab`}>
                  Example
                  <svg className="v-icon v-icon-tiny" viewBox="0 0 16 16">
                    <use href="#visa-maximize-tiny"></use>
                  </svg>
                </Link>
                : null 
              }
              {
                description.length > 0 
                  ? <button 
                    className="v-button v-button-tertiary" 
                    onClick={() => { toggleShowDescription() }} 
                    aria-controls={`show-description-${paramCase(name)}`} 
                    aria-expanded={showDescription ? "true" : "false"}
                    aria-label={`${showDescription ? "Hide" : "Show"} description for ${name}`}
                  >
                    {showDescription 
                      ? <span>Hide description</span> 
                      : <span>Show description</span>
                    }
                  </button>
                  : null 
              }
            </div>
          </div>
        </>
        : null 
      }
      
      {showDescription 
        ? <div className="w-code-description v-surface" aria-hidden="false" id={`show-description-${paramCase(name)}`} dangerouslySetInnerHTML={{__html: cleanDescription(description)}}></div>
        : null 
      }
      {
        renderMarkup 
          ? iframed || tags.indexOf('iframe') >= 0 
            ? <>
            {showProgress
              ? <div className=" w-code-loading">
                <progress className="v-progress v-progress-bar" id="progress-bar-indeterminate"></progress>
              </div>
              : null 
            }
            <iframe src={`${PUBLIC_URL}/${exampleLink}`} style={{ minBlockSize: '200px', inlineSize: '100%', padding: '0px' }} className="w-code-demo" title={`Interaction example for ${component} example "${name}"`} ref={iframeRef}></iframe>
            </>
            : <div 
              className={[
                "w-code-demo",
              ].join(' ').trim()}
              dangerouslySetInnerHTML={{__html: toRender}} 
              style={{
                animationPlayState: animationPaused ? "paused" : "running", 
              }}
            ></div>
          : null 
      }
      <div className="w-code-footer">
        <Accordion 
          id={`show-code-${paramCase(name)}`}
          label={showCode ? "Hide code" : "Show code"} 
          aria-label={`${showCode ? "Hide" : "Show"} code for ${component} ${name} example`}
          open={showCode}
          onClick={(val) => toggleShowCode(val)}
        >
          {
            toRender 
              ? <div className="w-code">
                <Highlight 
                  code={toRender} 
                  language="html" 
                  theme={globalState.theme.indexOf('dark') >= 0 || globalState.mode === "dark" ? themes.vsDark : themes.github}
                >
                  {({style, tokens, getLineProps, getTokenProps }) => (
                    <div className="w-code-container">
                      <div className="w-code-copy-container">
                        <CopyToClipboard text={toRender}>
                          <button 
                            className={[
                              "w-code-copy v-button v-button-tertiary v-button-icon v-button-small",
                              copied ? "w-code-copied" : ""
                            ].join(' ').trim()} 
                            aria-label={`Copy code of ${component} ${name} example`}
                            onClick={() => copyToClipboard(component, name)}
                          >
                            {copied 
                              ? <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                                <use href="#visa-checkmark-tiny"></use>
                              </svg>
                              : <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                                <use href="#visa-copy-tiny"></use>
                              </svg>
                            }

                            <span className="v-typography-label-active" aria-hidden={!copied ? "true" : "false"} aria-live="polite">Copied!</span>
                          </button>
                        </CopyToClipboard>
                      </div>
                      <div className="w-code-overflow">
                        <pre 
                          className="w-code-snippet"
                          style={{
                            ...style, 
                            textDecoration: 'inherit'
                          }}
                        >
                          {tokens.map((line, i) => (
                            <span {...getLineProps({ key: i, line })} key={i}>
                              <span style={{ 
                                display: 'inline-block',
                                opacity: '0.3',
                                userSelect: 'none', 
                                width: '2em'
                              }}>
                                {i + 1}
                              </span>
                              {line.map((token, key) => (
                                <span {...getTokenProps({ key, token })} key={key} />
                              ))}
                            </span>
                          ))}
                        </pre>
                      </div>
                    </div>
                  )}
                </Highlight>
                {/* <CodeMirror 
                  value={toRender}
                  height={`${height}px`}
                  theme={oneDark}
                  extensions={[html()]}
                  onChange={(value, viewUpdate) => {
                    formatMarkup(value); 
                  }}
                />  */}
            </div>
            : null 
          }
          {
            classes.map((x, i) => {
              // Get reusable class type (class, variable, placeholder, mixin)
              const copyClassType = getCopyClassType(x);

              return <div className="w-code-context" key={i}>
                <div className="w-code-class">
                  <code className="v-badge v-badge-subtle v-typography-label-large">
                    {x}
                  </code>
                </div>
                <div className="w-code-actions">
                  <CopyToClipboard text={x.name}>
                    <button 
                      className="v-button v-button-tertiary v-button-small" 
                      aria-label={`Copy ${x.name}; ${copyClassType} for the ${component} component ${name} example`}
                      onClick={() => copyToClipboard(component, name, copyClassType, x.name)} 
                    >
                      <svg focusable="false" aria-hidden="true" className="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
                        <use href="#visa-copy-tiny"></use>
                      </svg>
                      Copy {copyClassType}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            })
          }
        </Accordion> 
      </div>
    </div>
  </>)
};

export default CodeView;
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
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { noCase } from 'change-case'; 

/* Shared Components */
import CodeView from '../../shared/code-view'; 
import Header from '../../shared/header';
import Link from '../../shared/link';
import Menu from '../../shared/menu';
import SkipToContent from '../../shared/skip-to-content';
import TableOfContents from '../../shared/table-of-contents';

import browserVariablesPanel from '../../assets/images/browser-variables-panel.png';

/* Data Sources */
import useGlobalState from '../../data/global-state';
import useStickyState from '../../data/use-sticky-state';
import docs from '../../data/docs/metadata';

/* Styles */
import './styles.css';

/* VPDS Nova Icons */
import GenericSprite from '@visa/nova-icons-sprite/generic.svg?react'; 
import VisaSprite from "@visa/nova-icons-sprite/visa.svg?react";

ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);

const Home = ({ ...props }) => {
  const { globalState } = useContext(useGlobalState);
  const [contentDirection] = useStickyState('horizontal', 'w-content-direction');
  const { pathname } = useLocation();
  const contentRef = useRef(); 
  const headerRef = useRef(); 

  const toc = [
    {
      name: "Installation",
      ref: useRef(),
      children: [
        {
          name: "Yarn",
          ref: useRef(),
          children: []
        },
        {
          name: "NPM",
          ref: useRef(),
          children: []
        },
        {
          name: "Download",
          ref: useRef(),
          children: []
        },
      ]
    },
    {
      name: "Import",
      ref: useRef(),
      children: [
        {
          name: "HTML",
          ref: useRef(),
          children: []
        },
        {
          name: "React",
          ref: useRef(),
          children: []
        },
        {
          name: "Angular",
          ref: useRef(),
          children: []
        },
      ]
    },
    {
      name: "Usage",
      ref: useRef(),
      children: [
        {
          name: "Components",
          ref: useRef(),
          children: []
        },
        {
          name: "Utilities",
          ref: useRef(),
          children: []
        },
        {
          name: "Variables",
          ref: useRef(),
          children: []
        },
      ]
    },
    {
      name: "Theming",
      ref: useRef(),
      children: [
        {
          name: "Configuration",
          ref: useRef(),
          children: []
        },
        {
          name: "Colors and Palette",
          ref: useRef(),
          children: []
        },
        {
          name: "Typography",
          ref: useRef(),
          children: []
        },
        {
          name: "Themer App",
          ref: useRef(),
          children: []
        }
      ]
    },
    {
      name: "Customization",
      ref: useRef(),
      children: [
        {
          name: "Overrides",
          ref: useRef(),
          children: []
        },
        {
          name: "Variants",
          ref: useRef(),
          children: []
        },
        {
          name: "Abstracts",
          ref: useRef(),
          children: []
        },
        {
          name: "Variables or Utilities",
          ref: useRef(),
          children: []
        },
      ]
    }
  ]; 

  const getTocObject = (name) => {
    const found = toc.map(x => noCase(x.name) === noCase(name)
      ? x 
      : x.children && x.children.length > 0 
        ? x.children.map(y => noCase(y.name) === noCase(name) ? y : null) 
        : null
    ).flat().filter(x => x !== null); 

    return found.length > 0 ? found[0] : null; 
  }; 

  const getTocRef = (name) => {
    const object = getTocObject(name); 
    return object ? object.ref : null; 
  }; 

  // On page change, scroll to top
  useEffect(() => {
    setTimeout(() => {
      window?.scrollTo(0, 0);
    }, 1);
  }, [pathname]);

  useEffect(() => {
    console.log("Workshop", docs); 
  }, []); 

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Development site for Visa Product Design System's CSS library."
        />
        <title>Styles | Visa Product Design System</title>
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
        <main
          id="content"
          className={[
              'w-content', 
              contentDirection === 'vertical' ? 'w-content-vertical' : '',
              'v-pt-30'
            ].join(' ').trim()
          }
        >
          <div className="w-area" ref={contentRef}>
            <div className="w-home-area">
              <h1 className="v-typography-headline-1">VPDS Styles</h1>
              <br />
              <p>
                Themable CSS library for the Visa Product Design System that includes accessible
                html templates for static rendering and styles for web components and app
                develpment.
              </p>
              <br />
              <br />
              <div className="w-section-installation v-flex v-flex-row v-flex-nowrap v-gap-4">
                <div className="v-surface w-home-content">
                  <h2
                    className="v-typography-headline-2"
                    id="installation"
                    ref={getTocRef('installation')}
                  >
                    Installation
                  </h2>
                  <br />
                  <h3 className="v-typography-headline-3" id="yarn" ref={getTocRef('yarn')}>
                    Yarn
                  </h3>
                  <CodeView
                    name="yarn installation"
                    markup="yarn add @visa/nova-styles"
                    component="installation"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <h3 className="v-typography-headline-3" id="npm" ref={getTocRef('npm')}>
                    NPM
                  </h3>
                  <CodeView
                    name="npm installation"
                    markup="npm install @visa/nova-styles"
                    component="installation"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <h3 className="v-typography-headline-3" id="download" ref={getTocRef('download')}>
                    Download
                  </h3>
                  <br />
                  You can download the latest or any available version through artifactory:&nbsp;
                  <Link
                    aria-label="Download from artifactory opens in a new tab"
                    route="https://bookmarks.visa.com/vpds-nova-styles-artifactory"
                    newWindow
                  >
                    Download from artifactory (internal only)
                    <svg className="v-icon v-icon-tiny" width="16" height="16" viewBox="0 0 16 16">
                      <use href="#visa-maximize-tiny" />
                    </svg>
                  </Link>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2 className="v-typography-headline-2" id="import" ref={getTocRef('import')}>
                    Import
                  </h2>
                  <br />
                  <h3 className="v-typography-headline-3" id="html" ref={getTocRef('html')}>
                    HTML
                  </h3>
                  <CodeView
                    name="import html"
                    markup={`<link rel="stylesheet" href="path/to/nova-styles/styles.css" />\n<link rel="stylesheet" href="path/to/nova-styles/themes/visa-light/index.css" />`}
                    component="import"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <h3 className="v-typography-headline-3" id="react" ref={getTocRef('react')}>
                    React
                  </h3>
                  <CodeView
                    name="import react"
                    markup={
                      'import "@visa/nova-styles/styles.css";\nimport "@visa/nova-styles/themes/visa-light/index.css";'
                    }
                    component="import"
                    format="js"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <h3 className="v-typography-headline-3" id="angular" ref={getTocRef('angular')}>
                    Angular
                  </h3>
                  <CodeView
                    name="import angular"
                    markup={
                      '{\n  "styles": [\n    "node_modules/@visa/nova-styles/styles.css",\n    "node_modules/@visa/nova-styles/themes/visa-light/index.css",\n .   ...\n  ]\n}'
                    }
                    component="import"
                    format="json"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <br />
                  <br />
                  <h2 className="v-typography-headline-2" id="usage" ref={getTocRef('usage')}>
                    Usage
                  </h2>
                  <br />
                  <p>
                    Once you've imported your styles, just copy and paste the component examples on
                    this site into your application.
                  </p>
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="components"
                    ref={getTocRef('components')}
                  >
                    Components
                  </h3>
                  <br />
                  <p>
                    Rendering the components on your app is as easy as copying and pasting the code
                    examples. All native elements include support for{' '}
                    <code className="w-code v-badge v-badge-subtle">:hover</code>,{' '}
                    <code className="w-code v-badge v-badge-subtle">:active</code>,{' '}
                    <code className="w-code v-badge v-badge-subtle">:focus-visible</code>,{' '}
                    <code className="w-code v-badge v-badge-subtle">:checked</code>,{' '}
                    <code className="w-code v-badge v-badge-subtle">[readonly]</code>, and{' '}
                    <code className="w-code v-badge v-badge-subtle">:disabled</code> states, where
                    applicable.
                  </p>
                  <br />
                  <p>
                    Some more complex components would require Javascript interaction to give the
                    component full functionality, like{' '}
                    <Link route="components/accordion">accordion</Link> and{' '}
                    <Link route="components/section-message">section message</Link>, where the
                    consuming library or app would need to include some extra javascript
                    interactions to guarantee usability and accessibility.
                  </p>
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="utilities"
                    ref={getTocRef('utilities')}
                  >
                    Utilities
                  </h3>
                  <br />
                  <p>
                    Our library provides certain utility classes that let you shape your pages,
                    arrange components, and provide font styles. For more info and examples, see{' '}
                    <Link route="base/flex">flex</Link>, <Link route="base/spacing">spacing</Link>,
                    and <Link route="base/typography">typography</Link> base sections.
                  </p>
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="variables"
                    ref={getTocRef('variables')}
                  >
                    Variables
                  </h3>
                  <br />
                  <p>
                    Every component, abstract, utility, and base have variables that you can use
                    when creating your application. For more info and examples, visit any abstract
                    or component page or see <Link route="base/elevation">elevation</Link>,{' '}
                    <Link route="base/sizes">sizes</Link>, and{' '}
                    <Link route="base/typography">typography</Link> base sections.
                  </p>
                  <br />
                  <p>
                    To see all the variables available for each component, base, or abstract, please
                    refer to the <b className="v-typography-body-2-bold">tokens & variables</b>{' '}
                    panel on each element page.
                  </p>
                  <br />
                  <br />
                  <div className="v-flex v-flex-col v-gap-4">
                    <img  style={{'inlineSize': '100%'}} src={browserVariablesPanel} alt="Thumbnail of the tokens and variables panel" className="v-mx-auto" aria-describedby="browser-variables-panel-description" />
                    <br />
                    <span className="w-caption v-mx-auto" id="browser-variables-panel-description">
                      Tokens and variables panel is shown on the right of the component pages.
                    </span>
                  </div>
                  <br />
                  <br />
                  <br />
                  <h2 className="v-typography-headline-2" id="theming" ref={getTocRef('theming')}>
                    Theming
                  </h2>
                  <br />
                  <p>Our theming approach is meant to tackle at least these two scenarios: </p>
                  <br />
                  <ol className="w-list">
                    <li>small configuration with high impact (good for white labeling)</li>
                    <li>specific overrides for custom approach (good for custom look-and-feel)</li>
                  </ol>
                  <br />
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="configuration"
                    ref={getTocRef('configuration')}
                  >
                    Configuration
                  </h3>
                  <br />
                  <p>
                    The theming configuration allows you to modify a small set of variables for
                    maximum impact across components.
                  </p>
                  <CodeView
                    name="configure theme"
                    markup={
                      '<style>\n\
:root {\n\
  --theme-font-size: 14px;\n\
  --theme-focus-outline-size: 1px;\n\
  --theme-focus-outline-offset: var(--size-scalable-1);\n\
  --theme-border-size: 2px;\n\
  --theme-border-radius: 6px;\n\
  --theme-responsive-factor: 1;\n\
  --theme-scale-factor: 1;\n\
}\n\
</style>'
                    }
                    component="theming"
                    format="css"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <table className="v-table v-table-key-value">
                    <thead>
                      <tr className="v-table-tr">
                        <th className="v-table-th">Variable</th>
                        <th className="v-table-th">Default</th>
                        <th className="v-table-th">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">--theme-font-size</code>
                        </td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">14px</code>
                        </td>
                        <td className="v-table-td">
                          Base font size. Used to calculate <code>rem</code> units and typography
                          sizes.
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            --theme-border-radius
                          </code>
                        </td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">6px</code>
                        </td>
                        <td className="v-table-td">
                          Base border radius, set to define{' '}
                          <code className="w-code v-badge v-badge-subtle">
                            var(--size-rounded-medium)
                          </code>
                          . Used to calculate rest of rounded sizes variables.
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">--theme-border-size</code>
                        </td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">2px</code>
                        </td>
                        <td className="v-table-td">Default border width on new components.</td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            --theme-focus-outline-size
                          </code>
                        </td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">2px</code>
                        </td>
                        <td className="v-table-td">
                          Base focus outline width. Applies to all focus state outlines.
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            --theme-focus-outline-offset
                          </code>
                        </td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--size-scalable-1)
                          </code>
                        </td>
                        <td className="v-table-td">
                          Base focus outline space between edge of component and focus outline.
                          Applies to all focus state outlines.
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            --theme-responsive-factor
                          </code>
                        </td>
                        <td className="v-table-td">1.25</td>
                        <td className="v-table-td">
                          Float to use as multiplier for all responsive and scalable size variables
                          on small screens.
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            --theme-scale-factor
                          </code>
                        </td>
                        <td className="v-table-td">1.0</td>
                        <td className="v-table-td">
                          Float to use as multiplier for all scalable size variables across screens.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="colors-and-palette"
                    ref={getTocRef('colors and palette')}
                  >
                    Colors and Palette
                  </h3>
                  <br />
                  <p>
                    The simplest way to customize the theme is by adjusting the palette colors. The
                    palette is a set of colors which are associated to different parts across
                    components. For instance{' '}
                    <code className="w-code v-badge v-badge-subtle">surface</code> and{' '}
                    <code className="w-code v-badge v-badge-subtle">primary</code> are consumed
                    across components so they can be easily themed.
                  </p>
                  <br />
                  <p>
                    By default, different states are calculated based on the given hue, lightness,
                    and saturation provided. For instance, the hover state for primary raises the
                    given color's lightness by 10%.
                  </p>
                  <br />
                  <p>
                    When defining the theme palette while leveraging HSL automated state handling,
                    you need to provide hue, saturation, and lightness values for the following base
                    colors:{' '}
                  </p>
                  <br />
                  <table className="v-table v-table-border-block" style={{ width: '100%' }}>
                    <thead>
                      <tr className="v-table-tr">
                        <th className="v-table-th">Color Name</th>
                        <th className="v-table-th">HSL variables</th>
                        <th className="v-table-th">Shade using palette variable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">primary</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-primary-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-primary-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-primary-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-default-active)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">secondary</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-secondary-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-secondary-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-secondary-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-default-active-accent)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">lightest</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-lightest-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-lightest-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-lightest-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-default-surface-1)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">darkest</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-darkest-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-darkest-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-darkest-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-default-text)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">positive</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-positive-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-positive-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-positive-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-messaging-graphics-positive)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">warning</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-warning-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-warning-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-warning-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-messaging-graphics-warning)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">negative</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-negative-h)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-negative-s)
                          </code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">
                            var(--color-negative-l)
                          </code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-messaging-graphics-negative)' }}
                          ></div>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">info</td>
                        <td className="v-table-td">
                          <br />
                          <code className="w-code v-badge v-badge-subtle">var(--color-info-h)</code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">var(--color-info-s)</code>
                          <br />
                          <code className="w-code v-badge v-badge-subtle">var(--color-info-l)</code>
                          <br />
                          <br />
                        </td>
                        <td className="v-table-td">
                          <div
                            className="w-color-box"
                            style={{ background: 'var(--palette-messaging-graphics-info)' }}
                          ></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>
                    To see how these HSL palette color variables apply across the design palette,
                    see{' '}
                    <Link route="themes/default">the Default theme Tokens & Variables page</Link>.
                  </p>
                  <br />
                  <p>
                    In the case of Nova, all the palette colors have been specified directly,
                    overriding the automated state handling with HSL colors. To see a list of all
                    the Nova palette customized colors, see{' '}
                    <Link route="themes/nova">the Nova theme Tokens & Variables page</Link>.
                  </p>
                  <br />
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="typography"
                    ref={getTocRef('typography')}
                  >
                    Typography
                  </h3>
                  <br />
                  <p>
                    All typography styles and classes define and override the following base
                    typography variables. You can customize or override on any component or
                    typography utility class.
                  </p>
                  <br />
                  <table
                    className="v-table v-table-border-block v-table-key-value"
                    style={{ width: '100%' }}
                  >
                    <thead>
                      <tr className="v-table-tr">
                        <th className="v-table-th">Property</th>
                        <th className="v-table-th">Variable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">font family</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-font-family)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">font size</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-font-size)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">font weight</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-font-weight)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">letter spacing</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-letter-spacing)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">line height</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-line-height)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">text decoration</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-text-decoration)
                          </code>
                        </td>
                      </tr>
                      <tr className="v-table-tr-alt">
                        <td className="v-table-td">text transform</td>
                        <td className="v-table-td">
                          <code className="w-code v-badge v-badge-subtle">
                            var(--typography-text-transform)
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>
                    To see all the typography classes and variables, please visit the{' '}
                    <Link route="base/typography">base typography examples</Link>.
                  </p>
                  <br />
                  <br />

                  <h3 className="v-typography-headline-3" id="themer-app" ref={getTocRef('themer app')}>
                    Themer App
                  </h3>
                  <br />
                  <p>
                    Feel free to create, save, and export custom themes directly on our&nbsp;
                    <Link route={'https://bookmarks.visa.com/vpds-theme-app'} newWindow>
                      Themer App! (internal only)
                      <svg className="v-icon v-icon-tiny" width="16" height="16" viewBox="0 0 16 16">
                        <use href="#visa-maximize-tiny" />
                      </svg>
                    </Link>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2
                    className="v-typography-headline-2"
                    id="customization"
                    ref={getTocRef('customization')}
                  >
                    Customization
                  </h2>
                  <br />
                  <p>Further customization is enabled via a combination of approaches:</p>
                  <br />
                  <ol className="w-list">
                    <li>overriding css variables available</li>
                    <li>leveraging utility classes to create custom component variants</li>
                    <li>using available abstracts to create components with smaller pieces</li>
                  </ol>
                  <br />
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="overrides"
                    ref={getTocRef('overrides')}
                  >
                    CSS Overrides
                  </h3>
                  <br />
                  <p>
                    CSS variable overrides can be performed at different levels. One could edit the
                    theme or the component directly. In order to change a button color at the theme
                    level, one could update the primary color HSL values:
                  </p>
                  <CodeView
                    name="override css color variables"
                    markup={
                      '@layer overrides {\n\
  :root {\n\
    --color-primary-h: 266;\n\
    --color-primary-s: 99%;\n\
    --color-primary-l: 67%;\n\
  }\n\
}'
                    }
                    component="overrides"
                    format="css"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <p>
                    Alternatively, in the case of Nova, one could update the palette variables
                    directly:
                  </p>
                  <CodeView
                    name="override css palette"
                    markup={
                      '@layer overrides {\n\
  :root {\n\
    --palette-default-active: #a158fe;\n\
    --palette-default-active-hover: #b77fff;\n\
    --palette-default-active-pressed: #7528d8;\n\
  }\n\
}'
                    }
                    component="overrides"
                    format="css"
                    renderMarkup={false}
                    expanded
                    flat
                  />
                  <p>
                    When overriding only one component or one instance of a component without
                    customizing the whole theme, one could redefine the component variables
                    directly:
                  </p>
                  <CodeView
                    name="override css component variables"
                    markup={
                      '<style>\n\
@layer overrides {\n\
  .my-checkbox {\n\
    --v-checkbox-color: #a158fe;\n\
    --v-checkbox-hover-color: #b77fff;\n\
    --v-checkbox-focus-color: #b77fff;\n\
    --v-checkbox-active-color: #7528d8;\n\
    --v-checkbox-hover-glow-color: #e6d4fc;\n\
    --v-checkbox-focus-glow-color: #e6d4fc;\n\
    --v-checkbox-active-glow-color: #dbbfff;\n\
  }\n\
}\n\
</style>\n\
<div class="v-flex v-align-items-center v-gap-2">\n\
    <input type="checkbox" class="v-checkbox my-checkbox" id="my-checkbox" />\n\
    <label class="v-label" for="my-checkbox">Label</label>\n\
</div>\
'
                    }
                    component="overrides"
                    format="html"
                    expanded
                    flat
                  />
                  <br />
                  <br />
                  <h3 className="v-typography-headline-3" id="variants" ref={getTocRef('variants')}>
                    Variants
                  </h3>
                  <br />
                  <p>
                    For some customization efforts, you may need to update the markup structure or
                    the display properties of the component. We provide some examples of some
                    variants that can help make the component your own.
                  </p>
                  <br />
                  <p>
                    View more examples of this approach in the{' '}
                    <Link route="abstracts/input">input abstract examples</Link>.
                  </p>
                  <br />
                  <p>
                    Also, view utility classes available that can help you shape your components
                    with <Link route="base/typography">typography</Link>,{' '}
                    <Link route="base/flex">flex</Link>, and{' '}
                    <Link route="base/spacing">spacing</Link> examples.
                  </p>
                  <br />
                  <br />
                  <h3
                    className="v-typography-headline-3"
                    id="abstracts"
                    ref={getTocRef('abstracts')}
                  >
                    Abstracts
                  </h3>
                  <br />
                  <p>
                    For some customization efforts, you may want to start with some pre-wired basic
                    elements to extend and create your own component. Please see the abstracts
                    provided to see more examples.{' '}
                  </p>
                  <br />
                  <br />
                  <h3 className="v-typography-headline-3" id="variables-or-utilities" ref={getTocRef('variables-or-utilities')}>
                    Overriding with CSS Variables or utility classes
                  </h3>
                  <br />
                  <p>Some properties such as flex, spacing, elevation, and typography can be overriden via css variables OR utilities</p>
                  <CodeView
                    name=" Padding override"
                    markup={
                      `<div class="v-flex v-gap-10">\n\
  <div class="v-surface" style="--v-surface-padding-block: var(--size-scalable-20)">20px vertical padding add via css variable</div>\n\
  <div class="v-surface v-py-20">20px vertical padding add via utility class</div>\n\
</div>`}
                    component="padding-override"
                    format="html"
                    expanded
                    flat
                  />
                  <CodeView
                    name="Elevation override"
                    markup={
                      `<div class="box" style="box-shadow: var(--elevation-xlarge);">Via variable</div>\n\
<div class="box v-elevation-xlarge">Via utility</div>\
`}
                    component="elevation-override"
                    format="html"
                    expanded
                    flat
                  />
                  <CodeView
                    name="Typography override"
                    markup={`<div class="v-chip">Original Chip</div>\
<div class="v-chip" style="--typography-font-family: var(--typography-label-large-active-font-family); --typography-font-size: var(--typography-label-large-active-font-size); --typography-font-weight: var(--typography-label-large-active-font-weight); --typography-letter-spacing: var(--typography-label-large-active-letter-spacing); --typography-line-height: var(--typography-label-large-active-line-height); --typography-text-decoration: var(--typography-label-large-active-text-decoration); --typography-text-transform: var(--typography-label-large-active-text-transform);">Bold chip via css variables</div>\n\
<div class="v-chip v-typography-label-large-active">Bold chip via utility class</div>\n\
`}
                    component="elevation-override"
                    format="html"
                    expanded
                    flat
                  />
                  <br />
                </div>
                <TableOfContents outline={toc} headerRef={headerRef} contentRef={contentRef} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <VisaSprite />
      <GenericSprite />
    </>
  );
};

export default Home; 

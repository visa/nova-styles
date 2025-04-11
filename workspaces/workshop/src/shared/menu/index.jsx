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
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { paramCase, sentenceCase } from 'change-case';

/* Shared Components */
import Link from '../link';
import Search from '../search';

/* Data Sources */
import useGlobalState from '../../data/global-state';
import actionTypes from '../../data/global-state/action-types';
import docs from '../../data/docs/metadata';

/* Styles */
import './styles.css';

const Menu = ({ selectedType, selectedItem, ...props }) => {
  const { dispatch, globalState } = useContext(useGlobalState);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [subMenuOpen, setSubMenuOpen] = useState([selectedType]);
  // define media query:
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const [isMdMedia, setIsMdMedia] = useState(mediaQuery.matches);

  const TYPES = useMemo(() => ['base', 'abstracts', 'components', 'themes'], []);

  const flattenData = useCallback(() => {
    setFiltered(
      filter.length === 0
        ? []
        : [
            Object.keys(docs.entries)
              .filter((x) => TYPES.indexOf(x.trim()) >= 0)
              .sort((a) => TYPES.indexOf(a) - Object.keys(docs.entries).indexOf(a))
              .map((x) =>
                Object.keys(docs.entries[x]).map((y) => ({
                  type: x.trim(),
                  item: y.trim(),
                }))
              )
              .flat(),
          ]
            .flat()
            .filter(
              (x) => x.type.indexOf(filter) >= 0 || (x.item !== null && x.item.indexOf(filter) >= 0)
            )
    );
  }, [filter, TYPES]);

  const toggleSubMenu = (type) => {
    const submenu = [...subMenuOpen];
    if (submenu.indexOf(type) < 0) {
      submenu.push(type);
    } else {
      submenu.splice(submenu.indexOf(type), 1);
    }
    setSubMenuOpen(submenu);
  };

  useEffect(() => {
    flattenData();
  }, [filter, flattenData]);

  mediaQuery.onchange = (e) => {
    if (e.matches) {
      // show nav automatically when viewport is over 768px
      dispatch({type: actionTypes.setSideNav, payload: true});
      setIsMdMedia(true)
    } else {
      // close nav automatically when viewport is smaller than 768px
      dispatch({type: actionTypes.setSideNav, payload: false});
      setIsMdMedia(false);
    }
  }

  const closeOnClick = () => {
    if (isMdMedia) {
      return;
    }
    dispatch({type: actionTypes.setSideNav, payload: false});
  }

  return (
    <nav 
      role="navigation"
      className={[
        'w-nav',
        'v-nav',
        'v-nav-vertical',
        globalState.sideNavOpen ? '' : 'v-hide'
      ].join(' ').trim()}
      {...props}
    >
      {docs.version ? (
        <span
          className="v-badge v-badge-info v-typography-body-1 v-sm-container-hide v-desktop-container-hide v-mx-auto"
          style={{ color: 'var(--palette-default-text-subtle)' }}
        >
          {`v${docs.version}`}
        </span>
      ) : null}
      <div className="v-surface">
        <Search
          label="Find components"
          id="component-finder"
          value={filter}
          onKeyUp={(e) => setFilter(e)}
          className="v-mx-8"
        />
      </div>
      <ul className="v-tabs v-tabs-vertical">
        {filter.length > 0 ? (
          filtered.map((d, i) => (
            <li key={i} className="v-tab">
              {d.item === null ? (
                <div>{sentenceCase(d.type)}</div>
              ) : (
                <Link
                  route={`${paramCase(d.type)}/${paramCase(d.item)}`}
                  className="v-button v-button-tertiary"
                  aria-current={selectedType === d.type && selectedItem === d.item ? 'page' : null}
                  onClick={() => closeOnClick()}
                >
                  {sentenceCase(d.item)}
                </Link>
              )}
            </li>
          ))
        ) : (
          <>
            <li className="v-tab">
              <Link
                route={'#get-started'}
                className="v-button v-button-tertiary"
                aria-current={!selectedType && !selectedItem ? 'page' : null}
                onClick={() => closeOnClick()}
              >
                Get started
              </Link>
            </li>
            {Object.keys(docs.entries)
              .sort((a) => TYPES.indexOf(a) - Object.keys(docs.entries).indexOf(a))
              .map((d, i) =>
                TYPES.indexOf(d) >= 0 ? (
                  <li key={i} className="v-tab">
                    <button
                      className="v-button v-button-tertiary"
                      aria-expanded={subMenuOpen.indexOf(d) >= 0 ? 'true' : 'false'}
                      onClick={() => {
                        toggleSubMenu(d);
                      }}
                    >
                      {sentenceCase(d)}
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        className="v-icon v-icon-visa v-icon-tiny v-tab-suffix"
                        viewBox="0 0 16 16"
                      >
                        <use
                          href={`#visa-chevron-${
                            subMenuOpen.indexOf(d) >= 0 ? 'up' : 'down'
                          }-tiny`}
                        ></use>
                      </svg>
                    </button>
                    {subMenuOpen.indexOf(d) >= 0 ? (
                      <ul className="v-tabs v-tabs-vertical">
                        {Object.keys(docs.entries[d]).map((e, j) => (
                          e === "nova" || e === "default" 
                            ? null 
                            : <li key={j} className="v-tab">
                              <Link
                                route={`${paramCase(d)}/${paramCase(e)}`}
                                className="v-button v-button-tertiary"
                                aria-current={
                                  selectedType === d && selectedItem === e ? 'page' : null
                                }
                                onClick={() => closeOnClick()}
                              >
                                {e === "nova" ? null : sentenceCase(e)}
                              </Link>
                            </li>
                        ))}
                        {d === "themes"
                          ? <li className="v-tab">
                            <Link 
                              route={'https://bookmarks.visa.com/vpds-theme-app'} 
                              className="v-button v-button-tertiary"
                              aria-label="create a custom theme(opens a new tab)"
                              newWindow
                            >
                              Custom (internal only)
                              <svg className="v-icon v-icon-tiny v-tab-suffix" width="16" height="16" viewBox="0 0 16 16">
                                <use href="#visa-maximize-tiny" />
                              </svg>
                            </Link>
                          </li>
                          : null
                        }
                      </ul>
                    ) : null}
                  </li>
                ) : null
              )}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;

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
import React, {
  useCallback,
  // useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { paramCase } from 'change-case';

/* Shared Components */
import Color from '../../../shared/color';
import Search from '../../../shared/search';
import Panel from '../../../shared/panel';

/* Data Sources */
// import useGlobalState from '../../../data/global-state';
import useStickyState from '../../../data/use-sticky-state';
import docs from '../../../data/docs/metadata';

/* Styles */
import './styles.css';

const Drawer = ({
  contentDirection,
  setContentDirection,
  type,
  item,
  ...props
}) => {
  // const { globalState } = useContext(useGlobalState);
  const [selectedTab, setSelectedTab] = useStickyState(
    'components',
    'w-drawer-tab'
  );
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [expandedDrawer, setExpandedDrawer] = useState(true);
  // define media query:
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const TABS = useMemo(
    () => ({
      colors: 'color',
      palette: 'palette',
      theme: 'theme',
      abstracts: 'v',
      component: 'v',
    }),
    []
  );

  const ABSTRACTS = useMemo(
    () => [
      'action-primary',
      'action-secondary',
      'input',
      'messaging',
      'surface',
    ],
    []
  );

  mediaQuery.onchange = (e) => {
    if (e.matches) {
      // show nav automatically when viewport is over 768px
      setExpandedDrawer(true);
    } else {
      // close nav automatically when viewport is smaller than 768px
      setExpandedDrawer(false);
    }
  };

  // const buttonTabDefaultStyles = {
  //   backgroundColor: 'var(--palette-default-transparent)',
  //   border: '0px',
  //   borderBottom: '2px solid var(--color-white-50)'
  // };

  // const buttonTabSelectedStyles = {
  //   ...buttonTabDefaultStyles,
  //   borderBottom: '2px solid var(--palette-default-active)'
  // };

  const filterData = useCallback(() => {
    const merged = {
      ...docs.entries.variables,
      ...docs.entries.themes.nova.variables,
    };

    setFiltered(
      Object.keys(merged)
        .filter((x) =>
          selectedTab === 'component' &&
          type === 'components' &&
          x.indexOf(`--${TABS[selectedTab]}-${paramCase(item)}`) === 0
            ? x
            : selectedTab === 'component' &&
              type === 'abstracts' &&
              ABSTRACTS.indexOf(paramCase(item)) >= 0 &&
              x.indexOf(`--${TABS[selectedTab]}-${paramCase(item)}`) === 0
            ? x
            : selectedTab === 'component' &&
              type === 'base' &&
              x.indexOf(paramCase(item.substring(0, item.length - 1))) === 0
            ? x
            : selectedTab !== 'component' &&
              x.indexOf(`--${TABS[selectedTab]}`) === 0
            ? x
            : null
        )
        .filter((x) => (filter.length > 0 ? x.indexOf(filter) >= 0 : x))
    );
  }, [
    filter,
    item,
    type,
    selectedTab,
    TABS,
    ABSTRACTS,
  ]);

  useEffect(() => {
    filterData();
  }, [filter, filterData, selectedTab]);

  return (
    <aside className="w-drawer">
      <Panel
        className="v-ml-auto"
        id="w-token-drawer"
        expanded={expandedDrawer}
        onClick={() => setExpandedDrawer(!expandedDrawer)}
        label={'Token & Variables panel'}
      >
        <div className="v-panel-header v-flex v-flex-col v-gap-10 v-p-8 v-pb-10">
          <h2 className="v-typography-headline-3">Tokens & variables</h2>
          <div className="v-flex v-flex-col v-gap-4">
            <label className="v-label" htmlFor="token-category">
              Select token category
            </label>
            <div className="v-input-container v-surface v-flex-row">
              <select
                className="v-input"
                id="token-category"
                name="token-category"
                value={selectedTab}
                onChange={(e) => {
                  setSelectedTab(e.target.value);
                }}
              >
                {Object.keys(TABS).map((tab, t) => (
                  <option key={t} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
              <div className="v-input-control">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  className="v-icon v-icon-visa v-icon-tiny"
                  viewBox="0 0 16 16"
                >
                  <use href="#visa-chevron-down-tiny"></use>
                </svg>
              </div>
            </div>
          </div>
          <Search
            label="Find tokens"
            id="token-finder"
            value={filter}
            onKeyUp={(e) => setFilter(e)}
          />
        </div>

        <hr className="v-divider v-divider-decorative" />
        <div
          className="v-panel-body v-p-8 v-mt-10"
          style={
            contentDirection === 'vertical'
              ? {
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  gap: '10px',
                }
              : {}
          }
        >
          {filtered.map((x, i) => (
            <div style={{ paddingBottom: '20px' }} key={i}>
              <Color
                token={x}
                value={
                  x in docs.entries.variables
                    ? docs.entries.variables[x]
                    : x in docs.entries.themes.nova.variables
                    ? docs.entries.themes.nova.variables[x]
                    : null
                }
              />
            </div>
          ))}
        </div>
      </Panel>
    </aside>
  );
};

export default Drawer;

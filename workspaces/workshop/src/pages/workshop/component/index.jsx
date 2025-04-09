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
import React, { useEffect, useState } from 'react';
import { sentenceCase, paramCase } from 'change-case';

/* Shared Components */
import CodeView from '../../../shared/code-view';
import { sentenceCaseHelper } from '../../../shared/utils/string-utils';

/* Internal Components */
// import Drawer from '../drawer';

/* Data Sources */
// import useStickyState from '../../../data/use-sticky-state';
import docs from '../../../data/docs/metadata';

const WorkshopComponent = ({ type, item, ...props }) => {
  const [selectedTab, setSelectedTab] = useState('examples');
  const [groupedExamples, setGroupedExamples] = useState({}); 
  const [filteredClasses, setFilteredClasses] = useState([]); 
  const [filteredVariables, setFilteredVariables] = useState([]);
  // const [contentDirection, setContentDirection] = useStickyState(
  //   'horizontal',
  //   'w-content-direction'
  // );

  useEffect(() => {
    setFilteredClasses(
      docs.entries[type][item]
        .map(x => x.classes)
        .flat()
        .filter((x, pos, self) => self.indexOf(x) === pos)
    ); 

    setFilteredVariables(item === "typography" 
      ? Object.keys(docs.entries.themes.nova.variables).filter((x) => x.indexOf(`--${paramCase(item)}`) === 0)
      : Object.keys(docs.entries.variables).filter((x) => (
        type === "components" || type === "abstracts"
        ? x.indexOf(`--v-${paramCase(item)}`) === 0
        : type === "base" 
        ? x.indexOf(`--${paramCase(item.substring(0, item.length - 1))}`) === 0
        : false
      ))
    );

    const temp = {}; 
    docs.entries[type][item]
      .forEach(x => {
        if (!(x.section in temp)) {
          temp[x.section] = [];
        }
        temp[x.section].push(x); 
      });
    
    Object.keys(temp).forEach(section => {
      temp[section] = temp[section].sort((a,b) => a.order - b.order)
    });

    setGroupedExamples(temp); 
  }, [type, item]); 

  return (
    <>
      <main className="w-area" id="content">
        <div className="v-px-30">
          <h1 className="v-typography-headline-1 v-my-30">{sentenceCase(item)}</h1>
          {/* <hr className="v-divider v-divider-section" />
          <br /> */}
          <ul className="v-tabs v-tabs-horizontal" role="tablist">
            <li className="v-tab" role="none">
              <button   
                className="v-button v-button-large v-button-tertiary" 
                onClick={() => setSelectedTab('examples')}
                role="tab"
                aria-selected={(selectedTab === 'examples') + ""} 
                aria-controls="component-examples"
              >
                Examples
              </button>
            </li>
            <li className="v-tab" role="none">
              <button 
                className="v-button v-button-large v-button-tertiary" 
                onClick={() => setSelectedTab('api')}
                role="tab"
                aria-selected={(selectedTab === 'api') + ""} 
                aria-controls="component-api-table"
              >
                API
              </button>
            </li>
          </ul>
        </div>
        <div className="v-surface v-px-30 v-pt-30">
          {selectedTab === 'examples' 
            ? <div id="component-examples" role="tabpanel">
              {Object.keys(groupedExamples).map((group, i) => (
                <React.Fragment key={i}>
                  <h2 className="v-typography-headline-2 v-my-24">
                    {isNaN(group.slice('-')[0]) 
                      ? sentenceCase(group) 
                      : sentenceCaseHelper(sentenceCase(group.substring(group.indexOf('-') + 1)))
                    }
                  </h2>
                  {
                    groupedExamples[group].map((e, j) => (
                      <CodeView
                        name={e.name}
                        description={e.description}
                        tags={e.tags}
                        markup={e.markup}
                        classes={e.classes}
                        exampleLink={
                          e.name.toLowerCase() !== item.toLowerCase()
                            ? `${paramCase(type)}/${paramCase(
                                item
                              )}/example/${paramCase(e.name)}`
                            : null
                        }
                        component={item}
                        iframed={e.tags.indexOf('iframe') >= 0 }
                        key={j}
                      />
                    ))
                  }
                </React.Fragment>
              ))
              }
              {/* { docs.entries[type][item].sort((a,b) => a.order - b.order).map((e, i) => (
                <React.Fragment key={i}>
                  {item.toLowerCase() === e.name.toLowerCase() ? (
                    <>
                      <p dangerouslySetInnerHTML={{ __html: e.description }}></p>
                    </>
                  ) : !e.markup && e.name.includes('#heading') ? (
                    <h2 className="v-typography-headline-2">{e.name.replace('#heading', '')}</h2>
                  ) : (
                    <CodeView
                      name={e.name}
                      description={e.description}
                      tags={e.tags}
                      markup={e.markup}
                      classes={e.classes}
                      exampleLink={
                        e.name.toLowerCase() !== item.toLowerCase()
                          ? `${paramCase(type)}/${paramCase(
                              item
                            )}/example/${paramCase(e.name)}`
                          : null
                      }
                      component={item}
                      iframed={e.tags.indexOf('iframe') >= 0 }
                    />
                  )}
                  <br />
                </React.Fragment>
              ))}  */}
            </div> 
            : selectedTab === 'api' 
            ? <div id="component-api-table" role="tabpanel">
              <h2 className="v-typography-headline-2 v-my-12">Classes</h2>
              {filteredClasses.length === 0
                ? <span>No classes/selectors available for this component.</span>
                : <table className="v-table v-table-alt">
                  <caption className="v-sr">API components table</caption>
                  <thead>
                    <tr>
                      <th className="v-th">
                        Class
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClasses.map((x, i) => (
                      <tr key={i}>
                        <td className="v-td">{x}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }

              <h2 className="v-typography-headline-2 v-mt-36 v-mb-12">Variables</h2>
              {filteredVariables.length === 0  
                ? <span>No variables available for this component.</span>
                : <table className="v-table v-table-alt">
                  <caption className="v-sr">API variables table</caption>
                  <thead>
                    <tr>
                      <th className="v-th">
                        Variable
                      </th>
                      <th className="v-th">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVariables.map((x, i) => (
                      <tr key={i}>
                        <td className="v-td">{x}</td>
                        {
                          item === "typography"
                          ? <td className="v-td">{docs.entries.themes.nova.variables[x]}</td>
                          : <td className="v-td">{docs.entries.variables[x]}</td>
                        }
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
            : null 
          }
        </div>
      </main>
      {/* <Drawer
        contentDirection={contentDirection}
        setContentDirection={setContentDirection}
        type={type}
        item={item}
      /> */}
    </>
  );
};

export default WorkshopComponent;

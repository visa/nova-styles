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
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { paramCase } from "change-case";

/* Data Sources */
import { GlobalStateProvider } from "../data/global-state/provider";
// import { metadata as docs } from '../data/docs';
import docs from "../data/docs/metadata";

/* App Pages */
import Changelog from "../pages/changelog";
import Example from "../pages/example";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Workshop from "../pages/workshop";

/* Shared Components */
import Theme from "../shared/theme";

/* VPDS Nova CSS */
import "@visa/nova-styles/dist/styles.css";

const PUBLIC_URL =
  import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "undefined"
    ? import.meta.env.BASE_URL
    : "";

function App() {
  return (
    <Router>
      <GlobalStateProvider>
        <Theme>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={`${PUBLIC_URL}`} element={<Home />} />
            <Route
              exact
              path={`${PUBLIC_URL}/assets/data.json`}
              element={<React.Fragment>{JSON.stringify(docs)}</React.Fragment>}
            />
            <Route
              path={`${PUBLIC_URL}/components/nav`}
              element={
                <Navigate
                  to={`${PUBLIC_URL}/components/horizontal-navigation`}
                />
              }
            />
            {Object.keys(docs.entries).map((d, i) =>
              d === "variables"
                ? null
                : Object.keys(docs.entries[d]).map((e, j) => (
                    <>
                      <Route
                        path={`${PUBLIC_URL}/${paramCase(d)}/${paramCase(e)}`}
                        element={<Workshop type={d} item={e} />}
                        key={`${i}-${j}`}
                      />
                      {Object.keys(docs.entries[d][e]).map((f, k) =>
                        "markup" in docs.entries[d][e][f] &&
                        docs.entries[d][e][f].markup !== null ? (
                          <Route
                            path={`${PUBLIC_URL}/${paramCase(d)}/${paramCase(
                              e
                            )}/example/${paramCase(
                              docs.entries[d][e][f].name
                            )}`}
                            element={
                              <Example
                                example={docs.entries[d][e][f].markup}
                                alternate={
                                  docs.entries[d][e][f].tags &&
                                  docs.entries[d][e][f].tags.length > 0
                                    ? docs.entries[d][e][f].tags.indexOf(
                                        "alternate"
                                      ) >= 0
                                    : false
                                }
                                 patterns={
                                  docs.entries[d][e][f].tags &&
                                  docs.entries[d][e][f].tags.length > 0
                                    ? docs.entries[d][e][f].tags.indexOf(
                                        "patterns"
                                      ) >= 0
                                    : false
                                }
                              />
                            }
                            key={`${i}-${j}-${k}`}
                          />
                        ) : null
                      )}
                    </>
                  ))
            )}
            <Route path={`${PUBLIC_URL}/changelog`} element={<Changelog />} />
          </Routes>
        </Theme>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;

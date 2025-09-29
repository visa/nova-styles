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
import React, { useContext, useCallback, useEffect, useState } from "react";
import { capitalCase, paramCase } from "change-case";

import { AlluvialDiagram } from "@visa/charts-react/dist/components/visa-charts";

import Link from "../../../shared/link";

/* Data Sources */
import useGlobalState from "../../../data/global-state";
import actionTypes from "../../../data/global-state/action-types";
import docs from "../../../data/docs/metadata";

/* Styles */
import "./styles.css";

const WorkshopTheme = ({ type, item, ...props }) => {
  const { globalState, dispatch } = useContext(useGlobalState);
  const [relationalGraphData, setRelationalGraphData] = useState([]);
  const [relationalGraphNodes, setRelationalGraphNodes] = useState([]);
  const [relationalGraphSegment, setRelationalGraphSegment] =
    useState("palette");
  const [hoverLink, setHoverLink] = useState({});
  const [selectedTab, setSelectedTab] = useState("config");

  const cleanVar = (x) =>
    x.indexOf("var") === 0
      ? x.replace("var(", "").substring(0, x.length - 7)
      : x;

  const calculateLayer = (x) =>
    x.indexOf("--color") === 0
      ? 1
      : x.indexOf("--palette") === 0
      ? 2
      : x.indexOf("--theme") === 0
      ? 3
      : x.indexOf("--v-") === 0
      ? 4
      : 0;

  const buildRelationalGraph = useCallback(
    (data, segment) =>
      data
        ? Object.keys(data)
            .filter(
              (x) =>
                x.indexOf("breakpoint") < 0 &&
                x.indexOf("size") < 0 &&
                x.indexOf("color") < 0 &&
                x.indexOf("theme") < 0 &&
                x.indexOf("visa") < 0 &&
                data[x].indexOf("px") < 0 &&
                data[x].indexOf("size") < 0 &&
                data[x].indexOf("typography") < 0 &&
                data[x].indexOf("sans-serif") < 0 &&
                (data[x].indexOf("#") === 0 ||
                  data[x].indexOf("v") === 0 ||
                  data[x].indexOf("color") === 0 ||
                  data[x].indexOf("rgb") === 0 ||
                  data[x].indexOf("hsl") === 0)
            )
            .map((x) => ({
              group: `layer-${calculateLayer(x)}`,
              source: cleanVar(data[x]),
              target: cleanVar(x),
              value: 1,
            }))
            .filter((x) =>
              segment === "all"
                ? true
                : segment === "palette"
                ? x.target.indexOf("--color") === 0 ||
                  x.target.indexOf("--palette") === 0
                : x.source.indexOf("--palette") === 0 &&
                  x.target.indexOf(`--v-${segment}`) === 0
            )
        : [],
    []
  );

  const handleApplyTheme = () => {
    dispatch({
      type: actionTypes.setTheme,
      payload: paramCase(item),
    });
  };

  useEffect(() => {
    const mergedDocs = {
      ...docs.entries.variables,
      ...docs.entries.themes[item].variables,
    };
    const rel = buildRelationalGraph(mergedDocs, relationalGraphSegment);
    buildRelationalGraph(mergedDocs, relationalGraphSegment);
    setRelationalGraphData(rel);
    setRelationalGraphNodes(
      rel
        .map((x) => [x.source, x.target])
        .flat()
        .filter((x, i, s) => s.indexOf(x) === i)
        .map((x) => ({ id: x }))
    );
  }, [relationalGraphSegment, buildRelationalGraph, item]);

  return (
    <main className="w-content" id="content">
      <div className="w-area v-p-30">
        <div className="v-flex v-flex-row v-justify-content-between v-align-items-center v-gap-12">
          <h1 className="v-typography-headline-1 v-flex-grow">
            {item === "nova" ? "Visa light" : capitalCase(item)}
          </h1>
          <button
            className="v-button"
            disabled={paramCase(globalState.theme) === paramCase(item)}
            onClick={handleApplyTheme}
          >
            Apply this theme
          </button>
          <Link
            className="v-button v-button-secondary"
            route={"https://bookmarks.visa.com/vpds-theme-app"}
            newWindow
          >
            Create a custom theme (internal only)
            <svg
              className="v-icon v-icon-tiny"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href="#visa-maximize-tiny" />
            </svg>
          </Link>
        </div>
        <br />
        {item === "visa" || item === "default" ? (
          <div className="v-message v-section">
            <svg
              focusable="false"
              aria-hidden="true"
              className="v-icon v-icon-visa v-icon-low v-message-icon"
              viewBox="0 0 24 24"
            >
              <use href="#visa-information-low"></use>
            </svg>
            <div className="v-message-content">
              As of v1.6.4 we've streamlined our theming system. Instead of
              maintaining separate {capitalCase(item)} light,{" "}
              {capitalCase(item)} dark, and {capitalCase(item)} hybrid themes,
              we now offer a single {capitalCase(item)} theme with built-in
              light / dark mode support. The older themes remain available for
              backward compatibility, but we encourage everyone to migrate to
              the new {capitalCase(item)} theme. See{" "}
              <a
                aria-label="Themes in our system (opens a new tab)"
                className="v-link v-link-no-underline"
                href="https://design.visa.com/base-elements/design-tokens/overview/#themes-in-our-system"
                rel="noreferrer noopener"
                target="_blank"
              >
                Themes in our system
                <svg
                  aria-hidden="true"
                  className="v-icon v-icon-generic v-icon-tiny v-icon-information"
                  focusable="false"
                  viewBox="0 0 16 16"
                >
                  <use href="#visa-maximize-tiny"></use>
                </svg>
              </a>{" "}
              to learn more.
            </div>
          </div>
        ) : null}
        <br />
        <ul role="tablist" className="v-tabs v-tabs-horizontal">
          <li className="v-tab" role="none">
            <button
              className="v-button v-button-tertiary"
              role="tab"
              aria-selected={selectedTab === "config" ? "true" : "false"}
              onClick={() => setSelectedTab("config")}
            >
              Theme Config
            </button>
          </li>
          <li className="v-tab" role="none">
            <button
              className="v-button v-button-tertiary"
              role="tab"
              aria-selected={selectedTab === "palette" ? "true" : "false"}
              onClick={() => setSelectedTab("palette")}
            >
              Palette
            </button>
          </li>
          <li className="v-tab" role="none">
            <button
              className="v-button v-button-tertiary"
              role="tab"
              aria-selected={selectedTab === "typography" ? "true" : "false"}
              onClick={() => setSelectedTab("typography")}
            >
              Typography
            </button>
          </li>
          {Object.keys(docs.entries.themes[item].variables).filter(
            (x) => x.indexOf("--elevation") >= 0
          ).length > 0 ? (
            <li className="v-tab" role="none">
              <button
                className="v-button v-button-tertiary"
                role="tab"
                aria-selected={selectedTab === "elevation" ? "true" : "false"}
                onClick={() => setSelectedTab("elevation")}
              >
                Elevation
              </button>
            </li>
          ) : null}
          {/* <li className="v-tab" role="none">
            <button 
              className="v-button v-button-tertiary" 
              role="tab" 
              aria-selected={selectedTab === 'component' ? "true" : "false"} 
              onClick={() => setSelectedTab('component')}
            >
              Component Overrides
            </button>
          </li> */}
          {/* <li className="v-tab" role="none">
            <button 
              className="v-button v-button-tertiary" 
              role="tab" 
              aria-selected={selectedTab === 'graph' ? "true" : "false"} 
              onClick={() => setSelectedTab('graph')}
            >
              Propagation Graph
            </button>
          </li> */}
        </ul>

        <br />

        {selectedTab === "config" ? (
          <div className="v-card v-card-body">
            <div className="v-message v-section">
              <svg
                focusable="false"
                aria-hidden="true"
                className="v-icon v-icon-visa v-icon-low v-message-icon"
                viewBox="0 0 24 24"
              >
                <use href="#visa-information-low"></use>
              </svg>
              <div className="v-message-content">
                For more information, see our{" "}
                <Link route="#configuration">
                  Theming Configuration guidelines
                </Link>
                .
              </div>
            </div>
            <br />
            <table
              className="v-table v-table-border-block"
              border="1"
              width="100%"
            >
              <thead align="left">
                <tr className="v-tr">
                  <th className="v-th">Variable</th>
                  <th className="v-th">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(docs.entries.themes[item].variables).map((x, i) =>
                  x.indexOf("--theme") === 0 ? (
                    <tr className="v-tr" key={i}>
                      <td className="v-td">
                        <code className="w-code v-badge v-badge-subtle">
                          {`var(${x})`}
                        </code>
                      </td>
                      <td className="v-td">
                        <code
                          className={[
                            "w-code v-badge",
                            docs.entries.themes[item].variables[x].indexOf(
                              "var"
                            ) === 0
                              ? "v-badge-subtle"
                              : "",
                          ].join(" ")}
                        >
                          {docs.entries.themes[item].variables[x]}
                        </code>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "palette" ? (
          <div className="v-card v-card-body">
            <div className="v-message v-section">
              <svg
                focusable="false"
                aria-hidden="true"
                className="v-icon v-icon-visa v-icon-low v-message-icon"
                viewBox="0 0 24 24"
              >
                <use href="#visa-information-low"></use>
              </svg>
              <div className="v-message-content">
                For more information, see our{" "}
                <Link route="#colors-and-palette">
                  Colors and Palette guidelines
                </Link>
              </div>
            </div>
            <br />
            {/* @TODO updated after table component is implemented/merged VDS-3441 */}
            <table
              className="v-table v-table-border-block"
              border="1"
              width="100%"
            >
              <thead align="left">
                <tr className="v-tr">
                  <th className="v-th">Variable</th>
                  <th className="v-th">Value</th>
                  <th className="v-th">Figma Token</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(docs.entries.themes[item].variables).map((x, i) =>
                  x.indexOf("--palette") === 0 ? (
                    <tr className="v-tr" key={i}>
                      <td className="v-td">
                        <code className="w-code v-badge v-badge-subtle">
                          {`var(${x})`}
                        </code>
                      </td>
                      <td className="v-td">
                        <div className="w-color-head">
                          <div className="w-color-box">
                            <div
                              className="w-color-box-value"
                              style={{
                                backgroundColor: `var(${x})`,
                              }}
                            ></div>
                          </div>
                          <div className="w-color-variable">
                            {docs.entries.themes[item].variables[x]}
                          </div>
                        </div>
                      </td>
                      <td className="v-td">
                        {capitalCase(x.replace("--palette", ""))}
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "elevation" ? (
          <div className="v-card v-card-body">
            <div className="v-message v-section">
              <svg
                focusable="false"
                aria-hidden="true"
                className="v-icon v-icon-visa v-icon-low v-message-icon"
                viewBox="0 0 24 24"
              >
                <use href="#visa-information-low"></use>
              </svg>
              <div className="v-message-content">
                For more information, see our{" "}
                <Link route="#configuration">
                  Theming Configuration guidelines
                </Link>
                .
              </div>
            </div>
            <br />
            <table
              className="v-table v-table-border-block"
              border="1"
              width="100%"
            >
              <thead align="left">
                <tr className="v-tr">
                  <th className="v-th">Variable</th>
                  <th className="v-th">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(docs.entries.themes[item].variables).map((x, i) =>
                  x.indexOf("--elevation") === 0 ? (
                    <tr className="v-tr" key={i}>
                      <td className="v-td">
                        <code className="w-code v-badge v-badge-subtle">
                          {`var(${x})`}
                        </code>
                      </td>
                      <td className="v-td">
                        <code
                          className={[
                            "w-code v-badge",
                            docs.entries.themes[item].variables[x].indexOf(
                              "var"
                            ) === 0
                              ? "v-badge-subtle"
                              : "",
                          ].join(" ")}
                        >
                          {docs.entries.themes[item].variables[x]}
                        </code>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "typography" ? (
          <div className="v-card v-card-body">
            <div className="v-message v-section">
              <svg
                focusable="false"
                aria-hidden="true"
                className="v-icon v-icon-visa v-icon-low v-message-icon"
                viewBox="0 0 24 24"
              >
                <use href="#visa-information-low"></use>
              </svg>
              <div className="v-message-content">
                For more information, see our{" "}
                <Link route="#configuration">
                  Theming Configuration guidelines
                </Link>
                .
              </div>
            </div>
            <br />
            <table
              className="v-table v-table-border-block"
              border="1"
              width="100%"
            >
              <thead align="left">
                <tr className="v-tr">
                  <th className="v-th">Variable</th>
                  <th className="v-th">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(docs.entries.themes[item].variables).map((x, i) =>
                  x.indexOf("--typography") === 0 ? (
                    <tr className="v-tr" key={i}>
                      <td className="v-td">
                        <code className="w-code v-badge v-badge-subtle">
                          {`var(${x})`}
                        </code>
                      </td>
                      <td className="v-td">
                        <code
                          className={[
                            "w-code v-badge",
                            docs.entries.themes[item].variables[x].indexOf(
                              "var"
                            ) === 0
                              ? "v-badge-subtle"
                              : "",
                          ].join(" ")}
                        >
                          {docs.entries.themes[item].variables[x]}
                        </code>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "component" ? (
          <div className="v-card v-card-body">
            <div className="v-message v-section">
              <svg
                focusable="false"
                aria-hidden="true"
                className="v-icon v-icon-visa v-icon-low v-message-icon"
                viewBox="0 0 24 24"
              >
                <use href="#visa-information-low"></use>
              </svg>
              <div className="v-message-content">
                For more information, see our{" "}
                <Link route="#configuration">
                  Theming Configuration guidelines
                </Link>
                .
              </div>
            </div>
            <br />
            <table
              className="v-table v-table-border-block"
              border="1"
              width="100%"
            >
              <thead align="left">
                <tr className="v-tr">
                  <th className="v-th">Variable</th>
                  <th className="v-th">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(docs.entries.themes[item].variables).map((x, i) =>
                  x.indexOf("--v") === 0 ? (
                    <tr className="v-tr" key={i}>
                      <td className="v-td">
                        <code className="w-code v-badge v-badge-subtle">
                          {`var(${x})`}
                        </code>
                      </td>
                      <td className="v-td">
                        <code
                          className={[
                            "w-code v-badge",
                            docs.entries.themes[item].variables[x].indexOf(
                              "var"
                            ) === 0
                              ? "v-badge-subtle"
                              : "",
                          ].join(" ")}
                        >
                          {docs.entries.themes[item].variables[x]}
                        </code>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "graph" ? (
          <>
            <div
              className="v-flex v-flex-col v-gap-4"
              style={{ width: "300px" }}
            >
              <label className="v-label" htmlFor="token-relationships">
                Select token category
              </label>
              <div className="v-input-container v-surface v-flex">
                <select
                  className="v-input"
                  id="token-relationships"
                  name="token-relationships"
                  value={relationalGraphSegment}
                  onChange={(e) => {
                    setRelationalGraphSegment(e.target.value);
                  }}
                >
                  <option name="all">all</option>
                  <option name="palette">palette</option>
                  <optgroup label="components">
                    {Object.keys(docs.entries.components).map((x, i) => (
                      <option key={i} value={x}>
                        {x}
                      </option>
                    ))}
                  </optgroup>
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

            <br />
            <br />

            {/* @TODO restore alluvial diagram after react update, see todo above */}
            {relationalGraphData.length > 0 ? (
              <AlluvialDiagram
                colorPalette="single_categorical_blue"
                cursor="pointer"
                dataLabel={{
                  visible: true,
                  placement: "inside",
                  labelAccessor: "id",
                  format: "",
                  collisionHideOnly: false,
                  collisionPlacement: "top",
                }}
                groupAccessor="group"
                onHoverEvent={(event) =>
                  setHoverLink({ ...event.detail.data, group: "highlight" })
                }
                onMouseOutEvent={(event) => setHoverLink("")}
                hoverStyle={{ color: "var(--palette-default-active-accent" }}
                hoverOpacity={0.5}
                hoverHighlight={hoverLink}
                nodeData={relationalGraphNodes}
                linkData={relationalGraphData}
                nodeConfig={{
                  alignment: "left",
                  compare: true,
                  fill: false,
                  padding: relationalGraphSegment === "all" ? 20 : 2,
                  width: relationalGraphSegment === "all" ? 12 : 8,
                }}
                sourceAccessor="source"
                targetAccessor="target"
                valueAccessor="value"
                mainTitle="Theme's CSS Variables"
                subTitle="Propagation scheme and architecture"
                width={1400}
                height={relationalGraphSegment === "all" ? 4200 : 920}
              ></AlluvialDiagram>
            ) : (
              <>No relationships found for {relationalGraphSegment}.</>
            )}
          </>
        ) : null}
      </div>
    </main>
  );
};

export default WorkshopTheme;

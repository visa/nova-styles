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
import { paramCase } from "change-case";

const Panel = ({ id, label, expanded, onClick, children, ...props }) => {
  return (
    <div className="v-panel v-panel-expandable">
      <button
        type="button"
        aria-label={label}
        aria-controls={paramCase(id)}
        aria-expanded={expanded ? "true" : "false"}
        onClick={() => onClick()}
        {...props}
        className="v-panel-toggle v-button v-button-large v-button-icon v-button-subtle v-button-secondary"
      >
        <svg
          focusable="false"
          aria-hidden="true"
          className="v-icon v-icon v-icon-visa v-icon-tiny"
          viewBox="0 0 16 16"
        >
          {expanded ? (
            <use href="#visa-media-fast-forward-tiny"></use>
          ) : (
            <use href="#visa-media-rewind-tiny"></use>
          )}
        </svg>
      </button>
      {expanded ? <div
        className="v-panel-content v-surface"
        aria-hidden={expanded ? "false" : "true"}
        id={paramCase(id)}
      >
        {children}
      </div> : null}
      
    </div>
  );
};

export default Panel;

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
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const _breakpoints = {
  "min": 0,
  "xs": 320,
  "sm": 480,
  "md": 768,
  "lg": 1024,
  "xl": 1440,
  "xxl": 1600,
  "max": Math.pow(10, 10)
};

const Responsive = ({ maxBreakpoint, minBreakpoint, children, ...props }) => {
  const [matchesMin, setMatchesMin] = useState(false);
  const [matchesMax, setMatchesMax] = useState(false);

  const toggleMin = (isMin) => {
    setMatchesMin(isMin.matches);
  };

  const toggleMax = (isMax) => {
    setMatchesMax(isMax.matches);
  };

  const setup = useCallback(() => {
    const isMin = window.matchMedia(`(min-width: ${_breakpoints[minBreakpoint]}px)`);
    const isMax = window.matchMedia(`(max-width: ${_breakpoints[maxBreakpoint]}px)`);

    toggleMin(isMin);
    toggleMax(isMax);

    isMin.addListener(toggleMin);
    isMax.addListener(toggleMax);
  }, [minBreakpoint, maxBreakpoint]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <>
      { matchesMin && matchesMax ? children : null }
    </>
  );
};

Responsive.propTypes = {
  children: PropTypes.any,
  maxBreakpoint: PropTypes.oneOf(Object.keys(_breakpoints)),
  minBreakpoint:  PropTypes.oneOf(Object.keys(_breakpoints))
};

Responsive.defaultProps = {
  children: <></>,
  maxBreakpoint: 'max',
  minBreakpoint: 'min'
};

export default Responsive;
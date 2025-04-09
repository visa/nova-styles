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
import { useReducer } from 'react';
import useCodemirrorOverrides from '../use-codemirror-overrides';

import useGlobalState from './index'; 
import initialState from './initial-state';
import reducer from './reducer';

export const GlobalStateProvider = props => {
  useCodemirrorOverrides()

  const [globalState, dispatch] = useReducer(reducer, initialState);
  return <useGlobalState.Provider {...props} value={{globalState, dispatch}} />
};
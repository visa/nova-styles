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
import actionTypes from './action-types'; 

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setDocs: 
      return { ...state, docs: action.payload }; 
    case actionTypes.setTheme:
      window.localStorage.setItem("w-theme", action.payload);
      return { ...state, theme: action.payload };
    case actionTypes.setMode: 
      window.localStorage.setItem("w-mode", action.payload);
      return { ...state, mode: action.payload }; 
    case actionTypes.setSideNav:
      return { ...state, sideNavOpen: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
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
import { useEffect, useState } from 'react';

const isJSON = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false;
  }
  return true;
};

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return (
      stickyValue !== 'undefined' &&
      stickyValue !== undefined &&
      stickyValue !== null
    )
      ? isJSON(stickyValue) 
        ? JSON.parse(stickyValue) 
        : stickyValue
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useStickyState;

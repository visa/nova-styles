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
"use strict"

const parseArgs = (args = []) => {
  const pargs = {}; 

  args.forEach((a, i) => {
    var v = true; 

    if (a.indexOf('--') === 0) {
      var _a = '';

      if (a.indexOf('=') > 0) {
        _a = a.split('=')[0].substring(2);
        v = a.split('=')[1];
      } else {
        _a = a.substring(2);
      }

      if (_a.length === 0) {
        throw Error(`invalid argument: ${a}`);
      }

      pargs[_a] = v;
    } else {
      pargs[a] = v;
    }
  });

  return pargs;
};

const Process = (f = null) => {
  if (typeof f !== "function") {
    throw Error('please provide a function for this process to run')
  }

  f(parseArgs(process.argv.slice(2))); 

  return Process;
}; 

module.exports = Process; 
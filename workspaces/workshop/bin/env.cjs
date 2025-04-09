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
const fs = require('fs'); 
const path = require('path'); 
const { getFile, createFile } = require('../../../bin/fsio.cjs'); 

const PATH = '.env'; 

const Process = (() => {
  let pargs = {}; 

  const processArgs = (args = []) => {
    args.forEach((a, i) => {
      if (a.indexOf('--') === 0) {
        var _a = a.substring(2);
        if (_a in pargs) {
          pargs[_a] = true;
        }
      }
    });
  };

  const getEnvironment = () => {
    try {
      if (fs.existsSync(ENV)) {
        return getFile(PATH); 
      }
    } catch(err) {
      return createFile(PATH); 
    }
  }

  const setEnvironment = () => {
    const KVP = {
      "FAST_REFRESH": "false",
      "GENERATE_SOURCEMAP": "false",
      "VITE_APP_GA_TRACKING_ID": "G-ER1Y9VSTKY"
    };

    const lines = getEnvironment()
      .split('\n')
      .filter(l => l.length > 0); 
    const keys = lines.map(l => l.split('=')[0]); 
    
    Object.keys(KVP).map((key) => {
      if (keys.indexOf(key) < 0) {
        lines.push(`${key}=${KVP[key]}`); 
      } 
      
      fs.writeFileSync(
        path.resolve(PATH),
        `${lines.join('\n')}`
      ); 
    });
  }; 

  processArgs(process.argv); 

  setEnvironment(); 
})(); 

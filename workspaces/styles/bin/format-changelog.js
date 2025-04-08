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

const { getFile } = require('../../../bin/fsio.cjs');
const { version } = require('os');

const SOURCE = './CHANGELOG.md';
const DEST = './CHANGELOG.md';

const Process = (() => {
  const getAllSubstrings = (str, sub) => {
    const indeces = []; 
    let current = 0; 
    while (current < str.length) {
      let found = str.substr(current).indexOf(sub)
      
      // none found 
      if (found < 0) {
        break; 
      }

      // at least one found 
      indeces.push(current + found); 
      current = current + found + sub.length; 
    }

    return indeces; 
  }

  const getCompareVersions = (url, find, replace) => url.substring(url.lastIndexOf('/') + 1).split('...'); 

  const replaceVersionUrl = (haystack, needle, replace) => {
    let _string = (' ' + haystack).slice(1); 
    const indeces = getAllSubstrings(haystack, needle); 
    const urlsMatched = []

    indeces.forEach(ix => {
      const ogUrl = _string.substr(ix, _string.substr(ix).indexOf(')')); 
      const ogVersions = getCompareVersions(ogUrl);
      const newUrl = replace(ogVersions[0], ogVersions[1]);  
      urlsMatched.push([ogUrl, newUrl]); 
    }); 

    urlsMatched.forEach(url => {
      _string = _string.replaceAll(url[0], url[1]); 
    }); 

    return _string
  }

  const formatChangelog = () => {
    console.log("Formatting changelog.\n");
    const replaceVersionFunc = (from, to) => `https://stash.trusted.visa.com:7990/projects/VC/repos/nova-styles/compare/diff?sourceBranch=refs%2Ftags%2F${to}&targetRepoId=30601&targetBranch=refs%2Ftags%2F${from}`;

    const changelogContent = getFile(path.resolve(SOURCE))
      .replaceAll(
        'https://stash.trusted.visa.com:7990/projects/VC/repos/nova-styles/commit/',
        'https://stash.trusted.visa.com:7990/projects/VC/repos/nova-styles/commits/'
      )
      .replaceAll(
        'https://stash.trusted.visa.com:7990/projects/VC/repos/nova-styles/issues/',
        'https://issues.trusted.visa.com/browse/'
      ); 
      
    const changelog = replaceVersionUrl(
      replaceVersionUrl(
        changelogContent,
        'https://stash.trusted.visa.com:7990/projects/VC/repos/nova-styles/compare/v',
        replaceVersionFunc
      ),
      'https://stash.trusted.visa.com:7990/scm/vc/nova-styles/compare/v',
      replaceVersionFunc
    );
    
    fs.writeFileSync(path.resolve(DEST), changelog); 
  };

  formatChangelog(); 
})();


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
const INDENT = '  '; 

const DEFAULT_CONFIG = {
  indent: '  ',
  indentOffset: 0,
  skip: [], 
  sorted: true
}

const getCssIndented = (
  css, 
  offset=DEFAULT_CONFIG.indentOffset, 
  indent=DEFAULT_CONFIG.indent
) => {
  let _offset = offset; 
  return css
    .split('\n')
    .map(x => {
      if (x.indexOf('}') >= 0) {
        _offset--; 
      }

      let line = `${indent.repeat(_offset)}${x.trim()}`;

      if (x.indexOf('{') >= 0) {
        _offset++; 
      }

      return line;
    })
    .join('\n'); 
}; 

const getCssDefinition = (
  name, 
  startDelimiter, 
  endDelimiter, 
  indent, 
  offset, 
  skip, 
  css
) => {
  const index = css.indexOf(name); 
  const subCSS = css.substr(index + name.length); 

  let isOpen = false; 
  let openMaps = 0; 
  let done = false; 
  let result = '';

  // capturing only lines in block 
  // (between startDelimiter and endDelimiter)
  [...subCSS].forEach(c => {
    if (done) {
      return; 
    }

    if (c === endDelimiter) {
      openMaps--; 
      if (isOpen && openMaps === 0) {
        isOpen = false;
        done = true; 
      }
    }

    if (isOpen) {
      result = `${result}${c}`; 
    }
    
    if (c === startDelimiter) {
      isOpen = true; 
      openMaps++; 
    }
  });

  // cleaning and filter non-empty lines 
  result = result.split('\n')
    .filter(x => skip.length > 0 
      // skipping lines with provided pattern(s)
      ? skip
        .map(y => 
          x.indexOf(y) < 0
        )
        .reduce(
          (p, c) => (p || c), 
          false
        )
      : true
    )
    .filter(x => x.trim().length > 0)
    .join('\n');

  return getCssIndented(result, offset, indent); 
}; 


const getMapDefinition = (name, css, config) => {
  const nConfig = {
    ...DEFAULT_CONFIG,
    ...config
  }; 
  
  return getCssDefinition(
    `${name}:`, 
    '(', 
    ')', 
    nConfig.indent, 
    nConfig.indentOffset,
    nConfig.skip, css
  ); 
}; 

const getBlockDefinition = (name, css, config=DEFAULT_CONFIG) => {
  const nConfig = {
    ...DEFAULT_CONFIG,
    ...config
  }; 

  return getCssDefinition(
    name, 
    '{', 
    '}', 
    nConfig.indent, 
    nConfig.indentOffset,
    nConfig.skip, 
    css
  ); 
};

const removeLayers = (css, splitChar='\n') => {
  let par = 0;

  return css.split(splitChar)
    .map(line => {
      if (line.indexOf('@layer') >= 0) {
        return null; 
      } 

      if (line.indexOf('{') > 0) {
        par += 1; 
      }

      if (line.indexOf('}') >= 0) {
        par -= 1; 
      }

      if (par < 0) {
        par = 0;
        return null;
      }

      return line;
    })
    .filter(line => (
      line !== null 
    ))
    .join(splitChar); 
}; 

const uglify = (css) => {
  return css.replaceAll('{', ' {\n')
    .replaceAll('}', '\n}\n')
    .replaceAll(';', ';\n');
}; 

module.exports = {
  getMapDefinition,
  getBlockDefinition,
  removeLayers,
  uglify
}; 
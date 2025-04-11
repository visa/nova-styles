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
const { openSync, readdirSync, readFileSync, statSync } = require('fs');
const path = require('path');

const getDirsFiltered = (dir, file) => readdirSync(dir).filter(f => {
  try {
    return statSync(path.join(dir, f)).isDirectory() &&
    statSync(path.join(dir, `${f}/${file}`)).isFile();
  } catch (err) {
    return false;
  }
}); 

const getDirs = (dir) => readdirSync(dir).filter(f => {
  return statSync(path.join(dir, f)).isDirectory()
}); 

const getFiles = (dir) => readdirSync(dir).filter(f => {
  return !statSync(path.join(dir, f)).isDirectory() &&
  f.indexOf('.') !== 0;
});

const getFile = (filepath) => (
  readFileSync(path.resolve(filepath), 'utf-8')
); 

const createFile = (filepath, flags = 'w') => {
  openSync(path.resolve(filepath), flags)
  return getFile(filepath); 
}; 

module.exports = {
  getDirs,
  getDirsFiltered,
  getFiles,
  getFile,
  createFile
};

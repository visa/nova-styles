#!/usr/bin/env node
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

/* eslint-disable no-console */

const { program } = require('commander');
const componentGenerator = require('../generators/component');
const abstractsGenerator = require('../generators/abstracts'); 
const themeGenerator = require('../generators/theme'); 

const generatorTypes = [
  'component'
];

let generatorType = null;
let generatedName = null;

program
  .version('0.0.1')
  .arguments('<type> [name]')
  .action((type, name) => {
    generatorType = type;
    generatedName = name;
  });

program.parse(process.argv);

if (!generatorType) {
  console.error(`Please select what to generate. One of ${generatorTypes.toString()}`);
  process.exit(1);
}

if (generatorType === 'component') {
  componentGenerator();
} else if (generatorType === 'abstracts') {
  abstractsGenerator(); 
} else if (generatorType === 'theme') {
  themeGenerator(); 
}

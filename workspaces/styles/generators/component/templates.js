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
const changeCase = require('change-case'); 

const actionPrimaryTemplate = require('./templates/action-primary.js'); 
const actionPrimaryStatelessTemplate = require('./templates/action-primary-stateless.js'); 
const actionSecondaryTemplate = require('./templates/action-secondary.js'); 
const actionSecondaryStatelessTemplate = require('./templates/action-secondary-stateless.js'); 
const blankTemplate = require('./templates/blank.js'); 
const messagingTemplate = require('./templates/messaging.js');
const inputTemplate = require('./templates/input.js'); 
const surfaceTemplate = require('./templates/surface.js'); 

module.exports = {
  "blank": blankTemplate,
  "action-primary": actionPrimaryTemplate,
  "action-primary-stateless": actionPrimaryStatelessTemplate,
  "action-secondary": actionSecondaryTemplate,
  "action-secondary-stateless": actionSecondaryStatelessTemplate,
  "input": inputTemplate,
  "messaging": messagingTemplate,
  "surface": surfaceTemplate
}; 
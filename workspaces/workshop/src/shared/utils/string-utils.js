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
// Preserve hyphens  
const phraseMap = {
    'multi page': 'multi-page',
    'single page': 'single-page',
    'single select': 'single-select',
    'multi select': 'multi-select',
    'visa': 'Visa',
    'right to left': 'right-to-left',
    'two color': 'two-color',
    'ui': 'UI',
}
  
export const sentenceCaseHelper = (text) => {
let result = text;
const regexPattern = new RegExp(`\\b(${Object.keys(phraseMap).join('|')})\\b`, 'gi');
result = result.replace(regexPattern, (match) => {
    const lowerCaseMatch = match.toLowerCase();

    let replacement = phraseMap[lowerCaseMatch];

    // Preserve casing
    if (match[0] === match[0].toUpperCase()) {
    replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);

    }
    return replacement;
});
return result;
}
<!--
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
 -->
---
title: Table with group headers
description: Table with alternate headers. Recommended use for group headers is with vertical borders for readability. 
classes: ['.v-th-alt']
tags: ['docs']
order: 7
---

<table class="v-table v-table-border">
  <caption class="v-sr">
    This is required text that describes the table in more detail.
  </caption>
  <thead>
    <tr class="v-typography-overline">
      <th class="v-th-alt" colspan="2">
        Group header 1
      </th>
      <th class="v-th-alt" colspan="2">
        Group header 2
      </th>
    </tr>
    <tr>
      <th class="v-th">
        Column A
      </th>
      <th class="v-th">
        Column B
      </th>
      <th class="v-th">
        Column C
      </th>
      <th class="v-th">
        Column D
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="v-td">
        A1
      </td>
      <td class="v-td">
        B1
      </td>
      <td class="v-td">
        C1
      </td>
      <td class="v-td">
        D1
      </td>
    </tr>
    <tr>
      <td class="v-td">
        A2
      </td>
      <td class="v-td">
        B2
      </td>
      <td class="v-td">
        C2
      </td>
      <td class="v-td">
        D2
      </td>
    </tr>
    <tr>
      <td class="v-td">
        A3
      </td>
      <td class="v-td">
        B3
      </td>
      <td class="v-td">
        C3
      </td>
      <td class="v-td">
        D3
      </td>
    </tr>
  </tbody>
</table>

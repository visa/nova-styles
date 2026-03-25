<!--
 *              © 2025-2026 Visa
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
      <th class="v-th-alt" colspan="2" id="group-header-1">
        Group header 1
      </th>
      <th class="v-th-alt" colspan="2" id="group-header-2">
        Group header 2
      </th>
    </tr>
    <tr>
      <th class="v-th" headers="group-header-1" id="column-A">
        Column A
      </th>
      <th class="v-th" headers="group-header-1" id="column-B">
        Column B
      </th>
      <th class="v-th" headers="group-header-2" id="column-C">
        Column C
      </th>
      <th class="v-th" headers="group-header-2" id="column-D">
        Column D
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="v-td" id="A1" headers="group-header-1 column-A">
        A1
      </th>
      <td class="v-td" headers="group-header-1 column-B A1">
        B1
      </td>
      <td class="v-td" headers="group-header-2 column-C A1">
        C1
      </td>
      <td class="v-td" headers="group-header-2 column-D A1">
        D1
      </td>
    </tr>
    <tr>
      <th scope="row" class="v-td" id="A2" headers="group-header-1 column-A">
        A2
      </th>
      <td class="v-td" headers="group-header-1 column-B A2">
        B2
      </td>
      <td class="v-td" headers="group-header-2 column-C A2">
        C2
      </td>
      <td class="v-td" headers="group-header-2 column-D A2">
        D2
      </td>
    </tr>
    <tr>
      <th scope="row" class="v-td" id="A3" headers="group-header-1 column-A">
        A3
      </th>
      <td class="v-td" headers="group-header-1 column-B A3">
        B3
      </td>
      <td class="v-td" headers="group-header-2 column-C A3">
        C3
      </td>
      <td class="v-td" headers="group-header-2 column-D A3">
        D3
      </td>
    </tr>
  </tbody>
</table>

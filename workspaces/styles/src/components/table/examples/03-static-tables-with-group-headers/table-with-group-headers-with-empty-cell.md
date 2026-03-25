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
title: Table with group headers with empty cell
description: Table with alternate header and empty first cell. 
classes: []
tags: ['docs']
order: 8
---

<table class="v-table v-table-border">
  <caption class="v-sr">
    This is required text that describes the table in more detail.
  </caption>
  <thead>
    <tr class="v-typography-overline">
      <td class="v-th-alt">
      </td>
      <th class="v-th-alt" colspan="1" id="Group-Header-1">
        Group header 1
      </th>
      <th class="v-th-alt" colspan="1" id="Group-Header-2">
        Group header 2
      </th>
    </tr>
    <tr>
      <th class="v-th" id="Column-A">
        Column A
      </th>
      <th class="v-th" id="Column-B">
        Column B
      </th>
      <th class="v-th" id="Column-C">
        Column C
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="v-td" id="A1" headers="Column-A">
        A1
      </th>
      <td class="v-td" headers="Group-Header-1 Column-B A1">
        B1
      </td>
      <td class="v-td" headers="Group-Header-2 Column-C A1">
        C1
      </td>
    </tr>
    <tr>
      <th scope="row" class="v-td" id="A2" headers="Column-A">
        A2
      </th>
      <td class="v-td" headers="Group-Header-1 Column-B A2">
        B2
      </td>
      <td class="v-td" headers="Group-Header-2 Column-C A2">
        C2
      </td>
    </tr>
    <tr>
      <th scope="row" class="v-td" id="A3" headers="Column-A">
        A3
      </th>
      <td class="v-td" headers="Group-Header-1 Column-B A3">
        B3
      </td>
      <td class="v-td" headers="Group-Header-2 Column-C A3">
        C3
      </td>
    </tr>
  </tbody>
</table>

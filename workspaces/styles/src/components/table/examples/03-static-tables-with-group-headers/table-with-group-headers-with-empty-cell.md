<!--
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
      <th class="v-th-alt" colspan="1">
        Group header 1
      </th>
      <th class="v-th-alt" colspan="1">
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
    </tr>
  </tbody>
</table>

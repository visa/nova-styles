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
title: Key-value table with lined rows
description: Recommended use for tables with no headers.  First column acts as the headers. 
classes: ['.v-table-key-value', '.v-table-border']
tags: ['docs']
order: 10
---

<div class="v-table-wrapper" style="--v-table-wrapper-block-size: auto; --v-table-wrapper-inline-size: auto;">
  <table class="v-table v-table-border v-table-key-value">
    <caption class="v-sr">
      This is required text that describes the table in more detail.
    </caption>
    <tbody>
      <tr>
        <th class="v-td" scope="row">
          Key 1
        </th>
        <td class="v-td">
          Value 1
        </td>
      </tr>
      <tr>
        <th class="v-td" scope="row">
          Key 2
        </th>
        <td class="v-td">
          Value 2
        </td>
      </tr>
      <tr>
        <th class="v-td" scope="row">
          Key 3
        </th>
        <td class="v-td">
          Value 3
        </td>
      </tr>
      <tr>
        <th class="v-td" scope="row">
          Key 4
        </th>
        <td class="v-td">
          Value 4
        </td>
      </tr>
    </tbody>
  </table>
</div>

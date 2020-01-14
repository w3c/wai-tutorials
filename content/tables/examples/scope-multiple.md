---
title: Complete “Table with headers spanning multiple rows or columns” Example
lang: en
permalink: /tutorials/tables/examples/scope-multiple/
ref: /tutorials/tables/examples/scope-multiple/
---

[Back to page](/tutorials/tables/irregular/#table-with-headers-spanning-multiple-rows-or-columns)

~~~ html

<table>
  <caption>
    Poster availability
  </caption>
  <tr>
    <th scope="col">Poster name</th>
    <th scope="col">Color</th>
    <th colspan="3" scope="colgroup">Sizes available</th>
    </tr>
  <tr>
    <th rowspan="3" scope="rowgroup">Zodiac</th>
    <td>Full color</td>
    <td>A2</td>
    <td>A3</td>
    <td>A4</td>
  </tr>
  <tr>
    <td>Black and white</td>
    <td>A1</td>
    <td>A2</td>
    <td>A3</td>
  </tr>
  <tr>
    <td>Sepia</td>
    <td>A3</td>
    <td>A4</td>
    <td>A5</td>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup">Angels</th>
    <td>Black and white</td>
    <td>A1</td>
    <td>A3</td>
    <td>A4</td>
  </tr>
  <tr>
    <td>Sepia</td>
    <td>A2</td>
    <td>A3</td>
    <td>A5</td>
  </tr>
</table>

~~~

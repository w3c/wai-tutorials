---
title: Complete “Table with header cells in one column only” Example
status: editors-draft
source: ../../scope/#table-with-an-offset-internal-column-of-header-cells
layout: fullcode
---

~~~ html

<table>
  <caption>
    Holidays taken in the last six months
  </caption >

  <thead>
    <tr>
      <th scope="col">PayrollRef.   </th>
      <th scope="col">Name</th>
      <th scope="col">Jul</th>
      <th scope="col">Aug</th>
      <th scope="col">Sept</th>
      <th scope="col">Oct</th>
      <th scope="col">Nov</th>
      <th scope="col">Dec</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>215</td>
      <th scope="row">Abel</th>
      <td>5</td>
      <td>2</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>3</td>
    </tr>

    <tr>
      <td>231</td>
      <th scope="row">Annette </th>
      <td>0</td>
      <td>5</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>6</td>
    </tr>

    <tr>
      <td>173</td>
      <th scope="row">Bernard</th>
      <td>2</td>
      <td>0</td>
      <td>0</td>
      <td>5</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>141</td>
      <th scope="row">Gerald</th>
      <td>0</td>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>8</td>
    </tr>

    <tr>
      <td>99</td>
      <th scope="row">Michael</th>
      <td>8</td>
      <td>8</td>
      <td>8</td>
      <td>8</td>
      <td>&nbsp;</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

~~~

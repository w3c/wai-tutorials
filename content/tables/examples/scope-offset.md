---
title: Complete “Table with an offset column of header cells” Example
lang: en
permalink: /tutorials/tables/examples/scope-offset/
ref: /tutorials/tables/examples/scope-offset/
---

[Back to page](/tutorials/tables/two-headers/#table-with-an-offset-column-of-header-cells)

~~~ html

<table>
  <caption>
    Holidays taken in the last six months
  </caption >
  <thead>
    <tr>
      <th scope="col"><abbr title="Identification Number">ID</abbr></th>
      <th scope="col">Name</th>
      <th scope="col">July</th>
      <th scope="col">August</th>
      <th scope="col">September</th>
      <th scope="col">October</th>
      <th scope="col">November</th>
      <th scope="col">December</th>
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
      <td>0</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

~~~

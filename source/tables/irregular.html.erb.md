---
title: Irregular Tables
nav_title: "Complex: Irregular"
status: draft
technologies: HTML5
wcag_techniques:
  - H63
order: 3
---

Sometimes it is impossible for assistive technology to determine which columns or row to associate with a specific header cell.

`Scope` is the attribute used to define the direction and range of data cells that are covered by a header cell. For example, a `scope` value `row` denotes that a header cell applies to the entire row. Similarly, a header cell that spans three columns and has the `scope` value `colgroup` only applies to the data cells in the three columns that it spans. 

The `scope` attribute should be used for all `<th>` cells where either the direction or range of data cell coverage should be clearly associated. Possible values for the `scope` attribute are `row`, `col`, `rowgroup` or `colgroup`.

## Table with an offset column of header cells
{:.ex}

In this table, the row header cells are in the second column rather than the first. The `<th>` cells in the second column have `scope="row"`  to ensure that data cells in the first columnand the data cells to the right of the headers are correctly associated.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Holidays taken in the last six months
  </caption >
  <thead>
    <tr>
      <th><abbr title="Identification Number">ID</abbr></th>
      <th>Name</th>
      <th>July</th>
      <th>August</th>
      <th>September</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
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

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
[…]
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
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for “Table with an offset column of header cells”](examples/scope-offset.html)

## Table with headers spanning multiple rows or columns
{:.ex}

In this example, some of the header cells span multiple rows or columns: the “Zodiac” row header spans 3 rows, and the “Sizes available” column header spans 3 columns. `Colgroup` and `rowgroup` indicate the headers that span multiple rows and columns.

A [summary](caption-summary.html) can be used to explicitly describe the layout of the table.

{::nomarkdown}
<%= sample_start %>

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

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
[…]
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
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for “Table with headers spanning multiple rows or columns”](examples/scope-multiple.html)

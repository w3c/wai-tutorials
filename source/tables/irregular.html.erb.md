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

Additionally to the direction (see [simple tables](simple.html)), the `scope` attribute can be used to define the range of data cells that are covered by a header cell. A header cell that spans three columns and has the `scope` value `colgroup` only applies to the data cells in the three columns that it spans. `rowgroup` works the same way for table headers that span multiple rows.

The `scope` attribute should be used for all `<th>` cells where either the direction or range of data cell coverage should be clearly associated.

To be able to associate a table header cell to a column group and/or row group, the groups have to be defined first:

* A column group is defined using the `<colgroup>` element in the table.
* A row group is defined by the `<thead>`, `<tfoot>` and `<tbody>` elements.
  - If no row group is defined in the markup, the whole table is a row group. 
  - `<thead>` and  `<tfoot>` elements can be used once.
  - Every `<tbody>` element defines a row group.

## Table with two tier headings
{:.ex}

If a table consists of a heading that spans more multiple columns/rows of header cells, `scope="colgroup"` and `scope="rowgroup"` should be used, respectively.

{::nomarkdown}
<%= sample_start %>
<style>.numbers td {text-align:right;font-variant-numeric: tabular-nums; whitespace: no-wrap;}</style>
<table>
  <colgroup></colgroup>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <tr>
    <td rowspan="2"></td>
    <th colspan="2" scope="colgroup">Sales US</th>
    <th colspan="2" scope="colgroup">Sales Europe</th>
  </tr>
  <tr>
    <th scope="col">Actual</th>
    <th scope="col">Budget</th>
    <th scope="col">Actual</th>
    <th scope="col">Budget</th>
  </tr>
  <tr class="numbers">
    <th scope="row">Compact&nbsp;cars</th>
    <td>$&nbsp;300,000</td>
    <td>$&nbsp;500,000</td>
    <td>€&nbsp;800,000</td>
    <td>€&nbsp;1,000,000</td>
  </tr>
  <tr class="numbers">
    <th scope="row">SUVs</th>
    <td>$&nbsp;50,000</td>
    <td>$&nbsp;100,000</td>
    <td>€&nbsp;90,000</td>
    <td>€&nbsp;120,000</td>
  </tr>
</table>
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <colgroup></colgroup>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <thead>
    <tr>
      <td rowspan="2"></td>
      <th colspan="2" scope="colgroup">Sales US</th>
      <th colspan="2" scope="colgroup">Sales Europe</th>
    </tr>
    <tr>
      <th scope="col">Actual</th>
      <th scope="col">Budget</th>
      <th scope="col">Actual</th>
      <th scope="col">Budget</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Compact cars</th>
      <td>$ 300,000</td>
      <td>$ 500,000</td>
      <td>€ 800,000</td>
      <td>€ 1,000,000</td>
    </tr>
    […]
  </tbody>
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

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
  <colgroup></colgroup>
  <colgroup></colgroup>
  <colgroup span="3"></colgroup>
  <thead>
    <tr>
      <th scope="col">Poster name</th>
      <th scope="col">Color</th>
      <th colspan="3" scope="colgroup">Sizes available</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
  <tbody>
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
  </tbody>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <caption>
    Poster availability
  </caption>
  <colgroup></colgroup>
  <colgroup></colgroup>
  <colgroup span="3"></colgroup>
  <thead>
    <tr>
      <th scope="col">Poster name</th>
      <th scope="col">Color</th>
      <th colspan="3" scope="colgroup">Sizes available</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
  <tbody>
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
  </tbody>
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

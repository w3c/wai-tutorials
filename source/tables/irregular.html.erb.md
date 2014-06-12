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

{::nomarkdown}
<%= sample_start %>

<table width="200" border="1">
  <tr>
    <td rowspan="2"></td>
    <th colspan="2" scope="col">Sales US</th>
    <th colspan="2" scope="col">Sales Europe</th>
  </tr>
  <tr>
    <th scope="col">Actual</th>
    <th scope="col">Budget</th>
    <th scope="col">Actual</th>
    <th scope="col">Budget</th>
  </tr>
  <tr>
  <th scope="row">Compact&nbsp;cars</th>
    <td>$30,000</td>
    <td>$50,000</td>
    <td>€80,000</td>
    <td>€100,000</td>
  </tr>
  <tr>
  <th scope="row">SUVs</th>
    <td>$5,000</td>
    <td>$10,000</td>
    <td>€9,000</td>
    <td>€12,000</td>
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

---
title: Tables with irregular headers
nav_title: Irregular Headers
order: 4
technologies: HTML5
wcag_techniques:
  - H63
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Tables with irregular headers have header cells that span multiple columns and/or rows. The `scope` attribute can be used to define the range of data cells covered by a header cell.

For example, a header cell that spans three columns should be associated to data cells in this column group of three columns using the `colgroup` value in the `scope` attribute. The same principle applies to a header cell spanning multiple rows. It is associated with its row group by using the `scope` value of `rowgroup`.

To associate a table header cell to a column group and/or row group using `scope`, the groups have to be explicitly defined in the table markup:

* A column group is defined using the `<colgroup>` element in the table.
* A row group is defined by the `<thead>`, `<tfoot>` and `<tbody>` elements.
  - `<thead>` and  `<tfoot>` elements can be used once.
  - Every `<tbody>` element defines a row group.

If neither a column nor a row group is defined in the markup, the header cell is not in a group and there will be no or an incorrect association with data cells.

## Table with two tier headers
{:.ex}

In the table below, there are two pairs of column headers. Each pair of column headers, “Produced” and “Sold” is associated with a first-level header that identifies the pair: “Mars” and “Venus”. These first-level headers are made to span two columns by using the `colspan` attribute with the value of `2`.

To associate the first-level headers properly with all cells of both columns, the column structure needs to be defined at the beginning of the table. A `<col>` element identifies each column, beginning on the left. If a header spans two or more columns, use a `<colgroup>` element instead of that number of `<col>` elements, and the number of columns spanned is noted in the `span` attribute.

In addition, the value of the `scope` attribute in the first-level headers is set to `colgroup` so that it is associated with the entire group of columns. The second-level headers only apply to the corresponding column so the `scope` attribute is set to `col` as shown in previous examples.

{::nomarkdown}
<%= sample_start %>
<table class="numbers">
  <colgroup><col></colgroup>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <tr>
    <td rowspan="2"></td>
    <th colspan="2" scope="colgroup">Mars</th>
    <th colspan="2" scope="colgroup">Venus</th>
  </tr>
  <tr>
    <th scope="col">Produced</th>
    <th scope="col">Sold</th>
    <th scope="col">Produced</th>
    <th scope="col">Sold</th>
  </tr>
  <tr>
    <th scope="row">Teddy&nbsp;Bears</th>
    <td>50,000</td>
    <td>30,000</td>
    <td>100,000</td>
    <td>80,000</td>
  </tr>
  <tr>
    <th scope="row">Board&nbsp;Games</th>
    <td>10,000</td>
    <td>5,000</td>
    <td>12,000</td>
    <td>9,000</td>
  </tr>
</table>
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <col>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <tr>
    <td rowspan="2"></td>
    <th colspan="2" scope="colgroup">Mars</th>
    <th colspan="2" scope="colgroup">Venus</th>
  </tr>
  <tr>
    <th scope="col">Produced</th>
    <th scope="col">Sold</th>
    <th scope="col">Produced</th>
    <th scope="col">Sold</th>
  </tr>
  <tr>
    <th scope="row">Teddy Bears</th>
    <td>50,000</td>
    <td>30,000</td>
    <td>100,000</td>
    <td>80,000</td>
  </tr>
  <tr>
    <th scope="row">Board Games</th>
    <td>10,000</td>
    <td>5,000</td>
    <td>12,000</td>
    <td>9,000</td>
  </tr>
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

Note: A `<colgroup>` element can contain a `<col>` element to identify individual columns in the group. The combined sum of `<col>` elements (not in `<colgroup>`s) and column elements indicated by the `span` attributes of the `<colgroup>` elements should be equal to the total number of columns in the table.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Table with headers spanning multiple rows or columns
{:.ex}

In the example below, the table consists of two individual columns and one column group spanning three columns as well as six rows. There are two headers that span multiple rows. To make sure that such header cells that span multiple rows are correctly associated with all the cells in those rows, the rows need to be grouped. To define row groups wrap the corresponding rows in `<tbody>` elements (table body). Additionally the `scope` attribute of header cells spanning rows has to be set to `rowgroup`.

If a header spans a multiple header rows, wrap the rows in a `<thead>` element instead of a `<tbody>` element. Use a `<tfoot>` element if a header spans multiple rows in the footer area of a table.

Due to the complexity of the table a [summary technique](caption-summary.html) could be used to describe the layout of the table in detail.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Poster availability
  </caption>
  <col>
  <col>
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
      <th scope="row">Full color</th>
      <td>A2</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A2</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
      <td>A3</td>
      <td>A4</td>
      <td>A5</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="2" scope="rowgroup">Angels</th>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
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
  <col>
  <col>
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
      <th scope="row">Full color</th>
      <td>A2</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A2</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
      <td>A3</td>
      <td>A4</td>
      <td>A5</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="2" scope="rowgroup">Angels</th>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

Note: Using `<thead>`, `<tbody>` and `<tfoot>` in every table, even if there are no headers spanning columns may avoid confusion on when to use them.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

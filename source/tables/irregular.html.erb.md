---
title: Irregular Tables
order: 4
status: draft
technologies: HTML5
wcag_techniques:
  - H63
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zhara: "http://w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Irregular tables have header cells that span multiple columns and/or rows. The `scope` attribute can be used to define the range of data cells covered by a header cell.

For example, a header cell that spans three columns should be associated to data cells in this column group of three columns using the `colgroup` value in the `scope` attribute. The same principle applies to a header cell spanning multiple rows. It is associated with its row group by using the `scope` value of `rowgroup`.

To associate a table header cell to a column group and/or row group using `scope`, the groups have to be explicitly defined in the table markup:

* A column group is defined using the `<colgroup>` element in the table.
* A row group is defined by the `<thead>`, `<tfoot>` and `<tbody>` elements.
  - `<thead>` and  `<tfoot>` elements can be used once.
  - Every `<tbody>` element defines a row group.

If neither a column nor a row group is defined in the markup, the header cell is not in a group and there will be no or an incorrect association with data cells.

## Table with two tier headers
{:.ex}

In the table below, there are two pairs of column headers. Each pair of column headers, “Produced” and “Sold” is associated with a first-level header that identifies the pair: “Mars” and “Venus”. These first-level headers are made to span two columns by using the `colspan` attribute with the value of `2`. The value of the `scope` attribute in the first-level headers is set to `colgroup` so that it is associated with the entire group of columns. The second-level headers only apply to the corresponding column so the `scope` attribute is set to `col` as shown in previous examples.

To identify groups of columns properly, they need to be defined at the beginning of the table. A `<col>` element identifies each column, beginning on the left. If a header spans two or more columns, use a `<colgroup>` element instead and the number of columns spanned is noted in the `span` attribute. 

For example, if a table has four columns and a header is spanning column two and three, the columns and column groups would be defined by the following code:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<col></col>
<colgroup span="2"></colgroup>
<col></col>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Note: The combined sum of `<col>` elements and column elements indicated by the `span` attributes of the `<colgroup>` elements should be equal to the total number of columns in the table. It is possible to nest a `<col>` element for each column inside a column group inside the `<colgroup>` element to be able to add styles to each column.

{::nomarkdown}
<%= sample_start %>
<table class="numbers">
  <col></col>
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
  <col></col>
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

## Table with headers spanning multiple rows or columns
{:.ex}

In the example below, the table consists of two individual columns and one column group spanning three columns. It’s also subdivided in multiple row groups using `<thead>` (table header) and `<tbody>` (table body) elements which contain the individual table rows. This makes it possible to assign a header to all cells inside the `<thead>` and `<tbody>` elements.

The first row, that consists of the column headers, is wrapped in the `<thead>` element. The next three rows are wrapped in one `<tbody>` element to define the second row group which has a header spanning those three rows. By setting `scope` of this header cell to `rowgroup`, it applies to all other cells in the group.

Due to the complexity of the table a [summary technique](caption-summary.html) could be used to describe the layout of the table in detail.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Poster availability
  </caption>
  <col></col>
  <col></col>
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
  <col></col>
  <col></col>
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

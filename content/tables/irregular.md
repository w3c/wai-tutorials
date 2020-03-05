---
title: "Tables with Irregular Headers"
nav_title: Irregular Headers
permalink: /tutorials/tables/irregular/
ref: /tutorials/tables/irregular/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/tables/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/tables/irregular.md'
metafooter: true

resource:
  ref: /tutorials/tables/
navigation:
  previous: /tutorials/tables/two-headers/
  next: /tutorials/tables/multi-level/

wcag_techniques:
- H63

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---


{% include image.html src="tables/img-irreg.png" class="small right" %} This page covers tables with header cells that span multiple columns and/or rows. Several elements and attributes can be used to define the structure and relationships of the header and data cells.

For example, a header cell that spans three columns should be associated with corresponding data cells in the column group. This can be done by setting the `scope` attribute of the header cell to the value `colgroup`. The same principle applies to header cells spanning multiple rows. In this case, they are associated with by using the value `rowgroup` in the `scope`  attribute.

However, before making these associations, the structure of such groups of columns and rows needs to be defined in the table markup:

* A column group is defined using the `<colgroup>` element.
* A row group is defined by the `<thead>`, `<tfoot>` and `<tbody>` elements.
  - `<thead>` and  `<tfoot>` elements can be used once in a table.
  - A table can have any number of `<tbody>` elements that each defines a row group.

## Table with two tier headers
{:.ex}

In the table below, there are two pairs of column headers. Each pair of column headers, “Produced” and “Sold” is associated with a first-level header that identifies the pair: “Mars” and “Venus”. These first-level headers are made to span two columns by using the `colspan` attribute with the value of `2`.

The column structure needs to be defined at the beginning of the table to associate first-level headers correctly with all cells of both columns. A `<col>` element identifies each column, beginning on the left. If a header spans two or more columns, use a `<colgroup>` element instead of that number of `<col>` elements, and the number of columns spanned is noted in the `span` attribute.

Also, the value of the `scope` attribute in the first-level headers is set to `colgroup` so that it is associated with the entire group of columns. The second-level headers only apply to the corresponding column, so the `scope` attribute is set to `col` as shown in previous examples.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
<table class="numbers">
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
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

Note: A `<colgroup>` element can contain a `<col>` element to identify individual columns in the group. The combined sum of `<col>` elements (not contained in `<colgroup>` elements) and column elements indicated by the `span` attributes of the `<colgroup>` elements should be equal to the total number of columns in the table.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Table with headers spanning multiple rows or columns
{:.ex}

In the example below, the table consists of two individual columns and one column group spanning three columns. It has six rows. Two headers that span multiple rows. To make sure that such header cells that span multiple rows are correctly associated with all the cells in those rows, the rows must be grouped. To define row groups wrap the corresponding rows in `<tbody>` elements (table body). Additionally, the `scope` attribute of header cells spanning rows has to be set to `rowgroup`.

If a header spans multiple header rows, wrap the rows in a `<thead>` element instead of a `<tbody>` element. Use a `<tfoot>` element if a header spans multiple rows in the footer area of a table.

Due to the complexity of the table a [summary technique](/tutorials/tables/caption-summary/) could be used to describe the layout of the table in detail.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

[Full code example](/tutorials/tables/examples/scope-multiple/)

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

Note: Using `<thead>`, `<tbody>` and `<tfoot>` in every table, even if there are no headers spanning columns may avoid confusion on when to use them.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

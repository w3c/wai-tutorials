---
title: "Tables with Two Headers"
nav_title: Two Header
permalink: /tutorials/tables/two-headers/
ref: /tutorials/tables/two-headers/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/tables/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/tables/two-headers.md'
metafooter: true

resource:
  ref: /tutorials/tables/
navigation:
  previous: /tutorials/tables/one-header/
  next: /tutorials/tables/irregular/

wcag_techniques:
- H51
- H63

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Andrew Kirkpatrick
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

{% include image.html src="tables/img-multidir.png" class="small right" %} This page covers tables that have a simple row header and a simple column header. In such tables, the relationship between the headers and data cells becomes quickly ambiguous. For such tables, use the `<th>` element to identify the header cells and the `scope` attribute to declare the direction of each header. The `scope` attribute can be set to `row` or `col` to denote that a header applies to the entire row or column, respectively.

Additionally, you can use the `<caption>` element to identify the table in a document. This is particularly useful for screen-reader users browsing the web page in “table mode” where they can navigate from table to table. More background and guidance on the using `<caption>` element is provided on the [Caption & Summary page](/tutorials/tables/caption-summary/).

## Table with header cells in the top row and first column
{:.ex}

The following table of opening times has header information in both the top row and the first column. All header cells are marked up as `<th>` cells with `scope` attributes added.

In the header row, the `col` value for `scope` associates each header cell with the data cells in the column. In the header column, the `row` value associates the individual headers with their rows. Without this information, some users would not easily understand the relationship between header and data cells. In the example below, the “Open” and “Closed” labels are only useful if they can be assigned to a particular day and time.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

<table>
  <caption>Delivery slots:</caption>
  <tr>
    <td></td>
    <th scope="col">Monday</th>
    <th scope="col">Tuesday</th>
    <th scope="col">Wednesday</th>
    <th scope="col">Thursday</th>
    <th scope="col">Friday</th>
  </tr>
  <tr>
    <th scope="row">09:00 – 11:00</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">11:00 – 13:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">13:00 – 15:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">15:00 – 17:00</th>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
  </tr>
</table>

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<table>
  <caption>Delivery slots:</caption>
  <tr>
    <td></td>
    <th scope="col">Monday</th>
    <th scope="col">Tuesday</th>
    <th scope="col">Wednesday</th>
    <th scope="col">Thursday</th>
    <th scope="col">Friday</th>
  </tr>
  <tr>
    <th scope="row">09:00 – 11:00</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">11:00 – 13:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  […]
</table>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

[Full code for “Table with header cells in the top row and first column”](/tutorials/tables/examples/headertoprowfirstcol/)

## Table with an offset column of header cells
{:.ex}

In this table, the row header cells are in the second rather than in the first column. The approach is similar to the examples above: The scope of the header cells in the top row is set to `col`. By using the `row` value for `scope` assigns the header cells in the second column to the data cells on the left and the right of the individual header cell.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

<table class="numbers">
  <caption>
    Holidays taken in the last six months
  </caption >
  <thead>
    <tr>
      <th scope="col">ID</th>
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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

[Full code for “Table with an offset column of header cells”](/tutorials/tables/examples/scope-offset/)

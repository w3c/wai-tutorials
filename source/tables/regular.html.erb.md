---
title: Regular Tables
order: 3
technologies: HTML5
wcag_techniques:
  - H51
  - H63
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

When a table includes headings which are more complex than is found in simple tables, it is necessary to more clearly indicate what table data cells are labelled by each table heading cell. To accomplish this authors can mark up the table headers using the `<th>` element and use the `scope` attribute to declare the direction of each header. Use the values of `row` or `col` of the `scope` attribute to denote that a header applies to the entire row or column, respectively.

Additionally, you can use the `<caption>` element to identify the table in a document. This is particularly useful for screen-reader users browsing the web page in “tables mode” where they can navigate from table to table. The [Caption & Summary](caption-summary.html) page provides more background and guidance on the using `<caption>` element.

## Table with header cells in the top row and first column
{:.ex}

The following table of opening times has header information in both the top row and the first column. All header cells are marked up as `<th>` cells with `scope` attributes added.

In the header row, the `col` value for `scope` associates each header cell with the data cells in the column. In the header column, the `row` value associates the individual headers with their rows.

{::nomarkdown}
<%= sample_start %>

<p><strong>Delivery slots:</strong></p>

<table>
  <tr>
    <td></td>
    <th scope="col">Monday</th>
    <th scope="col">Tuesday</th>
    <th scope="col">Wednesday</th>
    <th scope="col">Thursday</th>
    <th scope="col">Friday</th>
  </tr>
  <tr>
    <th scope="row">09:00 - 11:00</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">11:00 - 13:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">13:00 - 15:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">15:00 - 17:00</th>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <tr>
    <td></td>
    <th scope="col">Monday</th>
    <th scope="col">Tuesday</th>
    <th scope="col">Wednesday</th>
    <th scope="col">Thursday</th>
    <th scope="col">Friday</th>
  </tr>
  <tr>
    <th scope="row">09:00 - 11:00</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">11:00 - 13:00</th>
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
<%= code_end %>
{:/nomarkdown}

[Full code for “Table with header cells in the top row and first column”](examples/headertoprowfirstcol.html)

## Table with header cells in the top row and first column
{:.ex}

The following tables of countries and their capital cities has the first row of cells marked as '<th>' cells and also has the first column with the country names marked up as `<th>` cells. It needs the `scope` attribute with the value of `row` to declare the applicability of each header cell. Otherwise some screen readers will associate header cells with other header cells because they are in the same column. For example in the cell marked “Holland” some screen readers will read “Belgium – France – Holland” if the `scope` attribute is not provided. The first cell in the table also needs scope to indicte whether it is a heading for the other cells in the same row or for the cells in the same column.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Capital cities
  </caption>
  <tr>
    <th scope="col">Country</th>
    <th scope="col">Capital city</th>
  </tr>
  <tr>
    <th scope="row">Belgium</th>
    <td>Brussels</td>
  </tr>
  <tr>
    <th scope="row">France</th>
    <td>Paris</td>
  </tr>
  <tr>
    <th scope="row">Holland</th>
    <td>Amsterdam</td>
  </tr>
  <tr>
    <th scope="row">Luxembourg</th>
    <td>Luxembourg</td>
  </tr>
  <tr>
    <th scope="row">Spain</th>
    <td>Madrid</td>
  </tr>
  <tr>
    <th scope="row">UK</th>
    <td>London</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <caption>Capital cities</caption>
  <tr>
    <th scope="col">Country</th>
    <th scope="col">Capital city</th>
  </tr>
  <tr>
    <th scope="row">Belgium</th>
    <td>Brussels</td>
  </tr>
  <tr>
    <th scope="row">France</th>
    <td>Paris</td>
  </tr>
  <tr>
    <th scope="row">Holland</th>
    <td>Amsterdam</td>
  </tr>
  […]
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code Example “Table with header cells in the top row and first column”](examples/scope-simple.html)

## Table with an offset column of header cells
{:.ex}

In this table, the row header cells are in the second rather than in the first column. The approach is very similar to the examples above: The scope of the header cells in the top row is set to `col`. By using the `row` value for `scope` assigns the header cells in the second column to data cells on the left and the right of the individual header cell.

{::nomarkdown}
<%= sample_start %>

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

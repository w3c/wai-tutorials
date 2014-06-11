---
title: Simple Tables
status: draft
technologies: HTML5
order: 2
wcag_techniques: 
  - H51
---

A simple table has one header row, or a header row and header column. They are the first row and column of the table.

Use header cell elements (`<th>`) to markup the header cells so that they are distinguishable from data cells and associated with the correct data cells. For example, in the [third example below](#table-with-header-cells-in-the-top-row-and-first-column) “Closed” is meaningless on its own, but makes sense when it’s associated with time (the row header) and day (the column header).

To explicitly associate header cells to data cells, it is usually useful to use the `scope` attribute. If the `scope` value is `row`, the heading is only a heading for other cells in this row, if the value is `col` it is the heading only for other cells in this column.

For more complex examples on the use of `scope`, see the [Irregular Tables tutorial](irregular.html).

Additionally, you can use the [`<caption>` element](caption-summary.html) to identify the table, which in some cases might be a WCAG 2.0 requirement.

## Table with header cells in the top row only
{:.ex}

This table of concerts only needs the cells in the top row marked up as `<th>` cells. This is partly because it is such a small table and partly because the data itself is distinctly different in each column.

{::nomarkdown}
<%= sample_start %>

<p><strong>Concerts:</strong></p>
<table>
	<tr>
		<th>Date</th>
		<th>Event</th>
		<th>Venue</th>
	</tr>
	<tr>
		<td>12 Feb</td>
		<td>Waltz with Strauss</td>
		<td>Main Hall</td>
	</tr>
	<tr>
		<td>24 Mar</td>
		<td>The Obelisks</td>
		<td>West Wing</td>
	</tr>
	<tr>
		<td>14 Apr</td>
		<td>The What</td>
		<td>Main Hall</td>
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
		<th>Date</th>
		<th>Event</th>
		<th>Venue</th>
	</tr>
	<tr>
		<td>12 Feb</td>
		<td>Waltz with Strauss</td>
		<td>Main Hall</td>
	</tr>
	[…]
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for “Table with header cells in the top row only”](examples/headertoprow.html)

## Table with header cells in one column only
{:.ex}

This example has `<th>` elements for all cells in the left column of a table. As the heading cells are read in every line, the `scope` attribute with a value of `row` should be used on each `<th>` cell to ensure that it cannot be mistaken as a header for other cells in the same column. In the table below, Belgium should not be mistaken as the heading for France, Holland, etc.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Capital cities
  </caption>
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

[Full code Example “Table with header cells in one column only”](examples/scope-simple.html)

## Table with header cells in the top row and first column
{:.ex}

This table of opening times has header information contained in both the top row and the first column. All header cells are marked up as `<th>` cells, additionally we add `scope` attributes with the values `col` (to the top row header cells) and `row` (to the first column header cells).

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
		<th scope="col">Delivery slots</th>
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

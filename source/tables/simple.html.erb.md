---
title: Small Simple Tables
status: draft
technologies: HTML5
order: 2
wcag_techniques: 
  - H51
---

A small simple table has one header row and not more than about 5 columns.

Use `<th>` elements to markup the header cells so that they are distinguishable from the data cells.

## Table with header cells in the top row only
{:.ex}

This table of concerts has the cells in the first row marked up as `<th>` cells without any `scope` direction. Some screen readers will read “Date – Event – Venue” on the “Venue” cell in the table below because the direction of the `<th>` elements is ambiguous. 

This is acceptable because it is such a small table and the data itself is distinctly different in each column. See the first example in [large simple tables](simple-large.html) for advice on explicitly defining header directions.

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

---
title: Simple Tables
status: draft
technologies: HTML5
order: 2
wcag_techniques: 
  - H51
---

The content of a simple table is so descriptive on its own, that only a header row is needed to give the user an impression of the data in the table. `<th>` elements are used to markup the header cells so that they are distinguishable from the data cells.

If the table is larger or its content is more ambiguous, the `scope` attribute should be used to avoid confusion, see [Directional Tables](multi-directional.html);

## Table with header cells in the top row only
{:.ex}

This table of concerts has the cells in the first row marked up as `<th>` cells without any `scope` direction. Some screen readers will read “Date – Event – Venue” on the “Venue” cell in the table below because the direction of the `<th>` elements is ambiguous. 

This is only acceptable because it is such a small table and the data itself is distinctly different in each column.

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
		<td>12 February</td>
		<td>Waltz with Strauss</td>
		<td>Main Hall</td>
	</tr>
	<tr>
		<td>24 March</td>
		<td>The Obelisks</td>
		<td>West Wing</td>
	</tr>
	<tr>
		<td>14 April</td>
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

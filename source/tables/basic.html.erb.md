---
title: Basic Tables
status: draft
technologies: HTML5
order: 2
wcag_techniques: 
  - H51
  - H63
---

When the content of a simple table is descriptive on its own, only a header row or column is needed to give the user an impression of the data in the table.

If the table is larger or its content is more ambiguous, the `scope` attribute should be used to avoid confusion, see [Directional Tables](multi-directional.html) for more guidance on such tables.

## Table with header cells in the top row only
{:.ex}

The following table of concerts has the cells in the first row marked up as `<th>` cells without any `scope` direction. This is only acceptable because it is such a small table and the data itself is distinctly different in each column.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Some screen readers will read “Date – Event – Venue” on the “Venue” cell  because the direction of the `<th>` elements is ambiguous. 

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

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
		<td>12 February</td>
		<td>Waltz with Strauss</td>
		<td>Main Hall</td>
	</tr>
	[…]
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Table with header cells in the first column only
{:.ex}

In the following table the data from the previous example is laid out differently, with a header column on the left. Also in this situation it is acceptable not to use `scope` because it is such a small table and the data itself is distinctly different in each row.

{::nomarkdown}
<%= sample_start %>

<p><strong>Concerts:</strong></p>
<table>
	<tr>
		<th>Date</th>
		<td>12 February</td>
		<td>24 March</td>
		<td>14 April</td>
	</tr>
	<tr>
		<th>Event</th>
		<td>Waltz with Strauss</td>
		<td>The Obelisks</td>
		<td>The What</td>
	</tr>
	<tr>
		<th>Venue</th>
		<td>Main Hall</td>
		<td>West Wing</td>
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
		<td>12 February</td>
		<td>24 March</td>
		<td>14 April</td>
	</tr>
	<tr>
		<th>Event</th>
		<td>Waltz with Strauss</td>
		<td>The Obelisks</td>
		<td>The What</td>
	</tr>
	<tr>
		<th>Venue</th>
		<td>Main Hall</td>
		<td>West Wing</td>
		<td>Main Hall</td>
	</tr>
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

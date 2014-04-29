---
title: Simple Tables
status: editors-draft
technologies: HTML5
order: 2
---

Use header cell elements (`<th>`{:.elem}) to point out the information that is critical to understand the data in a table. For example the number 210 is meaningless on its own, but becomes information if you know that it is the data for <em>a)</em> the number of properties in <em>b)</em> a given street.

Those `<th>`{:.elem} elements make header cells distinguishable from and associated with the correct data cells (`<td>`{:.elem}).

## Table with header cells in the top row only
{:.ex}

This table of concert dates only needs the cells in the top row marked up as `<th>`{:.elem} cells. This is partly because it is such a small table and partly because the data itself is distinctly different in each column.

{::nomarkdown}
<%= sample_start %>

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

## Table with header cells in the top row and first column
{:.ex}

This table of opening times has header information contained in both the top row and the first column. All header cells are marked up as `<th>`{:.elem} cells.

{::nomarkdown}
<%= sample_start %>

<table>
	<tr>
		<th>&nbsp;</th>
		<th>Monday</th>
		<th>Tuesday</th>
		<th>Wednesday</th>
		<th>Thursday</th>
		<th>Friday</th>
	</tr>
	<tr>
		<th>09:00 - 11:00</th>
		<td>Closed</td>
		<td>Open</td>
		<td>Open</td>
		<td>Closed</td>
		<td>Closed</td>
	</tr>
	<tr>
		<th>11:00 - 13:00</th>
		<td>Open</td>
		<td>Open</td>
		<td>Closed</td>
		<td>Closed</td>
		<td>Closed</td>
	</tr>
	<tr>
		<th>13:00 - 15:00</th>
		<td>Open</td>
		<td>Open</td>
		<td>Open</td>
		<td>Closed</td>
		<td>Closed</td>
	</tr>
	<tr>
		<th>15:00 - 17:00</th>
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
		<th>&nsbp;</th>
		<th>Monday</th>
		<th>Tuesday</th>
		<th>Wednesday</th>
		<th>Thursday</th>
		<th>Friday</th>
	</tr>
	<tr>
		<th>09:00 - 11:00</th>
		<td>Closed</td>
		<td>Open</td>
		<td>Open</td>
		<td>Closed</td>
		<td>Closed</td>
	</tr>
	<tr>
		<th>11:00 - 13:00</th>
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

## `<caption>`{:.elem} used to identify a table
{:.ex}

A table caption can be used to identify a table. This is not required to meet WCAG 2.0, but is considered good
practice. The `<caption>`{:.elem} value should be a succinct description of the content of the table.

This example has the table captioned using the `<caption>`{:.elem} element. Its value "Concert dates" tells users what information the table contains.

### Header cells in the top row only:

{::nomarkdown}
<%= sample_start %>

<table>
	<caption>Concert dates</caption>
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
	<caption>Concert dates</caption>
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
	[…]
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Related WCAG2.0 Techniques

The following WCAG 2.0 technique was used in the examples above:

-   [H51: Using table markup to present tabular data](http://www.w3.org/TR/WCAG20-TECHS/H51)
-   [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H39)

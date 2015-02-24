---
title: Single Header Tables
nav_title: Single Headers
order: 2
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

When the content of a table is descriptive on its own, only a header row or column is needed to give the user an impression of the data in the table.

If the table content is abiguous or has both column and row headings, the `scope` attribute should be used to avoid confusion. For more guidance on such tables, see [Double Header Tables](double-header.html).

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

## Table with ambiguous data
{:.ex}

In this example the first and last names and cities can’t be distinguished from one another without the appropriate header information. By using the `scope` element with the value `col`, the data cells are clearly associated with their header cells “Last Name”, “First Name” and “City”.

{::nomarkdown}
<%= sample_start %>
<table>
  <caption>Teddy bear collectors:</caption>
  <tr>
    <th scope="col">Last Name</th>
    <th scope="col">First Name</th>
    <th scope="col">City</th>
  </tr>
  <tr>
    <td>Phoenix</td>
    <td>Imari</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Zeki</td>
    <td>Rome</td>
    <td>Min</td>
  </tr>
  <tr>
    <td>Apirka</td>
    <td>Kelly</td>
    <td>Brynn</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table>
  <caption>Teddy bear collectors:</caption>
  <tr>
    <th scope="col">Last Name</th>
    <th scope="col">First Name</th>
    <th scope="col">City</th>
  </tr>
  <tr>
    <td>Phoenix</td>
    <td>Imari</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Zeki</td>
    <td>Rome</td>
    <td>Min</td>
  </tr>
  <tr>
    <td>Apirka</td>
    <td>Kelly</td>
    <td>Brynn</td>
  </tr>
</table>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}
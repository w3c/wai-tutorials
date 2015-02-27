---
title: Tables with one header
nav_title: One Header
order: 2
technologies: HTML5
wcag_techniques:
  - H51
  - H63
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="http://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

![](img-simple.png){:.symbol} In some cases, when the content of a table is descriptive on its own, only a header row or column is needed to give the user an impression of the data in the table.

If the table content is ambiguous or has both column and row headings, the `scope` attribute should be used to avoid confusion. For more guidance on such tables, see [tables with two headers](two-headers.html).

## Table with header cells in the top row only
{:.ex}

The following table of concerts has the cells in the first row marked up using the `<th>` element. This is only acceptable because it is such a small table and the data itself is distinctly different in each column, so that the relationship between the header and data cells is evident.

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

In the following table, the data from the previous example is laid out with the header column on the left. Also in this situation it is only acceptable to use this codeing because it is such a small and simple table. The next pages in this tutorial explain how to code more complex tables.

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

In this example, the data (first name, last name, and city) can’t be distinguished from one another without knowing which header each corresponds to. The `scope` attribute with the value `col` defines the direction of the header cells, and associates them with the corresponding data cells. The `scope` attribute is also needed for larger tables with one header row or column.

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

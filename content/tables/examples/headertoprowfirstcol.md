---
title: Complete “Table with header cells in the top row only” Example
lang: en
permalink: /tutorials/tables/examples/headertoprowfirstcol/
ref: /tutorials/tables/examples/headertoprowfirstcol/
---

[Back to page](/tutorials/tables/two-headers/#table-with-header-cells-in-the-top-row-and-first-column)

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

~~~

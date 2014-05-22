---
title: Multi-level Tables
nav_title: "Complex: Multi-level"
status: draft
technologies: HTML5
wcag_techniques: 
  - H43
order: 4
---

Multi-level tables are too complex to identify a strict horizontal or vertical association between header and data cells. The relationship between those cells should be defined by giving each `<th>` cell a unique `id` attribute, and each `<td>` a `headers` attribute. That `headers` attribute lists related `id` values, separated by spaces. Tables that should be marked up this way include:

-   Where column headers are repeated or changed part-way through the table.
-   Those with three or more header cells related to each data cell.

In many cases it is worth considering ways to restructure the information to the tables to make them less complex for all readers, for example by separating the information in smaller, more manageable tables.

Multi-level tables should have [a caption and a summary](caption-summary) to describe the layout of the table.

## Table with multiple column headers in each column
{:.ex}

This table shows contact details for six suppliers. To avoid producing an overly wide table, the first row has `<th>` cells identifying the first three supply firms and the fourth row has the `<th>` cells identifying the other three. To ensure that data cells are associated with the correct firm, each `<th>` cell has a unique `id` and each `<td>` cell has a headers attribute listing the `id` values that relate to it.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>
    Supplier contacts
  </caption>
  <tr>
    <td id="blank">&nbsp;</td>
    <th id="co1" headers="blank">Example 1 Ltd</th>
    <th id="co2" headers="blank">Example 2 Co</th>
  </tr>
  <tr>
    <th id="c1" headers="blank">Contact</th>
    <td headers="co1 c1">James Phillips</td>
    <td headers="co2 c1">Marie Beauchamp</td>
  </tr>
  <tr>
    <th id="p1"  headers="blank">Position</th>
    <td headers="co1 p1">Sales Director</td>
    <td headers="co2 p1">Sales Manager</td>
  </tr>
  <tr>
    <th id="e1"  headers="blank">Email</th>
    <td headers="co1 e1">jp@example1.co.uk</td>
    <td headers="co2 e1">marie@example2.co.fr</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <th id="co3" headers="blank">Example 3 Ltd</th>
    <th id="co4" headers="blank">Example 4 Inc</th>
  </tr>
  <tr>
    <th id="c2"  headers="blank">Contact</th>
    <td headers="co3 c2">Suzette Jones</td>
    <td headers="co4 c2">Alex Howe</td>
  </tr>
  <tr>
    <th id="p2" headers="blank">Position</th>
    <td headers="co3 p2">Sales Officer</td>
    <td headers="co4 p2">Sales Director</td>
  </tr>
  <tr>
    <th id="e2" headers="blank">Email</th>
    <td headers="co3 e2">Suz@example3.co.uk</td>
    <td headers="co4 e2">howe@example4.com</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Assigning <strong>id</strong> attributes to <code>&lt;th></code> cells') %>
{:/nomarkdown}

~~~ html
[…]
<th id="co1">Example1 Ltd</th>
<th id="co2">Example2 Co</th>
[…]
<th id="c1">Contact</th>
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Assigning <strong>header</strong> attributes to <code>&lt;td></code> cells') %>
{:/nomarkdown}

~~~ html
[…]
<td headers="co1 c1">James Phillips</td>
<td headers="co2 c1">Marie Beauchamp</td>
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for Example “Table with multiple column headers in each column”](examples/multiplecolumnheaders.html)

## Table with three headers related to each data cell
{:.ex}

This example shows availability of accommodation of a given type and size in two different locations. For the data to be understood, each
`<td>` cell should be associated to three `<td>` cells (location, size, and type of accommodation). To define these complex associations, each `<th>` cell has a unique `id` attribute and all data cells have a `headers` attribute listing the related cell `id` values.

{::nomarkdown}
<%= sample_start %>

<table summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
<caption>
    Availability of holiday accommodation
</caption>
<thead>
    <tr>
        <td></td>
        <th id="stud" scope="col">
            Studio
        </th>
        <th id="apt" scope="col">
            <abbr title="Apartment">Apt</abbr>
        </th>
        <th id="chal" scope="col">
            Chalet
        </th>
        <th id="villa" scope="col">
            Villa
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <th id="par" class="span" colspan="5" scope="colgroup">
            Paris
        </th>
    </tr>
    <tr>
        <th headers="par" id="pbed1">
            1 bedroom
        </th>
        <td headers="par pbed1 stud">
            11
        </td>
        <td headers="par pbed1 apt">
            20
        </td>
        <td headers="par pbed1 chal">
            25
        </td>
        <td headers="par pbed1 villa">
            23
        </td>
    </tr>
    <tr>
        <th headers="par" id="pbed2">
            2 bedroom
        </th>
        <td headers="par pbed2 stud">
            -
        </td>
        <td headers="par pbed2 apt">
            43
        </td>
        <td headers="par pbed2 chal">
            52
        </td>
        <td headers="par pbed2 villa">
            32
        </td>
    </tr>
    <tr>
        <th headers="par" id="pbed3">
            3 bedroom
        </th>
        <td headers="par pbed3 stud">
            -
        </td>
        <td headers="par pbed3 apt">
            13
        </td>
        <td headers="par pbed3 chal">
            15
        </td>
        <td headers="par pbed3 villa">
            40
        </td>
    </tr>
    <tr>
        <th id="rome" class="span" colspan="5" scope="colgroup">
            Rome
        </th>
    </tr>
    <tr>
        <th id="rbed1" headers="rome">
            1 bedroom
        </th>
        <td headers="rome rbed1 stud">
            13
        </td>
        <td headers="rome rbed1 apt">
            21
        </td>
        <td headers="rome rbed1 chal">
            22
        </td>
        <td headers="rome rbed1 villa">
            3
        </td>
    </tr>
    <tr>
        <th id="rbed2" headers="rome">
            2 bedroom
        </th>
        <td headers="rome rbed2 stud">
            -
        </td>
        <td headers="rome rbed2 apt">
            23
        </td>
        <td headers="rome rbed2 chal">
            43
        </td>
        <td headers="rome rbed2 villa">
            30
        </td>
    </tr>
    <tr>
        <th id="rbed3" headers="rome">
            3 bedroom
        </th>
        <td headers="rome rbed3 stud">
            -
        </td>
        <td headers="rome rbed3 apt">
            16
        </td>
        <td headers="rome rbed3 chal">
            32
        </td>
        <td headers="rome rbed3 villa">
            40
        </td>
    </tr>
</tbody>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Assigning <code class="attrib">id</code> attributes to <code class="elem">&lt;th></code> cells') %>
{:/nomarkdown}

~~~ html
[…]
	<th id="par" colspan="5" scope="colgroup">Paris</th>
</tr>
<tr>
	<th id="pbed1">1 bedroom</th>
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Assigning <code class="attrib">header</code> attributes to <code class="elem">&lt;td></code> cells') %>
{:/nomarkdown}

~~~ html
[…]
<td headers="par pbed1 stud">11</td>
<td headers="par pbed1 apt"> 20</td>
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for Example “Table with three headers related to each data cell”](examples/threeheaders.html)

## Split up multi-level tables
{:.ex}

It’s often possible to split up a complex table into multiple simple tables, which is usually better for users and easier for coding. The two tables below provide the same information as the mutli-level table in [the example above](#table-with-three-headers-related-to-each-data-cell). Also, simple tables are much better supported by WYSIWYG editors (“What you see is what you get”).

{::nomarkdown}
<%= sample_start %>
<p><strong>Availability of holiday accommodation</strong></p>
<table summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
<caption>
    Paris
</caption>
<thead>
    <tr>
        <td></td>
        <th scope="col">
            Studio
        </th>
        <th scope="col">
            <abbr title="Apartment">Apt</abbr>
        </th>
        <th scope="col">
            Chalet
        </th>
        <th scope="col">
            Villa
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">
            1 bedroom
        </th>
        <td>
            11
        </td>
        <td>
            20
        </td>
        <td>
            25
        </td>
        <td>
            23
        </td>
    </tr>
    <tr>
        <th scope="row">
            2 bedroom
        </th>
        <td>
            -
        </td>
        <td>
            43
        </td>
        <td>
            52
        </td>
        <td>
            32
        </td>
    </tr>
    <tr>
        <th scope="row">
            3 bedroom
        </th>
        <td>
            -
        </td>
        <td>
            13
        </td>
        <td>
            15
        </td>
        <td>
            40
        </td>
    </tr>
  </tbody>
</table>
<table style="margin-top:1em;">
<caption>
    Rome
</caption>
<thead>
    <tr>
        <td></td>
        <th scope="col">
            Studio
        </th>
        <th scope="col">
            <abbr title="Apartment">Apt</abbr>
        </th>
        <th scope="col">
            Chalet
        </th>
        <th scope="col">
            Villa
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <th id="rbed1">
            1 bedroom
        </th>
        <td>
            13
        </td>
        <td>
            21
        </td>
        <td>
            22
        </td>
        <td>
            3
        </td>
    </tr>
    <tr>
        <th id="rbed2">
            2 bedroom
        </th>
        <td>
            -
        </td>
        <td>
            23
        </td>
        <td>
            43
        </td>
        <td>
            30
        </td>
    </tr>
    <tr>
        <th id="rbed3">
            3 bedroom
        </th>
        <td>
            -
        </td>
        <td>
            16
        </td>
        <td>
            32
        </td>
        <td>
            40
        </td>
    </tr>
</tbody>
</table>

<%= sample_end %>
{:/nomarkdown}

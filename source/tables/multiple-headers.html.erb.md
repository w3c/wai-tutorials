---
title: Tables with multiple headers
nav_title: Multiple Headers
order: 5
technologies: HTML5
wcag_techniques:
  - H43
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Tables with multiple headers are too complex to identify a strict horizontal or vertical association between header and data cells. In such tables, each table header is identified with an (document-wide) unique `id`. Data cells refer to those `id`s by listing one or more in their `headers` attribute, separated by spaces.

Tables that should be marked up this way include:

- Tables with column headers that repeat or change part-way through the table.
- Tables with three or more header cells associated to each data cell.

Tables with multiple headers may also need to have a caption to identify it and a summary to describe the layout of the table, see [Caption & Summary](caption-summary.html).

In many cases it is worth to consider to restructure the information in such tables to make them less complex for all readers, for example by splitting the information in smaller, more manageable tables as shown in [Example 3](#split-up-multi-level-tables).

## Table with multiple column headers in each column
{:.ex}

In the table below, the headers for the top half of the tables are different to the headers of the bottom half. The header changes halfway through the table which makes the headers in columns ambiguous. To ensure each data cell is associated with the correct header, each `<th>` element has an unique `id` and each `<td>` cell has a `headers` attribute that lists the `id` values of the associated header cells.

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
    <td headers="co1 e1">jp@1ltd.example.com</td>
    <td headers="co2 e1">marie@2co.example.com</td>
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
    <td headers="co3 e2">Suz@ltd3.example.com</td>
    <td headers="co4 e2">howe@4inc.example.com</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Assigning <strong>id</strong> attributes to <code>&lt;th></code> cells') %>
{:/nomarkdown}

~~~ html
[…]
<th id="co1">Example 1 Ltd</th>
<th id="co2">Example 2 Co</th>
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

In this example table headers are used as subheadings to describe what the next section of the table is about. Without these headers, the information would be unclear. Using the `headers` attribute, all three headers can be properly associated with the data cell.

{::nomarkdown}
<%= sample_start %>

<table class="numbers" summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
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

The two tables below provide the same information as the mutli-level table in [the example above](#table-with-three-headers-related-to-each-data-cell). This makes the information easier to understand by everyone and easier to code. Also, simple tables are much better supported by tools to create web content, including WYSIWYG (“What you see is what you get”) editors.

{::nomarkdown}
<%= sample_start %>
<p><strong>Availability of holiday accommodation</strong></p>
<table class="numbers" summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
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
<table  class="numbers" style="margin-top:1em;">
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

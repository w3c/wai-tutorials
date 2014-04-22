---
title: Table Summary
status: editors-draft
technologies: HTML4, HTML5, WAI-ARIA
order: 5
---

A summary is a brief description of how data is organized in a table. It may not be necessary in very simple tables but can be important where the data is laid out in an unusual order or the table structure is complex. In these cases, a summary should be provided to give brief orientation clues. In HTML4 the description can be marked up in the `summary`{:.attrib} attribute of the `<table>`{:.elem} element, but as this is made obsolete in HTML5, the second example on this page shows how to put the description within the `<caption>`{:.elem} element.

## Table with a complex structure
{:.ex}

### Nest summary into the `<caption>`{:.elem} element
{:.ap}

This is a complex table showing availability of different types and sizes of accommodation in two different locations. The `<caption>`{:.elem} element is used to describe the table layout as well as act as a heading for the table.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique used for approach 1 is valid for both HTML4 and HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>

<table>
  <caption style="text-align: left;">
    Availability of holiday accommodation<br>
    <span style="font-size: .75em; display:block; line-height: 1.5;">
      Column one has the location and size of accommodation, other columns show the type and number of properties available
    </span>
  </caption>
  <thead>
    <tr>
      <td></td>
      <th id="stud" scope="col"> Studio </th>
      <th id="apt" scope="col"> <abbr title="Apartment">Apt</abbr> </th>
      <th id="chal" scope="col"> Chalet </th>
      <th id="villa" scope="col"> Villa </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="par" class="span" colspan="5" scope="colgroup"> Paris </th>
    </tr>
    <tr>
      <th headers="par" id="pbed1"> 1 bedroom </th>
      <td headers="par pbed1 stud"> 11 </td>
      <td headers="par pbed1 apt"> 20 </td>
      <td headers="par pbed1 chal"> 25 </td>
      <td headers="par pbed1 villa"> 23 </td>
    </tr>
    <tr>
      <th headers="par" id="pbed2"> 2 bedroom </th>
      <td headers="par pbed2 stud"> - </td>
      <td headers="par pbed2 apt"> 43 </td>
      <td headers="par pbed2 chal"> 52 </td>
      <td headers="par pbed2 villa"> 32 </td>
    </tr>
    <tr>
      <th headers="par" id="pbed3"> 3 bedroom </th>
      <td headers="par pbed3 stud"> - </td>
      <td headers="par pbed3 apt"> 13 </td>
      <td headers="par pbed3 chal"> 15 </td>
      <td headers="par pbed3 villa"> 40 </td>
    </tr>
    <tr>
      <th id="rome" class="span" colspan="5" scope="colgroup"> Rome </th>
    </tr>
    <tr>
      <th id="rbed1" headers="rome"> 1 bedroom </th>
      <td headers="rome rbed1 stud"> 13 </td>
      <td headers="rome rbed1 apt"> 21 </td>
      <td headers="rome rbed1 chal"> 22 </td>
      <td headers="rome rbed1 villa"> 3 </td>
    </tr>
    <tr>
      <th id="rbed2" headers="rome"> 2 bedroom </th>
      <td headers="rome rbed2 stud"> - </td>
      <td headers="rome rbed2 apt"> 23 </td>
      <td headers="rome rbed2 chal"> 43 </td>
      <td headers="rome rbed2 villa"> 30 </td>
    </tr>
    <tr>
      <th id="rbed3" headers="rome"> 3 bedroom </th>
      <td headers="rome rbed3 stud"> - </td>
      <td headers="rome rbed3 apt"> 16 </td>
      <td headers="rome rbed3 chal"> 32 </td>
      <td headers="rome rbed3 villa"> 40 </td>
    </tr>
  </tbody>
</table>


<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<caption>Availability of holiday accommodation <br>
	<span>Column one has the location and size of accommodation, other columns show the type and number of properties available</span>
</caption>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Use `aria-described-by`{:.attrib} to provide a table summary
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique used for approach 2 is only valid in HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>


<p id="tblDesc" style="margin: 0 auto; max-width: 25.333333333em; font-size: .75em; lin-height: 1.5;">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
<table aria-described-by="tblDesc" tabindex="0">
  <caption style="text-align: left;">
    Paris: Availability of holiday accommodation<br>
  </caption>
  <thead>
    <tr>
      <td></td>
      <th id="stud" scope="col"> Studio </th>
      <th id="apt" scope="col"> <abbr title="Apartment">Apt</abbr> </th>
      <th id="chal" scope="col"> Chalet </th>
      <th id="villa" scope="col"> Villa </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th headers="par" id="pbed1"> 1 bedroom </th>
      <td headers="par pbed1 stud"> 11 </td>
      <td headers="par pbed1 apt"> 20 </td>
      <td headers="par pbed1 chal"> 25 </td>
      <td headers="par pbed1 villa"> 23 </td>
    </tr>
    <tr>
      <th headers="par" id="pbed2"> 2 bedroom </th>
      <td headers="par pbed2 stud"> - </td>
      <td headers="par pbed2 apt"> 43 </td>
      <td headers="par pbed2 chal"> 52 </td>
      <td headers="par pbed2 villa"> 32 </td>
    </tr>
    <tr>
      <th headers="par" id="pbed3"> 3 bedroom </th>
      <td headers="par pbed3 stud"> - </td>
      <td headers="par pbed3 apt"> 13 </td>
      <td headers="par pbed3 chal"> 15 </td>
      <td headers="par pbed3 villa"> 40 </td>
    </tr>
  </tbody>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p id="tblDesc">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
<table aria-described-by="tblDesc" tabindex="0">
[…]
~~~

**Note:** it is important to set the `tabindex`{:.attrib} to the value `0`{:.value} to make the text discoverable by screen readers.

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Useing the `<figure>`{:.elem} element to mark up a table summary
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique used for approach 3 is only valid in HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>


<figure>
  <figcaption style="max-width: 19em; margin: 0 auto">
    <strong>Paris: Availability of holiday accommodation</strong><br>Column one has the location and size of accommodation, other columns show the type and number of properties available.
  </figcaption>
  <table>
    <thead>
      <tr>
        <td></td>
        <th id="stud" scope="col"> Studio </th>
        <th id="apt" scope="col"> <abbr title="Apartment">Apt</abbr> </th>
        <th id="chal" scope="col"> Chalet </th>
        <th id="villa" scope="col"> Villa </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th headers="par" id="pbed1"> 1 bedroom </th>
        <td headers="par pbed1 stud"> 11 </td>
        <td headers="par pbed1 apt"> 20 </td>
        <td headers="par pbed1 chal"> 25 </td>
        <td headers="par pbed1 villa"> 23 </td>
      </tr>
      <tr>
        <th headers="par" id="pbed2"> 2 bedroom </th>
        <td headers="par pbed2 stud"> - </td>
        <td headers="par pbed2 apt"> 43 </td>
        <td headers="par pbed2 chal"> 52 </td>
        <td headers="par pbed2 villa"> 32 </td>
      </tr>
      <tr>
        <th headers="par" id="pbed3"> 3 bedroom </th>
        <td headers="par pbed3 stud"> - </td>
        <td headers="par pbed3 apt"> 13 </td>
        <td headers="par pbed3 chal"> 15 </td>
        <td headers="par pbed3 villa"> 40 </td>
      </tr>
    </tbody>
  </table>
</figure>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<figure>
  <figcaption>
    <strong>Paris: Availability of holiday accommodation</strong><br>
    Column one has the location and size of accommodation, other columns show the type and number of properties available.
  </figcaption>
  <table>
[…]
  </table>
</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Table with data on both sides of a header column
{:.ex}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: This example is valid in HTML4 only.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

This table has an unusual table structure, the days of the week are in the center column, morning times to the left and afternoon times to the right. It has the `summary`{:.attrib} attribute “Days are shown in the second column, morning opening hours in the first column and afternoon opening hours are in the third column”, explaining the way the table is laid out.

{::nomarkdown}
<%= sample_start %>

<table summary="Days are shown in the second column, morning opening hours in the first column and afternoon opening hours are in the third column">
  <caption>
    Surgery opening times
  </caption>
  <tr>
    <th scope="col" id="m"> Morning</th>
    <th scope="col" id="d">Day</th>
    <th id="a"> Afternoon</th>
  </tr>
  <tr>
    <td headers="m d1">Closed</td>
    <th scope="row" id="d1"> Sunday</th>
    <td headers="a d1"> 14:00 to 15:00</td>
  </tr>
  <tr>
    <td headers="m d2"> 08:00 to 11:30</td>
    <th id="d2"> Mon to Fri</th>
    <td headers="a d2">15:00 to 19:00</td>
  </th>
  <tr>
    <td headers="d3 m">09:30 to 12:00</td>
    <th id="d3">Saturday</th>
    <td headers="a d3">Closed</td>
  </tr>
</table>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<table
  summary="Days are shown in the second column, morning opening hours in the first column and afternoon opening hours are in the third column">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Related WCAG2.0 Technique

The following WCAG 2.0 technique was used in the example above:

-   [H73: Using the summary attribute of the table element](http://www.w3.org/TR/WCAG20-TECHS/H73)

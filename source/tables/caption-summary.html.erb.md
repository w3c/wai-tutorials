---
title: Caption & Summary
status: editors-draft
technologies: HTML4, HTML5, WAI-ARIA
order: 5
---

Captions and summaries are accessibility hints can be added to tables to help navigating to and between them. They are not required for every table but are a convenient way to meet WCAG 2.0 requirements.

* **Captions** can be used to identify tables more easily by associating a table identifier (that acts like a heading) to a table. For example, they are important if a screen reader user who choses to navigate from table to table directly loses the context of the table if no caption is present.

  Captions are recommended in WCAG 2.0 technique [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/WCAG20-TECHS/H39).

* A **summary** conveys information about the organization of the data in the table and to help users navigate the table. For example, if a table has an unconventional structure (like in this example below), the user can be told content can be found in which row or column. It is usually needed with more complex tables.

  Using summaries is recommended in WCAG 2.0 technique [H73: Using the summary attribute of the table element to give an overview of data tables](http://www.w3.org/TR/WCAG20-TECHS/H73).

## Identifying a table using a caption
{:.ex}

If used, the caption should be a succinct description of the content of the table. HTML has a dedicated `caption` element and in this example “Concert dates” tells users what information the table contains as the table otherwise may be ambiguous and could also apply to an art exhibition, for example.

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

## Summaries for more complex tables
{:.ex}

In HTML4 (and XHTML 1.x) the description can be marked up using the `summary` attribute of the `<table>` element, but as this is made obsolete in HTML5, the approaches in this section show how to put the description within the `<caption>` element and using the WAI-ARIA `aria-describedby` attribute or the `<figure>` element for the summary.

### Using the `summary` attribute
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: This approach is valid in HTML4 and XHTML 1.x only.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

This table has an unusual table structure, the days of the week are in the center column, morning times to the left and afternoon times to the right. It has the `summary` attribute “Days are shown in the second column, morning opening hours in the first column and afternoon opening hours are in the third column”, explaining the way the table is laid out.

The content of the summary attribute is not available to visual users.

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

### Nest summary into the `<caption>` element
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique in this approach is valid for HTML4, XHTML 1.x and HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

This complex table shows availability of different types and sizes of accommodation in two different locations. The `<caption>` element is used to describe the table layout as well as act as a heading for the table.

The summary is available to visual users as well.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption style="text-align: left;">
    Availability of holiday accommodation<br>
    <span style="font-size: .75em; display:block;">
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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** We added a span element to style the summary differently from the caption. This is not required.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Use `aria-describedby` to provide a table summary
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique used in this approach is only valid in HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>


<p id="tblDesc" style="margin: 0 auto; max-width: 25.333333333em; font-size: .75em; lin-height: 1.5;">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
<table aria-describedby="tblDesc" tabindex="0">
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
<table aria-describedby="tblDesc" tabindex="0">
[…]
~~~

**Note:** To discover the description text the table needs to be in keyboard focus order, which we enable by adding a `tabindex` attribute with the value `0`.

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using the `<figure>` element to mark up a table summary
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The technique used in this approach is only valid in HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>


<figure>
  <figcaption style="max-width: 19em; margin: 0 auto; color: inherit;">
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

## Related WCAG2.0 Techniques

The following WCAG 2.0 technique was used in the example above:

-   [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/WCAG20-TECHS/H39)
-   [H73: Using the summary attribute of the table element](http://www.w3.org/TR/WCAG20-TECHS/H73)

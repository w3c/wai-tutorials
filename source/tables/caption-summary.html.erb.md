---
title: Caption & Summary
order: 6
technologies: HTML4, HTML5, WAI-ARIA
wcag_techniques:
  - H73
  - H39
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Sharron Rush
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Captions and summaries provide information that can help users find, navigate, and understand tables. While they are not required in every case to meet WCAG 2.0, captions and summaries are relatively simple ways to provide such information if needed.

* A **caption** is like a heading for a table. Most screen readers announce the content of captions, which helps users to find a table and understand what it’s about and decide if they want to read it. If the user uses “Tables Mode”, captions are the primary mechanism to identify tables. The caption is provided by the `<caption>` element.

* A **summary** conveys information about the organization of the data in a table and helps users navigate it. For example, if a table has an unconventional structure (as in the examples below), information about what content can be found in which row or column can be provided to the user. A summary is usually only needed for complex tables.

If both caption and summary are provided for one table, the summary should not duplicate information present in the caption.

See WCAG 2.0 technique [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/WCAG20-TECHS/H39) for more advice on captions.

## Identifying a table using a caption
{:.ex}

The caption should be a succinct heading for the table content. In this example “Concerts” tells users what information is in the table (as the table could, for example, also contain art exhibition information).

The `<caption>` element is placed directly as a child of the `<table>` element.

{::nomarkdown}
<%= sample_start %>

<table>
  <caption>Concerts</caption>
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
  <caption>Concerts</caption>
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

In the examples below, different techniques are used to provide summaries to users.

### Nesting summary inside the `<caption>` element
{:.ap}

This complex table shows availability of different types and sizes of accommodation in two different locations. The `<caption>` element acts as a heading of the table and provides the summary that describes the composition of the table as well.

If implemented this way, the summary is available to visual users as well.

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

**Note:** A `span` element was added to style the summary differently from the caption. This is not required.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Using `aria-describedby` to provide a table summary
{:.ap}

In this approach an element with an `id` attribute is associated as a summary by using the `aria-describedby` attribute of the table. Any element with a unique `id` attribute can be used as a summary for a table in this way.

The element containing the summary doesn’t need to be in front of the table in the document, but it helps users to discover the summary more easily if the summary is in close proximity of the table, especially if they are not using a screen reader.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This WAI-ARIA feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>

<p id="tblDesc" style="max-width: 25.333333333em; font-size: .75em; lin-height: 1.5;">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
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
<table aria-describedby="tblDesc">
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using the `<figure>` element to mark up a table summary
{:.ap}

In this approach the table is wrapped in a `<figure>` element. The `<figcaption>` element contains the caption and summary text.

Screen reader users navigating in “Tables Mode” are usually unable to identify a table by a caption applied like this. The caption part of the `<figcaption>` element can be explicitly associated to the table by using the `aria-labelledby` attribute and the summary part by using the `aria-describedby` attributes. Note that this could lead to the caption and summary being read out multiple times.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This HTML5 feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>

<figure>
  <figcaption style="max-width: 19em; color: inherit;">
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
<%= code_start('', 'Not using WAI-ARIA') %>
{:/nomarkdown}

~~~ html
<figure>
  <figcaption>
    <strong>Paris: Availability of holiday accommodation</strong><br>
    <span>Column one has the location and size of accommodation, other columns show the type and number of properties available.</span>
  </figcaption>
  <table>
[…]
  </table>
</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Using WAI-ARIA') %>
{:/nomarkdown}

~~~ html
<figure>
  <figcaption>
    <strong id="paris-caption">Paris: Availability of holiday accommodation</strong><br>
    <span id="paris-summary">Column one has the location and size of accommodation, other columns show the type and number of properties available.</span>
  </figcaption>
  <table aria-labelledby="paris-caption" aria-describedby="paris-summary">
[…]
  </table>
</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using the `summary` attribute
{:.ap}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note: The `summary` attribute is deprecated in HTML5.**

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

In this approach, the summary text is in the `summary` attribute of the table. It is not available to sighted users.

See WCAG 2.0 technique [H73: Using the summary attribute of the table element to give an overview of data tables](http://www.w3.org/TR/WCAG20-TECHS/H73) for advice on the summary attribute.

{::nomarkdown}
<%= sample_start %>

<table summary="Column one has the location and size of accommodation, other columns show the type and number of properties available.">
  <caption>Paris: Availability of holiday accommodation</caption>
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
<table
  summary="Column one has the location and size of accommodation, other columns show the type and number of properties available.">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

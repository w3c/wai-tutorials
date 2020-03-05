---
title: "Caption & Summary"
permalink: /tutorials/tables/caption-summary/
ref: /tutorials/tables/caption-summary/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/tables/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/tables/caption-summary.md'
metafooter: true

resource:
  ref: /tutorials/tables/
navigation:
  previous: /tutorials/tables/multi-level/
  next: /tutorials/tables/tips/

wcag_techniques:
- H73
- H39

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Sharron Rush
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

{% include image.html src="tables/img-caption.png" class="small right" %} Captions and summaries provide information that can help users find, navigate, and understand tables. While they are not required in every case to meet WCAG, captions and summaries are fairly straightforward ways to provide such information that is often needed.

* A **caption** functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it. If the user uses “Tables Mode”, captions are the primary mechanism to identify tables. The caption is provided by the `<caption>` element.

* A **summary** conveys information about the organization of the data in a table and helps users navigate it. For example, if a table has an unusual structure (as in the examples below), information about what content can be found in which row or column can be provided to the user. A summary is usually only needed for complex tables.

If both caption and summary are provided for one table, the summary should not duplicate information present in the caption.

See WCAG technique [H39: Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39) for more advice on captions.

## Identifying a table using a caption
{:.ex}

The caption should be a short heading for the table content. In this example “Concerts” tells users what information is in the table (as the table could, for example, also contain art exhibition information).

The `<caption>` element is placed directly as a child of the `<table>` element.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
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
  […]
</table>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Summaries for more complex tables
{:.ex}

In the examples below, different techniques are used to provide summaries to users.

### Nesting summary inside the `<caption>` element
{:.ap}

This complex table shows availability of different types and sizes of accommodation in two separate locations. The `<caption>` element acts as a heading of the table and provides the summary that describes the composition of the table as well.

If implemented this way, the summary is available to visual users as well.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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


{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<caption>Availability of holiday accommodation <br>
  <span>Column one has the location and size of accommodation, other columns show the type and number of properties available</span>
</caption>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** A `span` element was added to style the summary differently from the caption. This is not required.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using `aria-describedby` to provide a table summary
{:.ap}

In this approach, an element with an `id` attribute is associated with a summary by using the `aria-describedby` attribute of the table. Any element with a unique `id` attribute can be used as a summary for a table in this way.

The element containing the summary doesn’t need to be in front of the table in the document, but it helps users to discover the summary more quickly if the summary is near the table, especially if they are not using a screen reader.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** This WAI-ARIA feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<p id="tblDesc">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
<table aria-describedby="tblDesc">
[…]
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using the `<figure>` element to mark up a table summary
{:.ap}

{% include ednote.html note="Consider including different approach for figure" issue="597" repo="wai-tutorials" status="open" %}

In this approach, the table is wrapped in a `<figure>` element. The `<figcaption>` element contains the caption and summary text.

Screen reader users navigating in “Tables Mode” are usually unable to identify a table by a caption applied like this. The caption part of the `<figcaption>` element can be explicitly associated to the table by using the `aria-labelledby` attribute and the summary part by using the `aria-describedby` attributes. Note that this could lead to the caption and summary being read out multiple times.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** This HTML5 feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet: Not using WAI-ARIA" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet: Using WAI-ARIA" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

### Using the `summary` attribute
{:.ap}

{% include ednote.html note="Consider removing this section" %}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**The `summary` attribute is deprecated in HTML5.**

{::nomarkdown}
{% include box.html type="end" %}
{:/}

In this approach, the summary text is in the `summary` attribute of the table. Such summaries are not displayed visually. They are commonly only available to screen reader users.

See WCAG technique [H73: Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73) for advice on the summary attribute.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

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

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<table
  summary="Column one has the location and size of accommodation, other columns show the type and number of properties available.">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

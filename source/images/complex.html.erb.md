---
title: Complex Images
technologies: WAI-ARIA, HTML5
wcag_techniques:
  - G95
  - G92
  - H45
  - G73
  - G74
order: 6
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Complex images contain substantial information – more than can be conveyed in a short phrase or sentence. These are typically:

-   graphs and charts, including flow charts and organizational charts;
-   diagrams and illustrations where the page text relies on the user being able to understand the image;
-   maps showing locations or other information such as weather systems.

In these cases a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description. The second part is the long description – a textual representation of the essential information conveyed by the image. This page shows different approaches that can be used to provide such short and long descriptions.

## Long descriptions

There are situations where the composition of an image is important and needs to be provided in the long description. For example, the sequence of colors used and the relative heights of the columns in a bar chart may be relevant information about the structure of the chart, in addition to the actual values and trends that it depicts.

Remeber that complex images can be hard to understand by many people, in particular people with learning disabilities and who use screen magnification. Long descriptions benefit many people and it is good practice to make them available to everyone, for example as part of the main content. It may also be possible to reduce unecessary complexity in your images, and make them easier to understand for everyone.

It is also good practice to refer to and summarize more complex images from the accompanying text. For example, a reference like “The following graph shows that visitors were lost in the first quarter, but the numbers recovered in the second quarter” helps to point out the relevant information that the image is intended to present.

## Image containing substantial information
{:.ex}

In this example, a bar chart of website visitor statistics has the short description “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3”, provided through the `alt` attribute of the image. The long description provides detailed information, including scales, values, relationships and trends that are represented visually. For example, to point out the declining values for site 1, consistent values for site 2, and increasing values for site 3 that are encoded in the bar chart. The [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc) used in the following example is described later in the section.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/chart.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="../examples/2014-first-qtr/"><br><a href="../examples/2014-first-qtr/">Image Description</a>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** See [example long description](#../examples/2014-first-qtr/) associated with this image.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

From the approaches below, the first and second one make the information available to other programs, such as web browsers and search engines.

### Providing a link to the long description via `longdesc`
{:.ap}

<aside class="annotation">
  <h4 class="annotation-header"><span class="subhead">Accessibility Support:</span> <code>Longdesc</code>, Web Browsers, and Assistive Technologies</h4>
  <div class="annotation-content">
    <p>In Firefox, long descriptions linked by <code>longdesc</code> are available to all users through “View description” in the image’s context menu. There is an <a href="https://chrome.google.com/webstore/detail/long-descriptions-in-cont/ohbmencljkleiedahijfkagnmmhbilgp">official Chrome Extension</a> that adds long description access in a similar way. Safari has no support for <code>longdesc</code>. In other web browsers, <code>longdesc</code> is currently available only to screen reader users. Mobile platforms currently do not support <code>longdesc</code>.</p>
    <p>No browser indicates the presence of the <code>longdesc</code> attribute visually.</p>
  </div>
</aside>

The `longdesc` attribute can contain the URI of a separate web page that provides the long description for an image, or a fragment identifier that refers to an element on the same page that proives the long description.

When the `longdesc` attributes contains a URI to refer to another web page with the long description, it is recommended to also apply [Approach 3 (A text link to the long description adjacent to the image)](#a-text-link-to-the-long-description-adjacent-to-the-image). This is a work-around for web browsers and assistive technologies that don’t fully support the `longdesc` attribute.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img
	src="chart.png"
	alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3"
	longdesc="2014-first-qtr.html">
<a href="2014-first-qtr.html">Long Description</a>
~~~

When the `longdesc` attribute contains a fragment identifier (`#` followed by the `id` an the element on the same web page - a “hash link”), it refers to an element on the same web page that provides the long description. It addresses the same use case as for [Approach 2](#https://w3c.github.io/wai-tutorials/images/complex/#structurally-associating-image-and-long-description-with-aria-describedby), though the support by web browsers and assistive technologies may vary. An additional link (by applying [Approach 3](#a-text-link-to-the-long-description-adjacent-to-the-image)) is not needed when the long description is in close proximity to the image.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img
	src="chart.png"
	alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3"
	longdesc="#chart-longdesc">
[…]
<div id="chart-longdesc">
	[…]
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Structurally associating image and long description with `aria-describedby`
{:.ap}

Similarly to the [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc), the WAI-ARIA `aria-describedby` attribute can be used to link to a description of the image that is provided on the same web page. The value of the attribute is the `id` of the element that provides the long description.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="chart.png"
	aria-describedby="image-description"
	alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3.">

<div id="image-description">
	<p><strong>Trends:</strong> Site visitors for the first  ...</p>
	<p><strong>Statistics:</strong>
	<table>
		<caption>Example.com Site visitors Jan to March 2014</caption>
		<tr>…</tr>
	</table>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### A text link to the long description adjacent to the image
{:.ap}

This approach provides a text link next to the image, that refers to a separate web page or a section of the same web page that contains the long description. The link text needs to clarify the destination, and associate it with the image.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img
		src="chart.png"
		alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3">
	<br>
	<a href="2014-first-qtr.html">Example.com Site visitors Jan to March 2014 text description of the bar chart</a>
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This approach is supported by all web browsers and assistive technologies, and makes the long descriptions available to everyone.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Describing the location of the long description in the `alt` attribute
{:.ap}

When a long description is provided on the same web page as an images, its location can be described using the `alt` attribute of the image. The location information needs to be clear and accurate to help users locate the content.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img
		src="chart.png"
		alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3. Described under the heading Site visitors full text.">
</p>
[…]
<h4>Site visitors full text</h4>
[…]
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Structurally associating the image and its adjacent long description (HTML5)
{:.ap}

The HTML5 `<figure>` element can be used to enclose both the image and its long description. The long description (presented as headings, text, and a table) is explicitly associated to the image by using `role="group"` on the containing `<figure>` element.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<figure role="group">
	<img src="chart.png"
		alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3, described in detail below.">
	<h2>Trends</h2>
	<p>Site visitors for the first  ...</p>
	<h2>Statistics</h2>
	<table>
		<caption>Example.com Site visitors Jan to March 2014</caption>
		<tr>…</tr>
	</table>
</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

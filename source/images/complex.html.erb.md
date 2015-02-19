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

In these cases a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description. The second part is the long description – a textual representation of the essential information conveyed by the image. The following examples show different approaches that can be used to provide such short and long descriptions.

## Long descriptions

There are situations where the composition of an image is important and needs to be provided in the long description. For example, the sequence of colors used and the relative heights of the columns in a bar chart may be relevant information about the structure of the chart, in addition to the actual values and trends that it depicts.

Remember that complex images can be difficult to understand by many people -- in particular people with learning disabilities and people with low vision. Long descriptions benefit many people and it is good practice to make them available to everyone, for example, as part of the main content. It may also be possible to reduce unnecessary complexity in your images, and make them easier to understand for everyone.

It is also good practice to refer to and summarize more complex images from the accompanying text. For example, a reference such as “The following graph shows that visitors were lost in the first quarter, but the numbers recovered in the second quarter” helps to point out the relevant information that the image is intended to present.

## Description containing structured information
{:.ex}

In this example, a bar chart of website visitor statistics has the short description “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3”, provided through the `alt` attribute of the image. The long description provides detailed information, including scales, values, relationships and trends that are represented visually. For example, the long description can point out the declining values for site 1, consistent values for site 2, and increasing values for site 3 that are encoded in the bar chart. The [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc) used in the following example is described later in the section.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/chart.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="../examples/2014-first-qtr/"><br><a href="../examples/2014-first-qtr/">Image Description</a>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** See [example long description](examples/2014-first-qtr.html) associated with this image.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

Among the approaches below, the first and second one make the information available to other programs, such as web browsers and search engines.

### Providing a link to the long description via `longdesc`
{:.ap}

<aside class="annotation">
  <h4 class="annotation-header"><span class="subhead">Accessibility Support:</span> <code>Longdesc</code>, Web Browsers, and Assistive Technologies</h4>
  <div class="annotation-content">
    <p>In Firefox, long descriptions linked by <code>longdesc</code> are available to all users through “View description” in the image’s context menu. There is an <a href="https://chrome.google.com/webstore/detail/long-descriptions-in-cont/ohbmencljkleiedahijfkagnmmhbilgp">official Chrome Extension</a> that adds long description access in a similar way. Safari has no support for <code>longdesc</code>. In other web browsers, <code>longdesc</code> is currently available only to screen reader users. Mobile platforms currently do not support <code>longdesc</code>.</p>
    <p>No browser indicates the presence of the <code>longdesc</code> attribute visually.</p>
  </div>
</aside>

The `longdesc` attribute can contain the URI of a separate web page that provides the long description for an image or a fragment identifier that refers to an element on the same page that provides the long description.

When the `longdesc` attributes contains a URI to refer to another web page with the long description, it is recommended to also apply [Approach 3 (a text link to the long description adjacent to the image)](#a-text-link-to-the-long-description-adjacent-to-the-image). This is a work-around for web browsers and assistive technologies that don’t fully support the `longdesc` attribute.

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

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

When the `longdesc` attribute contains a fragment identifier (`#` followed by the `id` of an element on the same web page - a “hash link”), it refers to an element on the same web page that provides the long description. It addresses a similar use case as [Example 2, Approach 1](#structurally-associating-image-and-long-description-with-aria-describedby), though the support by web browsers and assistive technologies may vary. An additional link (by applying [Approach 2](#a-text-link-to-the-long-description-adjacent-to-the-image)) is not needed when the long description is in close proximity to the image.

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

### A text link to the long description adjacent to the image
{:.ap}

This approach provides a text link next to the image that refers to a separate web page or a section of the same web page that contains the long description. The link text needs to clarify the destination, and associate it with the image.

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

When a long description is provided on the same web page as an image, its location can be described using the `alt` attribute of the image. The location information needs to be clear and accurate to help users locate the content.

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
	<h2>Overview</h2>
	<p>The chart shows the website hits for the first quarter of 2014 …</p>
	<h2>Values</h2>
	<table>
		<caption>Example.com Site visitors Jan to March 2014</caption>
		<tr>…</tr>
	</table>
</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Description containing textual information
{:.ex}

The WAI-ARIA `aria-describedby` attribute can be used to link to a description of the image that is provided on the same web page, in a similar way to the [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc). The value of the attribute is the `id` of the element that provides the long description.

Important: The element referenced by `aria-describedby` is treated like one continuous paragraph of text. Screen readers and other assistive technology do not have access to structural information, such as any headings and tables. They will read out or provide the text of any contained elements without indicating their structural relationships, and without the corresponding navigation mechanisms. As a result, this approach only works for long descriptions that are text-only, without needing structural information as was needed in the previous example.

In this example, the head of the peacock is described using a paragraph of text that is on the web page.

{::nomarkdown}
<%= sample_start %>

<img src="../../img/peafowl.jpg" alt="Neck of a male peacock" aria-describedby="description">
<p id="description">
  The male is metallic blue on the crown, the feathers of the head being short and curled. The fan-shaped crest on the head is made of feathers with bare black shafts and tipped with blush-green webbing. A white stripe above the eye and a crescent shaped white patch below the eye are formed by bare white skin. The sides of the head have iridescent greenish blue feathers. The back has scaly bronze-green feathers with black and copper markings.
</p>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="peacock.jpg"
     alt="Neck of a male peacock"
     aria-describedby="description">
<p id="description">
  The male is metallic blue on the crown, the feathers of the head being short and curled. The fan-shaped crest on the head is made of feathers with bare black shafts and tipped with blush-green webbing. A white stripe above the eye and a crescent shaped white patch below the eye are formed by bare white skin. The sides of the head have iridescent greenish blue feathers. The back has scaly bronze-green feathers with black and copper markings.
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

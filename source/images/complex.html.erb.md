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
  - Anna Bell Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Complex images contain substantial information – more than can be conveyed in a short phrase or sentence. These are typically:

-   graphs and charts, including flow charts and organizational charts;
-   diagrams and illustrations where the page text relies on the user being able to understand the image;
-   maps showing locations or other information such as weather systems.

In these situations a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description. The second part is the long description – a textual representation of the essential information conveyed by the image.

There are use cases where a description of the composition of the image may also be needed as part of the long description, for example if the composition is important to understand the image. This page shows several possible approaches that can be used to provide both short and long descriptions.

Also it’s good practice to refer to more complex images from the accompanying text to describe the overall data, for example: “The following graph shows that visitors were lost in the first quarter, but the numbers recovered in the second quarter”.

Complex images can be hard to understand for a variety of users, like people with learning disabilities or who use screen magnification. Long descriptions can benefit those users as well, so the description should be made available not only for screen reader users, if possible.

## Image containing substantial information
{:.ex}

This bar chart of website visitor statistics has a short description of “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3” provided through the alt attribute of the image. The long description provides detailed information, including scales, values, relationships and trends that are represented visually. For example, since the declining values for site 1, consistent values for site 2, and increasing values for site 3 are highlighted through the bar chart, this information must also be included in the [long text description](examples/2014-first-qtr.html).

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/chart.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="../examples/2014-first-qtr/">

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

From the approaches below, only approach one and two provide a mechanism for automatic discovery of the description. Those mechanisms can help to implement an image search, for example.

### Providing a link to the long description via `longdesc`
{:.ap}

Here the `longdesc` attribute contains the URI of a page containing the long description.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img
	src="chart.png"
	alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3"
	longdesc="2014-first-qtr.html">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

If the long description is published within an HTML element on the same page as the image, the `longdesc` value can simply contain a fragment identifier (“hash link”) to the element containing the long description. This fragment identifier consists of an `#` and the value of the `id` attribute of the `longdesc` element.

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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The *longdesc linked* long description location is reachable by all users in Firefox. There is an [official Chrome Extension](https://chrome.google.com/webstore/detail/long-descriptions-in-cont/ohbmencljkleiedahijfkagnmmhbilgp) provided that adds long description access. In other browsers, it’s only available to screen reader users at the moment. There is currently no support on mobile platforms.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Structurally associating image and long description with `aria-describedby`
{:.ap}

The WAI-ARIA `aria-describedby` attribute can be used to link the description to the image. The value of the attribute is the `id` of the element with the description.

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

This approach provides a text link next to the image. The link text makes both the destination and the association with the image clear.

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

**Note:** This approach is well supported in all browsers and ensures that everyone has access to the data as well as the image, no matter what browser or assistive technologies they may use.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Describing the location of the long description in the `alt` attribute
{:.ap}

If the long description is on the same page as the image and its location can be accurately pinpointed by being described, the `alt` attribute can include location information.

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

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

In these situations a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description. The second part is the long description – a textual representation of the essential information conveyed by the image.

There are use cases where a description of the composition of the image may also be needed as part of the long description, for example if the composition is important to understand the image. This page shows several possible approaches that can be used to provide both short and long descriptions.

It is also good practice to refer to more complex images from the accompanying text to describe the overall data, for example: “The following graph shows that visitors were lost in the first quarter, but the numbers recovered in the second quarter”.

Complex images can be hard to understand for a variety of users, such as people who have learning disabilities or who use screen magnification. Long descriptions benefit many people and it is good practice to make it available to everyone as part of the main content. Consider making images less complex where possible to make them easier to understand for everyone.

## Image containing substantial information
{:.ex}

This bar chart of website visitor statistics has a short description of “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3” provided through the `alt` attribute of the image. The long description provides detailed information, including scales, values, relationships and trends that are represented visually. For example, since the declining values for site 1, consistent values for site 2, and increasing values for site 3 are highlighted through the bar chart. The following example shows a complex image using the [longdesc approach, described below](#providing-a-link-to-the-long-description-via-longdesc).

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/chart.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="../examples/2014-first-qtr/"><br><a href="../examples/2014-first-qtr/">Image Description</a>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

From the approaches below, the first and second one make the information available to other programs such as web browsers and search engines.

### Providing a link to the long description via `longdesc`
{:.ap}

<aside class="annotation">
  <h4 class="annotation-header"><span class="subhead">Accessibility Support:</span> <code>Longdesc</code>, Web Browsers, and Assistive Technologies</h4>
  <div class="annotation-content">
    <p>The long description linked by <code>longdesc</code> is reachable by all users in Firefox. There is an <a href="https://chrome.google.com/webstore/detail/long-descriptions-in-cont/ohbmencljkleiedahijfkagnmmhbilgp">official Chrome Extension</a> that adds long description access. In other web browsers, <code>longdesc</code> is only available to screen reader users at the moment. There is currently no support on mobile platforms.</p>
    <p>No browser indicates the presence of the <code>longdesc</code> attribute visually.</p>
  </div>
</aside>

The `longdesc` attribute can contain the URI of a page containing the long description, or an fragment identifier.

`Longdesc` is used primarily if the content of the image needs to be described primarily to people that are unable to see the image. For example, an author might decide that it is necessary to go into greater details on the brush strokes or what meaning a certain color has, describing not only the content of the image but also details of the visual appearance. In the example above that would mean describing how the bar chart looks like.

If the `longdesc` attributes refers to another page, it is recommended to also apply [Approach 3 (A text link to the long description adjacent to the image)](#a-text-link-to-the-long-description-adjacent-to-the-image) to make sure that the long description is visible to visual users and in browsers and assistive technologies that don’t fully support `longdesc`.

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

If the long description is published within an HTML element on the same page as the image, the `longdesc` value can simply contain a fragment identifier (“hash link”) to the element containing the long description. This fragment identifier consists of an `#` and the value of the `id` attribute of the long description element.

Usually this approach doesn’t need an additional link, if the description is in close proximity to the image. If this isn’t the case a visible link helps users to find the long description.

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

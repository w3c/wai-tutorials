---
title: Complex Images
status: draft
technologies: WAI-ARIA, HTML5
order: 6
---

Complex images contain substantial information – more than can be conveyed in a short phrase or sentence. These are typically:

-   graphs and charts, including flow charts and organizational charts;
-   diagrams and illustrations where the page text relies on the user being able to understand the image;
-   maps showing locations or other information such as weather systems.

In these situations a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description.  The second part is the long description – a textual representation of the essential information conveyed by the image. 

In certain situations the composition of the image may also be needed as part of the long description, but only where it’s important that the user understand the image construction. This page shows several possible approaches that can be used to provide both short and long descriptions.

## Image containing substantial information
{:.ex}

This bar chart of website visitor statistics has a short description of “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3”. It’s in the `alt` attribute and identifies the image. The long description details the information, including scales, values, relationships and trends that are represented visually. For example, since the declining values for site 1, consistent values for site 2, and increasing values for site 3 are highlighted through the bar chart, this information must also be included in the [long text description](examples/2014-first-qtr.html).

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/chart.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="../examples/2014-first-qtr/">

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

### Providing a link to the long description via *longdesc*
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

If the long description is published on the same page as the image, the `longdesc` value can simply contain a fragment identifier (“hash link”) to the long description.

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

**Note:** Both Firefox and Chrome browsers are working on implementations that will make the *longdesc linked* long description location reachable by all users. Currently, and in other browsers, it’s only available to screen reader users.

{::nomarkdown}
<%= notes_end %>
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

The HTML5 `<figure>` element can be used to enclose both the image and
its long description. The long description (presented as headings, text
and a table) is explicitly associated to the image by using
`role="group"` on the containing `<figure>` element.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<figure role="group">
	<img src="chart.png"
		alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3, described in full below.">
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

### Structurally associating image and long description with `aria-described-by`
{:.ap}

The WAI-ARIA `aria-described-by` attribute can be used to link the description to the image. The value of the attribute is the `id` of the element with the description. (This approach is only valid in HTML5.)

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="chart.png"
	aria-described-by="image-description"
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

## Related WCAG2.0 Techniques

The following WCAG 2.0 techniques were used in the examples above:

-   [G95: Providing short text alternatives that provide a brief description of the non-text content](http://www.w3.org/TR/WCAG20-TECHS/G95.html)
-   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/WCAG20-TECHS/G92.html)
-   [H45: Using longdesc](http://www.w3.org/TR/WCAG20-TECHS/H45.html)
-   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/WCAG20-TECHS/G73.html)
-   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/WCAG20-TECHS/G74.html)

---
title: Image Maps
status: draft
technologies: HTML5
order: 8
---

A client-side image map is an image divided into selectable regions defined by `<area>` elements (“hotspots”) that allow user interaction. Usually the selectable regions are links to other pages. For image maps, text alternatives are needed on both the `<img>` element itself (to convey the informative context) and on each of the `<area>` elements (to convey the link destination or the action that will be initiated if the link is followed).

## An organizational chart with links to individual pages
{:.ex}

The following organizational chart is used to provide links to each director's home page. The text alternative for the image is “Board of Directors and related staff:”. Each linked `<area>` has a text alternative to identify the individual -- for example, “Davy Jones: Chairman”.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Board of directors and related staff: ](orgchart.png){:usemap="#Map"}

<map name="Map" id="Map">
	<area shape="rect" coords="176,14,323,58" href="../res/beyond" alt="Davy Jones: Chairman">
	<area shape="rect" coords="81,75,226,114" href="../res/beyond" alt="Carole Brewster: Company Secretary">
	<area shape="rect" coords="6,138,155,182" href="../res/beyond" alt="Harry H Brown: Marketing Director">
	<area shape="rect" coords="175,138,323,182" href="../res/beyond" alt="Paula Holbein: Sales Director">
	<area shape="rect" coords="345,136,496,186" href="../res/beyond" alt="Hugh Howard: Finance Director">
</map>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="orgchart.png"
     alt="Board of directors and related staff: "
     usemap="#Map">
<map id="Map" name="Map">
	<area shape="rect"
	      coords="176,14,323,58"
	      href="…"
	      alt="Davy Jones: Chairman">
	[…]
</map>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[Full code for Image map example](examples/imagemap.html)

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Image maps may not function correctly on some mobile devices
if the coordinates for the areas are not scaled using the same proportions
as the image. To compensate for this you could provide redundant text links on
the same page.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Related WCAG2.0 Techniques


The following WCAG 2.0 techniques were used in the examples above:

-   [H37: Using alt attributes on img elements](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H37.html)
-   [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H24)

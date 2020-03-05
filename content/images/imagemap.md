---
title: "Image Maps"
permalink: /tutorials/images/imagemap/
lang: en
description:
image: /content-images/wai-tutorials/images/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/images/imagemap.md'
metafooter: true

resource:
  ref: /tutorials/images/imagemap/
navigation:
  previous: /tutorials/images/groups/
  next: /tutorials/images/decision-tree/

wcag_techniques:
- G196
- H67
- ARIA13

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Overview" class="full" %}
{:/}

A client-side image map is an image divided into selectable regions defined by `<area>` elements (“hotspots”) that allow user interaction. Usually, the selectable regions are links to other pages. For image maps, text alternatives are needed on both the `<img>` element itself (to convey the informative context) and on each of the `<area>` elements (to convey the link destination or the action that will be initiated if the link is followed).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include_cached toc.html %}

## **Example 1:** An organizational chart with links to individual pages

The following organizational chart is used to provide links to each director's home page. The text alternative for the image is “Board of Directors and related staff:”. Each linked `<area>` has a text alternative to identify the individual -- for example, “Davy Jones: Chairman”. The text alternative for individuals also states their relation in the graph.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![Board of directors and related staff: ]({{ "/content-images/wai-tutorials/images/orgchart.png" | relative_url }}){:usemap="#Map"}

<map name="Map" id="Map">
  <area shape="rect" coords="176,14,323,58" href="../res/beyond" alt="Davy Jones: Chairman">
  <area shape="rect" coords="81,75,226,114" href="../res/beyond" alt="Carole Brewster: Company Secretary">
  <area shape="rect" coords="6,138,155,182" href="../res/beyond" alt="Harry H Brown: Marketing Director (reports to chairman)">
  <area shape="rect" coords="175,138,323,182" href="../res/beyond" alt="Paula Holbein: Sales Director (reports to chairman)">
  <area shape="rect" coords="345,136,496,186" href="../res/beyond" alt="Hugh Howard: Finance Director (reports to chairman)">
</map>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img src="orgchart.png"
     alt="Board of directors and related staff: "
     usemap="#Map">
<map id="Map" name="Map">
  <area shape="rect"
        coords="176,14,323,58"
        href="[…]"
        alt="Davy Jones: Chairman">
  […]
  <area shape="rect"
        coords="6,138,155,182"
        href="[…]"
        alt="Harry H Brown: Marketing Director (reports to chairman)">
  […]
</map>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

[Full code for Image map example](/tutorials/images/examples/imagemap/)

Browser implementation for image maps varies at the time of writing; see [this HTML bug](https://lists.w3.org/Archives/Public/public-html-bugzilla/2015Jan/0020.html). To accommodate for the different implementations, keep in mind to:

* use every image map only once. That means if multiple images with the same map are to be used, the map should be duplicated and have a different `id`s;
* place the `<map>` element as a direct sibling to the image.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

Image maps may not function correctly on some mobile devices if the coordinates for the areas are not scaled using the same proportions as the image. To compensate for this, provide redundant text links on the same page.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

---
title: Carousel Structure
lang: en
permalink: /tutorials/carousels/structure/
ref: /tutorials/carousels/structure/

github:
  repository: w3c/wai-tutorials
  path: 'content/carousels/structure.md'

resource:
  ref: /tutorials/carousels/
navigation:
  previous: /tutorials/carousels/
  next: /tutorials/carousels/functionality/

wcag_success_criteria:
  - 1.3.1
  - 2.4.6
wcag_techniques:
  - G130
  - H42
  - H48
first_published: "May 2015"
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Structural markup ensures that the content of a carousel can be used in a variety of situations. For example, a carousel with proper markup could be presented as a list of articles on a mobile device.

## General Structure

As a collection of content items, carousels are typically best represented as unordered lists, using `<ul>` and `<li>`. Depending on the context, other elements can also be used.

Every carousel should be enclosed in a labeled region, to allow users to find the carousel easily. In the following example, a `<section>` element is used to define the region and `aria-labelledby` defines the heading that contains the label.

{% include ednote.html note="The following paragraph was show in a side column before." %} See the Page Structure Tutorial for more information on [regions](/tutorials/page-structure/regions/) and [labels](/tutorials/page-structure/labels/).


{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~html
<section class="carousel" aria-labelledby="carouselheading">
  <h3 id="carouselheading" class="visuallyhidden">Recent news</h3>
  <ul>
    <li class="slide">…</li>
    <li class="slide">…</li>
    <li class="slide">…</li>
    …
  </ul>
</section>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="The following paragraph was show in a side column before." %} A [working demo example](/tutorials/carousels/working-example/) for this code is available.

## Carousel items

Carousels are often used as a gallery to display a series of images. However, more complex content, such as teasers, articles, or entire sections of web pages can also be shown inside carousels. In all cases, use appropriate markup to ensure that the structure and meaning of the content are conveyed clearly. Such markup may include headings, sections, lists, articles, and other elements as needed.

This first example shows a carousel item with images as content:

{::nomarkdown}
{% include box.html type="start" title="Code: Example 1" class="example" %}
{:/}

~~~html
…
<li class="slide">
  <img src="teddy1.jpg" alt="Space Teddy">
</li>
…
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

This example of an article that includes a heading and a paragraph shows how more complex content can be used.

{::nomarkdown}
{% include box.html type="start" title="Code: Example 2" class="example" %}
{:/}

~~~html
…
<li class="slide" style="background-image: url('teddy1.jpg');">
  <article>
    <h4>Space Teddy production reaches all-time high</h4>
    <p>Teddies in Space Inc. has released outstanding numbers for the last solar year. The production of Space Teddies increased by 17%. The new version, scheduled to be released in a few months, will likely be the biggest Space Teddy release ever.</p>
    …
  </article>
</li>
…
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

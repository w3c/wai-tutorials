---
title: Carousel Structure
nav_title: Structure
status: draft
order: 2
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
wcag_techniques:
  - G130
  - H42
  - H48
---

Structural markup ensures that the content of a carousel can be used in a variety of situations. For example, a carousel with proper markup could be presented as a list of articles on a mobile device, if needed.

## General Structure

As a collection of content items, carousels are typically best represented as unordered lists, using `<ul>` and `<li>`. Depending on the context, other elements can also be used.

Every carousel should be enclosed in a labeled region, to allow users find the carousel more easily. In the following example a `<section>` element is used to define the region and `aria-labelledby` defines the heading that contains the label.

{::nomarkdown}
<%= reference :start %>
{:/}

See the Page Structure Tutorial for more information on [regions](/page-structure/regions.html) and [labels](/page-structure/labels.html).

{::nomarkdown}
<%= reference :end %>
{:/}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

## Carousel items

The content of individual carousel items often consists of just images, when used for an image gallery. However more complex content, such as teasers, articles, or entire sections of web pages can also be shown inside carousels. In any case, use appropriate markup to ensure that the structure and meaning of the content is conveyed. Such markup may include headings, sections, lists, articles, and other elements as needed.

This first example shows a carousel item with images as content:

{::nomarkdown}
<%= code_start('', 'Example 1') %>
{:/nomarkdown}

~~~html
…
<li class="slide">
  <img src="teddy1.jpg" alt="Space Teddy">
</li>
…
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

More complex content can be used, in this example an article with a heading:

{::nomarkdown}
<%= code_start('', 'Example 2') %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

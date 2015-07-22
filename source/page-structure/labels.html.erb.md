---
title: Labeling Regions
status: editors-draft
order: 3
wcag_success_criteria:
wcag_techniques:
technologies: HTML5, WAI-ARIA
---

## Carousel label

As any distinct part of a website, carousels need labels that allow users to identify its purpose by using one of the following approaches.

### Using headings
{:.ap}

In the example below, an HTML heading is used to identify the carousel.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel">
  <h3>Recent news</h3>
  …
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using `aria-label`
{:.ap}

In the following example, the WAI-ARIA `aria-label` attribute is used to provide a label for the carousel. This approach can be used if the label is not supposed to be visually on the page.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel" aria-label="Recent news">
  …
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using `aria-labelledby`
{:.ap}

By using the WAI-ARIA `aria-labelledby` attribute, an existing text – like a heading – can be used to label the carusel. This approach provides labels in multiple ways, so users can find and navigate the carousel more easily. 

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel" aria-labelledby="carouselheading">
  <h3 id="carouselheading">Recent news</h3>
    …
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}
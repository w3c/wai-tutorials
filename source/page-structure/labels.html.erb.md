---
title: Labeling Regions
status: draft
order: 3
wcag_success_criteria:
  - 2.4.1
  - 2.4.6
wcag_techniques:
  - H69
  - ARIA11
technologies: HTML5, WAI-ARIA
---
Most regions need to be labeled, especially if there are multiple regions of the same type, for example multiple navigation options, on a page. WAI-ARIA provides simple mechanisms to label a region, enabling users to easily navigate around the page.

Sections should also organized using [headings](headings.html).

## Using `aria-label`
{:.ap}

{::nomarkdown}
<%= ref :start %>
{:/nomarkdown}

Use the WAI-ARIA `aria-label` attribute to label the carousel. This approach can be used if the label is not supposed to be visually on the page.

{::nomarkdown}
<%= ref :middle %>
{:/nomarkdown}

More [information about WAI-ARIA](https://www.w3.org/WAI/intro/aria) is available, including [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

{::nomarkdown}
<%= ref :end %>
{:/nomarkdown}

{::nomarkdown}
<%= demo :start %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<nav aria-label="Main Navigation">
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= demo :middle %>
{:/}

A [complete example](example.html), including labels, is available.

{::nomarkdown}
<%= demo :end %>
{:/}

## Using `aria-labelledby`
{:.ap}

Use the WAI-ARIA `aria-labelledby` to reference an existing element – like a heading – by its (unique) `id`. The content of the referenced element is then used as the label. A heading allows users to find the region in multiple ways.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<nav aria-labelledby="regionheading">
  <h3 id="regionheading">On this Page</h3>
    …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

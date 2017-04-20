---
title: Labeling Regions
order: 3
wcag_success_criteria:
  - 2.4.1
  - 2.4.6
wcag_techniques:
  - H69
  - ARIA11
technologies: HTML5, WAI-ARIA
editors:
- Eric Eggert: "https://www.w3.org/People/yatil/"
- Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
- The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---
Assistive technologies use a generic name (for example “navigation” or “complementary”) for page regions that don’t have a label set explicitly. If the default label (for example, `main`) is sufficient to describe a region, no specific label is needed.

Using clear labels on page regions is most important if multiple regions of the same type are present on a single page. The labels allow users of assistive technologies find regions more efficiently.

## Using `aria-labelledby`
{:.ap}

{::nomarkdown}
<%= ref :start %>
{:/nomarkdown}

Use `aria-labelledby` to point to an existing element by its (unique) `id`. The label of the region is the content of the referenced element. Every element can be a label this way. Labels should be short and descriptive. If a heading is present in the region, consider using it as the label:

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

{::nomarkdown}
<%= ref :middle %>
{:/nomarkdown}

Explore other WAI-ARIA resources:

* [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
* [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

{::nomarkdown}
<%= ref :end %>
{:/nomarkdown}


## Using `aria-label`
{:.ap}



Use the WAI-ARIA `aria-label` attribute to label the region. Consider this approach if the label should not appear visually on the page.

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

View a [complete code example](example.html) with regions and labels.

{::nomarkdown}
<%= demo :end %>
{:/}

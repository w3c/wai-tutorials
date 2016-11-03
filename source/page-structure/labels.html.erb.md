---
title: Labeling Regions
status: editors-draft
order: 3
wcag_success_criteria:
wcag_techniques:
technologies: HTML5, WAI-ARIA
---
{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This is an early, raw first editor’s draft.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Most [regions](regions.html) need to be labeled, especially if there are multiple regions of the same type, for example multiple navigation options, on a page. 

## Using `aria-label`
{:.ap.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Missing: Link to WAI-ARIA intro. See [Issue 360](https://github.com/w3c/wai-tutorials/issue/360).

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Use the WAI-ARIA `aria-label` attribute to label the carousel. This approach can be used if the label is not supposed to be visually on the page.

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

## Using `aria-labelledby`
{:.ap.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Unsure about wording/understandability.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Use the WAI-ARIA `aria-labelledby` attribute to assign an existing element – like a heading – by its (unique) `id` as a label to the region. Using a heading allows users to find the region in different ways.

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

## Related WCAG 2.0 resources
{:.risky}
{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Currently missing.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

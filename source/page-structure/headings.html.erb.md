---
title: Headings
status: editors-draft
order: 5
wcag_success_criteria:
  - 1.3.1
  - 2.4.1
  - 2.4.6
  - 2.4.10
wcag_techniques:
  - H69
  - H80
  - PDF9
  - G130
  - G141
  - ARIA12
  - H42
---

Use headings to communicate organization of the content on the page. They allow web browsers, plug-ins, and assistive technologies provide mechanisms for users to navigate through web pages.

## Heading levels

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This section is too wordy – clarifications welcome.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Heading levels should be properly nested, where possible. That means that an `<h1>` is followed by an `<h1>` or `<h2>`, an `<h2>` is followed by an `<h2>` or `<h3>`, and so forth. In turn, every heading with a lower leven can follow any heading. That means that it is completely valid to follow an `<h3>` by an `<h1>`, for example.

In fixed sections of the page, for example in the footer, the heading levels _should not_ change depending on the levels that are used in the content area above. In those cases consistency across pages is more important.

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

I’m not 100% sure if we need the following section about the HTML5 algorithm. If we keep it, it should probably be in the right marginal column.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

{::nomarkdown}
<%=notes_start%>
{:/nomarkdown}

**Note:** HTML5 has introduced [an outline algorithm](http://www.w3.org/TR/html5/sections.html#headings-and-sections) that assigns heading levels based on how deep sectioning elements are nested inside each other, regardless of the actual heading level. At the time of writing, this is not supported by web browsers and assistive technologies, and **should not** be used.

{::nomarkdown}
<%=notes_end%>
{:/nomarkdown}

The following approaches outline the headings structure. Other markup and content, such as `<header>`, `<main>`, `<nav>`, and `<footer>`, was ommitted for readability:

## Organize main content
{:.ap}

Use headings are used to only organize the main content of the web page:

{::nomarkdown}
<%=code_start('','')%>
{:/nomarkdown}

~~~html
<h1>An inside look at the new SpaceBear 8™</h1>
  <h2>Cotton Fur</h2>
  <h2>Sapphire Eyes</h2>
  <h2>Synthetic Felt Paws</h2>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

## Organize page regions
{:.ap}

Headings can also be used to organize the different regions of a web page, similar to [region labels](labels.html).

### Main heading before navigation
{:.ex}

{::nomarkdown}
<%=code_start('','')%>
{:/nomarkdown}

~~~html
<h1>SpaceTeddy Inc.</h1>
  <h2>Navigation</h2>
  <h2>Sidebar</h2>
    <h3>More news</h3>
    <h3>What our clients say</h3>
    <h3>Ratings</h3>
  <h2>An inside look at the new SpaceBear 8™</h2>
    <h3>Cotton Fur</h3>
    <h3>Saphire Eyes</h3>
    <h3>Syntetic Felt Paws</h3>
  <h2>Footer</h2>
    <h3>About the company</h3>
    <h3>Our retail stores</h3>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

### Main heading after navigation
{:.ex}

{::nomarkdown}
<%=code_start('','')%>
{:/nomarkdown}

~~~html
  <h2>Navigation</h2>
  <h2>Sidebar</h2>
    <h3>More news</h3>
    <h3>What our clients say</h3>
    <h3>Ratings</h3>
<h1>An inside look at the new SpaceBear 8™</h2>
  <h2>Cotton Fur</h2>
  <h2>Saphire Eyes</h2>
  <h2>Syntetic Felt Paws</h2>
  <h2>Footer</h2>
    <h3>About the company</h3>
    <h3>Our retail stores</h3>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

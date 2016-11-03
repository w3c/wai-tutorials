---
title: Headings
status: draft
order: 4
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

Headings communicate the way the information on the page is organized. Web browsers, plug-ins, and assistive technologies provide mechanisms for users to navigate through web pages using headings. They also provide visual cues to help people skim web pages and find specific sections.

## Heading levels

Best practice is to nest headings properly. When stepping down through headings, avoid skipping levels. That means that an `<h1>` is followed by an `<h1>` or `<h2>`, an `<h2>` is followed by an `<h2>` or `<h3>`, and so forth. When stepping up through headings it is perfectly legitimate to skip any number of levels, for example an `<h1>` can follow an `<h3>`.

{::nomarkdown}
<%=notes_start%>
{:/nomarkdown}

**Note:** HTML5 has introduced [an outline algorithm](http://www.w3.org/TR/html5/sections.html#headings-and-sections) that assigns heading levels based on how deep sectioning elements are nested inside each other, regardless of the actual heading level. At the time of writing, this is not supported by web browsers and assistive technologies, and **should not** be used.

{::nomarkdown}
<%=notes_end%>
{:/nomarkdown}

### Organize main content
{:.ex}

In the following example, headings are used to organize the main content of the web page:

{::nomarkdown}
<%=code_start('','Showing only headings')%>
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

### Organize page regions
{:.ex}

In the following examples, headings are used to organize the different regions of a web page:

{::nomarkdown}
<%=code_start('','Main heading appears before navigation')%>
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

{::nomarkdown}
<%=code_start('','Main heading appears after navigation')%>
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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** These examples are only outlining the headings structure. Additional markup, such as `<header>`, `<main>`, `<nav>`, and `<footer>` would appear in the full code.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

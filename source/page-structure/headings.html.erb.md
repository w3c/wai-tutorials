---
title: Headings
status: draft
order: 3
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

Headings communicate the way the information on the page is structured, organized and presented. Various user devices, including many assistive technologies, provide users with ways to navigate through page content using headings. They also provide visual cues that help to skim the page or find a specific section.

## Heading levels

Best practice is to nest headings properly. When stepping down through headings, avoid skipping levels. That means that an `<h1>` is followed by an `<h1>` or `<h2>`, an `<h2>` is followed by a `<h2>` or `<h3>` etc. When stepping up through headings it is perfectly legitimate to skip any number of levels, for example a `<h1>` can follow a `<h3>`.

{::nomarkdown}
<%=notes_start%>
{:/nomarkdown}

**Note:** HTML5 has introduced [an outline algorithm](http://www.w3.org/TR/html5/sections.html#headings-and-sections) that assigns heading levels based on how deep sectioning elements are nested inside each other, regardless of the actual heading level. At the time of writing, this is not supported by any browser or assistive technology and **should not** be used.

{::nomarkdown}
<%=notes_end%>
{:/nomarkdown}

## Organize main page content

When looking at the content, the highest available heading level should be used to mark up the heading of the main content, as this makes it easy to discover.

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

## Organize page sections

Similar to page sections, headings can be used to give users a way of navigating through web pages. To do this, add a heading to each section of the page (for example navigation), that describes what can be found in the section. Often the heading levels are similar to this example:

{::nomarkdown}
<%=code_start('','Showing only headings')%>
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

The first heading in such cases is usually the page name. In this case, the heading of the actual content is hard to find between headings that describe the page structure. If possible use [labeled page sections](sections.html) to mark up the page structure as these provide more meaning to assistive technologies.

In some situations it is valid to not start with a heading level 1, for example if there is no page name like in the example above. A possible heading structure would then look like this:

{::nomarkdown}
<%=code_start('','Showing only headings')%>
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

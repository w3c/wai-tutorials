---
title: Headings
status: editors-draft
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

Use headings to communicate the organization of the content on the page. Headings provide web browsers, plug-ins, and assistive technology mechanisms for users to navigate through web pages.

## Heading levels

Heading levels should be properly nested, where possible. An `<h1>` should only be followed by `<h1>` or `<h2>`, an `<h2>` by an `<h2>` or `<h3>`, and so forth. However it is possible to go back several levels, so an `<h4>` can be followed by an `<h2>` if it makes logical sense.

In fixed sections of the page, for example in sidebars, the heading levels _should not_ change depending on the levels that are used in the content area. In those cases consistency across pages is more important. The following approaches show how headings can be used in the main content and for page regions:

## Organize passages of text

Headings are used to only organize passages of text on a page, for example the main content:

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

In addition, headings can also be used to organize the different regions of a web page, similar to [region labels](labels.html).

### Main heading before navigation
{:.ex}

{::nomarkdown}
<%=code_start('','')%>
{:/nomarkdown}

~~~html
<h1>SpaceTeddy Inc.</h1>
  <h2>Navigation Menu</h2>
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
  <h2>Navigation Menu</h2>
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

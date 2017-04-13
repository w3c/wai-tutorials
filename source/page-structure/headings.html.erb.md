---
title: Headings
order: 4
status: draft
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
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Headings communicate the organization of the content on the page. Web browsers, plug-ins, and assistive technologies can use them to provide in-page navigation.

## Heading ranks

Nest headings by their rank (or level). The most important heading has the rank 1 (`<h1>`), the least important heading rank 6 (`<h6>`). Headings with an equal or higher rank start a new section, headings with a lower rank start new subsections that are part of the higher ranked section.

Skipping heading ranks can be confusing and should be avoided where possible: Make sure that a `<h3>` is followed by an `<h4>`, for example. It is ok to skip ranks when closing subsections, for instance, a `<h2>` beginning a new section, can follow an `<h4>` as it closes the previous section.

{::nomarkdown}<%= sample_start %><%= image_tag 'page-structure-headings.png', srcset: image_path('page-structure-headings.png') + ', ' + image_path('page-structure-headings@2x.png') + ' 2x, ' + image_path('page-structure-headings@3x.png') + ' 3x', :alt => 'One h1 heading with several h2s and h3 creating subsections. One subsection’s heading is ”(h3) Sapphire Eyes” which has a subsection “(h4) How they are made”. The next heading is an h2, indicating that the (h4) and (h3) subsections are both closed now.', :class => "" %><%= sample_end %>{:/nomarkdown}

### Exception for fixed page sections

In fixed sections of the page, for example in sidebars, the heading ranks _should not_ change depending on the ranks  in the content area. In those cases, consistency across pages is more important.

## Organize passages of text

In the following example, headings are used to only organize passages of text on a page, for example the main content:

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

## Headings that reflect the page organization

The following two examples show headings that are used to reflect the organization if the page and also the main content. If headings are used in this way, use them as labels for explicitly created [page regions](regions.html) by associating them with their region using [aria-labelledby](https://w3c.github.io/wai-tutorials/page-structure/labels/#using-aria-labelledby).

### Main heading before navigation
{:.ex}

In this first example, the heading with the rank 1 is the first heading in the document. All other headings for structuring the page (Navigation Menu, Sidebar, Footer) are one rank lower, and so is the heading for the main content.

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
    <h3>Sapphire Eyes</h3>
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

In this second example, the main heading is not the site name but the content heading, which is rank 1. The subheadings in the content are rank two as are all the other structural headings.

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
  <h2>Sapphire Eyes</h2>
  <h2>Syntetic Felt Paws</h2>
  <h2>Footer</h2>
    <h3>About the company</h3>
    <h3>Our retail stores</h3>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

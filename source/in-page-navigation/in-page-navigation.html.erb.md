---
title: In-page Navigation
status: editors-draft
order: 7
wcag_success_criteria:
  - 2.4.1
wcag_techniques:
  - G64
  - G1
  - G124
---
As Web browsing is non-linear, useful navigation can be provided to efficiently navigate through page content. Such in-page navigation provides users with links to sections of the page that might be hard to discover in a linear fashion. This also benefits people with low vision.

## Anchors

The `id` attribute of any element can be used as an anchor and directly linked to from within the page or externally. If the main content is using `<main id="content">`, attaching `#content` to the end of the URL will scroll the main content into view and focus on it. This can be helpful to people who bookmark commonly used pages to jump directly to the section of the page of interest.

If possible, make those anchors visible by adding links to the web page. In this tutorial, you can find such anchors by using the share button displayed near each heading.

## Skip links
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Here we are using landmarks while everywhere else we are talking about regions.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Skip links are used to move directly to different sections on the page. While some of their functionality is duplicated by WAI-ARIA landmarks, skip links are recommended because browsers don’t provide keyboard consistent ways to navigate landmarks. They are also useful for keyboard users that don’t use assistive technologies. Most screen reader users are used to move to the main content using skip links. For more information on landmarks see the [regions](regions.html) page.

The following example shows skip links that allow users to jump directly to the content and to the navigation.

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<nav aria-label="Skip Links">
  <ul>
    <li>
      <a href="#content" class="visuallyhidden focusable">Jump to content</a>
    </li>
    <li>
      <a href="#navigation" class="visuallyhidden focusable">Jump to navigation</a>
    </li>
  </ul>
</nav>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

## Table of contents

A table of contents can be a useful way to skim the page by providing an outline for the user. Usually it should be contained in a [navigation region](regions.html#navigation), so it can be easily discovered. The “On this Page” box on every tutorial page is an example for such a table of contents. The anchors on every heading are used to allow users to skip to those headings directly.

---
title: In-page Navigation
status: draft
order: 7
wcag_success_criteria:
  - 2.4.1
wcag_techniques:
  - G64
  - G1
  - G124
---

The previous pages of this tutorial showed how users use sections for orientation in websites. As Web browsing is non-linear, useful navigation can be provided to efficiently navigate through page content. Such in-page navigation provides users with links to sections of the page that might be hard to discover in a linear fashion. This also benefits people with low vision. In-page links to content also make it easier to share specific content.

## Anchors

The `id` attribute of any element can be used as an anchor and directly linked to from within the page or externally. If the main content is using `<div id="content">`, attaching `#content` to the URL will scroll the main content into view and focus on it. This can be helpful to people who bookmark commonly used pages to jump directly to the section of the page of interest. For example, creating a bookmark to the first news item on a news listing page.

If possible, make those anchors visible by adding links to the web page. In this tutorial, you can find permalinks by using the share button displayed near each heading.

## Skip links

Skip links are used to jump to different sections on the page. While some of their functionality was replaced by WAI-ARIA landmarks, skip links are still recommended because browsers still don’t provide keyboard access to landmarks. They are also useful for keyboard users that don’t use assistive technologies. Most screen reader users are used to move to the main content using skip links. For more information on landmarks see the [Page Sections](sections.html) page.

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

A table of contents can be a useful way to skim the page by providing an outline for the user. Usually it should be contained in a [navigation landmark](sections.html#navigation), so it can be easily discovered. The “on this page” box on every tutorial page is an example for such a table of contents. The anchors on every heading are used to allow users to skip to those headings in the text.

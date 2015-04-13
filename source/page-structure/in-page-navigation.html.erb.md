---
title: In-page Navigation
status: draft
order: 6
wcag_success_criteria:
  - 2.4.1
wcag_techniques:
  - G64
  - G1
  - G124
---

Web browsing is non-linear and useful navigation can be provided to efficiently orient users to page content. Such in-page navigation provices users with links to sections of the page that might be hard to discover in a linear fashion. This also benefits people with low vision. In-page links to content also make it easier to share specific content.

## Anchors

The `id` attribute is used as an anchor and can be directly linked to from within the page or externally. If the main content is using `<div id="content">`, attaching `#content` to the URL will scroll the main content into view and focus on it. This can be helpful to people who bookmark commonly used pages to jump directly to the section of the page of interest. For example, creating a bookmark to the first news item on a news listing page.

If possible, make those anchors visible by adding permalinks to the page. In this tutorial, you can find permalinks are accessible by using the share button displayed near each heading.

## Skip links

Skip links are historically needed to jump to different sections on the page. They were used before WAI-ARIA landmarks were implemented in browsers and assistive technologies. Skip links are still recommended because browsers still don’t provide keyboard access to landmarks. Also, most screen reader users are used to move to the main content using skip links. For more information on landmarks see the [Page Sections](sections.html) page.

These tutorials, for example, have a visually hidden link to the navigation that allows the user to jump directly to the navigation, which comes after the main content of the page. This skip link is hidden by default but made visible as soon as it is focused to not confuse sighted keyboard users. As the tutorials are designed in a responsive way, the content is linearized on small screens or when zoom is enabled. In those cases the navigation menu is on the bottom of the page. The skip link is visible to allow all users to jump down to the navigation menus. 

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<nav aria-label="Skip Links">
<ul>
    <li>
        <a href="#navigation" class="visuallyhidden focusable">Jump to navigation</a>
    </li>
    <li>
        <a href="#content" class="visuallyhidden focusable">Jump to content</a>
    </li>
</ul>
</nav>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

## Table of contents

A table of contents can be a useful way to skim the page by providing an outline for the user. Usually it should be contained in a [navigation landmark](sections.html#navigation), so it can be easily discovered. The “on this page” box on every tutorial page is an example for such a table of contents. The anchors on every heading are used to allow users to skip to those headings in the text.

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

Navigation inside individual pages can help users to orient themselves on the page. Such in-page navigation can also provide users with useful links to sections in the page that are hard to discover. A page with in-page links to content also make it easier to refer to that specific content when shared.

## Anchors

Everything with an `id` attribute can be used as an anchor that can be linked to. If the main content is using `<div id="content">`, attaching `#content` to the URL will scroll the main content into view and focus on it. This can be helpful to people who bookmark commonly used pages to jump directly to the section of the page of interest. For example, creating a bookmark to the first news item on a news listing page.

If possible, make those anchors visible by adding permalinks to the page. In this tutorial, you can find permalinks in every heading. They are shown visually by the pilcrow symbol (`¶`) and with a `title` attribute that says “permalink”.

## Skip links

Skip links are historically needed to jump to different sections on the page. They were used before [landmarks](landmarks.html) were implemented in browsers and assistive technologies and can still be useful in some situations.

These tutorials for example have a visually hidden link to the navigation that allows the user to jump directly to the navigation, which comes after the main content of the page. This skip link is hidden by default but made visible as soon as it is focused to not confuse visual keyboard users.

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<a href="#navigation" class="visuallyhidden focusable">Jump to navigation</a>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

If the viewport is so small that only one column fits on the screen (for example on mobiles or when zoom is enabled), the link stays visible to allow users to jump to the navigation menu on the bottom of the page.

## Table of contents

A table of contents can be a useful way to skim the page by providing an outline for the user. Usually it should be contained in a [navigation landmark](sections.html#navigation), so it can be easily discovered. The “on this page” box on every tutorial page is an example for such a table of contents. The anchors on every heading are used to allow users to skip to those headings in the text.

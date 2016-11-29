---
title: Page Regions
status: draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
technologies: HTML5, WAI-ARIA
---

Mark up the different regions of your web page, so that they can be identified by web browsers and assistive technology. Page regions include the main content, navigation bars, headers, and footers.

## Page header

Most websites have a region at the top of every page that contains general content, such as the website logo, search function, and navigation options. HTML5 provides the `<header>` element, which can be used to define such a region. For HTML4, use the WAI-ARIA role `banner` to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<header>
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</header>

<div role="banner">
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** A `<header>` element inside an `<article>` or `<section>` element only applies within that region. It needs to be placed in the main HTML body to apply to the entire page.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Navigation

The HTML5 `<nav>` element can be used to identify a navigation menu. For HTML4, use the WAI-ARIA role `navigation` to define such a region. A web page can have any number of navigation menus. Use either the WAI-ARIA `aria-label` or the `aria-labelledby` attribute to identify each navigation menu. The `aria-label` attribute provides a label, and the `aria-labelledby` attribute refers to an existing label, such as a heading on the page.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<nav aria-label="Main Navigation">
  …
</nav>
…
<nav aria-labelledby="quicknav-heading">
  <h5 id="quicknav-heading">Quick Navigation</h5>
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The [Menus tutorial](/menus/index.html) provides more information about creating menus in more detail.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Main content

Use the HTML5 `<main>` element to identify the main content of a web page. For HTML4, use the WAI-ARIA role `main` to define such a region. A web page should have only one main content area.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<main>
  <h1>Stellar launch weekend for the SpaceBear 7!</h1>
  …
</main>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Articles

The HTML5 `<article>` element represents a complete or self-contained composition in a web page. Examples of articles include an item in a web shop or a news article on a news site. For HTML4, use the WAI-ARIA role `article` to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<article>
  <h2>Space Bear Classic</h2>
  …
</article>
<article>
  <h2>Space Bear Extreme</h2>
  …
</article>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Sections

The HTML5 `<section>` element marks a general region of a web page or an article. It is used for thematic grouping of content. For HTML4, use the WAI-ARIA role `region` to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section>
  <h2>Chapter 2</h2>
  …
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Page footer

Similar to the page header, most websites also have a region at the bottom of every page that contains general content, such as copyright information, privacy statements, or disclaimers. HTML5 provides the `<footer>` element, which can be used to define such a region. For HTML4, use the WAI-ARIA role `contentinfo` to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<footer>
  <p>&copy; 2014 SpaceBears Inc.</p>
</footer>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** A `<footer>` element inside an `<article>` or `<section>` element only applies within that region. It needs to be placed in the main HTML body to apply to the entire page.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Complementary content

Use the HTML5 `<aside>` element to identify regions that support the main content, yet are separate and meaningful sections on their own; For example, a side note explaining or annotating the main content. For HTML4, use the WAI-ARIA role `complementary` to define such regions.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<aside>
  <h3>Related Articles</h3>
  …
</aside>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Search

Use the WAI-ARIA `role` attribute with the value `search` to identify the main search function of the website that typically appears in the header of all web pages. This is not intended for identifying other search funcationality that only appears on individual web pages, such as searching for an entry in a database.

The element with the `search` role should include the input field as well as the search button and other search options. The example below uses the `search` role on a `<div>` element.

{::nomarkdown}
<%= sample_start %>

<form action="#search">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit" style="float:none;">Search</button>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<form action="…">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit">Search</button>
  </div>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Page Regions in HTML 4 using ARIA
{:#accessupport}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Add link to ARIA Practices Guide, be specific to HTML4 + ARIA.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Most current web browsers support the above HTML5 elements and convey the information to assistive technology through the accessibility APIs. However, to maximize compatibility with web browsers and assistive technologies that support WAI-ARIA but do not yet support HTML5, it is currently advisable to use both the HTML5 elements and the corresponding WAI-ARIA roles; for example:

~~~html
<header role="banner">...</header>
<main role="main">...</main>
<nav role="navigation">...</main>
<footer role="contentinfo">...</footer>
~~~

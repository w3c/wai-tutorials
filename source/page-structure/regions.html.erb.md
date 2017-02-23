---
title: Page Regions
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
technologies: HTML5, WAI-ARIA
---

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Ideas for this from our F2F session:

* Wireframe illustrations?
* Interactive demo?
* Complete page source code example?

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Mark up different regions of web pages and web applications, so that they can be identified by web browsers and assistive technologies.

## Page header

Most websites have a region at the top of every page that contains site-specific information, such as the website logo, search function, and navigation options. HTML5 provides the `<header>` element, which can be used to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<header>
  …
  <img src="/images/logo.png" alt="SpaceBear Inc.">
  …
</header>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

If the `<header>` element is used inside `<article>` and `<section>` elements, it is not identified as the header for the whole page but only relates to that specific `<article>` or `<section>`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Page footer

Similar to the page header, most websites also have a region at the bottom of every page that contains general content, such as copyright information, privacy statements, or disclaimers. HTML5 provides the `<footer>` element, which can be used to define such a region.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<footer>
  …
  <p>&copy; 2014 SpaceBears Inc.</p>
  …
</footer>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

If the `<footer>` element is used inside `<article>` and `<section>` elements, it is not identified as the footer for the whole page but only relates to that specific `<article>` or `<section>`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Navigation

The HTML5 `<nav>` element can be used to identify a navigation menu.A web page can have any number of navigation menus. Use [labels](labels.html) to identify each navigation menu.

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
{:.risky}

Use the HTML5 `<main>` element to identify the main content region of a web page or application.

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

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This section and other sections certainly need better examples, maybe one example that incorporates all regions. Hard to see what they do and how to use them when they are viewed isolated like this.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

## Articles

The HTML5 `<article>` element represents a complete or self-contained composition in a web page. Examples of articles include an item in a web shop or a news article on a news site.

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

The HTML5 `<section>` element marks a general region of a web page or an article. It is used for thematic grouping of content.

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

## Complementary content

Use the HTML5 `<aside>` element to identify regions that support the main content, yet are separate and meaningful sections on their own; For example, a side note explaining or annotating the main content.

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
<header role="banner">…</header>
<main role="main">…</main>
<nav role="navigation">…</main>
<footer role="contentinfo">…</footer>
~~~

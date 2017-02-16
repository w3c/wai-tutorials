---
title: Page Regions
status: draft
order: 2
wcag_success_criteria:
  - 1.3.1
  - 2.4.1
  - 2.4.6
wcag_techniques:
  - ARIA11
technologies: HTML5, WAI-ARIA
---

Mark up different regions of web pages and web applications, so that they can be identified by web browsers and assistive technologies.

## Page header

{::nomarkdown}<%= image_tag 'page-structure-header.png', srcset: '../../img/page-structure-header.png, ../../img/page-structure-header@2x.png 2x, ../../img/page-structure-header@3x.png 3x', :alt => '', :class => "symbol" %>{:/nomarkdown} Most websites have a region at the top of every page that contains general content, such as the website logo, search function, and navigation options. HTML5 provides the `<header>` element, which can be used to define such a region.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the `<header>` element is used inside `<article>` and `<section>` elements, it is not associated with the whole page, but only with that specific `<article>` or `<section>`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= demo :start %>
{:/}

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
<%= demo :middle %>
{:/}

A [complete example](example.html) for all regions combined is available.

{::nomarkdown}
<%= demo :end %>
{:/}

## Page footer

{::nomarkdown}<%= image_tag 'page-structure-footer.png', srcset: '../../img/page-structure-footer.png, ../../img/page-structure-footer@2x.png 2x, ../../img/page-structure-footer@3x.png 3x', :alt => '', :class => "symbol" %>{:/nomarkdown} Similar to the page header, most websites also have a region at the bottom of every page that contains general content, such as copyright information, privacy statements, or disclaimers. HTML5 provides the `<footer>` element, which can be used to define such a region.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the `<footer>` element is used inside `<article>` and `<section>` elements, it is not identified as the footer for the whole page but only relates to that specific `<article>` or `<section>`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

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

## Navigation

{::nomarkdown}
<%= ref :start %>
{:/nomarkdown}

{::nomarkdown}<%= image_tag 'page-structure-navigation.png', srcset: '../../img/page-structure-navigation.png, ../../img/page-structure-navigation@2x.png 2x, ../../img/page-structure-navigation@3x.png 3x', :alt => '', :class => "symbol" %>{:/nomarkdown} The HTML5 `<nav>` element can be used to identify a navigation menu.A web page can have any number of navigation menus. Use [labels](labels.html) to identify each navigation menu.

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
<%= ref :middle %>
{:/nomarkdown}

**Note:** The [Naivgation tutorial](/site-navigation/index.html) provides more information about creating menus in more detail.

{::nomarkdown}
<%= ref :end %>
{:/nomarkdown}

## Main content

{::nomarkdown}<%= image_tag 'page-structure-main.png', srcset: '../../img/page-structure-main.png, ../../img/page-structure-main@2x.png 2x, ../../img/page-structure-main@3x.png 3x', :alt => '', :class => "symbol" %>{:/nomarkdown} Use the HTML5 `<main>` element to identify the main content region of a web page or application.

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

## Complementary content

{::nomarkdown}<%= image_tag 'page-structure-aside.png', srcset: '../../img/page-structure-aside.png, ../../img/page-structure-aside@2x.png 2x, ../../img/page-structure-aside@3x.png 3x', :alt => '', :class => "symbol" %>{:/nomarkdown} Use the HTML5 `<aside>` element to identify regions that support the main content, yet are separate and meaningful sections on their own; For example, a side note explaining or annotating the main content.

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

## Page Regions in HTML 4 Using WAI-ARIA
{:#accessupport}

{::nomarkdown}
<%= ref :start %>
{:/nomarkdown}

Most current web browsers support the above HTML5 elements and convey the information to assistive technology through the accessibility APIs. However, to maximize compatibility with web browsers and assistive technologies that support WAI-ARIA but do not yet support HTML5, it is currently advisable to use both the HTML5 elements and the corresponding WAI-ARIA roles; for example:


~~~html
<header role="banner">…</header>
<main role="main">…</main>
<nav role="navigation">…</main>
<footer role="contentinfo">…</footer>
~~~

{::nomarkdown}
<%= ref :middle %>
{:/nomarkdown}

More [information about WAI-ARIA](https://www.w3.org/WAI/intro/aria) is available, including [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

{::nomarkdown}
<%= ref :end %>
{:/nomarkdown}

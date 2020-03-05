---
title: "Page Regions"
permalink: /tutorials/page-structure/regions/
ref: /tutorials/page-structure/regions/
lang: en
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
# contributors:
# - name: Contributor 1
# - name: Contributor 2
github:
  repository: w3c/wai-tutorials
  path: content/regions.md
metafooter: true

resource:
  ref: /tutorials/page-structure/

navigation:
  previous: /tutorials/page-structure/
  next: /tutorials/page-structure/labels/

wcag_success_criteria:
  - 1.3.1
  - 2.4.1
  - 2.4.6
wcag_techniques:
  - ARIA11


editors:
- Eric Eggert: "https://www.w3.org/People/yatil/"
- Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
- The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

Mark up different regions of web pages and applications, so that they can be identified by web browsers and assistive technologies.

## Page header

{::nomarkdown}{% include image.html src="page-structure/page-structure-header.png" srcset="page-structure/page-structure-header.png, page-structure/page-structure-header@2x.png 2x, page-structure/page-structure-header@3x.png 3x" alt="" class="small right" %}{:/nomarkdown} Most websites have a region at the top of every page that contains site-wide information, such as the website logo, search function, and navigation options. HTML5 provides the `<header>` element, which can be used to define such a region.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

{% include ednote.html note="Clarify description for header and footer." issue="590" repo="w3c/wai-tutorials" status="open" %}

**Note:** If the `<header>` element is used inside `<article>` and `<section>` elements, it is not associated with the whole page, but only with that specific `<article>` or `<section>`.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~html
<header>
  …
  <img src="/images/logo.png" alt="SpaceBear Inc.">
  …
</header>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Figure out how to display example link now that the sidebar is not available anymore." %}

View a [complete code example](/tutorials/page-structure/example/) for all regions combined.

## Page footer

{::nomarkdown}{% include image.html src="page-structure/page-structure-footer.png" srcset="page-structure/page-structure-footer.png, page-structure/page-structure-footer@2x.png 2x, page-structure/page-structure-footer@3x.png 3x" alt="" class="small right" %}{:/nomarkdown} Similar to the page header, most websites also have a region at the bottom of every page that contains site-wide information, such as copyright information, privacy statements, or disclaimers. HTML5 provides the `<footer>` element, which can be used to define such a region.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

{% include ednote.html note="Clarify description for header and footer." issue="590" repo="w3c/wai-tutorials" status="open" %}

**Note:** If the `<footer>` element is used inside `<article>` and `<section>` elements, it is not identified as the footer for the whole page but only relates to that specific `<article>` or `<section>`.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~html
<footer>
  …
  <p>&copy; 2014 SpaceBears Inc.</p>
  …
</footer>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Navigation

{::nomarkdown}{% include image.html src="page-structure/page-structure-navigation.png" srcset="page-structure/page-structure-navigation.png, page-structure/page-structure-navigation@2x.png 2x, page-structure/page-structure-navigation@3x.png 3x" alt="" class="small right" %}{:/nomarkdown} The HTML5 `<nav>` element can be used to identify a navigation menu. A web page can have any number of navigation menus. Use [labels](/tutorials/page-structure/labels/) to identify each navigation menu.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Figure out how to display reference link now that the sidebar is not available anymore." %}

The [Menus tutorial](/tutorials/page-structure//menus/index/) provides more details on creating menus.


## Main content

{::nomarkdown}{% include image.html src="page-structure/page-structure-main.png" srcset="page-structure/page-structure-main.png, page-structure/page-structure-main@2x.png 2x, page-structure/page-structure-main@3x.png 3x" alt="" class="small right" %}{:/nomarkdown} Use the HTML5 `<main>` element to identify the main content region of a web page or application.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~html
<main>
  <h1>Stellar launch weekend for the SpaceBear 7!</h1>
  …
</main>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Complementary content

{::nomarkdown}{% include image.html src="page-structure/page-structure-aside.png" srcset="page-structure/page-structure-aside.png, page-structure/page-structure-aside@2x.png 2x, page-structure/page-structure-aside@3x.png 3x" alt="" class="small right" %}{:/nomarkdown} Use the HTML5 `<aside>` element to identify regions that support the main content, yet are separate and meaningful sections on their own; For example, a side note explaining or annotating the main content.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~html
<aside>
  <h3>Related Articles</h3>
  …
</aside>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Remove or drastically simplify the next two sections." status="proposed" %}

## Page Regions in HTML5 Using WAI-ARIA
{:#accessupport}

Most current web browsers support the above HTML5 elements and convey the information to assistive technology through the accessibility APIs. However, to maximize compatibility with web browsers and assistive technologies that support WAI-ARIA but do not yet support HTML5, it is currently advisable to use both the HTML5 elements and the corresponding WAI-ARIA roles.

{::nomarkdown}
{% include box.html type="start" title="Examples in HTML5" class="example" %}
{:/}

~~~html
<header role="banner">…</header>
<main role="main">…</main>
<nav role="navigation">…</nav>
<footer role="contentinfo">…</footer>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Figure out how to display reference links now that the sidebar is not available anymore." %}

Explore other WAI-ARIA resources:

* [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
* [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

## Page Regions in HTML4 Using WAI-ARIA
{:#accessupport-html4}

If HTML5 cannot be used or if an HTML4 page is retrofitted to improve accessibility, add WAI-ARIA code to `div` elements that function as their HTML5 counterparts, for example:

{::nomarkdown}
{% include box.html type="start" title="Examples in HTML4" class="example" %}
{:/}

~~~html
<div class="header" role="banner">…</div>
<div id="main" role="main">…</div>
<div id="nav" role="navigation">…</div>
<div id="footer" role="contentinfo">…</div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}
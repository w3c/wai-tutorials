---
title: Page Sections
status: draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
technologies: HTML5, WAI-ARIA
---

People need to be able to identify distinctive page sections to help navigate around the page. These sections include navigation, main content, headers, and footers. More important parts of a page, such as navigation, should be marked up on every website.

To mark up certain sections, use the appropriate HTML5 elements, for example the `<main>` element denotes the main content of the page. Such sections usually correspond to an WAI-ARIA role, in this case it is called `main`. Those WAI-ARIA roles are picked up by assistive technologies. See [accessibility support information for WAI-ARIA](#accesssupport).

If there are more than one section of a type, sections need to be labeled using one of the techniques below using either `aria-label` or `aria-labelledby`.

<aside class="annotation" id="accesssupport">
  <h4 class="annotation-header"><span class="subhead">Accessibility Support:</span> HTML5, WAI-ARIA, Web Browsers, and Assistive Technologies</h4>
  <div class="annotation-content">
    <p>The support for HTML5 elements and WAI-ARIA individually are really good in modern browsers and assistive technologies. At the time of writing, Internet Explorer up to version 11 provides no semantic information via accessibility APIs for the HTML elements.</p>
    <p>To provide the information to assistive technologies, the roles can be added to the HTML5 elements, for example:</p>
    <pre class="highlight html"><span class="nt">&lt;header</span> <span class="na">role=</span><span class="s">"banner"</span><span class="nt">&gt;&lt;/header&gt;</span>
<span class="nt">&lt;main</span> <span class="na">role=</span><span class="s">"main"</span><span class="nt">&gt;&lt;/main&gt;</span>
<span class="nt">&lt;nav</span> <span class="na">role=</span><span class="s">"navigation"</span><span class="nt">&gt;&lt;/main&gt;</span>
<span class="nt">&lt;footer</span> <span class="na">role=</span><span class="s">"contentinfo"</span><span class="nt">&gt;&lt;/footer&gt;</span>
</pre>
  </div>
</aside>

## Page header

Most websites have a section that contains the website logo and other information, such as a search or navigation options. That section is usually on the top of the page.

The main page header is identified by using the `<header>` element which by default has the WAI-ARIA role `banner` if not used inside of `<article>` or `<section>` elements. See [note on scope](#scope).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<header>
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</header>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Navigation

The `<nav>` element groups a collection of links and makes them available as a navigation to assistive technologies by applying the WAI-ARIA role `navigation`. As there are often more than one navigation section on a given web page, they should always be labelled. 

In the example below, “Main Navigation” is added to the navigation using the `aria-label` attribute. “Quick Navigation” is already in a heading on the page, so it is possible to refer to it using the `aria-labelledby` attribute. For more information on menus, see the [Menu tutorial](/menus/index.html). 

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

## Main content

The main content of a document should be wrapped in the `<main>` element. There is only one main element per document allowed. This helps assistive technologies to identify the main content and guide users to it.

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

## Page footer

A section of the web page that has supplemental information, such as links to copyright or privacy statements, or disclaimers, is called a footer. It should be marked up using the `<footer>` element. 

By default the `<footer>` element has the WAI-ARIA role `contentinfo` if not used inside of `<article>` or `<section>` elements. See [note on scope](#scope).

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

## Complementary content

An `<aside>` element is used whenever there is a section of the document that supports the main content, yet is separate and meaningful on its own. It carries a `complementary` role by default.

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

## Search section

The `search` role refers to the “search tool” of the website. While there is no dedicated HTML5 equivalent for this role, using the `role` attribute with the value `search` is beneficial to users. The element with the `search` role should include the input field as well as the search button and other options. The example below uses the `search` role on a `<div>` element.

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

## General sections and articles

The `<section>` element marks a general section of the page or inside an article. It is used for thematic grouping of content. By default it has the WAI-ARIA role of `region`.

The `<article>` element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable. Examples for articles are items in a shop or news articles. The default WAI-ARIA role is `article`.

## Notes

### Scope

`<header>` and `<footer>` elements have two use cases in HTML5:

1. Mark the main header/footer section of a web page.
2. Mark the header/footer of a certain `<article>` or `<section>`.

Both elements only carry their default WAI-ARIA roles – `banner` for the `<header>` element and `contentinfo` for the `<footer>`element – only in the first use case. Once `<header>` or `<footer>` are inside an `<article>` or `<section>` element, they are scoped to this element and don’t count as main header or footer of the page, even if they are the only header or footer on the page.

### The `application` role

The role `application` declares a section as a web application, as opposed to a web document. The role of application should be **used with caution**, as it gives a signal to screen reading software to turn off usual web navigation controls. Simple widgets should generally not be given the application role, nor should an entire web page be given the application role, unless it is not supposed to be used at all like a web page, and not without much user testing with assistive technology.

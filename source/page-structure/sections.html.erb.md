---
title: Page Sections
status: draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
technologies: HTML5, WAI-ARIA
---

People need to be able to identify page sections to navigate documents. Usually documents include one or more navigations, main content, headers, and footers. Apart from the styling documents  More important parts of a page, such as navigation, should be marked up on every website.

This tutorial shows how to use HTML5 elements to mark up such sections and convey the meaning to users and assistive technologies. Such elements leverage the browser accessibility API by using default WAI-ARIA roles. See [accessibility support information](#accesssupport).

## Overall page sections

Certain sections on web pages define the overall layout and structure. They   are usually the same on every web page of a web site. Other sections are used to structure the content of the individual page.

Some sections can only be used once, for example `<main>` or the page header. Other sections, like navigations, can be used multiple times. In this case add a label using either `aria-label` or `aria-labelledby`.

### Page header
{:.ex}

Most websites have a section that contains the website logo and other information, such as search or navigation options. That section is usually on the top of the page.

The main page header is identified by using the `<header>` element which by default has the WAI-ARIA role `banner` if not used inside of `<article>` or `<section>` elements. See [note on scope](#scope).

<aside class="annotation" id="scope">
  <h4 class="annotation-header">Scope</h4>
  <div class="annotation-content">
    <p><code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> elements have two use cases in HTML5:</p>
    <ol>
      <li>Mark the main header/footer section of a web page.</li>
      <li>Mark the header/footer of a certain <code>&lt;article&gt;</code> or <code>&lt;section&gt;</code>.</li>
    </ol>
    <p>Both elements only carry their default WAI-ARIA roles – <code>banner</code> for the <code>&lt;header&gt;</code> element and <code>contentinfo</code> for the <code>&lt;footer&gt;</code>element – only in the first use case. Once <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> are inside an <code>&lt;article&gt;</code> or <code>&lt;section&gt;</code> element, they are scoped to this element and don’t count as main header or footer of the page but as header and footer of that specific section or article.</p>
  </div>
</aside>

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

### Navigation
{:.ex}

The `<nav>` element groups a collection of links and makes them available as a navigation to assistive technologies, identifying them using the WAI-ARIA role `navigation` by default. As there are often more than one navigation section on a given web page, they should always be labelled. 

In the example below there are two `<nav>` elements, so it is necessary to label them. One the labels, “Main Navigation”, has a title that isn’t shown on the page. In this instance the label is added with the `aria-label` attribute. “Quick Navigation” is already in a heading on the page, so it is possible to refer to it using the `aria-labelledby` attribute. For more information on menus, see the [Menu tutorial](/menus/index.html). 

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

### Main content
{:.ex}

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

### Page footer
{:.ex}

A section of the web page that has supplemental information, such as links to copyright or privacy statements, or disclaimers, is called a footer. This information should appear inside a `<footer>` element. 

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

### Complementary content
{:.ex}

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

## In-page sections
{:.newex}

To structure content on the pages, use sections and articles. They can differ from page type to page type and even from web page to web page.

### Sections
{:.ex}

The `<section>` element marks a general section on the page or inside an article. It is used for thematic grouping of content. By default it has the WAI-ARIA role of `region`.

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

### Articles
{:.ex}

The `<article>` element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable. Examples for articles are items in a shop or news articles. The default WAI-ARIA role is `article`.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<article>
  <h2>Space Bear Classic</h2>
  …
</article>
<article>
  <h2>Space Bear Extrem</h2>
  …
</article>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Search
{:.ex}

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

## A note on the `application` role

The role `application` declares a section as a web application, as opposed to a web document. The role of application should be **used with caution**, as it gives a signal to screen reading software to turn off usual web navigation controls. Simple widgets should generally not be given the application role, nor should an entire web page be given the application role, unless it is not supposed to be used at all like a web page, and not without much user testing with assistive technology.

## Accessibility Support
{:#accessupport}

The support for HTML5 elements and WAI-ARIA individually are really good in modern browsers and assistive technologies. At the time of writing, Internet Explorer up to version 11 provides no semantic information via accessibility APIs for the HTML5 elements.

To provide the information to assistive technologies, the roles can be added to the HTML5 elements, for example:

~~~html
<header role="banner"></header>
<main role="main"></main>
<nav role="navigation"></main>
<footer role="contentinfo"></footer>
~~~

Once there is accessibility support, authors are discouraged to use this technique.
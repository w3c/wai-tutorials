---
title: Page Sections
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
---

To help people navigate around the page, they need to be able to identify distinctive sections on the page. There are some more important parts of a page that should be marked up on every website, for example navigation. Both, HTML5 and WAI-ARIA, provide mechanisms to mark up such sections in a meaningful way. This page uses these techniques, for example, the main content is marked up using `<main>` and also given the attribute `role="main"`.

HTML5 provides distinctive elements for certain types of page sections, for example, `<header>`, and `<nav>`. WAI-ARIA utilizes the `role` attribute to add such metadata, which is mainly aimed at assistive technologies. Sometimes the WAI-ARIA landmark roles map directly to HTML5 elements, but this is not always the case.

Some HTML elements are should also carry implicit landmark roles by default, but this is not broadly supported at the time of writing, so the role should be stated explicitly. If HTML4 is used, `<div>` elements and/or headings are commonly used to identify page sections.

## Common page sections

### Main page header

Most websites have a logo and other information at the top of the page. Sometimes a search or navigation can be included. This main page header should be identified by an HTML5 `<header>` element and an explicit `banner` role. The banner role is not implicit for `<header>` elements as they can be used in other situations. Usually there will only be one `banner` role per page.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<header role="banner">
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</header>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Navigation

Sections of the page that provide navigation should be marked up using the HTML5 `<nav>` element which is supposed to carry an implicit `role` of `navigation`. It can contain the main navigation menu or other collections of links whose purpose is to navigate inside the page or the website as a whole. See the [Navigation Menu tutorial](/navigation/index.html) for more information on menus. It can be used multiple times on a page.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<nav role="navigation">
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Main content

Main content of a document should be wrapped in a `<main>` element that implicitly carries a `main` role. In almost all cases a page will have only one instance of this section.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<main role="main">
  <h1>Stellar launch weekend for the SpaceBear 7!</h1>
  …
</main>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Page footer

The term “page footer” refers to a section on the page that contains auxiliary information such as links to copyright or privacy statements. In HTML5 it is usually marked up as a `<footer>` element. It does not carry an implicit role but it makes sense to add `contentinfo` to distinguish the page `<footer>` element from other uses of `<footer>` in the page, for example as the footer of an article.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<footer role="contentinfo">
  <p>&copy; 2014 SpaceBears Inc.</p>
</footer>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Complementary content

Any section of the document that supports the main content, yet is separate and meaningful on its own, should be marked up using an `<aside>` element, which does not carry an implicit role as it can be used in other circumstances as well. A role of `complementary` can be added to sidebars or links to related content to make the purpose of the section more explicit.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<aside role="complementary">
  <h3>Related Articles</h3>
  …
</aside>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Search section

The `search` role marks the “search tool” of the website. This should include not only the actual input field, but also the search button and options. The form below contains a `<div>` element with a `search` role. There is no HTML5 equivalent for this role.

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

### Generic sections

Other sections of the page can be marked up as `<section>` elements which carry an implicit role of `region` which is a generic landmark. Be careful not to overuse it, as it adds a lot of additional “noise” when encountered using a screen reader. Use it to group items together. It should also always be labeled.

### A note on the application role

The role `application` declares a section as a web application, as opposed to a web document. The role of application should be **used with caution**, as it gives a signal to screen reading software to turn off normal web navigation controls. Simple widgets should generally not be given the application role, nor should an entire web page be given the application role, unless it is not to be used at all like a web page, and not without much user testing with assistive technology.

## Labeling sections

Labeling sections provides additional information for assistive technology and helps clarify areas of the page. This is especially important if there are multiple sections with the same role.

### Using `aria-labelledby`

If a heading or some other text is present that describes the content of a section then add an `id` attribute in the heading and use this as a value for the `aria-labelledby` in the landmark section.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<nav role="navigation" aria-labelledby="navheading">
  <h3 id="navheading">Main menu</h3>
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using `aria-label`

If there is no descriptive text then the `aria-label` attribute should be used to label the individual landmarks.

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<nav role="navigation" aria-label="Main menu">
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

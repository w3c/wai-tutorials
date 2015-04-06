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

Both HTML5 and WAI-ARIA provide a way to define the relationship of structural items on a page in a meaningful way. HTML5 defines distinctive elements for certain types of page sections. Examples of these elements include `<header>` and `<nav>`. WAI-ARIA utilizes the landmark `role` attribute to identify sections of a page. Landmarks are mainly used by assistive technologies. Sometimes the landmark roles are mapped directly to HTML5 elements, but this is not always the case.

While HTML5 requires browsers to apply default roles to certain elements, some browsers have lacking support. In those cases, the role needs to be stated explicitly in the HTML source code (or added to the DOM using JavaScript). If HTML4 is used, `<div>` elements with ARIA landmark roles and/or headings are commonly used to identify page sections.

## Common page sections

### Main page header

Most websites have a logo and other information at the top of the page. Sometimes a search or navigation can be included. This main page header should be identified by an HTML5 `<header>` element and use the role of `banner`. Usually there will only be one `banner` role per page, so the `banner` role is important to explain what this particular `<header>` elements represents. This is helpful because the `<header>` element can be used in other situations.

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

Sections of the page that provide navigation should be marked up using the HTML5 `<nav>` element. By default users are supposed to interpret the `nav` element as if it had the `navigation` `role`. It can contain the main navigation menu or other collections of links whose purpose is to navigate inside the page or the website as a whole. It can be used multiple times on a page. See the [Menu tutorial](/menus/index.html) for more information on menus. 

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

Main content of a document should be wrapped in a `<main>` element that uses a `role` implying it is the `main` content. In almost all cases a page will have only one instance of this section.

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

The "Footer" refers to a section of the page that has supplemental information like links to copyright or privacy statements. In HTML5, it is usually marked up as a `<footer>` element. This section can be used at the end of an article on a page when it needs to contain extra information related to the article. Thus, when using it at the end of the overall document, it makes sense to add `contentinfo` to distinguish the page `<footer>` element from other uses of <footer> on the page.

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

An `<aside>` element is used whenever there is a section of the document that supports the main content, yet is separate and meaningful on its own. A `role` of `complementary` can be added to sidebars or links to related content when the purpose of the section needs to be stated more clearly.

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

The `search role` refers to the “search tool” of the website. This should include the actual input field as well as the search button and options. The form below contains a `<div>` element with a `search` role. There is no HTML5 equivalent for this role. 

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

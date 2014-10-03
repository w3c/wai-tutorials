---
title: Landmarks
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
---

Landmark roles (“landmark”) identify sections of a page in a programmatical way which helps assistive technology users orient themselves to various sections of the page. They also provide an easy way to skip sections of the page that are not relevant to the user right now. For example, if there is a navigation section on every page, users can skip it and jump directly to the content of the page. This can save a lot of time navigating around the page, searching for the correct section of the page.

Landmarks are inserted into the document by adding a `role` attribute to the element that marks the section. Some HTML5 elements should implicitly carry some landmark roles, but as this is not widely supported, it is recommended to additionally provide the `role` attribute.

## Commonly used landmarks

### Banner

Usually the section of the page with the logo, a tag line, and the main page title is marked up as a `banner` region. It can contain search and navigation sections.

In these tutorialss, the heading with the title “Web Accessibility Tutorials” and the W3C & <abbr title="Web Accessibility Initiative">WAI</abbr> logos on the top of the page. <a href="javascript:toogleHighlight('[role=banner]');">Click here to visually highlight this area.</a> (Scroll to the top.)

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<div role="banner">
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML5, the `banner` role is usually applied to one `<header>` element:

{::nomarkdown}
<%= code_start('','HTML5') %>
{:/nomarkdown}

~~~html
<header role="banner">
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</header>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Complementary

Any section of the document that supports the main content, yet is separate and meaningful on its own, should be marked up as `complementary`. This could be sidebars or links to related content.

In these tutorials, the call for participation on the bottom of the page is such a piece of content. <a href="javascript:toogleHighlight('[role=complementary]');">Click here to visually highlight this area.</a> (Scroll to the bottom.)

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<div role="complementary">
  <h3>Related Articles</h3>
  …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML5, the `complementary` role is often applied to `<aside>` elements.

{::nomarkdown}
<%= code_start('','HTML5') %>
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

### Contentinfo

A region that contains information about the document such as copyrights and links to privacy statement should be marked up as `contentinfo`. This information can often be found in the footer section on the end of a page.

In these tutorials, the footer on the bottom of the page is such a piece of content. <a href="javascript:toogleHighlight('[role=contentinfo]');">Click here to visually highlight this area.</a> (Scroll to the bottom.)

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<div role="contentinfo">
  <p>&copy; 2014 SpaceBears Inc.</p>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML5, the `contentinfo` role is often applied one `<footer>` element near the end of the page.

{::nomarkdown}
<%= code_start('','HTML5') %>
{:/nomarkdown}

~~~html
<footer role="contentinfo">
  <p>&copy; 2014 SpaceBears Inc.</p>
</footer>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Main

The `main` role marks the main content in a document. In almost all cases a page will have only one instance of this role.

In these tutorials, the footer on the bottom of the page is such a piece of content. <a href="javascript:toogleHighlight('[role=main]');">Click here to visually highlight this area.</a> (Scroll to the bottom.)

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<div role="main">
  <h1>Stellar launch weekend for the SpaceBear 7!</h1>
  …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML5, the `<main>` element carries the same semantics.

{::nomarkdown}
<%= code_start('','HTML5') %>
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

### Navigation

The `navigation` role marks navigation menus or other collections of links whose purpose is to navigate inside the page or the website as a whole. See the [Navigation Menu tutorial](/navigation/index.html) for more information on menus.

In these tutorials, there are several possibilities to navigate. The main menu, which is either on the bottom or the top of the page (depending on the viewport), the breadcrumb path (top), the “On this page” in-page navigation, and the previous and next links on the bottom of the article. <a href="javascript:toogleHighlight('[role=navigation]');">Click here to visually highlight those areas.</a>

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<div role="navigation">
  …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML5, the `<nav>` element carries the same semantics.

{::nomarkdown}
<%= code_start('','HTML5') %>
{:/nomarkdown}

~~~html
<nav role="navigation">
  …
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Search

The `search` role marks the “search tool” of the website, this means not only the actual input field, but also the search button and options, can be included in this region. The form below contains a `<div>` element with a `search` role.

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
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~html
<form action="…">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit" style="float:none;">Search</button>
  </div>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### A note on the application role

The role `application` declares a region as a web application, as opposed to a web document. The role of application should only be **used with caution**, as it gives a signal to screen reading software to turn off normal web navigation controls. Simple widgets should generally not be given the application role, nor should an entire web page be given the application role, unless it is not to be used at all like a web page, and not without much user testing with assistive technology.

## Labeling landmarks

Especially if there are multiple landmarks of the same type, like multiple navigation landmarks or sidebars, it is important to label landmark sections by using one of the techniques shown below. Which one should be used depends on the presence of a (visible) heading.

### Using `aria-labelledby`

If a heading or some other text is present that can describe the content of the landmark section, it can be referenced by adding an `id` attribute to the heading and using that `id` value as a value of the `aria-labelledby` of the landmark section.

{::nomarkdown}
<%= code_start('','HTML4') %>
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

If no other text is present, the `aria-label` attribute should be used to label the individual landmarks.

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

<style>
    .role-highlight, .role-highlight * {
        background: rgba(237, 236, 63, .5);;
    }
    .role-highlight {
        outline: 4px solid #edec3f;
    }
</style>

<script>
function toogleHighlight(selector) {

    function hasClass(el, className) {
        if (el.classList)
          return el.classList.contains(className);
        else
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
    function addClass(el, className) {
        if (el.classList)
          el.classList.add(className);
        else
          el.className += ' ' + className;
    }
    function removeClass(el, className) {
        if (el.classList)
          el.classList.remove(className);
        else
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function(el, i) {
        if (hasClass(el, 'role-highlight')) {
            removeClass(el, 'role-highlight')
        } else {
            addClass(el, 'role-highlight');
        }
    });
}
</script>

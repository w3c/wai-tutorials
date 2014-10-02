---
title: ◊ Landmarks
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA11
---

Landmark roles (“landmark”) identify sections of a page in a programmatical way which helps assistive technology users orient themselves to various sections of the page. They also provide an easy way to skip sections of the page that are not relevant to the user right now. For example, if there is a navigation section on every page, users can skip it and jump directly to the content of the page. This can save a lot of time navigating around the page, searching for the correct section of the page.

Landmarks are inserted into the document by adding a `role` attribute to the element that marks the section. Some HTML5 elements should implicitly carry some landmark roles, but as this is not widely supported, it is recommended to additionally provide the `role` attribute. See the following list of commonly used roles for landmarks:

- **[`banner`](#banner):** A region that contains the prime heading or title of a page. It is usually only used once on a page and is typically applied to one HTML5 `<header>` element.

- **[`complementary`](#compimentary):** Any section of the document that supports the main content, yet is separate and meaningful on its own, like sidebars. It is typically used with an HTML5 `<aside>` element.

- **`contentinfo`:** A region that contains information about the document such as copyrights and links to privacy statements. As this information can often be found in the footer section of a page, the landmark will be typically applied to one `<footer>` element in HTML5.

- **`main`:** Main content in a document. In almost all cases a page will have only one role="main". In HTML5, the `<main>` element carries the same semantics.

- **`navigation`:** A collection of links suitable for use when navigating the document or related documents. This role is typically applied to a `<nav>` element in HTML5.

- **`search`:** The search tool of a web document. The role is usually applied to the complete search form, not only the text input element itself.

## Banner

Usually the section of the page with the logo, a possible tag line and the main page title is marked up as a banner region. Often search and navigation landmarks are placed in the banner landmark as well.

<a href="javascript:toogleHighlight('[role=banner]');">Click here to visually highlight the banner landmark on this page.</a> (Scroll to the top.)

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

##

<style>
    .role-highlight {
        outline: 4px solid yellow;
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

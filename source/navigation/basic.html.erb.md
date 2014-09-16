---
title: Basic Navigation
status: editors-draft
order: 2
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G182
  - G183
---

Designing a good navigation is not a technical challenge but a content strategy one. Organizing the content of a website is fairly trivial on small websites, but grows into a huge task once the website grows larger. A simple and flat navigation structure makes it easy for the user to find information.

Navigation laid out horizontally should only contain a few items, so they can be easily processed. Horizontal navigation can also be hard to read if there is little space, for example if the user is on a mobile phone or uses text enlargement.

## Indicating the current page

While the individual navigation links don’t need to be underlined if the navigation is different enough from the rest of the page, the current page should be marked in a way that does not rely on [color](/fundamentals/color.html) alone. For example in these tutorials an inverted box is used as well as a small arrow to show the entry of the current page. In most cases, the link to the current page should not be active.

{::nomarkdown}
<%= sample_start %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="samplenav">
    <ul>
        <li><a href="#samplenav">Home</a></li>
        <li><a href="#samplenav">Shop</a></li>
        <li><span class="current"><span class="visuallyhidden">Current Page: </span>SpaceBears</span></li>
        <li><a href="#samplenav">MarsCars</a></li>
        <li><a href="#samplenav">Contact</a></li>
    </ul>
</nav>

<style>
  #samplenav {
      display:table;
      width:100%;
  }
  #samplenav ul {
      margin: 0;
      padding: 0;
      display: table-row;
      background-color: #036;
      color: #fff;
  }
  #samplenav li {
      display:table-cell;
      width: 20%;
      text-align: center;
  }
  #samplenav a,
  #samplenav .current {
      display: block;
      padding: .25em;
      border-bottom: .25em solid #E8E8E8;
  }
  #samplenav a {
      color: #fff;
      text-decoration: none;
  }
  #samplenav .current {
      background-color: #bbb;
      color: #000;
      border-color: #444;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation" aria-label="Main Navigation">
  <ul>
    <li><a href="…">Home</a></li>
    <li><a href="…">Shop</a></li>
    <li><span class="current"><span class="visuallyhidden">Current Page: </span>SpaceBears</span></li>
    <li><a href="…">MarsCars</a></li>
    <li><a href="…">Contact</a></li>
  </ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Some special elements and attributes were used to further help accessibility: The `<nav>` element allows HTML5 compatible assistive technology to find navigational elements. The `role` attribute with the value of `navigation` does the same for WAI-ARIA compatible browsers. Additionally the `aria-label` attribute is used to give a name to the navigation that shows up in some means of navigating the site using assistive technology as well as when entering the navigation itself.

Design-wise, a border in the color of the background of the page is used on links to other pages and in a dark color for the current page, which makes the current menu item easy to find.

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav {
  display: table;
  width: 100%;
}
nav ul {
  margin: 0;
  padding: 0;
  display: table-row;
  background-color: #036;
  color: #fff;
}
nav li {
  display: table-cell;
  width: 20%;
  text-align: center;
}
nav a,
nav .current {
  display: block;
  padding: .25em;
  border-bottom: .25em solid #E8E8E8;
}
nav a {
  color: #fff;
  text-decoration: none;
}
nav .current {
  background-color: #bbb;
  color: #000;
  border-color: #444;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


* Ex: Horizontal
* Ex: Vertical
* Ex: Breadcrumb

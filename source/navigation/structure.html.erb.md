---
title: Navigation Menu Structure
nav_title: Structure
status: editors-draft
order: 2
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G182
  - G183
  - ARIA5
  - ARIA6
---

Designing a good navigation is not a technical challenge but a content strategy one. Organizing the content of a website is fairly trivial on small websites, but grows into a huge task once the website grows larger. A simple and flat navigation structure makes it easy for the user to find information.

Navigation laid out horizontally should only contain a few items, so they can be easily processed. Horizontal navigation can also be hard to read if there is little space, for example if the user is on a mobile phone or uses text enlargement.

## Basic Markup

To make people using assistive technology aware of the navigation, an landmark role of `navigation` should be used. Landmark roles provide much needed orientation on a page. The HTML5 `<nav>` element provides a simple way of denoting a navigation section on the page. As the accessibility of the `<nav>` element is not as widely spread as the landmark notation, both can be used to provide maximal coverage for marking up navigations.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation">
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Labeling Navigations

If there are multiple navigational menus on a page, multiple `<nav>` elements or `role="navigation"` attributes can and should be used. To make it easier for users of assistive technologies, those menus should be labeled. This helps users to distinguish between them.

Using a heading makes the navigation available for users that don’t use landmarks but headings to navigate the page, and is announced once the user enters the navigation. Using `aria-label` is very convenient to those who do, as the name can be announced before navigating to the landmark as well as when the user enters the navigation menu.

### Using a (hidden) heading
{:.ap}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation">
  <h2 class="visuallyhidden">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


### Using `aria-label`
{:.ap}

The `aria-label` attribute works only in browsers and assistive technology that support ARIA in the first place.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation" aria-label="Main Menu">
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## List of Links
{:.newap}

If a navigation consists of more than a few links, the links should be wrapped in a list element. This helps people using assistive technologies as those are able announce how long the list of links is.

### Unordered list
{:.ap}

For websites where it doesn’t matter in which order users read through individual pages, an unordered list should be used. In the following example, the user is not required to read the home page before advancing to the shop or get information about the products.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation" aria-label="Main Menu">
  <ul>
    <li><a href="…">Home</a></li>
    <li><a href="…">Shop</a></li>
    <li><a href="…">SpaceBears</a></li>
    <li><a href="…">MarsCars</a></li>
    <li><a href="…">Contact</a></li>
    …
  </ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


### Ordered list
{:.ap}

In some less widely spread instances, it is needed to read pages in a certain order, for instance, if the navigation denotes chapters in prose or steps to take while building something. In the following example, following the order is important to properly build the space ship.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation" aria-label="Main Menu">
  <ol>
    <li><a href="…">Unpacking the Space Craft</a></li>
    <li><a href="…">Check Contents of Package</a></li>
    <li><a href="…">Build Chassis</a></li>
    <li><a href="…">Build Engine</a></li>
    <li><a href="…">Mount Engine to Chassis</a></li>
    …
  </ol>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

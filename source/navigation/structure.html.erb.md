---
title: Menu Structure
nav_title: Structure
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA6
  - ARIA11
---

Semantic markup of menus makes them more easily adaptable to different situations such as display on small screens, zoomed in, or for assistive technologies by conveying the menu structure to users.

## List of Links
{:.newap}

If a navigation consists of more than a few links, using a list of links is the most effective way to convey the menu structure to users. For example, lists help assistive technologies to announce how many items are in the menu and also provide possibilities to adapt to user needs.

### Unordered list
{:.ap}

For websites where the order in which the user reads the pages doesn’t matter, an unordered list (`<ul>`) should be used. In the following example, the user is not required to read the home page before advancing to the shop or get information about the products to make sense of the website as a whole. Most navigational and application menus are unordered.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<ul>
  <li><a href="…">Home</a></li>
  <li><a href="…">Shop</a></li>
  <li><a href="…">SpaceBears</a></li>
  <li><a href="…">MarsCars</a></li>
  <li><a href="…">Contact</a></li>
  …
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


### Ordered list
{:.ap}

In some instances, pages need to be read in a certain order, for example if the menu provides access to chapters in prose or steps to take while constructing something. In the example below, following the order is important to properly build the space ship.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<ol>
  <li><a href="…">Unpacking the Space Craft</a></li>
  <li><a href="…">Check Contents of Package</a></li>
  <li><a href="…">Build Chassis</a></li>
  <li><a href="…">Build Engine</a></li>
  <li><a href="…">Mount Engine to Chassis</a></li>
  …
</ol>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Identifying the menu

To identify the menu, there are additional special elements and attributes in HTML and WAI-ARIA that, for example, enable users of assistive technology to jump directly to the menu. To enable this functionality, a WAI-ARIA landmark role of `navigation` should be added to the element wrapping the navigation links.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<div role="navigation">…</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

If HTML5 is used, the `<nav>` element is supposed to apply the landmark role implicitly. As some browser don’t do this at the time of writing, and to improve the experience for users with older browsers, the navigation role should be added as well.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation">…</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Role and other ARIA attributes won’t validate in HTML4. If valid HTML4 needs to be provided, the ARIA attributes can be added to the HTML dynamically using JavaScript. If that is also no possibility, [provide a heading](#using-a-hidden-heading) to enable users to find the menu easily.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Labeling navigations

To make it easier to find menus, they should be labeled according to their individual function. This helps to distinguish between multiple navigational menus on a page. Such labels can be invisible to users that experience the website visually. Such labels can also be used by assistive technology to enable jumping directly to `navigation` landmarks or headings.

### Using a (hidden) heading
{:.ap}

Users that use headings to find relevant section on web pages can discover the menu easily if a heading is provided.

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

The `aria-label` provides information to users that use landmarks to navigate the page. This approach makes it possible to use headings only in the main content of the page. The label of the menu is announced when entering the menu as well as when navigating to it.

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

### Using a heading and `aria-labelledby`
{:.ap}

To cover both use cases (navigating by headers and navigating by landmarks), the `aria-labelledby` attribute can be used to reference the heading inside the menu.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation" aria-labelledby="mainmenulabel">
  <h2 id="mainmenulabel">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Some browsers and assistive technologies might announce the name of the menu two times, when the user enters the menu.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

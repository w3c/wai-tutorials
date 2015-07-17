---
title: Menu Structure
nav_title: Structure
status: approved-draft
order: 2
wcag_success_criteria:
  - 4.1.2
wcag_techniques:
  - ARIA6
  - ARIA11
---

Semantic markup of menus makes them more easily adaptable to different situations such as display on small screens, zoomed in, and for assistive technologies by conveying the structure of the menu to users.

## List of Links
{:.newap}

If a navigation consists of more than very few links, using a list of links is the most effective way to convey the menu structure to users. Amongst other things, lists help assistive technologies to announce how many items are in the menu in total and provide possibilities to adapt to user needs.

### Unordered list
{:.ap}

If the order in which the user reads the pages is not important to understand the website, an unordered list (`<ul>`) should be used. In the following example, the user is not required to read the home page before advancing to the shop or get information about the products. Most menus are unordered.

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

To identify the menu, use the `<nav>` element in HTML5. It allows users to directly jump to the menu as it has an implicit WAI-ARIA landmark role of `navigation`. The `<nav>` element wraps the unordered or ordered list that contains the navigation options.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav>
	<ul>
		…
	</ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** At the time of writing, some browsers don’t properly add the implicit WAI-ARIA `navigation` role to the `<nav>` element. In those instances add the `role` attribute: `<nav role="navigation">…</nav>`. For more information on roles and regions, see the [Page Structure Tutorial](/page-structure/index.html).

Role and other ARIA attributes won’t validate in HTML4. If valid HTML4 needs to be provided, the ARIA attributes can be added to the HTML dynamically using JavaScript. If that is also no possibility, [provide a heading](#using-a-hidden-heading) to enable users to find the menu easily.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Labeling navigations
{:.newap}

To make it easier to find menus, they should be labeled according to their individual function. This helps to distinguish between multiple navigational menus on a page. Such labels can be invisible to users that experience the website visually and can also be used by assistive technology to enable jumping directly to `navigation` landmarks or headings.

### Using a (hidden) heading
{:.ap}

Users that use headings to find relevant sections on web pages, for example screen reader users, can discover the menu easily if a heading is provided.

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

Note that the heading **can not** be hidden using `display: none;` or `visually: hidden;` as both also hide content from screen readers, too. See this section in the forms tutorial for an [alternative, accessible way to hide elements](/forms/labels.html#note-on-hiding-elements).

### Using `aria-label`
{:.ap}

The `aria-label` provides a description of the section to users that use landmarks to navigate the page. The label of the menu is announced when entering the menu and when navigating to it.

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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This approach makes it possible to use headings in the main content of the page only and not using them for adding structural information.

{::nomarkdown}
<%= notes_end %>
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

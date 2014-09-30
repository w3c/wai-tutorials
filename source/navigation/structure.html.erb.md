---
title: Navigation Menu Structure
nav_title: Structure
status: editors-draft
order: 2
wcag_success_criteria:
wcag_techniques:
  - ARIA6
---

Designing a good navigation is not a technical challenge but a content strategy one. Organizing the content of a website is fairly trivial on small websites, but grows into a huge task once the website grows larger. Simple navigations are usually easier to understand and navigate for all users.

## Basic markup

By using an `<nav>` element, non-visual users can access the navigation directly using the screen reader as it carries an explicit WAI-ARIA landmark role of `navigation`. If multiple `<nav>` elements (or `role="navigation"`) attributes can and should be used.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** To ensure compatibility with slightly older browsers, the navigation role is added to the `<nav>` element in the code.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

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

## Labeling navigations

To make it easier for users of assistive technologies, menus should be labeled to help users distinguish between them. This is especially important if there are multiple navigational menus on a page.

### Using a (hidden) heading
{:.ap}

If a user is not using the screen reader options to navigate landmarks, headers are often used instead to discover sections of a website.

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

The `aria-label` provides its content to users that use landmarks to navigate the page but leaves the headings to the content of the page. The label of the navigation is announced when entering the navigation as well as when navigating to the navigation menu, which is especially important if there are multiple menus on the page.

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

**Note:** Some browsers and assistive technologies might announce the name of the menu two times, when it is entered using the keyboard.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## List of Links
{:.newap}

If a navigation consists of more than a few links, the links should be wrapped in a list element. This helps people using assistive technologies as those tools are able announce how long the list of links is.

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

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

Semantic markup of menu structures makes them adaptable to different situations, such as displaying on small screens, zooming, and interaction with assistive technologies.

## Menu body
{:.newap}

Menus are typically a collection of links. Use lists to convey this structure. For example, assistive technologies can then describe the menu to users by announcing the number of items it contains, or display the menu in different way, such as item by item.

### Unordered list
{:.ap}

Use an unordered list (`<ul>`) when the order of the menu items is not important. In the following example, there is no dependency between the menu items. Most menus are unordered.

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

Some menus imply a certain order, such as book chapters or steps through forms. In the example below, the menu links to different sections of instructions for building a space ship. It uses an ordered list to reflect the order in which these sections are organized.

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

## Menu region

Identify the menu region so that it can be located by web browsers and assistive technologies. For example, some tools allow users to directly jump to these regions through keyboard controls.

Use the `<nav>` element in HTML5 as container for the menu. Otherwise, use WAI-ARIA by setting the `role` attribute to the value `navigation` on the element that contains the menu; usually a `<div>`.

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

**Note:** Currently some browsers don’t support the HTML5 `<nav>` element so that it is necessary to add the WAI-ARIA `navigation` role to the `<nav>` element: `<nav role="navigation">…</nav>`. @@@ reduce this text and link to page structures, where this is more elaborated? @@@

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Labeling menus
{:.newap}

Label menus according to their individual function to make them easier to find and understand. This helps to distinguish between multiple menus on a web page.

### Using headings
{:.ap}

Headings identify the menu and define its relative order among other headings on the web page. For example, this supports keyboard and voice command users who navigate websites through headings. If necessary, these headings could be hidden visually, though this impacts visual keyboard users.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="navigation">
	<h2 class="menu">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Note guidance on [alternative, accessible way to hide elements](/forms/labels.html#note-on-hiding-elements) in the forms tutorial. @@@ should this guidance be in "page structure" instead of forms? - maybe change to "structure and styling" or so, and eventually move some of the more general stuff from forms and other tutorials into there? @@@

### Using `aria-label`
{:.ap}

@@@ use the same wording as in carousels (also match the section headings one way or the other) @@@

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

**Note:** This approach makes it possible to use headings in the main content of the page only and not using them for adding structural information. @@@ also match this note with carousels, one way or the other @@@

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Using a heading and `aria-labelledby`
{:.ap}

@@@ use the same wording as in carousels (also match the section headings one way or the other) @@@

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

**Note:** Some browsers and assistive technologies might announce the name of the menu two times, when the user enters the menu. @@@ also match this note with carousels, one way or the other @@@

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

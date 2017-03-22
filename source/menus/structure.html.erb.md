---
title: Menu Structure
nav_title: Structure
status: draft
order: 2
wcag_success_criteria:
  - 4.1.2
wcag_techniques:
  - ARIA6
  - ARIA11
---

Semantic markup conveys the menu structure to users. Menus can easily adapt to different situations, such as small screen displays, screen magnification and other assistive technology, when coded semantically.

## Menu representation
{:.newap}

Convey the menu structure, typically by using a list. Such structural information allows assistive technologies to announce the number of items in the menu and provide corresponding navigation functionality.

### Unordered list
{:.ap}

Use an unordered list (`<ul>`) when the menu items are not in a specific order. This is the case for most types of menus, such as website navigation.

{::nomarkdown}
<%= code_start('','Unordered List') %>
{:/}

~~~ html
<ul>
	<li><a href="…">Home</a></li>
	<li><a href="…">Shop</a></li>
	<li><a href="…">Space Bears</a></li>
	<li><a href="…">Mars Cars</a></li>
	<li><a href="…">Contact</a></li>
	…
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/}


### Ordered list
{:.ap}

Use an ordered list (`<ol>`) when the sequence of the menu items is important. In the following example the menu items represent the steps of a construction manual, so that the reading order is important:

{::nomarkdown}
<%= code_start('','Ordered List') %>
{:/}

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
{:/}

## Identify menus

Identify the menu, ideally using the HTML5 `<nav>` element. This allows users to directly access the menu. Other techniques to identify a menu are described in the [page regions](/page-structure/regions.html) tutorial.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/}

~~~ html
<nav>
	<ul>
		…
	</ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/}

## Label menus
{:.newap}

Label menus to make them easier to find and understand. Labels should be short but descriptive, to allow users to distinguish between multiple menus on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label. Those techniques are described in the [labeling regions](/page-structure/labels.html) tutorial.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/}

~~~ html
<nav aria-labelledby="mainmenulabel">
	<h2 id="mainmenulabel" class="visuallyhidden">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/}

## Indicate the current item

Use markup to indicate the current item of a menu, such as the current page on a website, to improve orientation in the menu.

### Using invisible text
{:.ap}

Provide an invisible label that is read aloud to screen reader users and used by other assistive technologies to mark the current item. This allows custom label text.

Remove the anchor (`<a>`), so users cannot interact with the current item. This avoids misunderstandings and emphasizes that the current menu item is active.

In the following example the menu item has the invisible text “Current Page:” and the `<a>` element is replaced by a `<span>` with a class `current`:

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<li>
	<span class="current">
		<span class="visuallyhidden">Current Page: </span>
		Space Bears
	</span>
</li>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using WAI-ARIA
{:.ap}

Use the `aria-current="page"` attribute to indicate the current page in the menu. This is particularly useful when the menu item is supposed to stay a link, or when the HTML cannot be changed to remove the anchor.

In the following example the link in the navigation points to the main content of the page.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<li>
	<a href="#main" aria-current="page">
	Space Bears
	</a>
</li>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

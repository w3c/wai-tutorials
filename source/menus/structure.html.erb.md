---
title: Menu Structure
status: draft
order: 2
wcag_success_criteria:
  - 4.1.2
wcag_techniques:
  - ARIA6
  - ARIA11
---

Semantic markup conveys the menu structure to users. It makes the menu adaptable to different situations, such as small screen display, zoomed in, or assistive technology use.

## Menus as List of Links
{:#lists-of-links.newap}

Convey the menu structure to users effectively by using a list, especially if the menu consists of more than very few links. With this structural information assistive technologies can announce the number of items in the menu.

### Unordered list
{:.ap}

In the following example, the user is not required to read the home page before advancing to the shop or get information about the products. As the sequence of reading the pages is not important to understand the website as a whole, use an unordered list (`<ul>`) – this approach can be used on most websites.

{::nomarkdown}
<%= code_start('','Unordered List') %>
{:/}

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
{:/}


### Ordered list
{:.ap}

In instances where pages need to be read in a certain sequence, for example chapters in prose or steps in a construction manual, use an ordered list (`<ol>`). The order is important to properly build the space ship in the example below:

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

{::nomarkdown}
<%= ref :start %>
{:/}

To identify the menu, use the `<nav>` element in HTML5 to wrap the list that contains the individual menu items. This allows users to directly access the menu.

{::nomarkdown}
<%= ref :middle %>
{:/}

For more information on regions, see the [page regions](/page-structure/regions.html) tutorial.

{::nomarkdown}
<%= ref :end %>
{:/}

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


{::nomarkdown}
<%= ref :start %>
{:/}

Label menus to make them easier to find and understand. The label should be short but descriptive, which allows users to distinguish between multiple menus on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label.

{::nomarkdown}
<%= ref :middle %>
{:/}

For more information on labels, see the [labeling regions](/page-structure/labels.html) tutorial.

{::nomarkdown}
<%= ref :end %>
{:/}

In menu tutorial examples, `aria-labelledby` with a hidden heading is used:

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

{::nomarkdown}
<%= ref :start %>
{:/nomarkdown}

The current page should also be clearly marked to give users a sense of where they are in the website structure.

{::nomarkdown}
<%= ref :middle %>
{:/nomarkdown}

Information about [styling the current menu item](menus-styling.html#current-item).

{::nomarkdown}
<%= ref :end %>
{:/nomarkdown}


### Using invisible text
{:.ap}

The item has also an invisible text “Current Page:” added to the menu item. Additionally the current page item is not linking to the current page.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<li>
	<span class="current">
		<span class="visuallyhidden">Current Page: </span>
		SpaceBears
	</span>
</li>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using WAI-ARIA
{:.ap}

If a link to the main content area of the page is required or if the `<a>` element cannot be removed from the navigation, use `aria-current="page"` as an alternative.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<li>
	<a href="#main" aria-current="page">
	SpaceBears
	</a>
</li>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

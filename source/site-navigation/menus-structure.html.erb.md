---
title: Menu Structure
status: editors-draft
order: 3
wcag_success_criteria:
  - 4.1.2
wcag_techniques:
  - ARIA6
  - ARIA11
---

Semantic markup conveys the menu structure to users. It also makes the menu adaptable to different situations, such as small screen display, zoomed in, or assistive technology use.

## List of Links
{:.newap}

Convey the menu structure to users effectively by using a list, especially if the menu consists of more than very few links. With this structural information assistive technologies can announce the number of items in the menu.

### Unordered list
{:.ap}

If the sequence of reading the pages is not important to understand the website, use an unordered list (`<ul>`). In the following example, the user is not required to read the home page before advancing to the shop or get information about the products. Most menus are unordered.

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

In instances where pages need to be read in a certain sequence, for example chapters in prose or steps in a construction manual, use an ordered list (`<ol>`). Following the order is important to properly build the space ship in the example below:

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

## Identifying the menu

{::nomarkdown}
<%= ref :start %>
{:/}

To identify the menu, use the `<nav>` element in HTML5. It allows users to directly access the menu. The `<nav>` element wraps the list that contains the individual menu items.

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

## Labeling navigations
{:.newap}


{::nomarkdown}
<%= ref :start %>
{:/}

Label menus according to their individual function to make them easier to find and understand. This helps to distinguish between multiple menus on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label.

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

If you want to include a link to the main content area of the page or can’t remove the `<a>` element from the navigation, you can alternatively use `aria-current="page"`.

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

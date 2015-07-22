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

Semantic markup of menu structures makes them adaptable to different situations, such as displaying on small screens, zooming, and interaction with assistive technologies.

## Menu region

{::nomarkdown}
<%= reference :start %>
{:/}

For more information on regions, see the [regions tutorial](/page-structure/regions.html).

{::nomarkdown}
<%= reference :end %>
{:/}


Provide semantic markup to define the menu as a distinct part of the web page. Use the `<nav>` element in HTML5 as container for the menu to ensure that it can be located by web browsers and assistive technologies. For example, some tools allow users to directly jump to these regions through keyboard controls.

{::nomarkdown}
<%= code_start('','HTML5') %>
{:/nomarkdown}

~~~ html
<nav>…</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML4, use WAI-ARIA to define the menu by setting the `role` attribute to the value `navigation` on the element that contains the menu; usually a `<div>`.

{::nomarkdown}
<%= code_start('','HTML4') %>
{:/nomarkdown}

~~~ html
<div role="navigation">…</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Menu label
{:.newap}

{::nomarkdown}
<%= reference %>
{:/}

For more information on regions, see the [labeling regions tutorial](/page-structure/labels.html).

{::nomarkdown}
<%= reference :end %>
{:/}

Label menus according to their individual function to make them easier to find and understand. This helps to distinguish between multiple menus on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label.

In menu tutorial examples, `aria-labelledby` with a hidden heading is used:

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav aria-labelledby="mainmenulabel">
	<h2 id="mainmenulabel">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Menu body
{:.newap}

Menus can be described as a collection of links. Use lists to convey this structure. For example, assistive technologies can then describe the menu to users by announcing the number of items it contains, or display the menu in different way, such as item by item.

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
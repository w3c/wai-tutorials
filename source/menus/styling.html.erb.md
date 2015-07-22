---
title: Menu Styling
nav_title: Styling
status: approved-draft
order: 3
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G128
  - G182
  - G183
---

With a consistent styling users are able to find the navigation more easily. There are two basic design patterns that are commonly used on web sites: vertical and horizontal menus.

Regardless of the orientation, each menu item should have enough space so it doesn’t overlap other content on the page or gets cut off. Such items are a potential accessibility barrier, especially for users increasing the font size and can also be a problem when translating the menu into another language. Try to avoid line breaks or hyphenation in menu items as they are harder to understand.

## Vertical menu

Ensure that the menu column is wide enough to accommodate all current and future menu items.

{::nomarkdown}
<%= sample_start %>

<nav aria-label="Main Navigation" role="presentation" id="verticalnav">
		<ul>
				<li><a href="#samplenav">Home</a></li>
				<li><a href="#samplenav">Shop</a></li>
				<li><a href="#samplenav">SpaceBears</a></li>
				<li><a href="#samplenav">MarsCars</a></li>
				<li><a href="#samplenav">Contact</a></li>
		</ul>
</nav>

<style>
	#verticalnav {
			display:table;
	}
	#verticalnav ul {
			margin: 0;
			padding: 0;
			background-color: #036;
			color: #fff;
	}
	#verticalnav li {
			display:table-row;
			width: 20%;
			text-align: left;
	}
	#verticalnav a {
			display: block;
			padding: .25em .5em;
			color: #fff;
			border-bottom: 1px solid;
			text-decoration: none;
	}
	#verticalnav a:hover,
	#verticalnav a:focus {
		color: #036;
		background-color: #fff;
		text-decoration: underline;
	}
	#verticalnav a:active {
		color: #fff;
		background-color: #024;
		text-decoration: underline;
	}
</style>

<%= sample_end %>
{:/nomarkdown}

## Horizontal menu

Horizontal menus should be positioned near the top of the screen so they are easier to find.

{::nomarkdown}
<%= sample_start %>

<nav aria-label="Main Navigation" role="presentation" id="samplenav">
		<ul>
				<li><a href="#samplenav">Home</a></li>
				<li><a href="#samplenav">Shop</a></li>
				<li><a href="#samplenav">SpaceBears</a></li>
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
	#samplenav a {
			display: block;
			padding: .25em;
			border-bottom: .25em solid #E8E8E8;
			color: #fff;
			text-decoration: none;
	}
	#samplenav a:hover,
	#samplenav a:focus {
		color: #036;
		background-color: #fff;
		text-decoration: underline;
	}
	#samplenav a:active {
		color: #fff;
		background-color: #024;
		text-decoration: underline;
	}
</style>

<%= sample_end %>
{:/nomarkdown}

## Styling menu items

While in-text links usually need an underline to help people with low vision or color blindness distinguish them from the surrounding text, this is not needed for links in menus if the menu can be clearly identified as such. If icons or images are used in links, an appropriate alternative text should be provided. See [Images Tutorial](/images/functional.html) for more detailed advice.

## Menu feedback

When using the menu, users need feedback mechanisms to operate it properly. Interacting with the menu should change the items visually when they are hovered or focused. Also, indicating the active item (the menu item that was just clicked, tapped, or activated using the keyboard) helps users to understand which item was activated. The current page should also be clearly marked to give users a sense of where they are in the website structure.

Apart from changing the color, another means of changing the menu item should be used by adding an underline or a border, or by changing the shape of an icon in the menu.

In this menu tutorial, feedback is given through the following means:

* **Hover and focus** states are indicated by using an inverted color scheme (blue on white instead of white on blue) and by underlining the items.

* The **active** state is shown with a darker blue as a background and keeping the menu item underlined.

* The **current page item** uses a different color scheme (black on grey) and has a bottom border that gives the item a distinct shape.

  The item has also an invisible text “Current Page:” added to the menu item. Additonally the current page item is not linking to the current page.

{::nomarkdown}
<%= sample_start %>

<nav aria-label="Main Navigation" role="presentation" id="currentnav">
		<ul>
				<li><a href="#currentnav">Home</a></li>
				<li><a href="#currentnav">Shop</a></li>
				<li><span class="current"><span class="visuallyhidden">Current Page: </span>SpaceBears</span></li>
				<li><a href="#currentnav">MarsCars</a></li>
				<li><a href="#currentnav">Contact</a></li>
		</ul>
</nav>

<style>
	#currentnav {
			display:table;
			width:100%;
	}
	#currentnav ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#currentnav li {
			display:table-cell;
			width: 20%;
			text-align: center;
	}
	#currentnav a,
	#currentnav .current {
			display: block;
			padding: .25em;
			border-bottom: .25em solid #E8E8E8;
	}
	#currentnav a {
			color: #fff;
			text-decoration: none;
	}
	#currentnav .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}
	#currentnav a:hover,
	#currentnav a:focus {
		color: #036;
		background-color: #fff;
		text-decoration: underline;
	}
	#currentnav a:active {
		color: #fff;
		background-color: #024;
		text-decoration: underline;
	}
</style>

<%= sample_end %>
{:/nomarkdown}

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

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav .current {
	display: block;
	padding: .25em;
	background-color: #bbb;
	color: #000;
	border-bottom: .25em solid #444;
}

nav a:hover,
nav a:focus {
	color: #036;
	background-color: #fff;
	text-decoration: underline;
}
nav a:active {
	color: #fff;
	background-color: #024;
	text-decoration: underline;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---
title: Menu Styling
status: approved-draft
order: 4
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G128
  - G182
  - G183
---

Consistent styling enables users to find menus easily. Usually, menus are aligned horizontally on the top of the web page or vertically on the left side of the page (in left-to-right languages).

Make sure that each item in the menu has enough space available to avoid the text get cut off. Make sure that the menu and its items don’t overlap other content on the page, especially when the font size is increased. This can also avoid problems when translating the menu into another language. Try to avoid line breaks or hyphenation in menu items as they are more difficult to understand.

In contrast to links in running text, menus usually don’t need to be underlined as they stand out as clickable items on their own.

If icons or images are used in menus, an appropriate alternative text should be provided. See the [Images Tutorial](/images/index.html) for more details.

## Item states

Communicating the state of the menu clearly will ensure that the menu is easier to use. Style the states in a way so they do not rely on color alone. Add a underline or change the shape of an icon or the menu item to communicate the state to people with reduced color perception.

### Hover and Focus states

Change hovered or focused menu items to give users visual guidance while navigating the page. In the [example below](#example) the hover and focus states are indicated by using an inverted color scheme (blue on white instead of white on blue) and by underlining the items.

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav a:hover,
nav a:focus {
	color: #036;
	background-color: #fff;
	text-decoration: underline;
}
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Active state

Indicate the menu item that was just clicked, tapped, or activated using the keyboard (the active item) to let users know what item they did activate. This helps to spot mis-clicks early although the active state is usually only briefly displayed. The [example](#example) below shows the active item with darker blue background and underlined.

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav a:active {
	color: #fff;
	background-color: #024;
	text-decoration: underline;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Current item

The current page should also be clearly marked to give users a sense of where they are in the website structure. A different color combination (black on grey) and a bottom border were added to give the item a distinct shape in the [example](#example).

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav [aria-current=true] {
	background-color: #bbb;
	color: #000;
	border-bottom: .25em solid #444;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Example

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

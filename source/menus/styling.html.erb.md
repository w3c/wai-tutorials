---
title: Menu Styling
nav_title: Styling
status: draft
order: 3
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G128
  - G182
  - G183
---

Consistent styling enables users to find menus easily:

* Align horizontal menus on the **top of the page** or vertical ones on the **left of the page** (in left-to-right languages).
* Each item in the menu should have **enough space** to avoid the text get cut off.
* The menu and its items should **not overlap** other content on the page, especially when the font size is increased. This avoids problems when translating menus.
* **Avoid line breaks or hyphenation** in menu items, if possible, as they are more difficult to read.
* In contrast to links in running text, menus are **usually not underlined**, as they stand out as clickable items on their own.
* Appropriate **alternative text** is provided if icons or other images are used in menus. See the [Images Tutorial](/images/index.html) for more details.

## Item states

Menus are easier to use if the state of each menu item is clearly communicated. Make sure to not rely on color alone to convey the state: Add an underline or change the shape of an icon or the menu item as a whole provides the state to people with reduced color perception.

### Hover and Focus states

Change hovered or focused menu items to give users visual guidance while navigating the page. In the [example below](#example), hover and focus states use an inverted color scheme (blue on white instead of white on blue) and underline the items.

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

Indicate the menu item that was just clicked, tapped, or activated using the keyboard (the active item) to let users know what item they did activate. This helps to spot mis-clicks early, although the active state is usually only briefly displayed. The [example](#example) below shows the active item with darker blue background and underlined.

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

### Current state

The current page should also be clearly marked to give users a sense of where they are in the website structure. A different color combination (black on grey) and a bottom border were added to give the item a distinct shape in the [example](#example).

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav [aria-current=page] {
	background-color: #bbb;
	color: #000;
	border-bottom: .25em solid #444;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Visited state

While it can be helpful to know which pages have been visited in some circumstances, the expectation of users is usually that the menu does not change.

## Example

{::nomarkdown}
<%= sample_start %>

<nav aria-label="(example) Main Navigation" id="currentnav">
		<ul>
				<li><a href="#currentnav">Home</a></li>
				<li><a href="#currentnav">Shop</a></li>
				<li><a href="#currentnav" aria-current="page">SpaceBears</a></li>
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
	#currentnav a {
			display: block;
			padding: .25em;
			border-bottom: .25em solid #E8E8E8;
	}
	#currentnav a {
			color: #fff;
			text-decoration: none;
	}
	#currentnav [aria-current=page] {
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

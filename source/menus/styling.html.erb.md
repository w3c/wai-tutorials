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

Clear and consistent styling allows users to find and recognize menus more easily. This includes consistency in the behavior, appearance, and relative location on pages across a website.

## General considerations

Menus often use images, such as icons, that can be decorative or communicate functionality. These require text alternatives, as described in the [Images Tutorial](/images/index.html). Also contrast requirements are applicable to menus and their items.

### Location

Display the menu where the target audience of the website expects it. For example, on websites the main navigation menu is commonly located either vertically on the left of the pages (in left-to-right languages), or horizontally across the top. Application menus are usually expected horizontally across the top.

### Identification

Ensure that menus and their items are identifiable as such. In addition to the structural markup discussed in the previous section, also the color scheme is important to visually communicate the presence of menus and items.

Consider making the label of menus visible to everyone. For example, in these tutorials, the "Menus Tutorial", "All Tutorials", "On this page" are menu labels provided as visible headings that are available for all users.

### Size

Ensure appropriate sizing of menus and menu items to fit the text. This includes varying text sizes to accommodate people who need larger text and languages with longer words. Where possible avoid line breaks and hyphenation, as these are often distracting and difficult to read. Also provide sufficient white space, like padding, to support people with reduced dexterity and small touch screens on mobile devices. At the same time, make sure that menus do not overlap themselves and other content of the page when text size is increased or when the page is magnified.

## Menu items

Convey menu items and their states by using color and other styling options. Don’t rely on color alone as some users will be unable to perceive such changes. For example, change the shape of a menu item, or add an icon, in addition to changing its color when it is selected.

### Default state

Use distinct styling to visually indicate menu items as regions of the page that can be activated. However, avoid exaggerated text decoration, such as words in uppercase or small caps, as these make text harder to read.

### Hover and Focus states

Change hovered or focused menu items to give users visual guidance while navigating the menu. In this example, hover and focus states use an inverted color scheme (blue on white instead of white on blue) and underline.

{::nomarkdown}
<%= demo :start %>
{:/nomarkdown}

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

{::nomarkdown}
<%= demo :middle %>
{:/nomarkdown}

See this code in action in the [live example](#example).

{::nomarkdown}
<%= demo :end %>
{:/nomarkdown}


### Active state

Indicate the menu item that was activated through clicking, tapping, or a keyboard. This helps people to identify unintended activation, for example by mis-clicking. In this example the active item has darker blue background and is underlined.

{::nomarkdown}
<%= demo :start %>
{:/nomarkdown}

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

{::nomarkdown}
<%= demo :middle %>
{:/nomarkdown}

See this code in action in the [live example](#example).

{::nomarkdown}
<%= demo :end %>
{:/nomarkdown}

### Current state

Also visually indicate the current menu item in addition to the structural markup discussed in the previous section.

In this example a different color combination (black on grey) and a bottom border were added to give the current menu item a distinct color and shape.

{::nomarkdown}
<%= demo :start %>
{:/nomarkdown}

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

{::nomarkdown}
<%= demo :middle %>
{:/nomarkdown}

See this code in action in the [live example](#example).

{::nomarkdown}
<%= demo :end %>
{:/nomarkdown}

### Visited state

For some types of menus, such as instructional steps, it may be useful to indicate menu items that have already been visited. However, most menus are not expected to change based on the visited state.

## Example

{::nomarkdown}
<%= sample_start %>

<nav aria-label="(example) Main Navigation" id="currentnav">
		<ul>
				<li><a href="#currentnav">Home</a></li>
				<li><a href="#currentnav">Shop</a></li>
				<li><a href="#currentnav" aria-current="page">Space Bears</a></li>
				<li><a href="#currentnav">Mars Cars</a></li>
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

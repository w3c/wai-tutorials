---
title: Menu Styling

lang: en
permalink: /tutorials/menus/styling/
ref: /tutorials/menus/styling/

github:
  repository: w3c/wai-tutorials
  path: 'content/menus/styling.md'

resource:
  ref: /tutorials/menus/
navigation:
  previous: /tutorials/menus/structure/
  next: /tutorials/menus/flyout/

wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G128
  - G182
  - G183
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Clear and consistent styling allows users to find and recognize menus more quickly. Such styling includes consistency in the behavior, appearance, and relative location on pages across a website.

## General considerations

Menus often use images, such as icons, that can be decorative or communicate functionality. These images require text alternatives, as described in the [Images Tutorial](/tutorials/images/). Contrast requirements are also applicable to menus and their items.

### Location

Display the menu where the target audience of the website expects it. For example, on websites, the main navigation menu is commonly located either vertically on the left of the pages (in left-to-right languages), or horizontally across the top. Application menus are usually expected horizontally across the top.

### Identification

Ensure that menus and their items are identifiable as such. In addition to the structural markup discussed in the previous section, the color scheme is necessary to communicate the presence of menus and items visually.

Consider making the label of menus visible to everyone. For example, in these tutorials, the "Menus Tutorial", "All Tutorials", "On this page" are menu labels provided as visible headings that are available for all users.

### Readability

Ensure appropriate sizing of menus and menu items to fit all text. The menu size should also adapt to varying text sizes, to accommodate languages with longer words and people who need larger text. Where possible avoid all uppercase text, line breaks, and hyphenation, as these are often distracting and hard to read.

### Size

Provide sufficient white space, like padding, to support people with reduced dexterity and small touch screens on mobile devices. At the same time, make sure that menus do not overlap themselves and other content of the page when users increase the text size or zoom the page.

## Menu items

Convey menu items and their states by using color and other styling options. Don’t rely on color alone as some users will be unable to perceive such changes. For example, alter the shape of a menu item, or add an icon, in addition to changing its color when it is selected.

### Default state

Use distinct styling to visually indicate menu items as regions of the page that can be activated. However, avoid exaggerated text decoration, such as words in upper case or small caps, as these make text harder to read.

### Hover and Focus states

Change hovered or focused menu items, which gives users visual guidance when navigating the menu. In this example, hover and focus states use an inverted color scheme (blue on white instead of white on blue) and underline.

{::nomarkdown}
{% include box.html type="start" title="Code: CSS" class="example" %}
{:/}

~~~ css
nav a:hover,
nav a:focus {
	color: #036;
	background-color: #fff;
	text-decoration: underline;
}
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Find out how to display links to live examples." %}

See this code in action in the [live example](#example).

### Active state

Indicate the menu item that was activated through clicking, tapping, or keyboard selection. Users can identify unintended activation, for instance when they have clicked on the wrong menu item. In this example, the active item has a darker blue background and an underline.

{::nomarkdown}
{% include box.html type="start" title="Code: CSS" class="example" %}
{:/}

~~~ css
nav a:active {
	color: #fff;
	background-color: #024;
	text-decoration: underline;
}
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Find out how to display links to live examples." %}

See this code in action in the [live example](#example).

### Current state

Also visually indicate the current menu item in addition to the structural markup discussed in the previous section.

In this example, a different color combination (black on gray) and a bottom border were added to give the current menu item a distinct color and shape.

{::nomarkdown}
{% include box.html type="start" title="Code: CSS" class="example" %}
{:/}

~~~ css
nav [aria-current=page] {
	background-color: #bbb;
	color: #000;
	border-bottom: .25em solid #444;
}
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Find out how to display links to live examples." %}

See this code in action in the [live example](#example).

### Visited state

For some types of menus, such as instructional steps, it may be useful to indicate menu items that a user had already visited. However, most menus are not expected to change based on the visited state.

{::nomarkdown}
{% include box.html type="start" title="Example" h=2 class="example large" %}
{:/}

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
		outline:none;
	}
	#currentnav a:active {
		color: #fff;
		background-color: #024;
		text-decoration: underline;
	}
</style>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
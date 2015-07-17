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

There are no definitive rules on how a menu should look like, but a few design patterns have emerged on how and where menus appear on the page, especially for main navigation menus.

While in-text links usually need an underline to help people with low vision or color blindness distinguish them from the surrounding text, this is not needed for links in menus if the menu can be clearly identified as such. If icons or images are used in links, an appropriate alternative text should be provided. See [Images Tutorial](/images/functional.html) for more advice.

## Vertical Menu

A vertical menu provides space for a lot of links as all items can be easily reached by scrolling the page. Using them in narrow columns on the side of the page may cause longer words to overlap into the main content or getting cut off. This is a potential accessibility barrier, especially for users increasing the font size. It can also be a problem when translating the menu into another language.

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

If a menu has so few items that they can fit in one line on the screen, a horizontal menu bar can be used. They are usually positioned near the top of the page. While this is a compact way to display a menu, horizontal space can be limited on small-screen devices or when the font size is increased. In such cases CSS media queries can help to transform a horizontal into a vertical menu.

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

## Hover and focus states

When the user focuses a menu item or hovers over one using the mouse pointer, the individual menu item should change so users know where the focus is or which menu item is hovered. In the examples in this tutorial, the menu item is inverted and the words are underlined. Another possibility is to change the shape of the menu item, for example by introducing a bullet or an arrow while the menu item is hovered or focused. Both states should not be indicated using color alone as that may not be perceivable for some users.

## Active items

The active state indicates a menu item that has just been activated by click, tap, or by using the keyboard. This helps users to spot if they have activated the wrong link before the new page has finished loading. The styling usually indicates a pressed state.

## Indicating the current page

The current page should be clearly marked to give users a sense of where they are in the site’s structure. This needs to be done in a way that does not rely on color alone. For example in these tutorials an inverted box and a small arrow are used to point out the current page. In most cases, the current page item should not be a link to the current page.

In the following example, the active menu item is not only marked using different colors but also by adding a border to the bottom of the menu item. A visually hidden text “Current Page:” indicates the current page for screen readers and other assistive technologies.

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
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

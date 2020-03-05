---
title: Menu Structure

lang: en
permalink: /tutorials/menus/structure/
ref: /tutorials/menus/structure/

github:
  repository: w3c/wai-tutorials
  path: 'content/menus/structure.md'

resource:
  ref: /tutorials/menus/
navigation:
  previous: /tutorials/menus/
  next: /tutorials/menus/styling/

wcag_success_criteria:
  - 4.1.2
wcag_techniques:
  - ARIA6
  - ARIA11
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Semantic markup conveys the menu structure to users. Menus coded semantically can easily adapt to different situations, such as small screen displays, screen magnification, and other assistive technology.

## Menu representation
{:.newap}

Convey the menu structure, typically by using a list. Such structural information allows assistive technologies to announce the number of items in the menu and provide corresponding navigation functionality.

### Unordered list
{:.ap}

Use an unordered list (`<ul>`) when the menu items are not in a specific order. Most types of menus, such as website navigation, fall in this category.

{::nomarkdown}
{% include box.html type="start" title="Code: Unordered List" class="example" %}
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
{% include box.html type="end" %}
{:/}


### Ordered list
{:.ap}

Use an ordered list (`<ol>`) when the sequence of the menu items is important. In the following example, the menu items represent the steps of a construction manual:

{::nomarkdown}
{% include box.html type="start" title="Code: Ordered List" class="example" %}
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
{% include box.html type="end" %}
{:/}

## Identify menus

Identify the menu, ideally using the HTML5 `<nav>` element to allow users access to the menu directly. Other techniques to mark up a menu are described in the [page regions](/tutorials/page-structure/regions/) tutorial.

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<nav>
	<ul>
		…
	</ul>
</nav>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Label menus
{:.newap}

Label menus to make them easier to find and understand. Labels should be short but descriptive, to allow users to distinguish between multiple menus on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label. Those techniques are described in the [labeling regions](/tutorials/page-structure/labels/) tutorial.

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<nav aria-labelledby="mainmenulabel">
	<h2 id="mainmenulabel" class="visuallyhidden">Main Menu</h2>
</nav>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Indicate the current item

Use markup to indicate the current item of a menu, such as the current page on a website, to improve orientation in the menu.

### Using invisible text
{:.ap}

Provide an invisible label that is read aloud to screen reader users and used by other assistive technologies to mark the current item which allows custom label text.

Remove the anchor (`<a>`), so users cannot interact with the current item. That avoids misunderstandings and emphasizes that the current menu item is active.

In the following example, the menu item has the invisible text “Current Page:” and the `<a>` element is replaced by a `<span>` with a class `current`:

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<li>
	<span class="current">
		<span class="visuallyhidden">Current Page: </span>
		Space Bears
	</span>
</li>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using WAI-ARIA
{:.ap}

Use the `aria-current="page"` attribute to indicate the current page in the menu. This technique is particularly useful when the anchor (`<a>`) cannot be removed from the HTML.

In the following example the link in the navigation points to the main content of the page.

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<li>
	<a href="#main" aria-current="page">
	Space Bears
	</a>
</li>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

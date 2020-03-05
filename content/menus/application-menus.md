---
title: "Application Menus"

lang: en
permalink: /tutorials/menus/application-menus/
ref: /tutorials/menus/application-menus/

github:
  repository: w3c/wai-tutorials
  path: 'content/menus/application-menus.md'

resource:
  ref: /tutorials/menus/
navigation:
  previous: /tutorials/menus/flyout/
  next: /tutorials/menus/application-menus-code/

metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

inline_css: |
  kbd {
    display: inline-block;
    color: #111;
    border: 1px solid #888;
    border-radius: 0.2em;
    box-shadow: 0 0.1em 0.1em rgba(240,240,240,.5);
    background-color: #F9F9F9;
    background-image: linear-gradient(to bottom, #ddd, #f9f9f9, #ddd);
    padding: 0.1em 0.3em;
    margin-bottom: .3em;
    font-family: inherit;
    font-size: 0.85em;
    white-space:nowrap
  }
---

Web application menus use the same basic structure as navigation menus. They often consist of a horizontal menu bar and use fly-out functionality. However, additional markup and keyboard behavior must be added.

## Additional markup

In addition to the `aria-expanded` and `aria-haspopup` attributes, the following WAI-ARIA roles are used to provide the necessary semantics of an application menu:

* **`menubar`:** Represents a (usually horizontal) menu bar.
* **`menu`:** Represents a set of links or commands in a menu bar, it is used for the fly-out menus.
* **`menuitem`:** Represents an individual menu item.
* **`separator`:** Represents a separator between two groups of menu items in a menu.


{::nomarkdown}
{% include box.html type="start" title="Code: " class="example" %}
{:/}

~~~html
<ul role="menubar" id="appmenu">
	…
	<li role="menuitem" aria-haspopup="true">
		Edit
		<ul role="menu">
			<li role="menuitem">Undo</li>
			<li role="menuitem">Redo</li>
			<li role="separator"></li>
			<li role="menuitem">Cut</li>
			<li role="menuitem">Copy</li>
			<li role="menuitem">Paste</li>
			</ul>
		</li>
	…
</ul>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}


{% include ednote.html note="This paragraph was displayed in a sidebar before." %}Application menus typically do not have links and rely on scripting to provide the functionality.

## Functionality

Adding the WAI-ARIA roles does **not** automatically enable the menu’s functionality or keyboard behavior. These must be added using scripting. A detailed explanation on the WAI-ARIA attributes and keyboard behavior can be found in the [WAI-ARIA Authoring Practices document (draft)](https://www.w3.org/TR/wai-aria-practices/#menu).

## Keyboard behavior

Web application menus are expected to work like desktop application menus. For example, the left and right keys are used to iterate through the top-level items, and the up and down arrows are used to navigate submenus. Pressing the tab key focuses the next item after the menu instead of the next menu item.

To allow focus to be set to menu items by keyboard, the items are given a `tabindex` attribute with the value `-1`. The first main menu item (“File” in this example) is assigned a `tabindex` value of `0` which adds it to the tab order and lets the user access the menu using the keyboard.

{::nomarkdown}
{% include box.html type="start" title="Code: " class="example" %}
{:/}

~~~js
Array.prototype.forEach.call(appsMenuItems, function(el, i){
		if (0 == i) {
			el.setAttribute('tabindex', '0');
			el.addEventListener("focus", function() {
				currentIndex = 0;
			});
		} else {
			el.setAttribute('tabindex', '-1');
		}
});

Array.prototype.forEach.call(subMenuItems, function(el, i){
	el.setAttribute('tabindex', '-1');
});
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Top-Level Menu Items

The following table summarizes the typical behavior of top-level menu items:

<table>
	<caption>Key mapping for top-level menu items</caption>
	<thead>
		<tr>
			<th scope="col">Key</th>
			<th scope="col">Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row"><kbd>tab ⇥</kbd></th>
			<td>Select the next focusable element outside of the menu.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>shift ⇧</kbd> + <kbd>tab ⇥</kbd></th>
			<td>Select the previous focusable element outside of the menu.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>right &rarr;</kbd></th>
			<td>Select the next top-level menu item.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>left &larr;</kbd></th>
			<td>Select the previous top-level menu item.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>return/enter &crarr;</kbd></th>
			<td rowspan="3">Open the submenu, select first submenu item.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>space</kbd></th>
		</tr>
		<tr>
			<th scope="row"><kbd>down &darr;</kbd></th>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>up &uarr;</kbd></th>
			<td>Open the submenu, select last submenu item.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>esc</kbd></th>
			<td>Leave the menu.</td>
		</tr>
	</tbody>
</table>

### Submenu Items

The following table summarizes the typical behavior of submenu items:

<table>
	<caption>Key mapping for submenu items</caption>
	<thead>
		<tr>
			<th scope="col">Key</th>
			<th scope="col">Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row"><kbd>tab ⇥</kbd></th>
			<td>Close the submenu, select the next focusable element outside of the menu.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>shift ⇧</kbd> + <kbd>tab ⇥</kbd></th>
			<td>Close the submenu, select the previous focusable element outside of the menu.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>right &rarr;</kbd></th>
			<td>Close the submenu, select the first item of the next top-level menu item.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>left &larr;</kbd></th>
			<td>Close the submenu, select the first item of the previous top-level menu item.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>return/enter &crarr;</kbd></th>
			<td rowspan="2">Carry out function of this item. (In this example: bring up a dialog box with the text of the chosen menu item.)</td>
		</tr>
		<tr>
			<th scope="row"><kbd>space</kbd></th>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>down &darr;</kbd></th>
			<td>Select next submenu item.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>up &uarr;</kbd></th>
			<td>Select previous submenu item.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="row"><kbd>esc</kbd></th>
			<td>Close the submenu, select the current top-level menu item.</td>
		</tr>
	</tbody>
</table>

---
title: "Web Application Menus"
nav_title: "Applications Menu"
status: draft
order: 5
wcag_techniques:
---

Web application menus use the same basic structure as navigation menus. They often consist of a horizontal menu bar and use fly-out functionality.

## Structure

To allow users operate application menus like their desktop counterparts, special WAI-ARIA roles need to be added. In addition, the keyboard behavior needs to be managed so, for example, the tab key is used to iterate through the top-level items only and the up and down arrows are used to navigate sub menus.

{::nomarkdown}
<%= ref :start %>
{:/}

The keyboard behavior is **not** automatically changed when the roles are added. It needs to be added using scripting. A detailed explanation on the WAI-ARIA attributes and keyboard behavior can be found in the [WAI-ARIA Authoring Practices document (draft)](http://www.w3.org/TR/wai-aria-practices/#menu).

In addition to the `aria-expanded` and `aria-haspopup` attributes, the following roles are used in the example:

* **`menubar`:** Represents a (usually horizontal) menu bar.
* **`menu`:** Represents a set of links or commands in a menu bar, it is used for the fly-out menus.
* **`menuitem`:** Represents an individual menu item.
* **`separator`:** Represents a separator between two groups of menuitems in a menu.

{::nomarkdown}<%= ref :middle %>{:/}

To keep this example simple, sub-submenus are not shown in this tutorial.

{::nomarkdown}<%= ref :end %>{:/}

{::nomarkdown}
<%= sample_start('show-overflow2') %>

<p><a id="#tab-before" href="#">Interactive element before the menu</a></p>

<ul role="menubar" id="appmenu">
		<li role="menuitem" aria-haspopup="true">
			File
			<ul role="menu">
						<li role="menuitem">New</li>
						<li role="menuitem">Open</li>
						<li role="menuitem">Print</li>
				</ul>
		</li>
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
		<li role="menuitem" aria-haspopup="true">
				Format
				<ul role="menu">
						<li role="menuitem">Font</li>
						<li role="menuitem">Text</li>
				</ul>
		</li>
		<li role="menuitem" aria-haspopup="true">
			View
			<ul role="menu">
				<li role="menuitem">100%</li>
				<li role="menuitem">Zoom In</li>
				<li role="menuitem">Zoom Out</li>
			</ul>
		</li>
		<li role="menuitem">Help</li>
</ul>

<p><a id="#tab-after" href="#">Interactive element after the menu</a></p>

<style>
.show-overflow2 {
		overflow: visible !important;
		float: left;
		width: 100%;
}

.show-overflow2 .box-content {
		overflow: visible !important;
		float: left;
		width: 100%;
}
	#appmenu {
			width:80%;
			float: left;
			margin: 0;
			padding: 0;
			color: #fff;
			background-color: #369;
			padding: .25em;
	}
	#appmenu li {
		white-space: nowrap;
		display:block;
		padding: .25em .75em;
		border: 1px solid #fff;
	}
	#appmenu > li {
			float: left;
			background-color: #036;
			text-align: center;
			position:relative;
			cursor: pointer;
	}
	#appmenu :hover,
		#appmenu :focus {
			background-color: #fff;
			color: #036;
			border: 1px solid #036;
			text-decoration: underline;
	}

	#appmenu :hover li,
		#appmenu :focus li {
			color: #fff;
			background-color: #036;
		}

	#appmenu > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
		width: 200%;
		text-align: left;
	}

#appmenu > li[aria-expanded="true"] > ul {
		display:block;
	}
#appmenu li[role="separator"] {
 padding: 0;
}
#appmenu li[role="separator"]:hover,
#appmenu li[role="separator"]:focus {
	border: 1px solid #fff;
}
</style>

<script>
var appsMenuItems = document.querySelectorAll('#appmenu > li[role=menuitem]');
var subMenuItems = document.querySelectorAll('#appmenu > li li[role=menuitem]');
var keys = {
	tab:    9,
	enter:  13,
	esc:    27,
	space:  32,
	left:   37,
	up:     38,
	right:  39,
	down:   40
};
var currentIndex, subIndex;

var gotoIndex = function(idx) {
	if (idx == appsMenuItems.length) {
		idx = 0;
	} else if (idx < 0) {
		idx = appsMenuItems.length - 1;
	}
	appsMenuItems[idx].focus();
	currentIndex = idx;
};

var gotoSubIndex = function (menu, idx) {
	var items = menu.querySelectorAll('li');
	if (idx == items.length) {
		idx = 0;
	} else if (idx < 0) {
		idx = items.length - 1;
	}
	items[idx].focus();
	subIndex = idx;
}

Array.prototype.forEach.call(appsMenuItems, function(el, i){
		if (0 == i) {
			el.setAttribute('tabindex', '0');
			el.addEventListener("focus", function() {
				currentIndex = 0;
			});
		} else {
			el.setAttribute('tabindex', '-1');
		}
		el.addEventListener("focus", function() {
			subIndex = 0;
			Array.prototype.forEach.call(appsMenuItems, function(el, i){
				el.setAttribute('aria-expanded', "false");
			});
		});
		el.addEventListener("click",  function(event){
			if (this.getAttribute('aria-expanded') == 'false' || this.getAttribute('aria-expanded') ==  null) {
				this.setAttribute('aria-expanded', "true");
			} else {
				this.setAttribute('aria-expanded', "false");
			}
			event.preventDefault();
			return false;
		});
		el.addEventListener("keydown", function(event) {
			var prevdef = false;
			switch (event.keyCode) {
				case keys.right:
					gotoIndex(currentIndex + 1);
					prevdef = true;
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					prevdef = true;
					break;
				case keys.tab:
					if (event.shiftKey) {
						document.querySelector('#tab-before').setAttribute('tabindex', '-1');
						document.querySelector('#tab-before').focus();
					} else {
						document.querySelector('#tab-after').setAttribute('tabindex', '-1');
						document.querySelector('#tab-after').focus();
					}
					prevdef = true;
					break;
				case keys.enter:
				case keys.down:
					this.click();
					subindex = 0;
					gotoSubIndex(this.querySelector('ul'), 0);
					prevdef = true;
					break;
				case keys.up:
					this.click();
					var submenu = this.querySelector('ul');
					subindex = submenu.querySelectorAll('li').length - 1;
					gotoSubIndex(submenu, subindex);
					prevdef = true;
					break;
				case keys.esc:
					document.querySelector('#tab-before').setAttribute('tabindex', '-1');
					document.querySelector('#tab-before').focus();
					prevdef = true;
			}
			if (prevdef) {
				event.preventDefault();
			}
		});
});

Array.prototype.forEach.call(subMenuItems, function(el, i){
	el.setAttribute('tabindex', '-1');
	el.addEventListener("keydown", function(event) {
			switch (event.keyCode) {
				case keys.tab:
					Array.prototype.forEach.call(appsMenuItems, function (elem) {
						elem.setAttribute('aria-expanded', 'false');
					});
					if (event.shiftKey) {
						document.querySelector('#tab-before').setAttribute('tabindex', '-1');
						document.querySelector('#tab-before').focus();
					} else {
						document.querySelector('#tab-after').setAttribute('tabindex', '-1');
						document.querySelector('#tab-after').focus();
					}
					prevdef = true;
					break;
				case keys.right:
					gotoIndex(currentIndex + 1);
					prevdef = true;
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					prevdef = true;
					break;
				case keys.esc:
					gotoIndex(currentIndex);
					prevdef = true;
					break;
				case keys.down:
					gotoSubIndex(this.parentNode, subIndex + 1);
					prevdef = true;
					break;
				case keys.up:
					gotoSubIndex(this.parentNode, subIndex - 1);
					prevdef = true;
					break;
				case keys.enter:
				case keys.space:
					alert(this.innerText);
					prevdef = true;
					break;
			}
			if (prevdef) {
				event.preventDefault();
				event.stopPropagation();
			}
			return false;
		});
	el.addEventListener("click", function(event) {
			alert(this.innerHTML);
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

The markup has no links at all: It is a nested list with WAI-ARIA roles as the application would be non-functional without JavaScript available anyway.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

## Functionality

The behavior of desktop application menus is added to the menu by this JavaScript. First, we collect all top-level menu items in one variable (`appsMenuItems`) and all submenu items in another (`subMenuItems`). Two variables keep track of the focus in top-level items (`currentIndex`) and in submenus (`subIndex`).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~js
var appsMenuItems = document.querySelectorAll('#appmenu > li[role="menuitem"]');
var subMenuItems = document.querySelectorAll('#appmenu > li li[role="menuitem"]');
var keys = {
	tab:     9,
	enter:  13,
	esc:    27,
	space:  32,
	left:   37,
	up:     38,
	right:  39,
	down:   40
};
var currentIndex, subIndex;
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

To make the menu work for keyboard users, a `tabindex` attribute with the value `-1` is added to the menu items which allows to set the focus on the element.

The first main menu item (“File” in this example) is assigned a `tabindex` value of `0` which adds it to the tab order and lets the user access the menu. The `currentIndex` variable is initialized as soon as this first item gets focus.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

### Top-Level Menu Items

All top-level menu items reset the `subIndex` variable when they receive focused. When individual items are activated (click or enter), the visibility of the submenu is toggled by changing the `aria-expanded` value. If a key is pressed, the appropriate action is carried out. See the following table for more details on the behavior of top-level menu items:

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
			<td>Select the next top-level menu item</td>
		</tr>
		<tr>
			<th scope="row"><kbd>left &larr;</kbd></th>
			<td>Select the previous top-level menu item</td>
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
			<td>Leave the menu</td>
		</tr>
	</tbody>
</table>

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

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
		el.addEventListener("focus", function() {
			subIndex = 0;
			Array.prototype.forEach.call(appsMenuItems, function(el, i){
				el.setAttribute('aria-expanded', "false");
			});
		});
		el.addEventListener("click",  function(event){
			if (this.getAttribute('aria-expanded') == 'false' || this.getAttribute('aria-expanded') ==  null) {
				this.setAttribute('aria-expanded', "true");
			} else {
				this.setAttribute('aria-expanded', "false");
			}
			event.preventDefault();
			return false;
		});
		el.addEventListener("keydown", function(event) {
			var prevdef = false;
			switch (event.keyCode) {
				case keys.right:
					gotoIndex(currentIndex + 1);
					prevdef = true;
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					prevdef = true;
					break;
				case keys.tab:
					// In this demo, we know what the ID of the previous/next interactive element was. In practice this should be automatically determined.
					if (event.shiftKey) {
						document.querySelector('#tab-before').setAttribute('tabindex', '-1');
						document.querySelector('#tab-before').focus();
					} else {
						document.querySelector('#tab-after').setAttribute('tabindex', '-1');
						document.querySelector('#tab-after').focus();
					}
					prevdef = true;
					break;
				case keys.enter:
				case keys.down:
					this.click();
					subindex = 0;
					gotoSubIndex(this.querySelector('ul'), 0);
					prevdef = true;
					break;
				case keys.up:
					this.click();
					var submenu = this.querySelector('ul');
					subindex = submenu.querySelectorAll('li').length - 1;
					gotoSubIndex(submenu, subindex);
					prevdef = true;
					break;
				case keys.esc:
					// In this demo, we know what the ID of the previous/next interactive element was. In practice this should be automatically determined.
					document.querySelector('#tab-before').setAttribute('tabindex', '-1');
					document.querySelector('#tab-before').focus();
					prevdef = true;
			}
			if (prevdef) {
				event.preventDefault();
			}
		});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Sub-Menu Items

Submenu items do behave differently when interacting with them on the keyboard, see the following table for details:

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
			<td>Close the submenu, select the next top-level menu item.</td>
		</tr>
		<tr>
			<th scope="row"><kbd>left &larr;</kbd></th>
			<td>Close the submenu, select the previous top-level menu item.</td>
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

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~js
Array.prototype.forEach.call(subMenuItems, function(el, i){
	el.setAttribute('tabindex', '-1');
	el.addEventListener("keydown", function(event) {
			switch (event.keyCode) {
				case keys.tab:
					// Close all menus.
					Array.prototype.forEach.call(appsMenuItems, function (elem) {
						elem.setAttribute('aria-expanded', 'false');
					});
					// In this demo, we know what the ID of the previous/next interactive element was. In practice this should be automatically determined.
					if (event.shiftKey) {
						document.querySelector('#tab-before').setAttribute('tabindex', '-1');
						document.querySelector('#tab-before').focus();
					} else {
						document.querySelector('#tab-after').setAttribute('tabindex', '-1');
						document.querySelector('#tab-after').focus();
					}
					prevdef = true;
					break;
				case keys.right:
					gotoIndex(currentIndex + 1);
					prevdef = true;
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					prevdef = true;
					break;
				case keys.esc:
					gotoIndex(currentIndex);
					prevdef = true;
					break;
				case keys.down:
					gotoSubIndex(this.parentNode, subIndex + 1);
					prevdef = true;
					break;
				case keys.up:
					gotoSubIndex(this.parentNode, subIndex - 1);
					prevdef = true;
					break;
				case keys.enter:
				case keys.space:
					alert(this.innerText);
					prevdef = true;
					break;
			}
			if (prevdef) {
				event.preventDefault();
				event.stopPropagation();
			}
			return false;
		});
	el.addEventListener("click", function(event) {
			alert(this.innerHTML);
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

[See the complete example code.](/menus/examples/appmenu.html)

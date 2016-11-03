---
title: "Fly-out Menus"
status: approved-draft
order: 4
wcag_techniques:
  - SCR26
  - H4
---

Fly-out menus contextual menu items that give users more choice when they interact with a menu item. They are used to provide links to sub pages of the main menu item and are sometimes called dropdown menus.

They need to be operable using assistive technologies and the keyboard. For people with reduced dexterity it is also important that submenus don’t close immediately when the mouse leaves the clickable area.

To make navigating a fly-out menu easier, invisible links should be hidden completely from the page. They should only show up when requested by the user to minimize unnecessary and potentially confusing keyboard interaction and not read out by screen readers.

Usually the first-level menu items are links to individual pages whether they have a submenu or not. It is important to be able to distinguish menu items with and without sub menus, both visually and in code. In the following example, only the SpaceBears menu item has a submenu:

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnav">
		<ul>
				<li><a href="#flyoutnav">Home</a></li>
				<li><a href="#flyoutnav">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnav">SpaceBears</a>
						<ul>
								<li><a href="#flyoutnav">SpaceBear 6</a></li>
								<li><a href="#flyoutnav">SpaceBear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutnav">MarsCars</a></li>
				<li><a href="#flyoutnav">Contact</a></li>
		</ul>
</nav>

<style>
.show-overflow {
		overflow: visible !important;
}

.show-overflow .box-content {
		overflow: visible !important;
}
	#flyoutnav {
			display:table;
			width:100%;
	}
	#flyoutnav > ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#flyoutnav > ul > li {
			display:table-cell;
			width: 20%;
			text-align: center;
			position:relative;
	}
	#flyoutnav a,
	#flyoutnav .current {
			display: block;
			padding: .25em;
			border-bottom: .25em solid #E8E8E8;
	}
	#flyoutnav a {
			color: #fff;
			text-decoration: none;
	}
	#flyoutnav a:hover,
	#flyoutnav a:focus {
			background-color: #fff;
			color: #036;
			border-color: #036;
			text-decoration: underline;
	}
	#flyoutnav .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}

	#flyoutnav > ul > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
	}

#flyoutnav > ul > li:hover > ul {
		display:block;
	}

	#flyoutnav > ul > li > ul a{
		border-bottom-width: 1px;
	}

	.has-submenu > a:after {
		margin-left: 5px;
		line-height: 14px;
		content: url(../../img/ex-dropdown-inactive.png);
	}
	.has-submenu:hover > a:hover:after,
	.has-submenu > a:focus:after {
		content: url(../../img/ex-dropdown-active.png);
	}
</style>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav role="presentation" aria-label="Main Navigation">
		<ul>
				<li><a href="…">Home</a></li>
				<li><a href="…">Shop</a></li>
				<li class="has-submenu">
						<a href="…">SpaceBears</a>
						<ul>
								<li><a href="…">SpaceBear 6</a></li>
								<li><a href="…">SpaceBear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="…">MarsCars</a></li>
				<li><a href="…">Contact</a></li>
		</ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

For mouse users, hiding the submenu until the mouse hovers over the first-level menu item is quite easy to do in CSS only, but this method has the disadvantage that the menu immediately closes once the mouse leaves the list item (and the containing submenu).

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav > ul li ul {
	display: none;
}
nav > ul li:hover ul {
	display: block;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Enhancing the menu using JavaScript

By using JavaScript, it is possible to react to keyboard usage and mouse movements to improve the user interaction with the menu.

### Improve mouse support

To avoid submenu items vanishing as soon as the mouse pointer leaves the menu, a timer is started which closes the menu after one second. If the mouse re-enters the submenu during that time, the timer is canceled and the submenu doesn’t close.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavmousefixed">
		<ul>
				<li><a href="#flyoutnavmousefixed">Home</a></li>
				<li><a href="#flyoutnavmousefixed">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnavmousefixed">SpaceBears</a>
						<ul>
								<li><a href="#flyoutnavmousefixed">SpaceBear 6</a></li>
								<li><a href="#flyoutnavmousefixed">SpaceBear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutnavmousefixed">MarsCars</a></li>
				<li><a href="#flyoutnavmousefixed">Contact</a></li>
		</ul>
</nav>

<style>
.show-overflow {
		overflow: visible !important;
}

.show-overflow .box-content {
		overflow: visible !important;
}
	#flyoutnavmousefixed {
			display:table;
			width:100%;
	}
	#flyoutnavmousefixed > ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#flyoutnavmousefixed > ul > li {
			display:table-cell;
			width: 20%;
			text-align: center;
			position:relative;
	}
	#flyoutnavmousefixed a,
	#flyoutnavmousefixed .current {
			display: block;
			padding: .25em;
			border-color: #E8E8E8;
	}
	#flyoutnavmousefixed a {
			color: #fff;
			text-decoration: none;
			border: 1px solid #036;
	}
	#flyoutnavmousefixed a:hover,
	#flyoutnavmousefixed a:focus {
			background-color: #fff;
			color: #036;
			text-decoration: underline;
	}
	#flyoutnavmousefixed .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}

	#flyoutnavmousefixed > ul > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
	}

#flyoutnavmousefixed > ul > li.open > ul {
		display:block;
	}

	#flyoutnavmousefixed > ul > li > ul a{
		border-bottom-width: 1px;
	}
</style>

<script>
var menuItems1 = document.querySelectorAll('#flyoutnavmousefixed li.has-submenu');
var timer1;

Array.prototype.forEach.call(menuItems1, function(el, i){
		el.addEventListener("mouseover", function(event){
				this.className = "has-submenu open";
				clearTimeout(timer1);
		});
		el.addEventListener("mouseout", function(event){
				timer1 = setTimeout(function(event){
						document.querySelector("#flyoutnavmousefixed .has-submenu.open").className = "has-submenu";
				}, 1000);
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~ js
Array.prototype.forEach.call(menuItems, function(el, i){
	el.addEventListener("mouseover", function(event){
		this.className = "has-submenu open";
		clearTimeout(timer);
	});
	el.addEventListener("mouseout", function(event){
		timer = setTimeout(function(event){
			document.querySelector(".has-submenu.open").className = "has-submenu";
		}, 1000);
	});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Improve keyboard support

There are two roles top-level menu items in fly-out menus can have for keyboard users:

1. It is just a toggle for the sub menu.
2. It links to a page itself and needs to toggle the sub menu.

Usually the submenu should not open when the focus enters the top-level menu item as a keyboard would need to step through all the submenu items to get to the next top-level item.

#### Toggle submenu using the top-level menu item
{:.ap}

When JavaScript is available, the top-level menu item won’t link to the page in its `href` attribute but instead showing the sub menu. (If JavaScript is not available, the link will work as usual so the page the menu is linking to should provide a way to get to the submenu items.)

If the focus leaves the submenu (for example by using the tab key on the last submenu item), the submenu is closed.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavkbfixed">
		<ul>
				<li><a href="#flyoutnavkbfixed">Home</a></li>
				<li><a href="#flyoutnavkbfixed">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnavkbfixed">SpaceBears</a>
						<ul>
								<li><a href="#flyoutnavkbfixed">SpaceBear 6</a></li>
								<li><a href="#flyoutnavkbfixed">SpaceBear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutnavkbfixed">MarsCars</a></li>
				<li><a href="#flyoutnavkbfixed">Contact</a></li>
		</ul>
</nav>

<style>
.show-overflow {
		overflow: visible !important;
}

.show-overflow .box-content {
		overflow: visible !important;
}
	#flyoutnavkbfixed {
			display:table;
			width:100%;
	}
	#flyoutnavkbfixed > ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#flyoutnavkbfixed > ul > li {
			display:table-cell;
			width: 20%;
			text-align: center;
			position:relative;
	}
	#flyoutnavkbfixed a,
	#flyoutnavkbfixed .current {
			display: block;
			padding: .25em;
			border-color: #E8E8E8;
	}
	#flyoutnavkbfixed a {
			color: #fff;
			text-decoration: none;
	}
	#flyoutnavkbfixed a:hover,
		#flyoutnavkbfixed a:focus {
			background-color: #fff;
			color: #036;
			border: 1px solid #036;
			text-decoration: underline;
	}
	#flyoutnavkbfixed .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}

	#flyoutnavkbfixed > ul > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
	}

#flyoutnavkbfixed > ul > li.open > ul {
		display:block;
	}

	#flyoutnavkbfixed > ul > li > ul a{
		border-bottom-width: 1px;
	}
</style>

<script>
/* focusin/out event polyfill (firefox) */
!function(){
	var w = window,
	d = w.document;

	if( w.onfocusin === undefined ){
		d.addEventListener('focus' ,addPolyfill ,true);
		d.addEventListener('blur' ,addPolyfill ,true);
		d.addEventListener('focusin' ,removePolyfill ,true);
		d.addEventListener('focusout' ,removePolyfill ,true);
	}
	function addPolyfill(e){
		var type = e.type === 'focus' ? 'focusin' : 'focusout';
		var event = new CustomEvent(type, { bubbles:true, cancelable:false });
		event.c1Generated = true;
		e.target.dispatchEvent( event );
	}
	function removePolyfill(e){
if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
	d.removeEventListener('focus' ,addPolyfill ,true);
	d.removeEventListener('blur' ,addPolyfill ,true);
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
}
setTimeout(function(){
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
});
}
}();

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

var menuItems1 = document.querySelectorAll('#flyoutnavkbfixed li.has-submenu');
var timer1, timer2;

Array.prototype.forEach.call(menuItems1, function(el, i){
		el.addEventListener("mouseover", function(event){
				this.className = "has-submenu open";
				clearTimeout(timer1);
		});
		el.addEventListener("mouseout", function(event){
				timer1 = setTimeout(function(event){
						document.querySelector("#flyoutnavkbfixed .has-submenu.open").className = "has-submenu";
				}, 1000);
		});
		el.querySelector('a').addEventListener("click",  function(event){
			if (this.parentNode.className == "has-submenu") {
				this.parentNode.className = "has-submenu open";
			} else {
				this.parentNode.className = "has-submenu";
			}
			event.preventDefault();
		});
		var links = el.querySelectorAll('a');
		Array.prototype.forEach.call(links, function(el, i){
			el.addEventListener("focus", function() {
				if (timer2) {
					clearTimeout(timer2);
					timer2 = null;
				}
			});
			el.addEventListener("blur", function(event) {
				timer2 = setTimeout(function () {
					var opennav = document.querySelector("#flyoutnavkbfixed .has-submenu.open")
					if (opennav) {
						opennav.className = "has-submenu";
					}
				}, 10);
			});
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

The following code example iterates through all top-level items that have a submenu (indicated through the class `has-submenu`) and adds click event to the first (top-level) link in each menu item. Despite the name, click events are activated regardless of the input method as soon as the link gets activated. If the submenu is closed at the time the link is activated, the script opens the submenu, and vice versa.

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("click",  function(event){
		if (this.parentNode.className == "has-submenu") {
			this.parentNode.className = "has-submenu open";
		} else {
			this.parentNode.className = "has-submenu";
		}
		event.preventDefault();
		return false;
	});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Toggle submenu using a special “show submenu” button
{:.ap}

If the top-level menu item should stay a link to a page, adding a separate button that toggles the submenu is the most reliable way to address the issue.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavkbbtn">
	<ul>
		<li><a href="#flyoutnavkbbtn">Home</a></li>
		<li><a href="#flyoutnavkbbtn">Shop</a></li>
		<li class="has-submenu">
			<a href="#flyoutnavkbbtn">SpaceBears</a>
			<ul>
				<li><a href="#flyoutnavkbbtn">SpaceBear 6</a></li>
				<li><a href="#flyoutnavkbbtn">SpaceBear 6 Plus</a></li>
			</ul>
		</li>
		<li><a href="#flyoutnavkbbtn">MarsCars</a></li>
		<li><a href="#flyoutnavkbbtn">Contact</a></li>
	</ul>
</nav>

<style>
.show-overflow {
		overflow: visible !important;
}

.show-overflow .box-content {
		overflow: visible !important;
}
	#flyoutnavkbbtn {
			display:table;
			width:100%;
	}
	#flyoutnavkbbtn > ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#flyoutnavkbbtn > ul > li {
			display:table-cell;
			width: 20%;
			text-align: center;
			position:relative;
	}
	#flyoutnavkbbtn a,
	#flyoutnavkbbtn .current {
			display: block;
			padding: .25em;
			border-color: #E8E8E8;
	}
	#flyoutnavkbbtn a {
			color: #fff;
			text-decoration: none;
	}
	#flyoutnavkbbtn a:hover,
		#flyoutnavkbbtn a:focus {
			background-color: #fff;
			color: #036;
			border: 1px solid #036;
			text-decoration: underline;
	}
	#flyoutnavkbbtn .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}

	#flyoutnavkbbtn > ul > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
	}

#flyoutnavkbbtn > ul > li.open > ul {
		display:block;
	}

	#flyoutnavkbbtn > ul > li > ul a{
		border-bottom-width: 1px;
	}


	#flyoutnavkbbtn .has-submenu > a:after {
		margin-left: 5px;
		line-height: 14px;
		content: '';
	}
	#flyoutnavkbbtn .has-submenu:hover > a:hover:after,
	#flyoutnavkbbtn .has-submenu > a:focus:after {
		content: '';
	}

	#flyoutnavkbbtn .has-submenu button {
		background-color: transparent;
		border: none;
		padding:0;
		line-height: 1;
		padding: 3px;
	}

	 #flyoutnavkbbtn .has-submenu button > span {
		display:inline-block;
		width: .8em;
		height: .8em;
		background: url(../../img/ex-dropdown-inactive.png) center no-repeat;
	}

	#flyoutnavkbbtn .has-submenu button:hover > span,
	#flyoutnavkbbtn .has-submenu button:focus > span {
		background: url(../../img/ex-dropdown-active.png) #fff;
	}

	#flyoutnavkbbtn .has-submenu:hover  button,
	#flyoutnavkbbtn .has-submenu a:focus button {
		background-color: #036;
	}
	#flyoutnavkbbtn .has-submenu button:focus {
		background: #FFF;
	}
</style>

<script>
/* focusin/out event polyfill (firefox) */
!function(){
	var w = window,
	d = w.document;

	if( w.onfocusin === undefined ){
		d.addEventListener('focus' ,addPolyfill ,true);
		d.addEventListener('blur' ,addPolyfill ,true);
		d.addEventListener('focusin' ,removePolyfill ,true);
		d.addEventListener('focusout' ,removePolyfill ,true);
	}
	function addPolyfill(e){
		var type = e.type === 'focus' ? 'focusin' : 'focusout';
		var event = new CustomEvent(type, { bubbles:true, cancelable:false });
		event.c1Generated = true;
		e.target.dispatchEvent( event );
	}
	function removePolyfill(e){
if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
	d.removeEventListener('focus' ,addPolyfill ,true);
	d.removeEventListener('blur' ,addPolyfill ,true);
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
}
setTimeout(function(){
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
});
}
}();

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

var menuItems1 = document.querySelectorAll('#flyoutnavkbbtn li.has-submenu');
var timer1, timer2;

var parseHTML = function(str) {
	var tmp = document.implementation.createHTMLDocument();
	tmp.body.innerHTML = str;
	return tmp.body.children;
};

Array.prototype.forEach.call(menuItems1, function(el, i){
		var btn = '<button><span><span class="visuallyhidden">show submenu</span></span></button>';
		var activatingA = el.querySelector('a')
		activatingA.innerHTML = activatingA.innerHTML + ' ' + btn;
		el.addEventListener("mouseover", function(event){
				this.className = "has-submenu open";
				clearTimeout(timer1);
		});
		el.addEventListener("mouseout", function(event){
				timer1 = setTimeout(function(event){
						document.querySelector("#flyoutnavkbbtn .has-submenu.open").className = "has-submenu";
				}, 1000);
		});
		el.querySelector('a button').addEventListener("click",  function(event){
			if (this.parentNode.parentNode.className == "has-submenu") {
				this.parentNode.parentNode.className = "has-submenu open";
			} else {
				this.parentNode.parentNode.className = "has-submenu";
			}
			event.preventDefault();
		});
		var links = el.querySelectorAll('a');
		Array.prototype.forEach.call(links, function(el, i){
			el.addEventListener("focus", function() {
				if (timer2) {
					clearTimeout(timer2);
					timer2 = null;
				}
			});
			el.addEventListener("blur", function(event) {
				timer2 = setTimeout(function () {
					var opennav = document.querySelector("#flyoutnavkbbtn .has-submenu.open")
					if (opennav) {
						opennav.className = "has-submenu";
					}
				}, 10);
			});
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

In the following code example, a button is added to every menu item link with a submenu. When the button is activated, it toggles the menu just like above. The invisible button text is changed from “show submenu” to “hide submenu” reflecting the state of the submenu.

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~js
var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
	var btn = '<button><span><span class="visuallyhidden">show submenu</span></span></button>';
	var topLevelLink = el.querySelector('a');
	topLevelLink.innerHTML = topLevelLink.innerHTML + ' ' + btn;

	el.querySelector('a button').addEventListener("click",  function(event){
		if (this.parentNode.parentNode.className == "has-submenu") {
			this.parentNode.parentNode.className = "has-submenu open";
			this.querySelector('.visuallyhidden').innerText = 'hide submenu';
		} else {
			this.parentNode.parentNode.className = "has-submenu";
			this.querySelector('.visuallyhidden').innerText = 'show submenu';
		}
		event.preventDefault();
	});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


## Improve screen reader support using WAI-ARIA

Screen reader users need to know if an item has a submenu or not and if that submenu is currently open. While this can be done with hidden text as shown above, WAI-ARIA helps to convey this information programmatically so it can be picked up by assistive technologies in a consistent way. The two relevant WAI-ARIA attributes are:

* **`aria-haspopup="true"`** is used so screen readers are able to announce that the link has a submenu.
* **`aria-expanded`** is initially set to `false` but changed to `true` when the submenu opens which helps screen readers to announce that this menu item is now expanded.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutaria">
		<ul>
				<li><a href="#flyoutaria">Home</a></li>
				<li><a href="#flyoutaria">Shop</a></li>
				<li class="has-submenu">
						<a href="#" aria-haspopup="true" aria-expanded="false">SpaceBears</a>
						<ul>
								<li><a href="#flyoutaria">SpaceBear 6</a></li>
								<li><a href="#flyoutaria">SpaceBear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutaria">MarsCars</a></li>
				<li><a href="#flyoutaria">Contact</a></li>
		</ul>
</nav>

<style>
.show-overflow {
		overflow: visible !important;
}

.show-overflow .box-content {
		overflow: visible !important;
}
	#flyoutaria {
			display:table;
			width:100%;
	}
	#flyoutaria > ul {
			margin: 0;
			padding: 0;
			display: table-row;
			background-color: #036;
			color: #fff;
	}
	#flyoutaria > ul > li {
			display:table-cell;
			width: 20%;
			text-align: center;
			position:relative;
	}
	#flyoutaria a,
	#flyoutaria .current {
			display: block;
			padding: .25em;
			border-color: #E8E8E8;
	}
	#flyoutaria a {
			color: #fff;
			text-decoration: none;
	}
	#flyoutaria a:hover,
		#flyoutaria a:focus {
			background-color: #fff;
			color: #036;
			border: 1px solid #036;
			text-decoration: underline;
	}
	#flyoutaria .current {
			background-color: #bbb;
			color: #000;
			border-color: #444;
	}

	#flyoutaria > ul > li > ul {
		display: none;
		position:absolute;
		left:0;
		right:0;
		top:100%;
		padding:0;
		margin:0;
		background-color: #036;
	}

#flyoutaria > ul > li.open > ul {
		display:block;
	}

	#flyoutaria > ul > li > ul a{
		border-bottom-width: 1px;
	}
</style>

<script>
/* focusin/out event polyfill (firefox) */
!function(){
	var w = window,
	d = w.document;

	if( w.onfocusin === undefined ){
		d.addEventListener('focus' ,addPolyfill ,true);
		d.addEventListener('blur' ,addPolyfill ,true);
		d.addEventListener('focusin' ,removePolyfill ,true);
		d.addEventListener('focusout' ,removePolyfill ,true);
	}
	function addPolyfill(e){
		var type = e.type === 'focus' ? 'focusin' : 'focusout';
		var event = new CustomEvent(type, { bubbles:true, cancelable:false });
		event.c1Generated = true;
		e.target.dispatchEvent( event );
	}
	function removePolyfill(e){
if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
	d.removeEventListener('focus' ,addPolyfill ,true);
	d.removeEventListener('blur' ,addPolyfill ,true);
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
}
setTimeout(function(){
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
});
}
}();

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

var menuItems1 = document.querySelectorAll('#flyoutaria li.has-submenu');
var timer1, timer2;

Array.prototype.forEach.call(menuItems1, function(el, i){
		el.addEventListener("mouseover", function(event){
				this.className = "has-submenu open";
				this.setAttribute('aria-expanded', "true");
				clearTimeout(timer1);
		});
		el.addEventListener("mouseout", function(event){
				timer1 = setTimeout(function(event){
						var opennav = document.querySelector("#flyoutaria .has-submenu.open");
						if (opennav) {
							opennav.className = "has-submenu";
							opennav.querySelector("[aria-expanded]").setAttribute('aria-expanded', "false");
						}
				}, 1000);
		});
		el.querySelector('a').addEventListener("click",  function(event){
			if (this.parentNode.className == "has-submenu") {
				this.parentNode.className = "has-submenu open";
				this.setAttribute('aria-expanded', "true");
			} else {
				this.parentNode.className = "has-submenu";
				this.setAttribute('aria-expanded', "false");
			}
			event.preventDefault();
			return false;
		});
		var links = el.querySelectorAll('a');
		Array.prototype.forEach.call(links, function(el, i){
			el.addEventListener("focus", function() {
				if (timer2) {
					clearTimeout(timer2);
					timer2 = null;
				}
			});
			el.addEventListener("blur", function(event) {
				timer2 = setTimeout(function () {
					var opennav = document.querySelector("#flyoutaria .has-submenu.open")
					if (opennav) {
						opennav.className = "has-submenu";
						opennav.querySelector("[aria-expanded]").setAttribute('aria-expanded', "false");
					}
				}, 10);
			});
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

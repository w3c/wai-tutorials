---
title: "Fly-out Menus"
status: approved-draft
order: 4
wcag_techniques:
  - SCR26
  - H4
---

Fly-out menus contextual menu items that give users more choice when they interact with a menu item. They are used to provide links to sub pages of the main menu item and are sometimes called dropdown menus.

## Indicate submenus

It is important to be able to distinguish menu items with and without sub menus. In the following example, only the SpaceBears menu item has a submenu. For visual users an arrow is added to the menu item to indicate the submenu. For assistive technologies, this information also needs to be provided in the code using WAI-ARIA attributes:

* `aria-haspopup="true"` is used so screen readers are able to announce that the link has a submenu.
* `aria-expanded` is initially set to `false` to indicate that the submenu is not visible. {::comment}but changed to `true` when the submenu opens which helps screen readers to announce that this menu item is now expanded.{:/}

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnav">
		<ul>
				<li><a href="#flyoutnav">Home</a></li>
				<li><a href="#flyoutnav">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnav" aria-haspopup="true" aria-expanded="false">SpaceBears</a>
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
						<a href="…" aria-haspopup="true" aria-expanded="false">
							SpaceBears
						</a>
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

## Add functionality

### Mouse users

Hiding a submenu until the cursor of a mouse (or another pointing device) hovers over the first-level menu item can be done by CSS alone. However, this method has the disadvantage that the menu immediately snaps back once the cursor leaves the hovered element.

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

This behavior can be avoided by adding some scripting. When the cursor leaves the menu item, a timer is started which schedules to close the menu after one second. If the mouse re-enters the submenu during that time, that timer is canceled and the submenu stays open.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavmousefixed">
		<ul>
				<li><a href="#flyoutnavmousefixed">Home</a></li>
				<li><a href="#flyoutnavmousefixed">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnavmousefixed" aria-haspopup="true" aria-expanded="false">SpaceBears</a>
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

### Keyboard users

Usually submenus are not supposed to open when tabbing through the menu using the keyboard as a keyboard user would need to step through all submenu items to get to the next top-level item.

Different approaches address the need of keeping the top-level link accessible or not.

#### Toggle submenu using the top-level menu item
{:.ap}

The submenu is opened by a script when the user activates the top-level menu item. The value of the `href` attribute is ignored.

When the focus leaves the submenu (for example by using the tab key on the last submenu item), the submenu is closed.

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
				this.setAttribute('aria-expanded', "true");
			} else {
				this.parentNode.className = "has-submenu";
				this.setAttribute('aria-expanded', "false");
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

The following code iterates through all top-level items with the class `has-submenu` and adds a click event to it which opens or closes the submenu, depending on its state. In addition, the `aria-expanded` attribute is set to `true` while the submenu is shown and otherwise to `false`.

{::nomarkdown}
<%= notes_start() %>
{:/}

**Note:** Despite the name, click events are activated regardless of the input method as soon as the link gets activated. 

{::nomarkdown}
<%= notes_end() %>
{:/}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
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
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Toggle submenu using a special “show submenu” button
{:.ap}

If the top-level menu item needs to stay a proper link that links to a page, a separate button can be added to the top-level item that opens/closes the menu. This button can also act as a visual indicator for the presence of a submenu.

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
				this.parentNode.setAttribute('aria-expanded', "true");
			} else {
				this.parentNode.parentNode.className = "has-submenu";
				this.parentNode.setAttribute('aria-expanded', "false");
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

In the following code example, a button is added to every top-level menu item link with a submenu. When the button is activated, it shows or hides the submenu. The invisible label of the button is set to “show submenu” or “hide submenu”, reflecting the state of the submenu.

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
			this.parentNode.setAttribute('aria-expanded', "true");
			this.querySelector('.visuallyhidden').innerText = 'hide submenu';
		} else {
			this.parentNode.parentNode.className = "has-submenu";
			this.parentNode.setAttribute('aria-expanded', "false");
			this.querySelector('.visuallyhidden').innerText = 'show submenu';
		}
		event.preventDefault();
	});
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

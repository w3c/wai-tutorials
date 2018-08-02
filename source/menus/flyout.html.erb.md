---
title: "Fly-out Menus"
order: 4
wcag_techniques:
  - SCR26
  - H4
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Use fly-out (or drop-down) menus to provide an overview of a web site’s page hierarchy. It removes the need for multiple page loads provided that users know where to find the information. Application menus are usually implemented this way, too.

People with reduced dexterity, such as tremors, often have trouble operating fly-out menus. For some, it might be impossible. Make sure to provide other ways to the submenu items, for example by repeating them on the page of the parent menu item.

## Indicate submenus

Indicate menu items with submenus visually and using markup. In the following example, the submenu is indicated visually by an icon and this WAI-ARIA markup:

* `aria-haspopup="true"` declares that a menu item has a submenu.
* `aria-expanded="false"` declares that the submenu is hidden.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<nav aria-label="Main Navigation">
		<ul>
				<li><a href="…">Home</a></li>
				<li><a href="…">Shop</a></li>
				<li class="has-submenu">
						<a href="…" aria-haspopup="true" aria-expanded="false">
							Space Bears
						</a>
						<ul>
								<li><a href="…">Space Bear 6</a></li>
								<li><a href="…">Space Bear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="…">Mars Cars</a></li>
				<li><a href="…">Contact</a></li>
		</ul>
</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Fly-out functionality

The fly-out functionality is created using CSS and scripting with slightly separate considerations for mouse and keyboard users.

### Mouse users

The following example uses this CSS code to show and hide the submenus when the parent menu items are hovered:

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav > ul li       ul { display: none; }
nav > ul li:hover ul { display: block;}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In addition, scripting is used to slightly delay the immediate closing of submenu items when the mouse leaves the area. This delay makes it easier to use the menu when navigation by a mouse is not very precise.

In the following example, a delay of one second is added using a timer:

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavmousefixed">
		<ul>
				<li><a href="#flyoutnavmousefixed">Home</a></li>
				<li><a href="#flyoutnavmousefixed">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnavmousefixed" aria-haspopup="true" aria-expanded="false">Space Bears</a>
						<ul>
								<li><a href="#flyoutnavmousefixed">Space Bear 6</a></li>
								<li><a href="#flyoutnavmousefixed">Space Bear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutnavmousefixed">Mars Cars</a></li>
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
var menuItems = document.querySelectorAll('li.has-submenu');
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

### Keyboard Users

Submenus should not open when using the tab key to navigate through the menu, as keyboard users would then have to step through all submenu items to get to the next top-level item. Instead, consider one of the following approaches.

#### Use parent as toggle
{:.ap}

Use this approach in situations where the parent menu item only summarizes the submenu and doesn’t have to carry out a function, such as linking to a web page. In this case, the submenu is opened by a script when the user activates the top-level item and closed when the focus leaves the submenu.

{::nomarkdown}
<%= notes_start() %>
{:/}

**Note:** The value of the `href` attribute is ignored but you might still want to link to an existing document in case JavaScript is not loaded.

{::nomarkdown}
<%= notes_end() %>
{:/}

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavkbfixed">
		<ul>
				<li><a href="#flyoutnavkbfixed">Home</a></li>
				<li><a href="#flyoutnavkbfixed">Shop</a></li>
				<li class="has-submenu">
						<a href="#flyoutnavkbfixed" aria-expanded="false" aria-haspopup="true">Space Bears</a>
						<ul>
								<li><a href="#flyoutnavkbfixed">Space Bear 6</a></li>
								<li><a href="#flyoutnavkbfixed">Space Bear 6 Plus</a></li>
						</ul>
				</li>
				<li><a href="#flyoutnavkbfixed">Mars Cars</a></li>
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
      border: 1px solid #036;
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
// focusin/out event polyfill (firefox)

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
						var opennav = document.querySelector("#flyoutnavkbfixed .has-submenu.open");
						opennav.className = "has-submenu";
						opennav.querySelector('a').setAttribute('aria-expanded', "false");
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
						opennav.querySelector('a').setAttribute('aria-expanded', "false");
					}
				}, 10);
			});
		});
});
</script>

<%= sample_end %>
{:/nomarkdown}

The following code iterates through all top-level items with the class `has-submenu` and adds a click event, which opens or closes the submenu depending on its state. Also, the `aria-expanded` attribute is set to `true` while the submenu is open, and to `false` otherwise.

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

#### Use button as toggle
{:.ap}

For situations when the parent menu item needs to carry out a function, such as linking to a web page, a separate button can be added to the parent item, to open and close the submenu. This button can also act as a visual indicator for the presence of a submenu.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="presentation" aria-label="Main Navigation" id="flyoutnavkbbtn">
	<ul>
		<li><a href="#flyoutnavkbbtn">Home</a></li>
		<li><a href="#flyoutnavkbbtn">Shop</a></li>
		<li class="has-submenu">
			<a href="#flyoutnavkbbtn" aria-haspopup="true">Space Bears</a>
			<ul>
				<li><a href="#flyoutnavkbbtn">Space Bear 6</a></li>
				<li><a href="#flyoutnavkbbtn">Space Bear 6 Plus</a></li>
			</ul>
		</li>
		<li><a href="#flyoutnavkbbtn">Mars Cars</a></li>
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
      border: 1px solid #036;
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
// focusin/out event polyfill (firefox)

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

The following code adds a button to every top-level menu item with a submenu. When the button is activated, it shows or hides the submenu. The invisible label of the button is set to “show submenu” or “hide submenu”, reflecting the state of the submenu.

{::nomarkdown}
<%= notes_start() %>
{:/}

**Note:** If possible, include the name of the parent menu item in the button label; for example: “show Space Bears submenu”.

{::nomarkdown}
<%= notes_end() %>
{:/}

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

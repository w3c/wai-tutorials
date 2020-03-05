---
title: Application Menu Example & Code

lang: en
permalink: /tutorials/menus/application-menus-code/
ref: /tutorials/menus/application-menus-code/

github:
  repository: w3c/wai-tutorials
  path: 'content/menus/application-menus-code.md'

resource:
  ref: /tutorials/menus/
navigation:
  previous: /tutorials/menus/application-menus/


metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}
<ul role="menubar" aria-label="functions" id="appmenu">
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
.show-overflow2 .sample:after {
	content:'';
	display:block;
	clear: both;
}

.show-overflow2 + figure {
	clear: both;
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
		margin: 0;
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
</style>

<script>
var appsMenu = document.querySelector('#appmenu');
var appsMenuItems = document.querySelectorAll('#appmenu > li');
var subMenuItems = document.querySelectorAll('#appmenu > li li');
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
	return appsMenuItems[idx];
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
				subindex = 0;
				gotoSubIndex(this.querySelector('ul'), 0);
			} else {
				this.setAttribute('aria-expanded', "false");
				gotoIndex(currentIndex);
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
					// if (event.shiftKey) {
					// 	gotoIndex(currentIndex - 1);
					// } else {
					// 	gotoIndex(currentIndex + 1);
					// }
					// prevdef = true;
					break;
				case keys.enter:
				case keys.down:
				case keys.space:
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
					document.querySelector('#escape').setAttribute('tabindex', '-1');
					document.querySelector('#escape').focus();
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
			var prevdef = false;
			switch (event.keyCode) {
				case keys.tab:
					// if (event.shiftKey) {
					// 	gotoIndex(currentIndex - 1);
					// } else {
					// 	gotoIndex(currentIndex + 1);
					// }
					// prevdef = true;
					break;
				case keys.right:
					var newnode = gotoIndex(currentIndex + 1);
					newnode.click();
					gotoSubIndex(newnode, 0);
					prevdef = true;
					break;
				case keys.left:
					var newnode = gotoIndex(currentIndex - 1);
					newnode.click();
					gotoSubIndex(newnode, 0);
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

window.addEventListener("click", function( event ) {
	Array.prototype.forEach.call(appsMenuItems, function(el, i){
		el.setAttribute('aria-expanded', "false");
	});
});

appsMenu.addEventListener("click", function( event ) {
  event.stopPropagation();
});
</script>

<div tabindex="0" style="margin-top: 100px;" id="escape" style="clear:both">Element after the menu to focus on</div>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<ul role="menubar" aria-label="functions" id="appmenu">
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
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: CSS" class="example" %}
{:/}

~~~ css
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
	margin: 0;
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
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: JavaScript" class="example" %}
{:/}

~~~ js
var appsMenuItems = document.querySelectorAll('#appmenu > li');
var subMenuItems = document.querySelectorAll('#appmenu > li li');
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
						gotoIndex(currentIndex - 1);
					} else {
						gotoIndex(currentIndex + 1);
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
					document.querySelector('#escape').setAttribute('tabindex', '-1');
					document.querySelector('#escape').focus();
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
					if (event.shiftKey) {
						gotoIndex(currentIndex - 1);
					} else {
						gotoIndex(currentIndex + 1);
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
{% include box.html type="end" %}
{:/}

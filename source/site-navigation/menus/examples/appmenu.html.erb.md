---
title: Example for an Application Menu
source: ../flyout.html#web-application-menus
layout: fullcode
status: approved-draft
---

{::nomarkdown}
<%= sample_start %>
<div role="menubar">
	<ul role="menu" aria-label="functions" id="appmenu">
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
</div>

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
</style>

<script>
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
			switch (event.keyCode) {
				case keys.right:
					gotoIndex(currentIndex + 1);
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					break;
				case keys.tab:
					if (event.shiftKey) {
						gotoIndex(currentIndex - 1);
					} else {
						gotoIndex(currentIndex + 1);
					}
					break;
				case keys.enter:
				case keys.down:
					this.click();
					subindex = 0;
					gotoSubIndex(this.querySelector('ul'), 0);
					break;
				case keys.up:
					this.click();
					var submenu = this.querySelector('ul');
					subindex = submenu.querySelectorAll('li').length - 1;
					gotoSubIndex(submenu, subindex);
					break;
				case keys.esc:
					document.querySelector('a[href="#related"]').focus();
			}
			event.preventDefault();
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
					break;
				case keys.right:
					gotoIndex(currentIndex + 1);
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					break;
				case keys.esc:
					gotoIndex(currentIndex);
					break;
				case keys.down:
					gotoSubIndex(this.parentNode, subIndex + 1);
					break;
				case keys.up:
					gotoSubIndex(this.parentNode, subIndex - 1);
					break;
				case keys.enter:
				case keys.space:
					alert(this.innerText);
					break;
			}
			event.preventDefault();
			event.stopPropagation();
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

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<div role="menubar">
	<ul role="menu" aria-label="functions" id="appmenu">
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
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

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
			switch (event.keyCode) {
				case keys.right:
					gotoIndex(currentIndex + 1);
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					break;
				case keys.tab:
					if (event.shiftKey) {
						gotoIndex(currentIndex - 1);
					} else {
						gotoIndex(currentIndex + 1);
					}
					break;
				case keys.enter:
				case keys.down:
					this.click();
					subindex = 0;
					gotoSubIndex(this.querySelector('ul'), 0);
					break;
				case keys.up:
					this.click();
					var submenu = this.querySelector('ul');
					subindex = submenu.querySelectorAll('li').length - 1;
					gotoSubIndex(submenu, subindex);
					break;
				case keys.esc:
					document.querySelector('a[href="#related"]').focus();
			}
			event.preventDefault();
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
					break;
				case keys.right:
					gotoIndex(currentIndex + 1);
					break;
				case keys.left:
					gotoIndex(currentIndex - 1);
					break;
				case keys.esc:
					gotoIndex(currentIndex);
					break;
				case keys.down:
					gotoSubIndex(this.parentNode, subIndex + 1);
					break;
				case keys.up:
					gotoSubIndex(this.parentNode, subIndex - 1);
					break;
				case keys.enter:
				case keys.space:
					alert(this.innerText);
					break;
			}
			event.preventDefault();
			event.stopPropagation();
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


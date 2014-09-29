---
title: "&bull; Fly-out Menus"
status: editors-draft
order: 4
---

If the user should be able to access pages deeper in the web site’s structure, web designers and developers often use fly-out menus to archive this. Those menus provide more links to the user on any given page. Such fly-out menus are often called dropdown menus.

As interactive components, fly-out menus need to be developed with accessibility in mind to make sure that they are operable using the keyboard as well. Additionally, users of screen reader and other assistive technology are only able to use the menu efficiently if links not displayed are not reachable by the keyboard. For people with shaky hands it is also important that the menu doesn’t snap back immediately when the mouse leaves the clickable area.

Usually the first-level menu items are links to individual pages whether they have a submenu or not. The submenu should then be duplicated as a secondary navigation on the linked web page to make sure that those pages are quickly reachable from there. Submenus are individual lists (`<ul>` or `<ol>`), nested in the parent’s list item (`<li>`).

Items containing a submenu should be marked in a way that is obvious. In the following example, the SpaceBears menu item has a submenu:

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="flyoutnav">
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
<nav role="navigation" aria-label="Main Navigation">
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

For mouse users, hiding the submenu until the mouse hovers over the first-level menu item is quite easy, but has the disadvantage that the menu immediately closes once the mouse leaves the list item (and the containing submenu).

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

By using JavaScript, it is possible to react to keyboard usage and abrupt mouse movements. To tackle the usage of a mouse, pretty simple JavaScript is used. When the mouse leaves the menu a timer is started which closes the menu after one second. If the mouse re-enters the submenu again, the timer is canceled.

### Improve mouse support

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="flyoutnavmousefixed">
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
  }
  #flyoutnavmousefixed a:hover,
    #flyoutnavmousefixed a:focus {
      background-color: #fff;
      color: #036;
      border: 1px solid #036;
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

To improve Keyboard support, the decision has to be made if the top-level menu item should serve as a toggle or be a link itself. Don’t just open the submenu as soon as the focus enters the parent menu item, as that would mean a keyboard user needs to step through all the submenu links to get to the next top-level item.

#### Toggle submenu using the top-level menu item

The activation of the top-level menu item changes won’t link to the page in its `href` attribute but instead show the sub menu. A script detects if the link is activated by using the <kbd>return ↵</kbd> key, shows the submenu items and stops the browser from following the link to the page. If the focus leaves the submenu (for example by using the tab key on the last submenu item), the submenu needs to close.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="flyoutnavkbfixed">
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
    el.querySelector('a').addEventListener("keydown",  function(event){
        if (event.keyCode == 13) {
          if (this.parentNode.className == "has-submenu") {
            this.parentNode.className = "has-submenu open";
          } else {
            this.parentNode.className = "has-submenu";
          }
          event.preventDefault();
        }
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

#### Toggle with a special “show submenu” button

### Improve screen reader support using WAI-ARIA

Currently, screen reader users are unable to tell if an item has a submenu or not and if it is opened. WAI-ARIA helps to convey this information by adding the following two attributes to the menu’s HTML:

* **`aria-haspopup="true"`** is used so screen readers are able to announce that the link has a submenu.
* **`aria-expanded`** is initially set to `false` but changed to `true` when the submenu opens which forces screen readers to announce that this menu item is now expanded.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="flyoutaria">
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
        clearTimeout(timer1);
    });
    el.addEventListener("mouseout", function(event){
        timer1 = setTimeout(function(event){
            document.querySelector("#flyoutaria .has-submenu.open").className = "has-submenu";
        }, 1000);
    });
    el.querySelector('a').addEventListener("click",  function(event){
        //if (event.keyCode == 13) {
          if (this.parentNode.className == "has-submenu") {
            this.parentNode.className = "has-submenu open";
            this.setAttribute('aria-expanded', "true");
          } else {
            this.parentNode.className = "has-submenu";
            this.setAttribute('aria-expanded', "false");
          }
          event.preventDefault();
          return false;
        //}
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
            document.querySelector("#flyoutaria .has-submenu.open [aria-expanded]").setAttribute('aria-expanded', "false");
          }
        }, 10);
      });
    });
});
</script>

<%= sample_end %>
{:/nomarkdown}


* Basic Concepts
* Hide hidden items from screen reader & keyboard users -> hiding
* Indicate drop down functionality
* Progressive enhancement
* Leave menu open for a few seconds for mouse user

---
title: "Fly-out Menus"
status: editors-draft
order: 4
wcag_techniques:
  - SCR26
  - H4
---

If the user should be able to access pages deep in the website’s structure, fly-out menus are frequently used to archive the desired effect. Such fly-out menus are often called dropdown menus.

As interactive components, fly-out menus need to be developed with accessibility in mind to make sure that they are operable using the keyboard as well. Hiding menu items not displayed from keyboards and assistive technologies makes sure that the menu can be easily navigated. For people with reduced dexterity it is also important that submenus don’t snap back immediately when the mouse leaves the clickable area.

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

By using JavaScript, it is possible to react to keyboard usage and abrupt mouse movements. As soon as the mouse leaves the menu a timer is started which closes the menu after one second. If the mouse re-enters the submenu again, the timer is canceled.

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

To improve Keyboard support, the decision has to be made if the top-level menu item should serve as a toggle for the menu for all users or be a link itself. Don’t open the submenu as soon as the focus enters the top-level menu item, as that would mean a keyboard user needs to step through all the submenu links to get to the next top-level item.

#### Toggle submenu using the top-level menu item

The activation of the top-level menu item won’t link to the page in its `href` attribute but instead show the sub menu. A script stops the browser from following the link to the page. If the focus leaves the submenu (for example by using the tab key on the last submenu item), the submenu needs to close.

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

The following code iterates through all menu items and adds click event to the first (top-level) link in each menu item. The click event fires regardless of input method as soon as the link gets activated. If the submenu is closed when the link is activated, the script opens the submenu, and vice versa.

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
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

If the top-level menu item should stay a link to a page, adding a separate button that toggles the submenu is the most reliable way to address the issue.

{::nomarkdown}
<%= sample_start('show-overflow') %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="flyoutnavkbbtn">
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

In the following code, a button is attached to every menu item link with a submenu. The click event listener is applied to this button and toggles the menu. The invisible button text is changed from show to hide submenu according to the state of the submenu.

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~js
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
            document.querySelector("#flyoutaria .has-submenu.open [aria-expanded]").setAttribute('aria-expanded', "false");
          }
        }, 10);
      });
    });
});
</script>

<%= sample_end %>
{:/nomarkdown}

## Web application menus

There are some WAI-ARIA roles that are helping assistive technology to interpret menus like the ones found in desktop software. When using the menu WAI-ARIA attributes, the keyboard interaction should be similar to desktop software as well: the tab key is used to iterate through the top-level items only, the up and down arrows are used to navigate the sub menus. This keyboard behavior doesn’t come with the WAI-ARIA attributes, but needs to be added using scripting.

In addition to the `aria-expanded` and `aria-haspopup` attributes, the following roles are used in the example:

* **`aria-menubar`:** Represents a usually horizontal menu bar.
* **`aria-menu`:** Represents a set of links or commands in a menu bar, it is used for the fly-out menus.
* **`aria-menuitem`:** Represents an individual menu item.


{::nomarkdown}
<%= sample_start('show-overflow2') %>

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

The markup has no links, it is a bare nested list with some WAI-ARIA roles. As we will add keyboard and mouse interaction on our own, this is enough.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
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
    …
  </ul>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

First, we collect all top-level menu items in a variable (`appsMenuItems`) as well as all submenu items (`subMenuItems`). An object is defined with the key codes of the keys that need to be handled. This makes the code much more readable. Two variables keep track of the focus in top-level items (`currentIndex`) and in submenus (`subIndex`).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~js
var appsMenuItems = document.querySelectorAll('#appmenu > li');
var subMenuItems = document.querySelectorAll('#appmenu > li li');
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

To make the menu work for keyboard users, a `tabindex` attribute with the value `-1` is added to the menu items. This enables scripts to set the focus on the element. The first menu item (“File” in this example) is assigned a `tabindex` value of `0` which adds it to the tab order and lets the user access the menu. The `currentIndex` variable is initialized as soon as this first item gets focus.

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

All top-level menu items close open submenus when they receive focus and reset the `subIndex` variable. When individual items are clicked, the visibility of the submenu is toggled by changing the `aria-expanded` value. If a key is pressed, the appropriate action is carried out.

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
      <td rowspan="2">Select the next top-level menu item</td>
    </tr>
    <tr>
      <th scope="row"><kbd>right &rarr;</kbd></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row"><kbd>shift ⇧</kbd> + <kbd>tab ⇥</kbd></th>
      <td rowspan="2">Select the previous top-level menu item</td>
    </tr>
    <tr>
      <th scope="row"><kbd>left &larr;</kbd></th>
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
  /* code above */

  el.addEventListener("focus", function() {
    subIndex = 0;
    Array.prototype.forEach.call(appsMenuItems, function(el, i){
      el.setAttribute('aria-expanded', "false");
    });
  });

  el.addEventListener("click",  function(event){
    if (this.getAttribute('aria-expanded') == 'false'
        || this.getAttribute('aria-expanded') ==  null) {
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
      case keys.space:
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
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

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
      <td rowspan="2">Close the submenu, select the next top-level menu item</td>
    </tr>
    <tr>
      <th scope="row"><kbd>right &rarr;</kbd></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row"><kbd>shift ⇧</kbd> + <kbd>tab ⇥</kbd></th>
      <td rowspan="2">Close the submenu, select the previous top-level menu item</td>
    </tr>
    <tr>
      <th scope="row"><kbd>left &larr;</kbd></th>
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
      <td>Select next submenu item</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row"><kbd>up &uarr;</kbd></th>
      <td>Select previous submenu item</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row"><kbd>esc</kbd></th>
      <td>Close the submenu, select the current top-level menu item</td>
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
        case keys.space:
        case keys.enter:
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

[See the complete example code.](/navigation/examples/appmenu.html)

---
title: "&bull; Fly-out Menus"
status: editors-draft
order: 4
---

If the user should be able to access pages deeper in the web site’s structure, web designers and developers often use fly-out menus to archive this. Those menus provide more links to the user on any given page. Such fly-out menus are often called dropdown menus.

As interactive components, fly-out menus need to be developed with accessibility in mind to make sure that they are operable using the keyboard as well. Additionally, users of screen reader and other assistive technology are only able to use the menu efficiently if links not displayed are not reachable by the keyboard. For people with shaky hands it is also important that the menu doesn’t snap back immediately when the mouse leaves the clickable area.

Usually the first-level menu items are links to individual pages whether they have a sub menu or not. The sub menu should then be duplicated as a secondary navigation on the linked web page to make sure that those pages are quickly reachable from there. Sub menus are individual lists (`<ul>` or `<ol>`), nested in the parent’s list item (`<li>`).

Items containing a sub menu should be marked in a way that is obvious. In the following example, the SpaceBears menu item has a sub menu:

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
    content: url(/img/ex-dropdown-inactive.png);
  }
  .has-submenu:hover > a:hover:after,
  .has-submenu > a:focus:after {
    content: url(/img/ex-dropdown-active.png);
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

For mouse users, hiding the sub menu until the mouse hovers over the first-level menu item is quite easy, but has the disadvantage that the menu immediately closes once the mouse leaves the list item (and the containing sub-menu).

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

By using JavaScript, it is possible to react to keyboard usage and abrupt mouse movements. To tackle the usage of a mouse, pretty simple JavaScript is used. When the mouse leaves the menu a timer is started which closes the menu after one second. If the mouse re-enters the sub menu again, the timer is canceled.

## Improve mouse use

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

## Improve keyboard use

To improve Keyboard support, the decision has to be made if the top-level menu item should serve as a toggle or be a link itself. It is not advised to just open the sub menu as soon as the focus enters the parent menu item as that would mean a keyboard user needs to step through all the sub menu linkts to get to the next top-level item.

If the top-level menu item itself is used as a toggle, the user should be informed that there is a menu





* Basic Concepts
* Hide hidden items from screen reader & keyboard users -> hiding
* Indicate drop down functionality
* Progressive enhancement
* Leave menu open for a few seconds for mouse user

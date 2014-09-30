---
title: Navigation Menu Styling
nav_title: Styling
status: editors-draft
order: 3
wcag_success_criteria:
  - 1.4.1
wcag_techniques:
  - G14
  - G128
  - G182
  - G183
---

There are no definitive rules on how a navigation should look like, but a few design patterns have emerged on how and where main navigations appear on the page and how they are styled.

While in-text links usually need an underline so that people with low vision or color blindness can distinguish them from the surrounding text, this is not needed for links in navigations _if the navigation menu can be clearly identified_. If icons or images are used in links, an appropriate alternative text should be provided. See [Images Tutorial](/images/functional.html) for further advice.

## Horizontal menu

If a navigation has so few items that they can fit in one row on the screen, a horizontal menu bar may be used to display the links. Such menu bars are usually positioned on the top of the page. While this is a compact way to display a navigation, horizontal space can be limited if users use small-screen devices or increase the font size.

{::nomarkdown}
<%= sample_start %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="samplenav">
    <ul>
        <li><a href="#samplenav">Home</a></li>
        <li><a href="#samplenav">Shop</a></li>
        <li><a href="#samplenav">SpaceBears</a></li>
        <li><a href="#samplenav">MarsCars</a></li>
        <li><a href="#samplenav">Contact</a></li>
    </ul>
</nav>

<style>
  #samplenav {
      display:table;
      width:100%;
  }
  #samplenav ul {
      margin: 0;
      padding: 0;
      display: table-row;
      background-color: #036;
      color: #fff;
  }
  #samplenav li {
      display:table-cell;
      width: 20%;
      text-align: center;
  }
  #samplenav a {
      display: block;
      padding: .25em;
      border-bottom: .25em solid #E8E8E8;
      color: #fff;
      text-decoration: none;
  }
  #samplenav a:hover,
  #samplenav a:focus {
    color: #036;
    background-color: #fff;
    text-decoration: underline;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

## Vertical Menu

If there are many items in the navigation menu, a vertical navigation can be used, as all items can be easily reached by scrolling the page. If vertical menus are used, the designer should be aware that people might increase the font size and that individual menu items might be wider than originally intended in the design.

{::nomarkdown}
<%= sample_start %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="verticalnav">
    <ul>
        <li><a href="#samplenav">Home</a></li>
        <li><a href="#samplenav">Shop</a></li>
        <li><a href="#samplenav">SpaceBears</a></li>
        <li><a href="#samplenav">MarsCars</a></li>
        <li><a href="#samplenav">Contact</a></li>
    </ul>
</nav>

<style>
  #verticalnav {
      display:table;
  }
  #verticalnav ul {
      margin: 0;
      padding: 0;
      background-color: #036;
      color: #fff;
  }
  #verticalnav li {
      display:table-row;
      width: 20%;
      text-align: left;
  }
  #verticalnav a {
      display: block;
      padding: .25em .5em;
      color: #fff;
      border-bottom: 1px solid;
      text-decoration: none;
  }
  #verticalnav a:hover,
  #verticalnav a:focus {
    color: #036;
    background-color: #fff;
    text-decoration: underline;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

## Indicating hover and focus

When the user focuses a menu item or hovers over one using the mouse pointer, the individual menu item should change so users know where the focus is or if they are hovering the right menu item. In the examples in this tutorial, the menu item is inverted and the words are underlined.

## Indicating the current page

The current page should be marked to give users a sense of where they are in the site’s structure. This needs to be done in a way that does not rely on color alone. For example in these tutorials an inverted box is used as well as a small arrow to show the entry of the current page. In most cases, the current page item should not be linked to the current page.

In the following example, the active menu item is not only marked using different colors but also by adding a bottom border.

{::nomarkdown}
<%= sample_start %>

<nav role="navigation" aria-label="Main Navigation" aria-presentation="true" id="currentnav">
    <ul>
        <li><a href="#currentnav">Home</a></li>
        <li><a href="#currentnav">Shop</a></li>
        <li><span class="current"><span class="visuallyhidden">Current Page: </span>SpaceBears</span></li>
        <li><a href="#currentnav">MarsCars</a></li>
        <li><a href="#currentnav">Contact</a></li>
    </ul>
</nav>

<style>
  #currentnav {
      display:table;
      width:100%;
  }
  #currentnav ul {
      margin: 0;
      padding: 0;
      display: table-row;
      background-color: #036;
      color: #fff;
  }
  #currentnav li {
      display:table-cell;
      width: 20%;
      text-align: center;
  }
  #currentnav a,
  #currentnav .current {
      display: block;
      padding: .25em;
      border-bottom: .25em solid #E8E8E8;
  }
  #currentnav a {
      color: #fff;
      text-decoration: none;
  }
  #currentnav .current {
      background-color: #bbb;
      color: #000;
      border-color: #444;
  }
  #currentnav a:hover,
  #currentnav a:focus {
    color: #036;
    background-color: #fff;
    text-decoration: underline;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<li>
  <span class="current">
    <span class="visuallyhidden">Current Page: </span>
    SpaceBears
  </span>
</li>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
nav .current {
  display: block;
  padding: .25em;
  background-color: #bbb;
  color: #000;
  border-bottom: .25em solid #444;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

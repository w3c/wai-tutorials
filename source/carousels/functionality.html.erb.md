---
title: Functionality
status: editors-draft
order: 4
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.4.7
  - 4.1.2
---

Provide functionality to display the carousel items one at a time, and to announce the changes that occur in display.

## Add previous and next buttons

Use `<button>` elements to allow users to switch back and forth between items. Such elements provide semantic meaning to support assistive technologies and consistent keyboard use out of the box. They can be individually styled as needed.

Generate the buttons and add them to the carousel with JavaScript, to avoid having useless buttons in the HTML code when JavaScript is disabled:

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
var ctrls = document.createElement('ul');

ctrls.className = 'controls';
ctrls.innerHTML = '<li>' +
    '<button type="button" class="btn-prev">' +
      '<img src="img/chevron-left.png" alt="Previous Item">' +
    '</button>' +
  '</li>' +
  '<li>' +
    '<button type="button" class="btn-next">' +
      '<img src="img/chevron-right.png" alt="Next Item">' +
    '</button>' +
  '</li>';

ctrls.querySelector('.prev').addEventListener('click', function(){
  prevSlide();
});

ctrls.querySelector('.next').addEventListener('click', function(){
  nextSlide();
});

carousel.appendChild(ctrls);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Visually the buttons appear as arrows overlaying the individual items.

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.btn-prev,
.btn-next {
  position:absolute;
  z-index: 700;
  top: 50%;
  margin-top: -2.5em;
  border:0;
  background: rgba(255,255,255,.6);
  line-height: 1;
  padding:10px 5px;
  transition: padding .4s ease-out;
}

.btn-next:hover, .btn-next:focus,
.btn-prev:hover, .btn-prev:focus {
  padding-left: 15px;
  padding-right:15px;
}

.btn-prev {
  left:0;
  border-radius: 0 .25em .25em 0;
}

.btn-next {
  right:0;
  border-radius: .25em 0 0 .25em;
}
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Announce the current item

When the current item changes, a WAI-ARIA live region informs screen reader users which item is currently visible. Note that the current item does not automatically receive keyboard focus, to allow users to skip over and leave the carousel.

{::nomarkdown}
<%= code_start('', 'Extend event listeners') %>
{:/nomarkdown}

~~~js
ctrls.querySelector('.prev').addEventListener('click', function(){
  announceSlide = true;
  prevSlide();
});

ctrls.querySelector('.next').addEventListener('click', function(){
  announceSlide = true;
  nextSlide();
});

…

function setSlides(new_current, focus, transition) {
  …

  slides[index].removeAttribute('aria-live');

  if (announceSlide) {
    slides[new_current].setAttribute('aria-live', 'polite');
    announceSlide = false;
  }
  …
}


~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Indicate items and provide access
{:.newex}

Display a list of buttons that indicate the available carousel items and highlight the currently displayed items. This allows users to get an overview on the contents of the carousels, where they are, and navigate directly to any carousel item.

In the example below, the list with buttons is added to the carousel using JavaScript and then styled: The buttons are numbered matching the corresponding carousel items. The button for the active carousel item is highlighted both visually and by using visually hidden text (for screen readers).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<ul class="slidenav">
  <li>
    <button class="current" data-slide="0">
      <span class="visuallyhidden">News</span> 1
      <span class="visuallyhidden">(Current Slide)</span>
    </button>
  </li>
  <li>
    <button data-slide="1">
      <span class="visuallyhidden">News</span> 2
    </button>
  </li>
  <li>
    <button data-slide="2">
      <span class="visuallyhidden">News</span> 3
    </button>
  </li>
</ul>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.slidenav button {
  border: 2px solid #036;
  background-color: #036;
  line-height: 1em;
  height: 2em;
  width: 2em;
  font-weight: bold;
  color: #fff;
}

.slidenav button.current {
  border-radius: .5em;
  background-color: #fff;
  color: #333;
}

.slidenav button:hover,
.slidenav button:focus {
  border: 2px dashed #fff;
}

.slidenav button.current:hover,
.slidenav button.current:focus {
  border: 2px dashed #036;
}
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>

<style>
.slidenav li {
  display: inline-block;
}
.slidenav button {
  border: 2px solid #036;
  background-color: #036;
  line-height: 1em;
  height: 2em;
  width: 2em;
  font-weight: bold;
  color: #fff;
}

.slidenav button.current {
  border-radius: .5em;
  background-color: #fff;
  color: #333;
}

.slidenav button:hover,
.slidenav button:focus {
  border: 2px dashed #fff;
}

.slidenav button.current:hover,
.slidenav button.current:focus {
  border: 2px dashed #036;
}
</style>

<ul class="slidenav as-sample">
  <li>
    <button class="current" data-slide="0" type="button">
      <span class="visuallyhidden">News</span> 1
      <span class="visuallyhidden">(Current Slide)</span>
    </button>
  </li>
  <li>
    <button data-slide="1" type="button">
      <span class="visuallyhidden">News</span> 2
    </button>
  </li>
  <li>
    <button data-slide="2" type="button">
      <span class="visuallyhidden">News</span> 3
    </button>
  </li>
</ul>

<style>
  .slidenav.as-sample {
    position: static;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

### Focus the selected carousel item

When users select items through the carousel navigation buttons, the items should receive focus immediately. This makes interaction easier for keyboard and assistive technology users.

By default, `<li>` elements cannot receive focus. Setting the `tabindex` attribute of the element to `-1` allows it to receive focus through JavaScript.

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
function setSlides(new_current, setFocus) {
  setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;

  new_current = parseFloat(new_current);

  var length = slides.length;

  slide[index].className = 'slide';
  slides[new_current].className = 'current slide';

  buttons[index].className = "";
  buttons[new_current].className = "current";

  if (setFocus) {
    // Only if the slide was directly
    // picked from the list of slides
    slides[new_current].setAttribute('tabindex', '-1');
    slides[new_current].focus();
  }

  index = new_current;
}

slidenav.addEventListener('click', function(event) {
  if (event.target.localName == 'button') {
    setSlides(event.target.getAttribute('data-slide'), true);
  }
}, true);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Note that the focus is not set to the item when the _previous and next buttons_ are used, to allow users to continue scrolling through items.

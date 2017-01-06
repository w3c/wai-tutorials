---
title: Functionality
status: editors-draft
order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.4.7
  - 4.1.2
---

Provide functionality to switch the displayed carousel items and inform users about changes.

## Add previous and next buttons

Provide buttons to allow users to switch back and forth between items. Use `<button>` elements provide semantic meaning, support by assistive technologies, and consistent keyboard use out of the box. Create and add the buttons using JavaScript, because they are only functional when JavaScript is loaded anyway. Style them as needed.

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

### Announce the current item

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

The following sentence needs a link to a live region description or a short description in the margins. Probably also for WAI-ARIA.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Use WAI-ARIA live region to inform screen reader users when items change, and to indicate the currently active item. In this example the level 'polite' is used to not interrupt screen reader users while they are reading other parts of the web page.

Do not automatically move keyboard focus to the items in focus, to not draw away the user from other parts of the web page each time the items change. Also do not move keyboard focus when the previous and next buttons are used, to allow users to browse back and forth over the slides.

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

I feel that the following code example needs a bit more context.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('') %>
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

Display a list with buttons for every item and highlight the current item. This allows users to get an overview of the carousel content, where they are in the sequence, and navigate directly to any item.

The list with buttons, in the example below, is added using JavaScript, with the number on the button that corresponds to the slide. The buttons are numbered matching the corresponding carousel items. The button for the active carousel item is highlighted both [visually](styling.html#change-shape-to-indicate-status) and by using visually hidden text (for screen readers).

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

When users select an item through those navigation buttons, the focus should be set on the selected item. In this case the focus needs to be set to the `<li>` element that has the class `current` set, after the change or transition. This makes interaction easier for keyboard and assistive technology users.

By default, `<li>` elements cannot receive focus. By setting its `tabindex` attribute to `-1` the element is enabled to receive focus through JavaScript.

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

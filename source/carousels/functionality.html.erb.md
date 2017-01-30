---
title: Functionality
status: draft
order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 4.1.2
---

Provide functionality to select carousel items and to inform users about change of carousel items.

## Add previous and next buttons

Provide buttons to allow users to switch back and forth between items. Use `<button>` elements to provide semantic meaning, support for assistive technologies, and consistent keyboard behavior. Create and add the buttons using JavaScript, as they only work when JavaScript is available anyway.

{::nomarkdown}
<%= demo %>
{:/}

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

ctrls.querySelector('.btn-prev').addEventListener('click', function(){
  prevSlide(true);
});

ctrls.querySelector('.btn-next').addEventListener('click', function(){
  nextSlide(true);
});

carousel.appendChild(ctrls);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= demo :middle %>
{:/}

A [working demo example](working-example.html) for this code is available.

{::nomarkdown}
<%= demo :end %>
{:/}

### Announce the current item

{::nomarkdown}
<%= ref :start %>
{:/}

Use a [WAI-ARIA live region](https://www.w3.org/TR/wai-aria-1.1/#live_region_roles) to inform screen reader users what item is currently shown. In this example a visually hidden, “polite” live region is used and added to the carousel when the carousel is loaded. Then, when clicking the previous or next buttons, the text “Item x of y” (with <var>x</var> for current item number and <var>y</var> for the number of items) is set to this live region. Capable screen readers will announce this text.

Allow the user to maintain control of the keyboard focus. When the carousel advances automatically, users should not be drawn away from their current place in the page. Also, do not move keyboard focus when the previous or next buttons are used; moving the focus makes it harder for users to browse back and forth between the slides.

{::nomarkdown}
<%= ref :middle %>
{:/}

Find more information about WAI-ARIA in the [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria), the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) and the [Specification](https://www.w3.org/TR/wai-aria-1.1/).

{::nomarkdown}
<%= ref :end %>
{:/}

{::nomarkdown}
<%= code_start('', 'Add a live region to the carousel') %>
{:/nomarkdown}

~~~js
var liveregion = document.createElement('div');
liveregion.setAttribute('aria-live', 'polite');
liveregion.setAttribute('aria-atomic', 'true');
liveregion.setAttribute('class', 'liveregion visuallyhidden');
carousel.appendChild(liveregion);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Change text in the liveregion to have that text announced') %>
{:/nomarkdown}

~~~js
if (announceItem) {
  carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' + slides.length;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Add navigation buttons
{:.newex}

{::nomarkdown}
<%= ref :start %>
{:/}

Display buttons for each item in the carousel and highlight the current item. This allows users to get an overview of the carousel content, where they are in the sequence, and will enable them to navigate directly to any item.

The list with buttons in the example below, is added using JavaScript, with a number on the button that corresponds to the carousel item. The buttons are numbered matching the corresponding carousel items. The button for the active carousel item is highlighted both visually, and by using text that is visually hidden (for screen readers).

{::nomarkdown}
<%= ref :middle %>
{:/}

See the [carousel styling](styling.html) page for more information on how to highlight the active carousel item in an accessible way.

{::nomarkdown}
<%= ref :end %>
{:/}

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

When users select an item with those navigation buttons, the focus should be set on the selected item. In this case the focus needs to be set to the `<li>` element that has the class `current` set, after the change or transition. This makes interaction easier for keyboard and assistive technology users.

By default, `<li>` elements cannot receive focus. By setting its `tabindex` attribute to `-1` the element is enabled to receive focus through JavaScript.

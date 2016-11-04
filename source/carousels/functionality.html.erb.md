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

Provide functionality to display the carousel items one at a time, and to announce the changes that occur in display.

## Position items
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Proposal to move this section to a dedicated “carousel styling” page that can then be referenced from several parts of the other pages.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

If the JavaScript is enabled, a class `active` is added to the carousel region so we can apply specific CSS when JavaScript is active. The items are positioned inside the carousel using `position: absolute`. A class `current` is added to the current item, CSS positions it frontmost, using `z-index`.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~css
.active .slide {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
}

.slide.current {
  display: block;
  z-index: 500;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The outcome looks like this:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
<div id="c1" class="carousel">
    <ul>
        <li class="slide" style="background-image: url('../../img/ex-teddy1.jpg');">
            <h4>Space Teddy production reaches all-time high</h4>
            <p>
                Teddies in Space Inc. has released outstanding numbers for the last solar year.
                <a href="…">Full Annual Report</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('../../img/ex-teddy2.jpg');">
            <h4>New Space Teddy Announced!</h4>
            <p>
                Space Teddy 6 wears an aluminum space suit. Sapphire glass eyes are first used universe-wide.
                <a href="…">Everything about the new model</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('../../img/ex-teddy3.jpg');">
            <h4>Adventures of the Space Teddy</h4>
            <p>
                Using modern HTML5 technologies, the latest installment of our game performs great on your computer, tablet, or mobile.
                <a href="…">Play the Game here!</a>
            </p>
        </li>
    </ul>
</div>

<style>
  .carousel, .slide {
    width: 480px;
    padding:0;
    margin: 0;
  }
  .carousel {
    position: relative;
  }
  .carousel ul {
    margin:0;
    padding: 0;
  }
  .slide {
    /*position: absolute;*/
    height: 360px;
    background-size: cover;
    position: relative;
    margin-bottom:1em;
    border:1px solid #333;
  }
  .slide h4 {
    display:inline-block;
    float:righ;
    font-size: 1.25em;
    margin:0;
    padding: .25em;
    text-align: right;
    background-color: rgba(255,255,255,.8);
    float:right;
    border-radius: 0 0 0 .5em;
  }
  .slide p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin:0;
    clear:both;
    padding: 5px;
    background-color: rgba(255,255,255,.8);
  }
  .slide a {
    display:block;
    text-align: right;
  }
</style>

<style>
.carousel.active {
  height: 360px;
  overflow: hidden;
  border: 1px solid #333;
  position:relative;
}

.active .slide {
  border: none;
  display: none;
  position:absolute;
  top:0;
  left:0;
  z-index:200;
}

.slide.current {
  display:block;
  z-index: 500;
}
</style>

<script>
  var carousel = document.getElementById('c1');
  carousel.querySelectorAll('.slide')[0].className = 'current slide';
  carousel.className = 'active carousel';
</script>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

## Previous and next buttons

Use `<button>` elements to allow users to switch back and forth between items. Such elements provide semantic meaning to support assistive technologies and consistent keyboard use out of the box. They can be individually styled as needed.

Generate the buttons with JavaScript to avoid having useless buttons in the HTML code when JavaScript is unavailable, and add them to the carousel:

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
var ctrls = document.createElement('ul');

ctrls.className = 'controls';
ctrls.innerHTML = '<li>' +
    '<button type="button" class="btn-prev">' +
      '<img src="img/chevron-left.png" alt="Previous Slide">' +
    '</button>' +
  '</li>' +
  '<li>' +
    '<button type="button" class="btn-next">' +
      '<img src="img/chevron-right.png" alt="Next Slide">' +
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

## Announce the current slide

When the current item changes, a WAI-ARIA live region informs screen reader users which slide is currently visible. Note that the current slide does not automatically receive keyboard focus, to allow users to skip over and leave the carousel.

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

Combined, the carousel looks and functions like this:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
<div id="c2" class="carousel">
    <ul>
        <li class="slide" style="background-image: url('../../img/ex-teddy1.jpg');">
            <h4>Space Teddy production reaches all-time high</h4>
            <p>
                Teddies in Space Inc. has released outstanding numbers for the last solar year.
                <a href="…">Full Annual Report</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('../../img/ex-teddy2.jpg');">
            <h4>New Space Teddy Announced!</h4>
            <p>
                Space Teddy 6 wears an aluminum space suit. Sapphire glass eyes are first used universe-wide.
                <a href="…">Everything about the new model</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('../../img/ex-teddy3.jpg');">
            <h4>Adventures of the Space Teddy</h4>
            <p>
                Using modern HTML5 technologies, the latest installment of our game performs great on your computer, tablet, or mobile.
                <a href="…">Play the Game here!</a>
            </p>
        </li>
    </ul>
</div>

<style>
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

.btn-next:hover,
.btn-next:focus,
.btn-prev:hover,
.btn-prev:focus {
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
</style>

<script>
  function setSlides(new_current, setFocus) {
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    slides[index].removeAttribute('aria-live');

    new_current = parseFloat(new_current);

    var length = slides.length;
    var new_next = new_current+1;
    var new_prev = new_current-1;

    if(new_next === length) {
      new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    for (var i = slides.length - 1; i >= 0; i--) {
      slides[i].className = "slide";
    };

    slides[new_next].className = 'next slide';
    slides[new_prev].className = 'prev slide';
    slides[new_current].className = 'current slide';

    if (announceSlide) {
      slides[new_current].setAttribute('aria-live', 'polite');
      announceSlide = false;
    }

    if (setFocus) {
      slides[new_current].setAttribute('tabindex', '-1');
      slides[new_current].focus();
    }

    index = new_current;
  }

  function nextSlide() {
    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    setSlides(new_current);

  }

  function prevSlide() {
    var length = slides.length,
    new_current = index - 1;

    if(new_current < 0) {
      new_current = length-1;
    }

    setSlides(new_current);

  }

  var carousel = document.getElementById('c2');
  var slides = carousel.querySelectorAll('.slide');
  var index;

  carousel.className = 'active carousel';

  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }

  var parseHTML = function(str) {
    var el =
    el.innerHTML = str;
    return el;
  };

  var ctrls = document.createElement('ul');

  ctrls.className = 'controls';
  ctrls.innerHTML = '<li>' +
      '<button type="button" class="btn-prev"><img src="/img/chevron-left.png" alt="Previous Slide"></button>' +
    '</li>' +
    '<li>' +
      '<button type="button" class="btn-next"><img src="/img/chevron-right.png" alt="Next Slide"></button>' +
    '</li>';

    ctrls.querySelector('.btn-prev').addEventListener('click', function(){
      announceSlide = true;
      prevSlide();
    });

    ctrls.querySelector('.btn-next').addEventListener('click', function(){
      announceSlide = true;
      nextSlide();
    });

  carousel.appendChild(ctrls);

  index = 0;
  setSlides(index);
</script>

<style>
.carousel.with-slidenav {
  padding-bottom: 2em;
  background-color: #fff;
}
.carousel.with-slidenav .slide {
  border-bottom: 1px solid #333;
}

.slidenav {
  position: absolute;
  bottom:1em;
  left: 0;
  right: 0;
  text-align: center;
}

.slidenav li {
  display:inline-block;
  margin: 0 .5em;
}

.slidenav button {
  border: 2px solid #036;
  background-color: #036;
  line-height: 1em;
  height: 1.5em;
  width:auto;
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

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

## Provide overview on items
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

To allow users to skip multiple items using the previous and next buttons, this approach is not used there.

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

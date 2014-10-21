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

Provide functionality to display the carousel items one at a time, and to allow users to browse through them. This functionality is added using scripting, based structure of the elements involved.

## Displaying carousel items

Carousel items that are visually hidden should also be hidden from assistive technology, to avoid a mismatch between what is visually on the screen and what the user is interacting with. All carousel items that are not displayed visually are hidden by using the CSS `display: none` declaration.

### Scripted styling
{:.ex}

In the example below, JavaScript is used to add the class name `.active` to the carousel container. The styling for this class positions all carousel items all on top of each other and hides them. The class name `.current` is added to the one carousel item that is to be displayed, which ensure that it is on top of all other hidden carousel items.

{::nomarkdown}
<%= code_start('','CSS') %>
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

<h3 role="presentational">Featured Articles:</h3>
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
    padding: 1em 5em 1em 3em;
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

## Switching carousel items

Scripting is further used to add buttons that allow users to switch back and forth between carousel items. While these buttons often have various styles visually, it is useful to code them using `<button>` elements. This gives them semantic meaning and also makes them more compatible with assistive technology and keyboard use. If the carousel uses `<a>` elements instead, a `href` attribute needs to be present to enable keyboard access. Additionally `role="button"` should be applied to the link so assistive technology users know that they expect an interaction on the page rather than a link to another page.

### Previous and next buttons

In the example below, JavaScript is used to generate code for the buttons and insert them onto the carousel. These particular buttons are visually displayed as arrows that overlay the carousel items. The images use the alternative text that reads "Previous Slide" and "Next Slide".

A semi-transparent white background with black arrows was selected to ensure sufficient color contrast between the text and any background images in the carousel items. This is especially important for possibly noisy background images. Also, the buttons increase in size when users hover over them with the mouse to provide more click area for people with reduced dexterity. They also increase in size when they are focused by keyboard to better highlight to keyboard users where the current focus is.

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

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.btn-prev,
.btn-next {
  position: absolute;
  z-index: 700;
  top: 50%;
  margin-top: -2.5em;
  border:0;
  background: rgba(255,255,255,.6);
  line-height: 1;
  padding:2em .5em;
  transition: padding .4s ease-out;
}

.btn-next:hover, .btn-next:focus,
.btn-prev:hover, .btn-prev:focus {
  padding-left: 2em;
  padding-right: 2em;
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

Additionally, an WAI-ARIA live region should be used to inform screen reader users which slide is now visible. Note that the slide does not receive focus as a user might want to skip several slides without navigating to the controls after every slide change.

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

The outcome looks like this:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentational">Featured Articles:</h3>
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
    padding:2em .5em;
    transition: padding .4s ease-out;
  }

  .btn-next:hover,
  .btn-next:focus,
  .btn-prev:hover,
  .btn-prev:focus {
    padding-left: 2em;
    padding-right:2em;
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
  padding-bottom: 4em;
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
  height: 2em;
  width:2em;
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

## Indicating carousel items
{:.newex}

Indicating the total number of carousel items and which one of them is currently being displayed helps users to orient themselves and find any information they need. Ideally this is done by a set of styled buttons that each represent a carousel item in the sequence. Providing these slide representations as buttons that can be activated allows users to browse more freely within the carousel items. Providing these buttons within a list, adds meaning and semantics to the content, such as the number and order of the carousel items.

### Carousel item indicator
{:.ex}

In the following example, a list with buttons is added using JavaScript and then styled to look visually like a progress indicator. The buttons are numbered matching the corresponding carousel items. The button corresponding to the currently displayed carousel item is highlighted both visually and using visually hidden text. Also the button that currently has the keyboard or mouse focus is highlighted.

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
    position:static;
  }
</style>

<%= sample_end %>
{:/nomarkdown}

## Focusing carousel items
{:.newex}

When users select a carousel item directly through the buttons then the focus needs to be set to the corresponding carousel item. The focus should _not_ be set to the carousel item if the previous or next buttons are used, as the user may want to skip over several carousel items quickly and would use the position otherwise.

Carousel items will often be coded using elements that, by default, are not focusable, such as `<li>` or  `<article>` elements. Use the `tabindex` attribute with its value set to `-1`, to make such elements capable of receiving focus using JavaScript, then set the focus on them.

### Focus change
{:.ex}

The code snippet below shows the JavaScript code used in the demo for this tutorial. It illustrates how the `tabindex` attribute and the focus are set when a carousel item is selected, and how the carousel item indicator is updated accordingly.

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

## Putting it all together
{:.newex}

The sample below is a demo of the carousel that we've built by putting together the previous examples. It is a working example of a carousel where one carousel item at a time is displayed. It includes buttons for users to advance back and forth between the carousel items, and a carousel item indicator that allows users to view which carousel item they are currently viewing and to jump to other carousel items. Animating this carousel will be explained on the next page.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentational">Featured Articles:</h3>
<div id="c3" class="carousel">
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
    padding:2em .5em;
    transition: padding .4s ease-out;
  }

  .btn-next:hover,
  .btn-next:focus,
  .btn-prev:hover,
  .btn-prev:focus {
    padding-left: 2em;
    padding-right:2em;
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
var myCarousel = (function() {

  var carousel, slides, index, slidenav, settings;

  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }

  var parseHTML = function(str) {
    var el =
    el.innerHTML = str;
    return el;
  };

  function init(set) {
    settings = set;
    carousel = document.getElementById(settings.id);
    slides = carousel.querySelectorAll('.slide');

    carousel.className = 'active carousel';

    var ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML = '<li>' +
        '<button type="button" class="btn-prev"><%= image_tag 'chevron-left.png', :alt => "Previous Slide" %></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><%= image_tag 'chevron-right.png', :alt => "Next Slide" %>' +
      '</li>';

    ctrls.querySelector('.btn-prev').addEventListener('click', function(){
      prevSlide();
    });

    ctrls.querySelector('.btn-next').addEventListener('click', function(){
      nextSlide();
    });

    carousel.appendChild(ctrls);

    if (settings.slidenav) {
      slidenav = document.createElement('ul');

      slidenav.className = 'slidenav';

      forEachElement(slides, function(el, i){
        var li = document.createElement('li');
        var klass = (i===0) ? 'class="current" ' : '';
        var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Slide)</span>' : '';

        li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="visuallyhidden">News</span> ' + (i+1) + kurrent + '</button>';
        slidenav.appendChild(li);
      });

      slidenav.addEventListener('click', function(event) {
        if (event.target.localName == 'button') {
          setSlides(event.target.getAttribute('data-slide'), true);
        }
      }, true);

      carousel.className = 'active carousel with-slidenav';
      carousel.appendChild(slidenav);
    }

    index = 0;
    setSlides(index);
  }

  function setSlides(new_current, setFocus) {
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;

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

    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button');
      for (var i = buttons.length - 1; i >= 0; i--) {
        buttons[i].className = "";
      };
      buttons[new_current].className = "current";
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

  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides
  }
});

var c3 = new myCarousel;
c3.init({
  id: 'c3',
  slidenav: true
});

</script>

<style>
.carousel.with-slidenav {
  padding-bottom: 4em;
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
  height: 2em;
  width:2em;
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

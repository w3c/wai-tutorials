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

Carousels display multiple content items one at a time, allowing users to browse through all of them in turn.

## Position slides

If the JavaScript is enabled, a class `active` is added to the carousel region so we can apply specific CSS when JavaScript is active. The slides are positioned inside the carousel using `position: absolute`. A class `current` is added to the current slide, CSS positions it frontmost, using `z-index`.

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

## Add previous and next buttons

Add `<button>` elements that allow users to switch back and forth between items. They can be individually styled, provide semantic meaning and do also work with assistive technology and keyboard usage out of the box. 

In the example below, JavaScript is used to generate buttons and them to the carousel. Visually the buttons appear as arrows overlaying the individual items.

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

When the current item changes, a WAI-ARIA live region informs screen reader users which slide is currently visible. Note that the current slide does not receive keyboard focus in this case to allow users to skip several items at once.

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

## Items navigation
{:.newex}

Display a list of buttons that indicate which carousel item is currently displayed and als allows users to navigate directly to any carousel item.

In the example below, the list with buttons is added to the carousel using JavaScript and then styled: The buttons are numbered matching the corresponding carousel items. The button for the active carousel item is highlighted both visually and by using visually hidden text.

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

### Focus the current carousel item

Whe a user selects an item through the carousel navigation it should be receive focus immediately. This allows keyboard or assistive technology users to interact with the item immediately.

By default, `<li>` itself cannot receive focus by default. However if the `tabindex` attribute is set to `-1`, JavaScript is able to set the focus to the items.

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

## Putting it all together

The sample below is the complete working demo of the carousel. It includes buttons for users to advance back and forth between the carousel items, and a carousel item indicator that allows users to see which carousel item they are currently viewing and to jump to other carousel items.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
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
        '<button type="button" class="btn-prev"><img src="../../chevron-left.png" alt="Previous Slide"></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><img src="../../chevron-right.png" alt="Next Slide"></button>' +
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
  padding-bottom: 2em;
  background-color: #fff;
}
.carousel.with-slidenav .slide {
  border-bottom: 1px solid #333;
}

.slidenav {
  position: absolute;
  bottom:.25em;
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

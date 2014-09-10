---
title: Controls & Interaction
status: editors-draft
order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.4.7
  - 4.1.2
---

<<<<<<< HEAD
After the basic styling was applied to the content, the interaction comes in. In the first steps the slide show is prepared to hide all content but the first slide. Then “left” and “right” arrows are added to the carousel and enabled, so users can skip through the individual slides.

## Add Styling When Javascript Is Enabled

When JavaScript is enabled, the carousel wrapper is getting a fixed height. Individual slides are stacked on top of another, with the current slide on top of the others. Additionally, all slides but the current one are hidden by using `display: none` – a [hiding technique](/fundamentals/hiding.html) that hides the inactive slides visually as well as from assistive technologies.
=======
To allow basic navigating through the slides, the slide show needs to be prepared to hide all content but the first slide from all users, including people using assistive technologies. Then “left” and “right” arrows are added to the carousel, that display the previous and next slide, respectively.

## Add Styling when JavaScript is Enabled

If JavaScript is enabled a class (`.active`) is added that allows all slides to be stacked on top of another with the current slide top-most. Additionally, all slides but the current one are hidden by using `display: none` – a [hiding technique](/fundamentals/hiding.html) that hides visually and from assistive technologies.
>>>>>>> origin/dev

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~css
<<<<<<< HEAD
.carousel.active {
  height: 480px;
  overflow:hidden;
  border: 1px solid #333;
  position:relative;
}
=======
>>>>>>> origin/dev

.active .slide {
  border: none;
  display: none;
  position:absolute;
  top:0;
  left:0;
}

.slide.current {
  display:block;
  z-index: 500;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Additionally, we add a `active` class to the carousel wrapper and a `current` class to the first slide:

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~js
var carousel = document.getElementById('c1');
carousel.querySelectorAll('.slide')[0].className = 'current slide';
carousel.className = 'active carousel';
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
    width: 640px;
    padding:0;
    margin: 0;
    /* overflow: hidden; */
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
    height: 480px;
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
  height: 480px;
  overflow:hidden;
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

## Previous and Next Buttons

First, the previous and next buttons need to be added to the markup using JavaScript and styled according to their function. The HTML5 button element is used to make sure that the buttons are [keyboard accessible](/fundamentals/keyboard-access.html).

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
var ctrls = document.createElement('ul');

ctrls.className = 'controls';
ctrls.innerHTML = '<li>' +
    '<button type="button" class="btn-prev">' +
      '<img src="../../img/chevron-left.png" alt="Previous Slide">' +
    '</button>' +
  '</li>' +
  '<li>' +
    '<button type="button" class="btn-next">' +
      '<img src="../../img/chevron-right.png" alt="Next Slide">' +
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

The styling is very similar to the text of the slides. Contrast ratio requirements are valid here as well as on normal text. Both buttons get wider if they are hovered with the mouse or focused with the keyboard. This is also animated to keep the click target large for a longer time, which makes it easier for people with shaky hands to click them.

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~js
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

  .btn-next:hover, .btn-next:focus,
  .btn-prev:hover, .btn-prev:focus {
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
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

And this is how the outcome looks and works:

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
  function setSlides(new_current, setFocus = false) {

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
      prevSlide();
    });

    ctrls.querySelector('.btn-next').addEventListener('click', function(){
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

## List of Slides

Optionally, a list of slides can be used to provide the user a sense of how much information is in a slide and which the current slide is in the sequence of slides.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Numbers in squares (described below)](ex-slider-controls.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

Visually, the above controls show three numbered square buttons. The current slide button (number 1) has rounded corners and is in the reverse color combination to the others, button 3 has a dashed border to show that it is the control currently in tab focus (or hovered by a mouse pointer). If number 3 was activated, slide 3 would be shown.

To convey the same quality of information to users who can’t see the screen, the controls need to be marked up as a list, so screen readers can then inform users of the number of items in the list. Also the current slide needs to be identified, for example by [visually hidden text](/fundamentals/hiding.html). Accurate labeling of the buttons will let the user know which slide is shown.

The script should be capable of identifying the current slide and rendering its identification within the text or text alternative for the current button.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Numbered buttons are important for speech recognition software users as they cannot know what command to give their software to navigate to the desired slide otherwise.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

The list is created through JavaScript and then added to the DOM of the carousel:

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
var slidenav = document.createElement('ul');

slidenav.className = 'slidenav';

forEachElement(slides, function(el, i){
  var li = document.createElement('li');
  var klass = (i===0) ? 'class="current" ' : '';
  var currentText = (i===0) ? ' <span class="visuallyhidden">(Current Slide)</span>' : '';

  li.innerHTML = '<button ' + klass + 'data-slide="' + i + '"><span class="visuallyhidden">News</span> ' + (i+1) + currentText + '</button>';
  slidenav.appendChild(li);
});

carousel.className = 'active carousel with-slidenav';
carousel.appendChild(slidenav);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'DOM representation of the JavaScript above') %>
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

As shown above, the styling of the list is very important for accessibility as well:

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.slidenav {
  position: absolute;
  bottom: 1em;
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

When a user activates one of the buttons in the list, the slide should come up visually. Additionally, a focus should be set to the slide. This helps non-visual users as screen readers then read the slide immediately.

To do that, it is required to set the `tabindex` attribute to `-1` as the slide `<li>` isn’t an element that can receive focus by default. The `data-slide` attribute is used to select the target slide.


{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
function setSlides(new_current, setFocus = false) {

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

  if(with_slidenav) {
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

slidenav.addEventListener('click', function(event) {
  if (event.target.localName == 'button') {
    setSlides(event.target.getAttribute('data-slide'), true);
  }
}, true);
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The final outcome then looks and works like this:

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
        '<button type="button" class="btn-prev"><img src="/img/chevron-left.png" alt="Previous Slide"></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><img src="/img/chevron-right.png" alt="Next Slide"></button>' +
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

  function setSlides(new_current, setFocus = false) {

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

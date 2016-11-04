---
title: Animations
status: approved-draft
order: 4
wcag_success_criteria:
  - 2.2.2
---

Provide users with control over the animations in your carousel. Pausing animation is essential for people who find the changes distracting and for people who need more time to read carousel items.

## Add Play/Stop button

Provide a button to allow users to stop and resume the animations. The example below illustrates how such a button can be marked-up. The button label and its function changes, depending on whether the animation is currently running or not.

{::nomarkdown}
<%= code_start('','While animation is running') %>
{:/nomarkdown}

~~~html
<button data-action="stop"><span class="visuallyhidden">Stop Animation </span>￭</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','While animation is stopped') %>
{:/nomarkdown}

~~~html
<button data-action="start"><span class="visuallyhidden">Start Animation </span>▶</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The script only replaces the value of the button and its attributes. Replacing the button entirely would result in loss of keyboard focus.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Pause on hover and focus

Another useful approach is to pause the carousel animation when the carousel receives keyboard focus or is hovered over by mouse. Pausing the animation ensures that keyboard users do not lose focus. It is also useful for people who need more time to read the content, and to use links and controls inside the carousel items.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~js
carousel.addEventListener('mouseenter', suspendAnimation);
carousel.addEventListener('mouseleave', startAnimation);

carousel.addEventListener('focusin',
  function(event) {
    if (!hasClass(event.target, 'slide')) {
      suspendAnimation();
    }
  }
);
carousel.addEventListener('focusout',
  function(event) {
    if (!hasClass(event.target, 'slide')) {
      startAnimation();
    }
  }
);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The [`focusin`](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn) and [`focusout`](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout) events are defined in the [W3C Document Object Model (DOM) Level 3 Events Specification](http://www.w3.org/TR/DOM-Level-3-Events/) (Working Draft) and implemented in many browsers. Firefox needs [a short polyfill](examples/focusinoutpolyfill.js) at the time of publication of this tutorial.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Hiding in-transition elements from assistive technologies
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This section, or parts of it, might move to a “carousel styling” page in the future.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

During the transitions, both, the current and the next item are visible. This also means that two items are available to assistive technologies, with the current item disappearing in a relatively short time. In some cases this can be confusing to screen reader users.

In the following example the item that is being activated gets an `in-transition` class to show it but with the `aria-hidden` attribute set to `true`. This hides the item from assitive technologies. When the trasition completes, the `aria-hidden` attribute is removed.

{::nomarkdown}
<%= code_start('', 'JavaScript: In initialization') %>
{:/nomarkdown}

~~~js
slides[new_next].className = 'next slide'
  + ((transition == 'next') ? ' in-transition' : '');
slides[new_next].setAttribute('aria-hidden', 'true');

slides[new_prev].className = 'prev slide'
  + ((transition == 'prev') ? ' in-transition' : '');
slides[new_prev].setAttribute('aria-hidden', 'true');

slides[new_current].className = 'current slide';
slides[new_current].removeAttribute('aria-hidden');
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Putting it all together
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This section might move to a “carousel styling” page or to the [complete example](full-code.html) in the future.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

The sample below is a demo of the final carousel that is built by putting together all examples of this tutorial:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
<div id="c" class="carousel">
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

.active .slide {
  display: block !important;
  visibility: hidden;
  transition: left .6s ease-out;
}

.active .slide.current {
  visibility: visible;
  left: 0;
}

.active .slide.next {
  left: 100%;
}

.active .slide.prev {
  left: -100%;
}

.active .slide.next.in-transition,
.active .slide.prev.in-transition {
  visibility:visible;
}
</style>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

<style>
  .carousel, .slide {
    width: 480px;
    padding:0;
    margin: 0;
    overflow: hidden;
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

.carousel.active {
  height: 360px;
  /* overflow:hidden; */
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

var myCarousel = (function() {

  var carousel, slides, index, slidenav, settings, timer, setFocus, animationSuspended, announceSlide = false;

  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  function init(set) {
    settings = set;
    carousel = document.getElementById(settings.id);
    slides = carousel.querySelectorAll('.slide');

    carousel.className = 'active carousel';

    var ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML = '<li>' +
        '<button type="button" class="btn-prev"><%= image_tag 'chevron-left.png', :alt => "Previous Item" %></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><%= image_tag 'chevron-right.png', :alt => "Next Item" %>' +
      '</li>';

    ctrls.querySelector('.btn-prev')
      .addEventListener('click', function () {
        announceSlide = true;
        prevSlide();
      });
    ctrls.querySelector('.btn-next')
      .addEventListener('click', function () {
        announceSlide = true;
        nextSlide();
      });

    carousel.appendChild(ctrls);

    if (settings.slidenav || settings.animate) {
      slidenav = document.createElement('ul');

      slidenav.className = 'slidenav';

      if (settings.animate) {
        var li = document.createElement('li');

        if (settings.startAnimated) {
          li.innerHTML = '<button data-action="stop"><span class="visuallyhidden">Stop Animation </span>￭</button>';
        } else {
          li.innerHTML = '<button data-action="start"><span class="visuallyhidden">Start Animation </span>▶</button>';
        }

        slidenav.appendChild(li);
      }

      if (settings.slidenav) {
        forEachElement(slides, function(el, i){
          var li = document.createElement('li');
          var klass = (i===0) ? 'class="current" ' : '';
          var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Item)</span>' : '';

          li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="visuallyhidden">News</span> ' + (i+1) + kurrent + '</button>';
          slidenav.appendChild(li);
        });
      }

      slidenav.addEventListener('click', function(event) {
        var button = event.target;
        if (button.localName == 'button') {
          if (button.getAttribute('data-slide')) {
            stopAnimation();
            setSlides(button.getAttribute('data-slide'), true);
          } else if (button.getAttribute('data-action') == "stop") {
            stopAnimation();
          } else if (button.getAttribute('data-action') == "start") {
            startAnimation();
          }
        }
      }, true);

      carousel.className = 'active carousel with-slidenav';
      carousel.appendChild(slidenav);
    }

      slides[0].parentNode.addEventListener('transitionend', function (event) {
        var slide = event.target;
        removeClass(slide, 'in-transition');
        if (hasClass(slide, 'current'))  {
          slide.removeAttribute('aria-live');
          announceSlide = false;
          if(setFocus) {
            slide.setAttribute('tabindex', '-1');
            slide.focus();
            setFocus = false;
          }
        }
      });

      carousel.addEventListener('mouseenter', suspendAnimation);
      carousel.addEventListener('mouseleave', function(event) {
        if (animationSuspended) {
          startAnimation();
        }
      });

      carousel.addEventListener('focusin', function(event) {
        if (!hasClass(event.target, 'slide')) {
          suspendAnimation();
        }
      });
      carousel.addEventListener('focusout', function(event) {
        if (!hasClass(event.target, 'slide') && animationSuspended) {
          startAnimation();
        }
      });

    index = 0;
    setSlides(index);

     if (settings.startAnimated) {
      timer = setTimeout(nextSlide, 5000);
    }
  }

  function setSlides(new_current, setFocusHere, transition) {
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    transition = typeof transition !== 'undefined' ? transition : 'none';

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
    }

    slides[new_next].className = 'next slide' + ((transition == 'next') ? ' in-transition' : '');
    slides[new_next].setAttribute('aria-hidden', 'true');
    slides[new_prev].className = 'prev slide' + ((transition == 'prev') ? ' in-transition' : '');
    slides[new_prev].setAttribute('aria-hidden', 'true');

    slides[new_current].className = 'current slide';
    slides[new_current].removeAttribute('aria-hidden');
    if (announceSlide) {
      slides[new_current].setAttribute('aria-live', 'polite');
    }

    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = '';
        buttons[j].innerHTML = '<span class="visuallyhidden">News</span> ' + (j+1);
      }
      buttons[new_current].className = "current";
      buttons[new_current].innerHTML = '<span class="visuallyhidden">News</span> ' + (new_current+1) + ' <span class="visuallyhidden">(Current Item)</span>';
    }

    index = new_current;

  }

  function nextSlide() {

    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    setSlides(new_current, false, 'prev');

    if (settings.animate) {
      timer = setTimeout(nextSlide, 5000);
    }

  }

  function prevSlide() {
    var length = slides.length,
    new_current = index - 1;

    if(new_current < 0) {
      new_current = length-1;
    }

    setSlides(new_current, false, 'next');

  }

  function stopAnimation() {
    clearTimeout(timer);
    settings.animate = false;
    animationSuspended = false;
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
    _this.setAttribute('data-action', 'start');
  }

  function startAnimation() {
    settings.animate = true;
    animationSuspended = false;
    timer = setTimeout(nextSlide, 5000);
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
    _this.setAttribute('data-action', 'stop');
  }

  function suspendAnimation() {
    if(settings.animate) {
      clearTimeout(timer);
      settings.animate = false;
      animationSuspended = true;
    }
  }

  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides,
    stop:stopAnimation,
    start:startAnimation
  };
});

var c = new myCarousel();
c.init({
  id: 'c',
  slidenav: true,
  animate: true,
  startAnimated: true
});
</script>

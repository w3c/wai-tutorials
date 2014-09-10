---
title: Animations
status: editors-draft
order: 4
wcag_success_criteria:
  - 2.2.2
---

A sliding animation usually conveys that there is more content in the carousel than only the one piece of content that is shown when the page is opened.

Animations are challenging for accessibility as they affect people in different ways. A blind person for example may lose the focus if a slide disappears and people who aren’t able to read stationary text quickly might not be able to read the content of a slide. For others, moving content is a severe distraction, making it difficult for them to concentrate on other parts of the page.

To avoid problems with moving parts of the page, the user needs to have the ability to stop the animation. In the following example carousel, there is a pause button (next to the list of slides):

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentational">Featured Articles:</h3>
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

But there is more to it: to animate the slide in the way above, some more CSS needs to be added. Instead of hiding the individual slides using `display: none`, `visibility: hidden` is used as this works the same way to hide the slides not only visually but from screen readers as well but also allows for CSS3 transitions. The current slide is positioned absolutely to the leftmost point of the container.

The previous and next slides are positioned left and right from the current slide using the values of `-100%` and `100%` for the `left` property. A CSS3 transition of the `left` property is used to apply the slide animation.

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.active .slide {
  display: block !important;
  visibility: hidden;
  transition: left .6s ease-out 0s;
  z-index: 1;
}

.active .slide.current { left:    0 ; }
.active .slide.next    { left:  100%; }
.active .slide.prev    { left: -100%; }

.active .slide.current,
.active .slide.next.in-transition,
.active .slide.prev.in-transition {
  visibility: visible;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

If the next button or the automatic animation is invoked, the script changes the class attribute of the next slide to `current slide` and of the current slide to `prev slide in-transition` to keep it visible. The `in-transition` class is removed after the animation has ended by using the `transitionend` event.

{::nomarkdown}
<%= code_start('', 'JavaScript: Setting slides') %>
{:/nomarkdown}

~~~js
slides[new_current].className = 'current slide';
slides[new_next].className =
  'next slide' + ((transition == 'next') ? ' in-transition' : '');
slides[new_prev].className =
  'prev slide' + ((transition == 'prev') ? ' in-transition' : '');
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


{::nomarkdown}
<%= code_start('', 'JavaScript: In initialization') %>
{:/nomarkdown}

~~~js
var slidewrapper = slides[0].parentNode;

slidewrapper.addEventListener('transitionend', function (event) {
  var slide = event.target;
  removeClass(slide, 'in-transition');
  if (setFocus && hasClass(slide, 'current')) {
    slide.setAttribute('tabindex', '-1');
    slide.focus();
    setFocus = false;
  }
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The slide that is currently active is highlighted in the slide list and a play/pause button is added. Additionally, the animation should stop when an element inside the carousel receives focus or the mouse is hovering over the carousel and continue when the focus is lost or the mouse stops hovering.

{::nomarkdown}
<%= code_start('', 'JavaScript: In initialization') %>
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

<style>
  .carousel, .slide {
    width: 640px;
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

.carousel.active {
  height: 480px;
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

  var carousel, slides, index, slidenav, settings, timer, setFocus, animationSuspended;

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
        '<button type="button" class="btn-prev"><img src="../../img/chevron-left.png" alt="Previous Slide"></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><img src="../../img/chevron-right.png" alt="Next Slide"></button>' +
      '</li>';

    ctrls.querySelector('.btn-prev')
      .addEventListener('click', prevSlide);
    ctrls.querySelector('.btn-next')
      .addEventListener('click', nextSlide);

    carousel.appendChild(ctrls);

    if (settings.slidenav || settings.animate) {
      slidenav = document.createElement('ul');

      slidenav.className = 'slidenav';

      if (settings.animate) {
        var li = document.createElement('li');

        if (settings.startAnimated) {
          li.innerHTML = '<button data-stop=true><span class="visuallyhidden">Stop Animation </span>￭</button>';
        } else {
          li.innerHTML = '<button data-start=true><span class="visuallyhidden">Start Animation </span>▶</button>';
        }

        slidenav.appendChild(li);
      }

      if (settings.slidenav) {
        forEachElement(slides, function(el, i){
          var li = document.createElement('li');
          var klass = (i===0) ? 'class="current" ' : '';
          var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Slide)</span>' : '';

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
          } else if (button.getAttribute('data-stop')) {
            stopAnimation();
          } else if (button.getAttribute('data-start')) {
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
        if (setFocus && hasClass(slide, 'current')) {
          slide.setAttribute('tabindex', '-1');
          slide.focus();
          setFocus = false;
        }
      });

      carousel.addEventListener('mouseenter', suspendAnimation);
      carousel.addEventListener('mouseleave', startAnimation);

      carousel.addEventListener('focusin', function(event) {
        if (!hasClass(event.target, 'slide')) {
          suspendAnimation();
        }
      });
      carousel.addEventListener('focusout', function(event) {
        if (!hasClass(event.target, 'slide')) {
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
    slides[new_prev].className = 'prev slide' + ((transition == 'prev') ? ' in-transition' : '');

    slides[new_current].className = 'current slide';

    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = '';
        buttons[j].innerHTML = '<span class="visuallyhidden">News</span> ' + (j+1);
      }
      buttons[new_current].className = "current";
      buttons[new_current].innerHTML = '<span class="visuallyhidden">News</span> ' + (new_current+1) + ' <span class="visuallyhidden">(Current Slide)</span>';
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
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
    _this.removeAttribute('data-stop');
    _this.setAttribute('data-start', 'true');
  }

  function startAnimation() {
    settings.animate = true;
    animationSuspended = false;
    timer = setTimeout(nextSlide, 5000);
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
    _this.setAttribute('data-stop', 'true');
    _this.removeAttribute('data-start');
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

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

If the next button or the automatic animation is invoked, the script changes the class attribute of the next slide to `current slide` and of the current slide to `prev slide in-transition` to keep it visible. The `in-transition` class is removed after the animation has ended.

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~js
slides[new_current].className = 'current slide';
slides[new_next].className =
  'next slide' + ((transition == 'next') ? ' in-transition' : '');
slides[new_prev].className =
  'prev slide' + ((transition == 'prev') ? ' in-transition' : '');

setTimeout(function () {
  removeClass(
    carousel.querySelector('.slide.prev'), 'in-transition'
  );
  removeClass(
    carousel.querySelector('.slide.next'), 'in-transition'
  );
}, 610);
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The duration of the CSS3 sliding animation is 0.6s or 600ms, so the class `in-transition` is removed after 610ms to make sure that the animation was successful before the previous/next slide is hidden again.

***

- **What to do:** Provide pause and play controls for any carousel set to auto-scroll.
- **Why:** The scroll speed may be too fast for some users to read its content, while the movement itself can distract other users, preventing them from reading static text on the same page.
- **How:** Ensure that there is a pause function written into the script and that pause/play buttons are device independent.

Whether or not user controls are available to change slide views, any carousel script that causes slides to scroll, rotate or to change automatically must contain a function that enables the user to stop the movement.

This function could be called from a single “Play/Pause” button, where the script also switches between “play” and “pause” images (and their `alt` attributes), or two buttons, one to pause the movement , and the other to restart the scrolling.

![Pause](../img/placeholder.gif) ![Play](../img/placeholder.gif)

The “stop” function should also be called if the user activates any slide selection buttons, to give them time to read or understand the slide.

The carousel should not resume scrolling until and unless the user activates the “play” button.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** As discussed on the [controls](controls.html) page, all buttons in the carousel should be coded as buttons or have a WAI-ARIA `role` attribute of `button` to let users know that they are controls, not links.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}


***

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
var myCarousel = (function() {

  var carousel, slides, index, slidenav, settings, timer;

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
            stopAutomation();
            setSlides(button.getAttribute('data-slide'), true);
          } else if (button.getAttribute('data-stop')) {
            stopAutomation();
          } else if (button.getAttribute('data-start')) {
            startAutomation();
          }
        }
      }, true);

      carousel.className = 'active carousel with-slidenav';
      carousel.appendChild(slidenav);
    }

    index = 0;
    setSlides(index);

     if (settings.startAnimated) {
      timer = setTimeout(function () {
        nextSlide();
      }, 5000);
    }
  }

  function setSlides(new_current, setFocus, transition) {
    setFocus = typeof setFocus !== 'undefined' ? setFocus : false;
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
        buttons[j].className = "";
      }
      buttons[new_current].className = "current";
    }

    index = new_current;

    setTimeout(function () {
      removeClass(carousel.querySelector('.slide.prev'), 'in-transition');
      removeClass(carousel.querySelector('.slide.next'), 'in-transition');
      if (setFocus) {
        slides[new_current].setAttribute('tabindex', '-1');
        slides[new_current].focus();
      }
    }, 610);

  }

  function nextSlide() {

    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    setSlides(new_current, false, 'prev');

    if (settings.animate) {
      timer = setTimeout(function () {
        nextSlide();
      }, 5000);
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

  function stopAutomation() {
    clearTimeout(timer);
    settings.animate = false;
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
    _this.removeAttribute('data-stop');
    _this.setAttribute('data-start', 'true');
  }

  function startAutomation() {
    settings.animate = true;
    timer = setTimeout(function () {
      nextSlide();
    }, 5000);
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
    _this.setAttribute('data-stop', 'true');
    _this.removeAttribute('data-start');
  }

  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides,
    stop:stopAutomation,
    start:startAutomation
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

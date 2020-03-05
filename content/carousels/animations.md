---
title: Animations

lang: en
permalink: /tutorials/carousels/animations/
ref: /tutorials/carousels/animations/

github:
  repository: w3c/wai-tutorials
  path: 'content/carousels/animations.md'

resource:
  ref: /tutorials/carousels/
navigation:
  previous: /tutorials/carousels/functionality/
  next: /tutorials/carousels/styling/

wcag_success_criteria:
  - 2.2.2
first_published: "May 2015"
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Provide users with control over animations in the carousel. Pausing animation is essential for people who find movement distracting or who need more time to read.

## Add Play/Stop button

Provide a button to allow users to stop and resume animation. The example below illustrates how such a button can be marked-up. The button label and its function changes, depending on whether the animation is currently running or not.

{::nomarkdown}
{% include box.html type="start" title="Code: While animation is running" class="example" %}
{:/}

~~~html
<button data-action="stop"><span class="visuallyhidden">Stop Animation </span>￭</button>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: While animation is stopped" class="example" %}
{:/}

~~~html
<button data-action="start"><span class="visuallyhidden">Start Animation </span>▶</button>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}


{% include ednote.html note="The following paragraph was show in a side column before." %}A [working demo example](/tutorials/carousels/working-example/) for this code is available.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

The JavaScript only replaces the value of the `<button>` element and its attributes. Replacing the entire button would result in loss of keyboard focus.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Pause on mouse hover and keyboard focus

Pause the carousel animation when the mouse pointer is hovering over the carousel or when it receives keyboard focus. Pausing on mouse hover is useful for people who need more time to read the content and makes it easier to click links in the carousel. Keyboard users do not lose their position when the carousel is paused.

{::nomarkdown}
{% include box.html type="start" title="Code: " class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

{% include ednote.html note="These are now supported everywhere." %}The [`focusin`](/tutorials/carousels/https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn) and [`focusout`](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout) events are defined in the [W3C Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/) (Working Draft) and implemented in many browsers. Firefox needs [a short polyfill](full-code/) at the time of publication of this tutorial.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Hiding transitioning elements from assistive technologies

During transitions, the current and next items are visible. This also means that those two items are available to assistive technologies, with the current item disappearing, which can be confusing to screen reader users.

In the following example, the item that is being activated gets an `in-transition` class that makes it visible. The `aria-hidden` attribute is set to `true` to hide the item from assistive technologies. When the transition completes, the `aria-hidden` attribute is removed.

{::nomarkdown}
{% include box.html type="start" title="Code: JavaScript" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

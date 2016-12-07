---
title: Animations
status: approved-draft
order: 5
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

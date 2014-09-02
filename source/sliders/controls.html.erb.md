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

After the basic styling was applied to the content, the interaction comes in. In the first steps the slide show is prepared to hide all content but the first slide. Then “left” and “right” arrows are added to the carousel and enabled, so users can skip through the individual slides.

## Add Styling When Javascript Is Enabled

When JavaScript is enabled, the carousel wrapper is getting a fixed height. Individual slides are stacked on top of another, with the current slide on top of the others. Additionally, all slides but the current one are hidden by using `display: none` – a [hiding technique](/background/hiding.html) that hides the inactive slides visually as well as from assistive technologies.

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~css
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

First, the previous and next buttons need to be added to the markup via JavaScript and styled accordingly:

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

<script>
  function setSlides(newi) {
    slides[newi.next].className = 'next slide';
    slides[newi.prev].className = 'prev slide';
    slides[newi.current].className = 'current slide';
    index = newi;
  }

  function nextSlide() {
    var length = slides.length,
    newnext = index.next + 1,
    newprev = index.prev + 1,
    newcurrent = index.current + 1;

    var newi = {};

    if(newnext === length) {
      newnext = 0;
    } else if(newprev === length) {
      newprev = 0;
    } else if(newcurrent === length) {
      newcurrent = 0;
    }

    newi.current = newcurrent;
    newi.next = newnext;
    newi.prev = newprev;

    setSlides(newi);

  }

  function prevSlide() {
    var length = slides.length,
    newnext = index.next - 1,
    newprev = index.prev - 1,
    newcurrent = index.current - 1;

    var newi = {};

    if(newnext < 0) {
      newnext = length-1;
    } else if(newprev < 0) {
      newprev = length-1;
    } else if(newcurrent < 0) {
      newcurrent = length-1;
    }

    newi.current = newcurrent;
    newi.next = newnext;
    newi.prev = newprev;

    setSlides(newi);

  }

  var carousel = document.getElementById('c2');
  var slides = carousel.querySelectorAll('.slide');
  var index = {};

  carousel.className = 'active carousel';

  index.current = 0;
  index.next = 1;
  index.prev = slides.length-1;
  setSlides(index);
</script>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

***

- **What to do:** Ensure that all slide progression controls can be operated and understood by all users.
- **Why:** Some Users may be unable to use a mouse, while others may be unable to see the visual clues to identify the relationship between the current slide and its position in a list of slide controls.
- **How:** Ensure that controls can be activated by both keyboard and mouse, be distinguished from one another and that the current slide and focus state of slides is identifiable both visually and by screen readers.
- **Conformance:** Required to meet [SC 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG20/quickref/20120103/#content-structure-separation-programmatic), [SC 2.1.1 Keyboard](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv), [SC 2.4.7 Focus Visible](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv) and [SC 4.1.2 Name, Role, Value](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv).

Carousels may simply have “Previous” and “Next” buttons to enable users to progress through slides one at a time, a list of slide buttons so that the user can select which slide to view, or may have both types of control. For information on ensuring that they can be activated by both keyboard and mouse, see [pages on keyboard control](keyboard.html).

## Buttons

**This should probably be in the Forms Tutorial**{:.todo}

All of the slide progression controls need to be buttons, not links, as they perform an action on the same page rather than open a different web page.

If implementing a carousel from a script library that marks up the controls as links, you can use the WAI-ARI `role` attribute (`role="button"`), to make the links are recognized as buttons by assistive technologies.

Using the `<button>` element:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<button class="carousel" type="button">
	Previous slide
</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Applying the WAI-ARIA button `role` attribute to a link:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<ul>
	<li>
		<a href="#1" role="button">
			<img src="1.jpg" alt="Feature 1">
		</a>
	</li>
	<li>
		<a href="#2" role="button">
			<img src="2.jpg" alt="Feature 2">
		</a>
	</li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Previous and Next buttons

Images of left and right arrows are most commonly used to visually distinguish between “Previous” and “Next” buttons,these need appropriate `alt` attributes.

#### Featured products

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[![Previous product](chevron-left.png)](#prev){:style="vertical-align:middle;"} Current product slide [![Next product](chevron-right.png)](#next){:style="vertical-align:middle;"}

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

The `alt` text for these two images is “Previous product” and “Next product”. Although only “Previous” and “Next” are essential as `alt` attribute values, it is good practice to provide the extra context to help users understand that they are still within the products carousel.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="#prev" role="button">
	<img src="prev.png" width="60" height="80" alt="Previous product">
</a>
(Current product slide)
<a href="#next" role="button">
	<img src="next.png" width="60" height="80" alt="Next product">
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Slide list buttons
------------------

When a list of slide specific buttons are provided, they convey a variety of information, such as identifying how many slides are available, distinguishing between inactive slides, the current slide and whether or not a slide button is in tab focus. All of this information needs to be conveyed both visually and in a way that screen readers can recognize.

![Carousel controls, (described below)](slider-controls.png)

Visually the above controls show four numbered buttons, The current slide button (number 2) is larger and in the reverse colour combination to the others, button 4 has an additional outline to show that it is the control currently in tab focus, (if activated it would display slide 4).

To convey the same quality of information to users who can’t see the screen, the controls need to be marked up as a list, (screen readers can then inform users of the number of items in the list),and the current slide needs to be identified. Accurate labelling of the buttons will let the user know which control has focus.

The script should be capable of identifying the current slide and rendering its identification within the text or text alternative for the current button.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The buttons in the above image are numbered which is important for speech recognition software users. Unless each button has a visible label, these users cannot know what command to give their software to navigate to the desired slide.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

Where the generated code creates text links that the script then renders as images:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<ul>
	<li>
		<button class="carousel" type="button">Article 1</button>
	</li>
	<li>
		<button class="carousel" type="button">Article 2 (current)</button>
	</li>
	<li>
		<button class="carousel" type="button">Article 3</button>
	</li>
	<li>
		<button class="carousel" type="button">Article 4</button>
	</li>
</ul>

~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Animations


- **What to do:** Provide pause and play controls for any carousel set to auto-scroll.
- **Why:** The scroll speed may be too fast for some users to read its content, while the movement itself can distract other users, preventing them from reading static text on the same page.
- **How:** Ensure that there is a pause function written into the script and that pause/play buttons are device independent.
- **Conformance:** This is an overall conformance requirement as well as being required to meet [SC 2.2.2: Pause, Stop, Hide](http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause)

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

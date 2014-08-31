---
title: Structure
status: editors-draft
order: 2
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
wcag_techniques:
  - G130
  - H42
  - H48
---

As with every part of a website, a good markup structure is the base for a carousel to work in an accessible way. This helps the carousel to be easily discovered and also allows non-visual users to interpret the individual slides in a meaningful way.

## Carousel Heading

As a carousel is a set of content pieces, that share some properties, it is useful to add a [heading](/background/headings.html) directly in front of the carousel, for example:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<h3>Featured articles</h3>

<h3>Editor’s picks</h3>

<h3>Price Winners</h3>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The heading has to be in the correct heading structure of the document, for example the heading of the next section of the document should be the same as the one before the carousel.

## Carousel Skeleton

Depending on the content of the individual slides, a there are some possibilities of how the basic skeleton may look like. For a simple list of images or teasers, a list (`<ul>`) may be perfectly sufficient, if complete articles are the content of the carousel, the use of `<article>` elements for every slide may be more appropriate.

{::nomarkdown}
<%= code_start('', 'Simple content') %>
{:/nomarkdown}

~~~html
<ul class="carousel">
    <li class="slide">…</li>
    <li class="slide">…</li>
    <li class="slide">…</li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Complete articles') %>
{:/nomarkdown}

~~~html
<div class="carousel">
    <article class="slide">…</article>
    <article class="slide">…</article>
    <article class="slide">…</article>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

To allow semantic flexibility, CSS should use classes to make the carousel look good. Those classes should also be used in the JavaScript to provide the necessary interaction. Note that there are no elements in the code for buttons or pagination indicators, as they are only added with JavaScript when they are needed. This [Progressive Enhancement](/background/progressive-enhancement.html) principle makes sure that the content is always available even if the JavaScript fails to load.

## Slide Construction

Slides can consist of various elements, including headings (which should be one level below the main carousel heading) and links.

### Image Content
{:.ex}

When using images in a slide show, each image needs to have an alternative text that describes it according to the [Images tutorial](/images/index.html).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<h3>Photos of our trip to Paris:</h3>
<ul class="carousel">
    <li class="slide">
        <img src="path/to/image.jpg" alt="Alternative text">
    </li>
    <li class="slide">
        <img src="path/to/image.jpg" alt="Alternative text">
    </li>
    <li class="slide">
        <img src="path/to/image.jpg" alt="Alternative text">
    </li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Complex Content
{:.ex}

Complex content should use headings, so the content is easily findable. If used as teasers, links should be used in a descriptive manner.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<h3>Featured Articles:</h3>
<ul class="carousel">
    <li class="slide">
        <h4>Space Teddy production reaches all-time high</h4>
        <p>
            Teddies in Space Inc. has released outstanding numbers for the last solar year.
            <a href="…">Complete Annual Report</a>
        </p>
    </li>
    <li class="slide">
        <h4>New Space Teddie Announced!</h4>
        <p>
            Space Teddy 6 wears an aluminum space suit with sapphire glass helmet.
            <a href="…">Everything about the new model</a>
        </p>
    </li>
    <li class="slide">
        <h4>Adventures of the Space Teddy</h4>
        <p>
            Using modern HTML5 technologies, the latest installment of our game performs great on your computer, tablet, or mobile.
            <a href="…">Play the Game here!</a>
        </p>
    </li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---

- **What to do:**provide structural markup to identify the carousel on the page and each individual slide;
- **Why:** to enable screen reader users to understand the relationship between the carousel and other page content and distinguish between slides;
- **How:** position a heading at the start of the carousel and if slides contain text, a lower level heading at the start of each slide: if there is little or no text, then use list markup to distinguish between slides;

**Overall description of examples**{:.todo}

## Head up the carousel

The following heading might be used at the start of a carousel highlighting specific web pages:

### Featured pages

![Screenshot of carousel](../img/placeholder.gif) [screenshot of carousel needed here]

The content that follows the carousel should then have a heading at the same level or higher:

### Upcoming events (example)

**(List of events)**{:.todo}

### Code snippet

Showing both the carousel heading and the one following the carousel:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h3>Featured pages</h3>
<div id="carousel">
	… carousel slides and controls …
</div>
<h3>Upcoming events</h3>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Headings for slides

If slides contain enough text to require structure, each slide could begin with a heading at one level below the overall carousel heading:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}


### Featured products

#### Clematis

Scented or unperfumed, evergreen or deciduous, we have clematis for all aspects in your garden (slide 1 content)

#### Fruit bushes

Year after year, these shrubs will fill your garden with succulent fruit, choose from apricot, blueberry and raspberry (slide 2 content).

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}


Slide structure using headings:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h3>Featured products</h3>
	<h4>Slide 1 heading</h4>
		<p>Slide 1 description</p>
	<h4>Slide 2 heading</h4>
		<p>Slide 2 description</p>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## List of slides

If slides contain just images, or images plus just a word or two of text, they can be presented in a list:

### Featured products

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

- ![](../img/placeholder.gif) Clematis
- ![](../img/placeholder.gif) Fruit bushes
- ![](../img/placeholder.gif) Vegetables

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

### Code snippet

Using a list where don’t contain much content:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h3>Featured products</h3>
<ul>
	<li><img src="slide1img.png" alt=""> Slide 1 name</li>
	<li><img src="slide2img.png" alt=""> Slide 2 name</li>
	<li><img src="slide3img.png" alt=""> Slide 3 name</li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

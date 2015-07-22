---
title: Carousel Structure
nav_title: Structure
status: approved-draft
order: 2
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
wcag_techniques:
  - G130
  - H42
  - H48
---

Structural markup ensures that the content of a carousel has meaning on its own, without styling and scripting, so that can be used in more situations. For example, a carousel could be presented as a list of articles on a mobile device.

## Carousel region

{::nomarkdown}
<%= reference :start %>
{:/}

For more information on regions, see the [regions tutorial](/page-structure/regions.html).

{::nomarkdown}
<%= reference :end %>
{:/}

Provide semantic markup to define the carousel as a distinct part of a web page. For example, if the main purpose of a carousel is to navigate the website, then use the HTML5 `<nav>` element. Depending on the role of the slider, `<article>`, `<complementary>`, and `<aside>` elements could also be used. At the very least, the `<section>` element should be used to define the carousel as generic region.

{::nomarkdown}
<%= code_start('', 'HTML5') %>
{:/nomarkdown}

~~~html
<section class="carousel" …>…</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In HTML4, the `<div>` element with the WAI-ARIA `role` attribute with the value `region` serves the same purpose.

{::nomarkdown}
<%= code_start('', 'HTML4') %>
{:/nomarkdown}

~~~html
<div class="carousel" role="region" …>…</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Carousel label

{::nomarkdown}
<%= reference %>
{:/}

For more information on labels, see the [labeling regions tutorial](/page-structure/labels.html).

{::nomarkdown}
<%= reference :end %>
{:/}

Label carousels according to their individual function to make them easier to find and understand. This helps to distinguish between multiple carousels on a web page. Use a heading, `aria-label`, or `aria-labelledby` to provide the label.

In carousels tutorial examples, `aria-labelledby` with a hidden heading is used:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel" aria-labelledby="carouselheading">
  <h3 id="carouselheading" class="visuallyhidden">Recent news</h3>
    …
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Carousel body

A carousel is a collection of items that are displayed one at a time. Provide a corresponding structure in the code to represent this collection of items.

Usually, carousel items are collected in a list (`<ul>`), with list items (`<li>`) grouping the content of each individual slide.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel" …>
  …
  <ul>
    <li class="slide">…</li>
    <li class="slide">…</li>
    <li class="slide">…</li>
    …
  </ul>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Item content

Individual carousel items can consist of simple content, like only an `<img>` element for an image slider. In other instances complex content is represented in each carousel item, for example complete articles or sections of a web page or even website.

Mark up the content inside the carousel items like you would in the normal document content. If the content can stand on its own, you may even use articles inside of the carousel item.

{::nomarkdown}
<%= code_start('', 'Simple Content') %>
{:/nomarkdown}

~~~html
…
<li class="slide">
  <img src="teddy1.jpg" alt="Space Teddy">
</li>
…
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'Stand alone content') %>
{:/nomarkdown}

~~~html
…
<li class="slide" style="background-image: url('teddy1.jpg');">
  <article>
    <h4>Space Teddy production reaches all-time high</h4>
    <p>Teddies in Space Inc. has released outstanding numbers for the last solar year. The production of Space Teddies increased by 17%. The new version, scheduled to be released in a few months, will likely be the biggest Space Teddy release ever.</p>
    …
  </article>
</li>
~~~


{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Putting it all together

For the rest of the tutorial, the following code is used as the foundations for adding styling, functionality and animations. It contains three teasers to featured content. Each teaser consists of a heading and a short paragraph with a read more link.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel" aria-labelledby="featured">
  <h3 id="featured">Featured Articles:</h3>
    <ul>
        <li class="slide" style="background-image: url('teddy1.jpg');">
            <h4>Space Teddy production reaches all-time high</h4>
            <p>
                Teddies in Space Inc. has released outstanding numbers for the last solar year.
                <a href="…">Full Annual Report</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('teddy2.jpg');">
            <h4>New Space Teddy Announced!</h4>
            <p>
                Space Teddy 6 wears an aluminum space suit. Sapphire glass eyes are first used universe-wide.
                <a href="…">Everything about the new model</a>
            </p>
        </li>
        <li class="slide" style="background-image: url('teddy3.jpg');">
            <h4>Adventures of the Space Teddy</h4>
            <p>
                Using modern HTML5 technologies, the latest installment of our game performs great on your computer, tablet, or mobile.
                <a href="…">Play the Game here!</a>
            </p>
        </li>
    </ul>
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Add styling

To improve the flexibility of the carousel, a progressive enhancement approach is used. Styling is applied to the carousel items so they appear as a list of teasers if no JavaScript is available.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
<div class="carousel">
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

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** As the background images can be distracting, a (semi-transparent) background color for the overlaying text ca help to improve the contrast.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}
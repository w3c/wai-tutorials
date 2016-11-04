---
title: Carousel Structure
nav_title: Structure
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

Use structural markup to ensure that the content of a carousel can be used in a variety of situations. For example, a carousel can be presented as a list of articles on a mobile device or when JavaScript isn’t available.

## Overall structure

As a collection of content items, carousels are typically best represented as unordered list items, `<ul>` and `<li>`. Every carousel should be enclosed in a labeled region to allow users find the carousel more easily. In the following example a `<section>` element is used to define the region and `aria-labelledby` defines the heading that contains the label.

{::nomarkdown}
<%= reference :start %>
{:/}

See the Page Structure Tutorial for more information on [regions](/page-structure/regions.html) and [labels](/page-structure/labels.html).

{::nomarkdown}
<%= reference :end %>
{:/}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<section class="carousel" aria-labelledby="carouselheading">
  <h3 id="carouselheading" class="visuallyhidden">Recent news</h3>
  <ul>
    <li class="slide">…</li>
    <li class="slide">…</li>
    <li class="slide">…</li>
    …
  </ul>
</section>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Item content

While carousel items are often just images, they can also provide more complex content, such as teaser, articles, or a section of a web page or web site. In any case use semantic markup to make each section usable on its own. This includes using headings, sections, lists, articles, and other structures as needed.

{::nomarkdown}
<%= code_start('', 'Example of Simple Content') %>
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
<%= code_start('', 'Example of Richer Content') %>
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
…
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Basic styling
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Suggest moving this section to its own page, similar to the [menus tutorial](/menus/index.html).

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Apply styling on the carousel structure to make them appear as needed. Ensure that the default view (without JavaScript) is usable by itself.

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

**Note:** As the background images can be distracting, a (semi-transparent) background color for the overlaying text helps to improve the contrast.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

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

Provide structural markup for the carousel and its items, and later enhance these structures with styling and scripting. This ensures that the content of the carousel has meaning on its own, without styling and scripting, and can be rendered and used in more situations.

## Carousel framework

A carousel is a collection of items that are displayed one at a time. Provide a corresponding structure in the code to represent this collection of items.

### List of items
{:.ap}

In many situations, the carousel items are fairly brief so that a simple a list (`<ul>`) with individual list items (`<li>`) is sufficient to represent the carousel. See the example below for a demo of this robust approach:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
    <ul>
        <li class="slide">…</li>
        <li class="slide">…</li>
        <li class="slide">…</li>
    </ul>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Set of articles
{:.ap}

If carousel items are have a lot of complex content, other elements can be used for the carousel framework. For example, HTML5 provides the `<article>` element, which is useful for carousels with items that are independent pieces of content. Make sure to provide headings for each article. The example below shows the use of `<article>` elements to represent a carousel.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
    <article class="slide">
      <h4>…</h4>
      …
    </article>
    <article class="slide">
      <h4>…</h4>
      …
    </article>
    <article class="slide">
      <h4>…</h4>
      …
    </article>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Label carousels

For assistive technology users, it is important to add information to the carousel container that informs the user where the carousel starts and ends, as a carousel is typically a distinct part of a web page. A heading (`<h1>` to `<h6>`) or WAI-ARIA attributes can be used to label them.

#### Using headings
{:.ex}

In the example below, a heading shows the start of the carousel, the end of the carousel would be marked by the next heading of the same level.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
  <h3>Recent news</h3>
    <article class="slide">
      <h4>…</h4>
      …
    </article>
    …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Using WAI-ARIA roles and labels
{:.ex}

To group the carousel in a way that is perceivable for assistive technologies, the `role` attribute with a value of `region` can be used. To identify the region, the `aria-label` attribute can be used, as show in the example below:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel" role="region" aria-label="Recent news">
    …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

If there is already some text identifying the carousel in HTML, it is usually more appropriate to use the `aria-labelledby` attribute to assign that text to the carousel.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel" role="region" aria-labelledby="carouselheading">
  <h3 id="carouselheading">Recent news</h3>
    …
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Item structure

Also provide proper structure for content within individual carousel items. This makes them independent pieces of content that can be rendered and used in different ways. Refer to the [images tutorial](/images/index.html) for more information.

### Brief content
{:.ex}

In the following example, the carousel items only consist of an image each, so that a simple list was used to represent the carousel. The carousel itself is identified using a heading, and the text alternatives are considered for the images of the carousel items. The code provides structure and meaning, even without any styling and scripting added.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<h3>Photos of our trip to Paris:</h3>
<div class="carousel">
  <ul>
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
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Complex content
{:.ex}

This example also uses a list, even though the carousel items consist of more substantial content than in the previous example. This approach was selected as the individual carousel items are not independent pieces of content and thus not suitable for the  `<article>` element. The individual list items include a heading, text, and links each.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<h3>Featured Articles:</h3>
<div class="carousel">
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
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Carousel styling
{:.newex}

At this stage the carousel does not have any functionality. This is added later using scripting, based on the class names of the elements. If scripting is not enabled for various reasons, including bad network connection or user choice, the functionality would not work anyway.

This does not prevent you from providing the basic styling for the carousel so that it looks appropriate even when scripting is not enabled. In many cases carousels are styled with background images and overlaid text, so contrast ratio requirements need to be met.

### Styled carousel
{:.ex}

The example below shows how the carousel structure from the previous example is styled. It uses semi-transparent backgrounds behind the overlaid text, to ensure sufficient color contrast to the background image.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The carousel demo in this tutorial has a fixed-width implementation to keep the tutorial simple.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentational">Featured Articles:</h3>
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

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

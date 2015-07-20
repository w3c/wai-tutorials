---
title: Structure
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

Structural markup ensures that the content of a carousel has meaning on its own, without styling and scripting, so that can be used in more situations. For example, a carousel could be presented as just a list of articles on a mobile device.

## Carousel framework

A carousel is a collection of items that are displayed one at a time. Provide a corresponding structure in the code to represent this collection of items.

### List of items
{:.ap}

In many situations, the carousel items are fairly brief so that a simple a list (`<ul>`) with individual list items (`<li>`) is sufficient to represent the carousel. See the example below for a demo of this approach:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
...
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

If carousel items have a lot of content, other elements can be used for the carousel framework. For example, HTML5 provides the `<article>` element, which is useful for carousels with items that are independent pieces of content. Make sure to provide headings for each article. The example below shows the use of `<article>` elements to represent a carousel.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
...
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

Provide labels to identify the carousels. This can be done using one of the following approaches.

#### Using headings
{:.ap}

In the example below, an HTML heading is used to identify the carousel.

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

#### Using WAI-ARIA `aria-label`
{:.ap}

In the following example, the WAI-ARIA `aria-label` attribute is used to provide a label for the carousel. In addition, the `role` attribute with a value of `region` is used to define the entire carousel as a distinct region.

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

#### Using WAI-ARIA `aria-labelledby`
{:.ap}

In the following example, the WAI-ARIA `aria-labelledby` attribute is used to refer to an existing HTML heading as the label for the carousel. Also here, the `role` attribute with a value of `region` is used to define the entire carousel as a distinct region.

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
{:.newex}

Provide proper structure for content within individual carousel items. This makes them independent pieces of content that can be rendered and used in different ways.

### Brief content
{:.ex}

In the following example, each carousel item only consists of an image, so that a simple list is used to represent the carousel. The carousel itself is identified using a heading, and the text alternatives are provided for the images within the carousel items. The code provides structure and meaning, even without any styling and scripting added.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
  <h3>Space Teddys:</h3>
  <ul>
      <li class="slide">
          <img src="path/to/image1.jpg" alt="Super Teddy">
      </li>
      <li class="slide">
          <img src="path/to/image2.jpg" alt="Spider Teddy">
      </li>
      <li class="slide">
          <img src="path/to/image3.jpg" alt="Teddy Man">
      </li>
  </ul>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Complex content
{:.ex}

This example also uses a list, even though the carousel items consist of more substantial content than in the previous example. Each list item includes a heading, text, and links.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div class="carousel">
  <h3>Featured Articles:</h3>
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

At this stage the carousel does not have any functionality. This is added later using scripting, based on the class names of the elements. By using this approach, the content is still meaningfull even in situations when scripting is not enabled, including bad network connection or user choice. Basic styling for the carousel is provided so that it looks appropriate even when scripting is not enabled. 

When carousels use text that overlays a background image, the contrast ratio (“color contrast”) requirements need to be met.

### Styled carousel
{:.ex}

The example below shows how the carousel structure from the previous example is styled. As the background images can be distracting, using a background color for the overlaying text is a good way to ensure a good contrast ratio regardless of the image. Here, a semi-transparent background with a high opacity (here: 80%) is added to the text. 

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

---
title: Styling
status: editors-draft
order: 3
wcag_success_criteria:
---

The styling of the carousel can have a huge impact to usability and accessibility.

## Item styling

Apply a suitable layout to the carousel items without JavaScript to ensure that the content is available in situations when JavaScript is not available.

In the following example a semi-transparent background color is used in the heading and the description text to guarantee that the text is readable when placed on top of the image. (See [Design/Contrast](/design/contrast.html).)

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

## Item Position

When JavaScript is enabled, a class `active` is added to the carousel that positions the items stacked on top of each other. In addition the items are hidden, using `display: none;` for all items.

The `current` item then is shown (`display: block;`) and `z-index` is used to position the slide in front of all other slides – this is important for the animation transition later.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~css
.active .slide {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
}

.slide.current {
  display: block;
  z-index: 500;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The outcome looks like this:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<h3 role="presentation">Featured Articles:</h3>
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
    /*position: absolute;*/
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

<style>
.carousel.active {
  height: 360px;
  overflow: hidden;
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

---
title: Forms in Disguise
status: editors-draft
order: 5
wcag_success_criteria:
wcag_techniques:
---

Forms do usually consist of checkboxes, text input fields, and similar controls, but sometimes forms are differently visualized: A sharing button or a star rating, for example, can be represented by form controls as well. Using standard, (hidden) form controls for such interactive elements can help assistive technologies to operate those controls.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This tutorial is not dealing with other aspects of the forms, like security. For brevity, the following examples only work in modern browsers.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## A Share Button
{:.ex}

A sharing button of a social network has two functions: It shows how many people have already shared the link to the website, and it allows the user to click on the button to share it themselves, most likely without even leaving the page.

If JavaScript is not working for some reasons, using a regular submit button will redirect to a page where the vote can be registered. The user can be redirected to the source page afterwards.

{::nomarkdown}
<%= sample_start %>

<form action="#submit-like">
  <button type="submit" id="share-btn" class="btn-primary">
    <span class="count">3</span>
    <span class="text">Shares</span>
  </button>
</form>

<style>
  #share-btn {
    line-height: 1;
    float:none;
  }
  #share-btn[disabled] {
    background: #063;
    border: 1px solid #063;
  }
  #share-btn[disabled] .count {
    color: #063;
  }
  #share-btn .count {
    background-color: #fff;
    color: #036;
    min-width: 1em;
    line-height: 1;
    display: inline-block;
    border-radius: 50px;
    border: 4px solid #fff;
    text-align: center;
  }
</style>

<script>
document.getElementById('share-btn').removeAttribute('disabled');
document.getElementById('share-btn').addEventListener('click', function(event){
  event.preventDefault();
  event.stopImmediatePropagation();

  var count = this.querySelector('.count');
  var text = this.querySelector('.text');

  count.textContent = parseInt(count.textContent) + 1;
  text.textContent = "Shared ✓";

  this.setAttribute("disabled", "true");
});
</script>
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<form action="path/to/submit">
  <button type="submit" id="share-btn" class="btn-primary">
    <span class="count">3</span>
    <span class="text">Shares</span>
  </button>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~ js
document.getElementById('share-btn').addEventListener('click', function(event){
  event.preventDefault();
  event.stopImmediatePropagation();

  var count = this.querySelector('.count');
  var text = this.querySelector('.text');

  count.textContent = parseInt(count.textContent) + 1;
  text.textContent = "Shared ✓";

  this.setAttribute("disabled", "true");
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## A Star Rating
{:.ex}

A star rating usually consists of images of five stars that can be used to rate a particular item. The mouse user hovers over the stars and clicks the one. If the user clicks on the third star from the left, he rates the item 3 of 5 stars.

To make this as accessible as possible, a form is used but its fields are visually hidden. It contains 6 radio buttons, one for each star and another for 0 stars (which is checked by default).

<abbr title="Scalable Vector Graphics">SVG</abbr> star graphics are in the labels of the radio buttons which actual text (“1 Star”, “2 Stars”, …) is also hidden from visual users. By using the `:focus` and `:hover` pseudo classes in CSS, the stars are colored regardless of the input method of the user. The `:checked` pseudo class and the general sibling selector `~` gray out inactive stars.

The number of stars is saved to the server when the star image is clicked or the hidden button is clicked. This enables keyboard users to make a selection first before sending the form. (In this demo, the output element is updated instead of saving the value to the server.)

{::nomarkdown}
<%= sample_start %>

<form action="#" id="star_rating">
 <input value="0" id="star0" checked
  type="radio" name="rating" class="visuallyhidden">
  <label for="star0">
    <span class="visuallyhidden">0 Stars</span>
  </label>

  <input value="1" id="star1"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star1">
    <span class="visuallyhidden">1 Star</span>
    <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
  </label>

  <input value="2" id="star2"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star2">
    <span class="visuallyhidden">2 Stars</span>
    <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
    </abbr>
  </label>

  <input value="3" id="star3"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star3">
    <span class="visuallyhidden">3 Stars</span> <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
  </label>

  <input value="4" id="star4"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star4">
    <span class="visuallyhidden">4 Stars</span> <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
  </label>

  <input value="5" id="star5"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star5">
    <span class="visuallyhidden">5 Stars</span> <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
  </label>

  <button type="submit" class="btn-small visuallyhidden focusable">Submit rating</button>

  <output></output>
</form>

<style>
  #star_rating svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
  #star_rating label, #star_rating output {
    display:block;
    float:left;
    font-size: 2em;
    height: 1.2em;
    color: #036;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  #star_rating output {
    font-size: 1.5em;
    padding: 0 1em;
  }
  #star_rating input:checked ~ label {
    color: #999;
  }
  #star_rating input:checked + label {
    color: #036;
    border-bottom-color: #036;
  }
  #star_rating input:focus + label {
    border-bottom-style: dotted;
  }
  #star_rating:hover input + label {
    color: #036;
  }
  #star_rating input:hover ~ label,
  #star_rating input:focus ~ label {
    color: #999;
  }
  #star_rating input:hover + label,
  #star_rating input:focus + label {
    color: #036;
  }
  #star_rating [type="submit"] {
    float:none;
  }
</style>

<script>
var radios = document.querySelectorAll('#star_rating input[type=radio]');
var btn = document.querySelector('#star_rating button');
var output = document.querySelector('#star_rating output');
var do_something = function(stars) {
  // An AJAX request could send the data to the server
  output.textContent = stars;
};

Array.prototype.forEach.call(radios, function(el, i){
  var label = el.nextSibling.nextSibling;
  label.addEventListener("click", function(event){
    do_something(label.querySelector('span').textContent);
  });
});

document.querySelector('#star_rating').addEventListener('submit', function(event){
  do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
  event.preventDefault();
  event.stopImmediatePropagation();
});
</script>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<form action="#" id="star_rating">
 <input value="0" id="star0" checked
  type="radio" name="rating" class="visuallyhidden">
  <label for="star0">
    <span class="visuallyhidden">0 Stars</span>
  </label>

  <input value="1" id="star1"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star1">
    <span class="visuallyhidden">1 Star</span>
    <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
  </label>

  <input value="2" id="star2"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star2">
    <span class="visuallyhidden">2 Stars</span>
    <svg viewBox="0 0 512 512">…</svg>
  </label>

  <input value="3" id="star3"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star3">
    <span class="visuallyhidden">3 Stars</span>
    <svg viewBox="0 0 512 512">…</svg>
  </label>

  <input value="4" id="star4"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star4">
    <span class="visuallyhidden">4 Stars</span>
    <svg viewBox="0 0 512 512">…</svg>
  </label>

  <input value="5" id="star5"
    type="radio" name="rating" class="visuallyhidden">
  <label for="star5">
    <span class="visuallyhidden">5 Stars</span>
    <svg viewBox="0 0 512 512">…</svg>
  </label>

  <button type="submit" class="btn-small visuallyhidden focusable">Submit rating</button>

  <output></output>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','CSS') %>
{:/nomarkdown}

~~~ css
#star_rating svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
#star_rating label, #star_rating output {
  display:block;
  float:left;
  font-size: 2em;
  height: 1.2em;
  color: #036;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
#star_rating output {
  font-size: 1.5em;
  padding: 0 1em;
}
#star_rating input:checked ~ label {
  color: #999;
}
#star_rating input:checked + label {
  color: #036;
  border-bottom-color: #036;
}
#star_rating input:focus + label {
  border-bottom-style: dotted;
}
#star_rating:hover input + label {
  color: #036;
}
#star_rating input:hover ~ label,
#star_rating input:focus ~ label {
  color: #999;
}
#star_rating input:hover + label,
#star_rating input:focus + label {
  color: #036;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}

~~~ js
var radios = document.querySelectorAll('#star_rating input[type=radio]');
var btn = document.querySelector('#star_rating button');
var output = document.querySelector('#star_rating output');

var do_something = function(stars) {
  // An AJAX request could send the data to the server
  output.textContent = stars;
};

Array.prototype.forEach.call(radios, function(el, i){
  var label = el.nextSibling.nextSibling;
  label.addEventListener("click", function(event){
    do_something(label.querySelector('span').textContent);
  });
});

document.querySelector('#star_rating').addEventListener('submit', function(event){
  do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
  event.preventDefault();
  event.stopImmediatePropagation();
});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---
title: Custom Controls
order: 8
wcag_success_criteria:
wcag_techniques:
---

Sometimes form designs require something beyond what is achievable with a standard form control. In such cases it is possible to build added functionality or features on standard controls. Try to reuse HTML elements that do a subset of the functionality that the final control is intended to cover, and build from there. The following examples provide some general guidance on what to consider to ensure the additions are made accessible.

For components where there is no adequate HTML element to build on, WAI-ARIA attributes can be useful to convey the functionality for people using assistive technologies.

## A Share Button
{:.ex}

The example below shows a social media "share button" that has two functions: it shows how many people have already activated the button ("shared"), and allows users to press the button to activate the share function.

The custom button relies on CSS to style a regular `<button>` element, so that the basic functionality remains intact when it is rendered without CSS. For example, most screen readers will announce the button and its contents.

In addition, the `action` attribute of the `<form>` element references a server-side script that carries out the same functionality for cases when JavaScript is not supported.

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

A star rating usually consists of images of five stars that can be used to rate a particular item. A mouse user hovers over the stars and clicks one to select it. For example, if the user clicks on the third star from the left, the rating of the item is 3 of 5 stars.

To make this as accessible as possible, a form is used with its fields visually hidden. It contains 6 radio buttons, one for each star and another for 0 stars, which is checked by default. The labels for the radio buttons contain actual text (“1 Star”, “2 Stars”, …), and are also hidden visually. The form also contains a visually hidden submit button so that the form is not automatically submitted when keyboard users browse through the radio buttons.

The images of the stars are generated using <abbr title="Scalable Vector Graphics">SVG</abbr>. The coloring animation of these stars is initiated through the <abbr title="Cascading Style Sheets">CSS</abbr> `:focus` and `:hover` pseudo classes, so that they can be activated using a mouse, keyboard, and other input methods. The `:checked` pseudo class and the general sibling selector `~` are used to indicate the selected, active, and inactive stars.

{::nomarkdown}
<%= sample_start %>

<form action="#" id="star_rating">
 <input value="0" id="star0" checked
	type="radio" name="rating" class="visuallyhidden">
	<label for="star0">
		<span class="visuallyhidden">0 Stars</span>
		<svg viewBox="0 0 512 512">
			<g stroke-width="70" stroke-linecap="square">
						<path d="M91.5,442.5 L409.366489,124.633512"></path>
						<path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
				</g>
		</svg>
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
		stroke: currentColor;
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
		color: #858585;
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
	#star_rating input:focus ~ label,
	#star_rating input[id="star0"] + label {
		color: #999;
	}
	#star_rating input:hover + label,
	#star_rating input:focus + label {
		color: #036;
	}
	#star_rating input[id="star0"]:checked + label {
		color: #ff2d21;
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
		<svg viewBox="0 0 512 512">
			<g stroke-width="70" stroke-linecap="square">
				<path d="M91.5,442.5 L409.366489,124.633512"></path>
				<path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
			</g>
		</svg>
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
	stroke: currentColor;
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
#star_rating input:focus ~ label,
#star_rating input[id="star0"] + label {
	color: #999;
}
#star_rating input:hover + label,
#star_rating input:focus + label {
	color: #036;
}
#star_rating input[id="star0"]:checked + label {
	color: #ff2d21;
}
#star_rating [type="submit"] {
	float:none;
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

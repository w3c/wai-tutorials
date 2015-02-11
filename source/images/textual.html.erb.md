---
title: Images of Text
technologies: WAI-ARIA, HTML5, CSS Transforms, CSS Fonts, MathML
wcag_techniques:
  - C22
  - G94
order: 5
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Images of text display text that is intended to be read. With the current CSS capabilities in most web browsers, it is good design practice to use actual text that is styled with CSS rather than image-based text presentation. Actual text is much more flexible than images: It can be resized without losing clarity, and background and text colors can be modified to suit the reading preferences of users. Images are more likely to distort and pixelate when resized. In those uncommon situations where images of text must be used, the text alternative must contain the same text presented in the image.

## Image of styled text with decorative effect
{:.ex}

This following image is used to convey a slogan text with decorative effects. Previously it was not possible to create such text using CSS styling that would be rendered consistently across browsers, which is why images of text were used. The text alternative for this image is the same as the slogan presented in the image: “Your access to the city”. The decorative effects (stylized text and shadow) are not be described because they are not relevant.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![City Lights: your access to the city.](bad-top-text.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="access-city.png" alt="Your access to the city.">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Alternative approach

<aside class="annotation">
	<h4 class="annotation-header">Browser Support</h4>
	<div class="annotation-content">
		<p>Displaying these effects requires browsers that support the following web technologies:</p>
		<ul>
			<li><a href="http://www.w3.org/TR/css3-transforms/">CSS Transforms</a></li>
			<li><a href="http://www.w3.org/TR/css3-webfonts/">CSS Fonts</a></li>
		</ul>
	</div>
</aside>

The visual effects in the above image can be produced using CSS3 and an embedded font. Authors and developers that need to support older browsers may find the image example useful, if a less styled fallback text isn’t an option.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<div class="background">
	<div class="tagline"><span>Your access to the city</span></div>
</div>
<style>
  @font-face {
	font-family: 'Harabara Hand';
	src: url('../examples/harabarahand.eot#');
	src: url(data:application/x-font-woff;charset=utf-8;base64,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) format('woff'),
		 url('../examples/harabarahand.ttf') format('truetype');
	font-weight: normal;
	font-style: italic;
}
	.background {
		background-color: #FFF;
		padding: 2em;
	}
	.tagline {
		padding-left: 1em;
		background-color: #DDD9D6;
		font-family: 'Harabara Hand', cursive;
		text-transform: lowercase;
		color: #226C8E;
		font-size: 1.5em;
		box-shadow: 0 2px  4px rgba(0,0,0,.5);
		letter-spacing: -1px;
	}
	.tagline span {
    display: inline-block;
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
	}
</style>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<div class="tagline"><span>Your access to the city</span></div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
@font-face {
  font-family: 'Harabara Hand';
  src: url('harabarahand.eot#');
  src: url('harabarahand.woff') format('woff'),
	   url('harabarahand.ttf') format('truetype');
}

.background {
	background-color: #FFF;
	padding: 2em;
}
.tagline {
	font-family: 'Harabara Hand', cursive;
	text-transform: lowercase;
	color: #226C8E;
	font-size: 1.5em;
	letter-spacing: -1px;
	padding-left: 1em;
	background-color: #DDD9D6;
	box-shadow: 0 2px  4px rgba(0,0,0,.5);
}
.tagline span {
	display: inline-block;
	transform: rotate(-10deg);
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The code snippet doesn’t show any [vendor prefixes](http://www.w3.org/TR/css-2010/#experimental). These can be added to increase compatibility with older versions of web browsers using their experimental implementation of CSS3 features.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Image of text used as an unlinked logo
{:.ex}

The following image is the logo for the Web Accessibility Initiative. It is not part of a link, so the text alternative is “Web Accessibility Initiative”. There’s no need to mention that it is a logo.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Web Accessibility Initiative](wai.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="wai.png" alt="Web Accessibility initiative">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note 1:** Images used as logos are exempt from some of the accessibility requirements that apply to other images of text. For example, there are no minimum color contrast and text size requirements.

**Note 2:** If this logo were linked then it would become a functional image. See [Functional Images: Image used alone as a linked logo](functional.html#image-used-alone-as-a-linked-logo).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Mathematical expressions
{:.ex}

Historically, math expressions have often been presented as images because of the difficulty of presenting equations and special math symbols with HTML. However, MathML is emerging as the preferred presentation of accessible math on the Web.

### Using images
{:.ap}

The image below displays a recurring decimal number (decimal numbers that never end). The `alt` text for this recurring number is “0.3333 recurring. (In the image, the recurrence is indicated by a line over the ‘3’ in the fourth decimal place.)”

In this particular example, the way that the recurrence is shown is important, so it is also described in the text alternative. As with other images, the author is in the best position to determine what information is intended to be conveyed by the image and construct the text alternative accordingly.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![0.3333 recurring. (The recurrence is indicated by a line over the ‘3’ in the fourth decimal place)](repeat1.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img
	src="0dot3333recurring.png"
	alt="0.3333 recurring. (The recurrence is indicated by a line over the ‘3’ in the fourth decimal place)">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using MathML
{:.ap}

Images of math expressions should only be used in *exceptional circumstances* – for example, when the expression is an exception to the normal content for the page or website. The preferred method for displaying math expressions is MathML, which can present math semantically.

If math forms are a substantial part of the content (for example, for online maths courses), [MathML](http://www.w3.org/Math/) should be used instead. MathML represents both presentation and content semantically, making it potentially more accessible to a wider range of users.

<aside class="annotation">
	<h4 class="annotation-header"><span class="subhead">Accessibility Support:</span> MathML, Web Browsers, and Assistive Technologies</h4>
	<div class="annotation-content">
		<p>Most web browsers need plugins to render MathML correctly – especially for the new MathML 3.0 features used in this example. To see the MathML example below, <a href="https://addons.mozilla.org/en-US/firefox/addon/mathml-mml3ff/">this Firefox plugin</a> may be needed.</p>
		<p>Some libraries that polyfill MathML for web browsers, like <a href="http://www.mathjax.org">MathJax</a>, provide support for <a href="http://www.mathjax.org/resources/articles-and-presentations/accessible-pages-with-mathjax/">accessibility features</a>.</p>
    <p>Accessibility support for MathML varies, but continues to improve as web browsers and assistive technology evolve. It is important to evaluate MathML support before deciding which techniques to use.</p>
		<p>Find more information about the state of MathML <a href="https://trac.webkit.org/wiki/MathML">in Webkit-based</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Status">in Mozilla-based browsers</a>.</p>
	</div>
</aside>

The simple example of the recurring number illustrates the difficulty of describing both the content and presentation in mathematical expressions succinctly and clearly. Specifically, it is cumbersome to describe the position and location of the over-line representing recurrence, though it is important for some classroom settings. For more complex expressions or equations, text alternatives for images are unlikely to provide sufficient detail succinctly. MathML helps provide such semantics within the code rather than as text.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<math>
	<mstack stackalign="right">
		<msline length="1"/>
		<mn> 0.3333 </mn>
	</mstack>
</math>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<math>
	<mstack stackalign="right">
		<msline length="1"/>
		<mn> 0.3333 </mn>
	</mstack>
</math>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The above code includes semantic information that conveys both content and presentation to assistive technologies.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

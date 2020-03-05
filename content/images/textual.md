---
title: "Images of Text"
permalink: /tutorials/images/textual/
ref: /tutorials/images/textual/
lang: en
description:
image: /content-images/wai-tutorials/images/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/images/textual.md'
metafooter: true

resource:
  ref: /tutorials/images/
navigation:
  previous: /tutorials/images/functional/
  next: /tutorials/images/complex/

wcag_techniques:
- C22
- G94

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - David MacDonald
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

Images of text display text that is intended to be read. With the current CSS capabilities in most web browsers, it is good design practice to use actual text that is styled with CSS rather than image-based text presentation. Genuine text is much more flexible than images: It can be resized without losing clarity, and background and text colors can be modified to suit the reading preferences of users. Images are more likely to distort and pixelate when resized. In those rare situations where images of text must be used, the text alternative must contain the same text presented in the image.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include_cached toc.html %}

## **Example 1:** Styled text with decorative effect

This following image is used to convey a slogan text with decorative effects.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![City Lights: your access to the city.]({{ "/content-images/wai-tutorials/images/bad-top-text.png" | relative_url }})

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using an image


Previously it was not possible to create such text using CSS styling that would be rendered consistently across browsers, which is why images of text were used. The text alternative for this image is the same as the slogan presented in the image: “Your access to the city”. The decorative effects (stylized text and shadow) are not be described because they are not relevant.

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img src="access-city.png" alt="Your access to the city.">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using CSS3



The visual effects in the above image can be produced using CSS3 and an embedded font. Authors and developers that have to support older browsers may find the image example useful if a less styled fallback text isn’t an option.

{::nomarkdown}
{% include box.html type="start" title="Browser Support" class="simple right" %}
{:/}

Displaying these effects requires browsers that support the following web technologies:

* <a href="https://www.w3.org/TR/css3-transforms/">CSS Transforms</a>
* <a href="https://www.w3.org/TR/css3-webfonts/">CSS Fonts</a>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<div class="background">
  <div class="tagline"><span>Your access to the city</span></div>
</div>
<style>
  @font-face {
  font-family: 'Harabara Hand';
  src: url('{{ "/content-images/wai-tutorials/images/harbarbarahand.ttf" | relative_url }}') format('truetype');
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
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<div class="tagline"><span>Your access to the city</span></div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: CSS" class="example" %}
{:/}

~~~ css
@font-face {
  font-family: 'Harabara Hand';
  src: url('harabarahand.ttf') format('truetype');
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
{% include box.html type="end" %}
{:/}

{% include ednote.html note="Remove Outdated Support Notes" issue="3" repo="" status="open" %}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

The code snippet doesn’t show any [vendor prefixes](https://www.w3.org/TR/css-2010/#experimental). These can be added to increase compatibility with older versions of web browsers using their experimental implementation of CSS3 features.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 2:** Image of text used as an unlinked logo

The following image is the logo for the Web Accessibility Initiative. It is not part of a link, so the text alternative is “Web Accessibility Initiative”. There’s no need to mention that it is a logo.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![Web Accessibility Initiative]({{ "/content-images/wai-tutorials/images/wai.png" | relative_url }})

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img src="wai.png" alt="Web Accessibility initiative">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

1. Images used as logos are exempt from some of the accessibility requirements that apply to other images of text. For example, there are no minimum color contrast and text size requirements.

2. If this logo were linked then it would become a functional image. See [Functional Images: Image used alone as a linked logo]({{"/tutorials/images/functional/" | relative_url}}#image-used-alone-as-a-linked-logo).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 3:** Mathematical expressions

Historically, math expressions have often been presented as images because of the difficulty of presenting equations and special math symbols with HTML. However, MathML is emerging as the preferred presentation of accessible math on the Web.

### Using images


The image below displays a recurring decimal number (decimal numbers that never end). The `alt` text for this recurring number is “0.3333 recurring. (In the image, the recurrence is indicated by a line over the ‘3’ in the fourth decimal place.)”

In this particular example, the way that the recurrence is shown is important, so it is also described in the text alternative. As with other images, the author is in the best position to determine what information is intended to be conveyed by the image and construct the text alternative accordingly.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![0.3333 recurring. (The recurrence is indicated by a line over the ‘3’ in the fourth decimal place)]({{ "/content-images/wai-tutorials/images/repeat1.png" | relative_url }})

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img
  src="0dot3333recurring.png"
  alt="0.3333 recurring. (The recurrence is indicated by a line over the ‘3’ in the fourth decimal place)">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using MathML


Images of math expressions should only be used in *exceptional circumstances* – for example when the expression is an exception to the regular content of the page or website. The preferred method for displaying math expressions is MathML, which can present mathematical expressions semantically.

If math forms are a substantial part of the content (for example, for online maths courses), [MathML](https://www.w3.org/Math/) should be used instead. MathML represents both presentation and content semantically, making it potentially more accessible to a wider range of users.

{::nomarkdown}
{% include box.html type="start" title="Accessibility Support: MathML, Web Browsers, and Assistive Technologies" class="simple right" %}
{:/}

Most web browsers need plugins to render MathML correctly – especially for the new MathML 3.0 features used in this example. To see the MathML example below, <a href=" https://addons.mozilla.org/en-US/firefox/addon/presentation-mathml-polyfill/">this Firefox plugin</a> may be needed.

Some libraries that polyfill MathML for web browsers, like <a href="http://www.mathjax.org">MathJax</a>, provide support for accessibility features.

Accessibility support for MathML varies, but continues to improve as web browsers and assistive technology evolve. It is important to evaluate MathML support before deciding which techniques to use.

Find more information about the state of MathML <a href="https://trac.webkit.org/wiki/MathML">in Webkit-based</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Status">in Mozilla-based browsers</a>.


{::nomarkdown}
{% include box.html type="end" %}
{:/}

The simple example of the recurring number illustrates the difficulty of describing both the content and presentation in mathematical expressions succinctly and clearly. Specifically, it is cumbersome to describe the position and location of the over-line representing recurrence, though it is important for some classroom settings. For more complex expressions or equations, text alternatives for images are unlikely to provide sufficient detail succinctly. MathML helps provide such semantics within the code rather than as text.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<math>
  <mstack stackalign="right">
    <msline length="1"/>
    <mn> 0.3333 </mn>
  </mstack>
</math>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<math>
  <mstack stackalign="right">
    <msline length="1"/>
    <mn> 0.3333 </mn>
  </mstack>
</math>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

The above code includes semantic information that conveys both content and presentation to assistive technologies.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

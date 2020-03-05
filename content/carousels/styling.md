---
title: Styling

lang: en
permalink: /tutorials/carousels/styling/
ref: /tutorials/carousels/styling/

github:
  repository: w3c/wai-tutorials
  path: 'content/carousels/styling.md'

resource:
  ref: /tutorials/carousels/
navigation:
  previous: /tutorials/carousels/animations/
  next: /tutorials/carousels/working-example/

wcag_success_criteria:
- 1.4.1
- 1.4.3
- 2.4.7
- 2.5.5
first_published: "May 2015"
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

## Button Size

Use appropriately sized buttons and links, and provide whitespace around them, to allow people with reduced dexterity to use the carousel more easily. This also benefits people using touch screens, such as on mobile devices. Buttons and links that are not inline in a block of text should be at least 44 × 44 CSS pixels.

## Contrast

![Example using semi-transparent background colors to ensure sufficient contrast.]({{ "/content-images/wai-tutorials/carousels/carousels-styling-contrast.png" | relative_url }}){:.left} Ensure sufficient contrast between the foreground and the background of text, links, and buttons. This can be a challenge when text or buttons are positioned on top of images. In that case, a (semi-) opaque background color can help to maintain the contrast regardless of the image used.


{% include ednote.html note="The following paragraph was show in a side column before." %}For more information on contrast requirements, see [Provide sufficient contrast between foreground and background](https://www.w3.org/WAI/gettingstarted/tips/designing.html#provide-sufficient-contrast-between-foreground-and-background).

## Indicate Button Status

Since the navigation buttons added to the carousel are typically small, it is important to indicate their status both in color and shape (in addition to proper naming and labeling). This makes it easier for people to differentiate the buttons and their current status.

In the following example, a filled square is used for buttons associated with items currently not shown. The button for the item shown has rounded corners and inverted colors. When users hover over these buttons using a mouse or focus them using a keyboard, their border is dotted.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<style>
.slidenav li {
  display: inline-block;
}
.slidenav button {
  border: 2px solid #036;
  background-color: #036;
  line-height: 1em;
  height: 2em;
  width: 2em;
  font-weight: bold;
  color: #fff;
}

.slidenav button.current {
  border-radius: .5em;
  background-color: #fff;
  color: #333;
}

.slidenav button:hover,
.slidenav button:focus {
  border: 2px dotted #fff;
}

.slidenav button.current:hover,
.slidenav button.current:focus {
  border: 2px dotted #036;
}
</style>

<ul class="slidenav as-sample">
  <li>
    <button class="current" data-slide="0" type="button">
      <span class="visuallyhidden">News</span> 1
      <span class="visuallyhidden">(Current Slide)</span>
    </button>
  </li>
  <li>
    <button data-slide="1" type="button">
      <span class="visuallyhidden">News</span> 2
    </button>
  </li>
  <li>
    <button data-slide="2" type="button">
      <span class="visuallyhidden">News</span> 3
    </button>
  </li>
</ul>

<style>
  .slidenav.as-sample {
    position: static;
  }
</style>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include ednote.html note="The following paragraph was show in a side column before." %}A [working demo example](/tutorials/carousels/working-example/) for this code is available.

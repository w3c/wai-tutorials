---
title: Styling
status: draft
order: 5
wcag_success_criteria:
- 1.4.1
- 1.4.3
- 2.4.7
---

## Button Size

Use appropriately sized buttons and links, and provide whitespace around them, to allow people with reduced dexterity to use the carousel more easily. This also benefits people using touch screens, such as on mobile devices.

WCAG 2.0 does not have specific recommendations for button and link sizes, and surrounding white space. Refer to the suggested improvements for [target size](http://w3c.github.io/Mobile-A11y-TF-Note/#targetSize) that are currently in discussion. At a minimum, touch areas of less than 45 × 45 px should be avoided.

## Contrast

{::nomarkdown}
<%= ref :start %>
{:/}

![Example using semi-transparent background colors to ensure sufficient contrast.](carousels-styling-contrast.png){:.sideimage.left} Ensure sufficient contrast between the foreground and the background of text, links, and buttons. This can be a challenge when text or buttons are positioned on top of images. In that case, a (semi-) opaque background color can help to maintain the contrast regardless of the image used.

{::nomarkdown}
<%= ref :middle %>
{:/}

For more information on contrast requirements, see [Provide sufficient contrast between foreground and background](https://www.w3.org/WAI/gettingstarted/tips/designing.html#provide-sufficient-contrast-between-foreground-and-background).

{::nomarkdown}
<%= ref :end %>
{:/}

## Indicate Button Status

Since the navigation buttons added to the carousel are typically small, it is important to indicate their status both in color and shape (in addition to proper naming and labeling). This makes it easier for people to differentiate the buttons and their current status.

In the following example, a filled square is used for buttons associated with items currently not shown. The button for the item shown has rounded corners and inverted colors. When users hover over these buttons using a mouse or focus them using a keyboard, their border is dotted.

{::nomarkdown}
<%= demo %>
{:/}

{::nomarkdown}
<%= sample_start %>

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

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= demo :middle %>
{:/}

A [working demo example](working-example.html) for this code is available.

{::nomarkdown}
<%= demo :end %>
{:/}

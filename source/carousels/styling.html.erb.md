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

Use appropriately sized interactive buttons and links to allow people with physical impairments to use the carousel more easily. This will also benefit people using touch screens.

As a rule of thumb, {::comment} See what I did there? {:/} a minimal physical size of 9 × 9 mm for interactive elements [is recommended](https://www.w3.org/TR/mobile-accessibility-mapping/#h-touch-target-size-and-spacing) and it helps if the element is surrounded by a small amount of inactive space. While you could use millimeters in CSS, the physical rendering size might differ from device to device depending on resolution and display size. Use a minimum of 45 × 45 px in CSS to cover a 9 × 9 mm space on many devices.

## Contrast

{::nomarkdown}
<%= ref :start %>
{:/}

![Example using semi-transparent background colors to ensure sufficient contrast.](carousels-styling-contrast.png){:.sideimage.left} Ensure sufficient contrast between the foreground and the background of text, links, and buttons. This can be a challenge when text or buttons are positioned on top of images. In that case, a (semi-) opaque background color can help to maintain the contrast regardless of the image used.

Text must have a 3:1 ratio if the font size is above 18.5 px (14 pt) bold or above 24 px (18 pt) normal weight, and a 4.5:1 ratio otherwise.

{::nomarkdown}
<%= ref :middle %>
{:/}

Use an [evaluation tool](https://www.w3.org/WAI/ER/tools/) to make sure the contrast of your text color is sufficient.

More information on contrasts and other aspects of how design influences web accessibility will be provided in a future _Design Tutorial_.

{::nomarkdown}
<%= ref :end %>
{:/}

While currently there are no contrast guidelines about other aspects of the interface of a website, it is best practice to ensure the same contrast levels for links and buttons. This allows people with visual disabilities to see, and interact with, the carousel.

## Use Button Shape to Indicate Status

Since the buttons are typically small, it is important to indicate their status both in color and shape (in addition to proper naming and labeling). In this example a filled square is used for buttons associated with items currently not shown.

The “active” button (that is associated with the current item) has a white background, a blue border and slightly rounded corners. When a keyboard user focuses or a mouse user hovers a button, that button will have a dashed border. In the following example, the carousel is showing item 1.

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
  border: 2px dashed #fff;
}

.slidenav button.current:hover,
.slidenav button.current:focus {
  border: 2px dashed #036;
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

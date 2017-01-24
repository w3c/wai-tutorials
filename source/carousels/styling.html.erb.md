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

As a rule of thumb, {::comment} See what I did there? {:/} usable touch controls need to be bigger and have empty space around them to avoid touching the wrong control. While future recommendations of the minimum touch sizes are discussed at the moment, touch areas of less than 45 × 45 px might reduce touch usability significantly.

## Contrast

{::nomarkdown}
<%= ref :start %>
{:/}

![Example using semi-transparent background colors to ensure sufficient contrast.](carousels-styling-contrast.png){:.sideimage.left} Ensure sufficient contrast between the foreground and the background of text, links, and buttons. This can be a challenge when text or buttons are positioned on top of images. In that case, a (semi-) opaque background color can help to maintain the contrast regardless of the image used. For more information on contrast ratios, see [“Tips for Designing for Web Accessibility – Provide sufficient contrast between foreground and background”](https://www.w3.org/WAI/gettingstarted/tips/designing.html#provide-sufficient-contrast-between-foreground-and-background).

{::nomarkdown}
<%= ref :middle %>
{:/}

More information on contrasts and other aspects of how design influences web accessibility will be provided in a future _Design Tutorial_.

{::nomarkdown}
<%= ref :end %>
{:/}

## Use Button Shape to Indicate Status

Since the buttons are typically small, it is important to indicate their status both in color and shape (in addition to proper naming and labeling). In this example a filled square is used for buttons associated with items currently not shown.

The “active” button (that is associated with the current item) has a white background, a blue border and slightly rounded corners. When a keyboard user focuses or a mouse user hovers a button, that button will have a dotted border. In the following example, the carousel is showing item 1.

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

---
title: Styling
status: editors-draft
order: 5
type: tips
wcag_success_criteria:
---

## Contrast

Ensure sufficient contrast between the foreground and the background of text and interactive elements. This can be a challenge when text or buttons are positioned on top of images.

Text needs to have a 3:1 ratio if the font size is above 18.5 px (14 pt) bold or above 24 px (18 pt) normal, and a 4.5:1 ratio otherwise. This includes text on images.

{::nomarkdown}
<%= ref :start %>
{:/}

![Example using semi-transparent background colors to ensure sufficient contrast.](carousels-styling-contrast.png){:.sideimage.left} While there are no contrast guidelines about other aspects of the interface of a website, it is best practice to ensure the same contrast levels for buttons and other interactive elements. This allows [people with visual disabilities](https://www.w3.org/WAI/intro/people-use-web/diversity#visual) to see and interact with the carousel.

To ensure sufficient contrast, use a [browser plugin](https://www.w3.org/WAI/ER/tools/?q=wcag-20-w3c-web-content-accessibility-guidelines-20&q=browser-plugin) to test the contrast of your text colors. If you place text on top of an image, a (semi-transparent) background color can help to maintain the contrast regardless of the image used.

{::nomarkdown}
<%= ref :middle %>
{:/}

More information on contrasts and other aspects of how design influences web accessibility will be provided in a future _Design Tutorial_. In the meantime find more information in the related documents below.

{::nomarkdown}
<%= ref :end %>
{:/}

Depending on the visual style you use for previous, next and play/pause buttons, you might need to similarly add a background. Another approach is to move the button outside of the area where the image is displayed.

## Button Size

Use appropriately sized interactive elements (buttons, links) to allow [people with physical impairments](https://www.w3.org/WAI/intro/people-use-web/diversity#physical) to use the carousel more easily. This will also benefit users on mobile devices.

As a rule of thumb, {::comment} See what I did there? {:/} a minimal physical size of 9 × 9 mm for interactive elements [is recommended](https://www.w3.org/TR/mobile-accessibility-mapping/#h-touch-target-size-and-spacing) and it helps if the element is surrounded by a small amount of inactive space. While you could use millimeters in CSS, the physical rendering size might differ from device to device depending on resolution and display size. Use a minimum of 45 × 45 px in CSS to cover a 9 × 9 mm space on many devices.
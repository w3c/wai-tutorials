---
title: O – Scrolling
status: editors-draft
order: 11
---

- **What to do:** Provide pause and play controls for any carousel set to auto-scroll.
- **Why:** The scroll speed may be too fast for some users to read its content, while the movement itself can distract other users, preventing them from reading static text on the same page.
- **How:** Ensure that there is a pause function written into the script and that pause/play buttons are device independent.
- **Conformance:** This is an overall conformance requirement as well as being required to meet [SC 2.2.2: Pause, Stop, Hide](http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause)

Whether or not user controls are available to change slide views, any carousel script that causes slides to scroll, rotate or to change automatically must contain a function that enables the user to stop the movement.

This function could be called from a single “Play/Pause” button, where the script also switches between “play” and “pause” images (and their `alt` attributes), or two buttons, one to pause the movement , and the other to restart the scrolling.

![Pause](../img/placeholder.gif) ![Play](../img/placeholder.gif)

The “stop” function should also be called if the user activates any slide selection buttons, to give them time to read or understand the slide.

The carousel should not resume scrolling until and unless the user activates the “play” button.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** As discussed on the [controls](controls.html) page, all buttons in the carousel should be coded as buttons or have a WAI-ARIA `role` attribute of `button` to let users know that they are controls, not links.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Related WCAG2.0 Technique:

- [xxx Technique name](#)

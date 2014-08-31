---
title: Actions
status: editors-draft
order: 3
---

- **What to do:** Ensure that the script moves actual focus as well as visual focus to the current slide and effectively hides slides that aren’t in view.
- **Why:** To remove unnecessary tab stops, making navigation for keyboard only users less arduous.
- **How:** Use conditional rendering to display slides and provide a mechanism for positioning focus into the current slide.
- **Conformance:** ???

Carousels may have either one or several slides visible at any one time, users can select one of the carousel controls to change the display. When this happens, two actions should occur:

- The current slides on display should be removed from the DOM and replaced with the new slide or slides
- Visual and keyboard focus should be positioned in the new slide or to the first of the new slides on display

Overall description of examples

## Display

All scripts that have user controls will have functions that move a selected slide or slides into the visual display, however some of these may only move “invisible” slides out of view but still leave them physically written to the page.

Ensure that the script you are using either uses functions of the DOM to conditionally render the current slide view, or uses the CSS property `display: none;` rather than off-screen positioning to hide non-current slides.


**Important:** In addition to making sure that people who can’t use a mouse have an equivalent experience to those who can, the above also ensures that screen reader users don’t have to encounter all of the content in the carousel, making their browsing and reading experience closer to that enjoyed by other users.

### Focus

When users select a slide control, the script should move focus onto the current slide. If the slide is a link, they will then be in a position to activate it if required. If the slide contains no link, the slide content can be given a `tabindex` attribute with a value of `-1, to ensure that it can receive focus.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Screen readers will announce the text or text equivalent that has received focus, so ensure that this would be sufficiently informative to let blind users know what the slide is about.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Related WCAG2.0 Technique:

- [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G135)

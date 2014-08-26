---
title: Slider & Carousel Concepts
tutorial_title: Sliders & Carousels
nav_title: Slider Concepts
status: editors-draft
order: 1
topic_order: 4
type: intro
---

Carousels display only a certain part of their content at a time. This content can be basically anything, from images to headings or complete teasers. If there are only headings in the carousel, it is often called slideshow, or, in short, slider. New content is revealed either by user interaction or after a certain amount of time.

- **[Structure](structure.html):** The carousel as a whole as well as individual slides should have structural markup (code) that enables users to establish where they are;
- **[Controls](controls.html):** User interaction to change the display must be possible by both keyboard and mouse, as well as being identifiable, both visually and to people who can’t see them;
- **[Action](actions.html):** When a control is activated the visually rendered effect should be replicated in actual content and functionality;
- **[Scrolling](scrolling.html):** If the carousel automatically changes slides, a mechanism must be provided to pause or stop the movement.

## Who benefits

Accessible carousels effectively draw attention to featured pages or products in a small space and at the same time ensure that:

- **People using keyboard navigation or voice input software:** Can identify the current slide and navigate between slides;
- **People using screen readers:** Will understand where they are and how to navigate between slides ;
- **Users aren’t distracted by movement:**They will be able to pause the rotation while reading static content elsewhere on the page;
- **People who can’t read quickly:** Can stop slide rotation giving them time to read and understand the content of each slide.

## Important

Providing a mechanism to pause any automatic movement is a conformance requirement for the entire page on which the movement occurs. See [conformance requirement 5 (non interference)](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc5).

Relationship to WCAG 2.0:

- [Info and Relationships, SC 1.3.1](http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A);

- [Keyboard, SC2.1.1](http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable): All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes … (Level A).

- [Pause, Stop, Hide, SC 2.2.2](http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause): … For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it … (Level A);

- [name, Role, Value SC 4.1.2](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv):

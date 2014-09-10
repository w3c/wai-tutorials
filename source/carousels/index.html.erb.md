---
title: Carousel Concepts
tutorial_title: Carousels
status: editors-draft
order: 1
topic_order: 4
type: intro
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.2.2
  - 4.1.2
---

Carousels are used to show content in relatively little space by displaying only a portion of the content at a time and rotating through all the whole content, usually in an automatically animated fashion. A wide range of content can be found in carousels: from simple images to complete teasers. Carousels are often called “slide shows” or “sliders”, the individual pieces of content “slides”. As carousels are interactive elements on a page showing and hiding content from the user in an animated way, a variety of considerations have to be included in development:

- **[Structure](structure.html):** The carousel as a whole and individual slides should have structural markup that enables users access the content of the slides easily.
- **[Controls](controls.html):** The user needs to be in full control of the carousel, regardless of the input method (mouse, keyboard, touch etc.).
- **[Animations](animations.html):** Sliders are usually animated. This creates accessibility barriers for many people.

## Pausing slides

In contrast to other success criteria, providing a mechanism to pause automatic movement is required for the entire page on which the movement occurs. [Animations](animations.html) shows an example on how to fulfill this criterion. For further information, see  [WCAG conformance requirement 5, Non-Interference](http://www.w3.org/TR/WCAG20/#cc5).

## Why is this important?

Accessible carousels effectively draw attention to featured pages or products in a small space. They ensure that:

- **People using keyboard navigation or voice input software** can identify the current slide and navigate between slides.
- **People using screen readers** will understand where they are and how to navigate between slides.
- **Users aren’t distracted by movement** as they’ll be able to pause the rotation while reading static content elsewhere on the page.
- **People who can’t read quickly** can stop slide rotation giving them time to read and understand the content of each slide.

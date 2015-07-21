---
title: Carousel Concepts
tutorial_title: Carousels
status: approved-draft
order: 1
topic_order: 4
type: intro
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.2.2
  - 4.1.2
---

Carousels, commonly also referred to as “slide shows” or “sliders”, display one item from a series of content items. Common examples are scrolling news headlines and images. Carousels often use animations to move from slide to slide, which can be distracting for some users. They may also move too fast for some users to be able to read.

Carousels should have a function that allows users to pause and advance the animation. They need to be implemented in a way that is not interfering with keyboard use. In some instances, keyboard users may even get stuck inside the carousel, without a chance to leave it and access the rest of the page. This tutorial highlights accessibility considerations for carousels:

- **[Structure](structure.html):** Provide structural markup for the carousel and its items.

- **[Functionality](functionality.html):** Add the functionality to display one carousel item at a time.

- **[Animations](animations.html):** Add animation and ensure users have control over these animations.

- **[Complete code example](full-code.html):** The full JavaScript code on one page.

## Why is this important?

Carousels are frequently used, in particular on home pages, to draw readers' attention to featured articles and products of the website. Given their prominence, inaccessible carousels can be a major obstacle for many website visitors. On the other hand, accessible carousels provide more effective access for many users including:

- **People using keyboard navigation and voice input software** can navigate between carousel items.
- **People using screen readers** will understand where they are and how to navigate between carousel items.
- **People who are distracted by movement** are able to pause the animations while reading the web page.
- **People who need more time to read** have sufficient time to read and understand each carousel item.

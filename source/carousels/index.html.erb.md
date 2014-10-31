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

Carousels, commonly also referred to as “slide shows” or “sliders”, display a series of content items one at a time; for example, a series of news headlines. Carousels often use animations to move from slide to slide which can be distracting for some users. They may also move so fast automatically that their content is hard or impossible to grasp, which is why every carousel should have a function to pause the animation.

Also, carousels often pose traps to keyboard users, not allowing them to use the carousel. They may even get stuck inside, without a chance to leave the carousel and read the rest of the page. This tutorial highlights the particular accessibility considerations for such carousels:

- **[Structure](structure.html):** Provide structural markup for the carousel and its items, and later enhance these structures with styling and scripting.

- **[Functionality](controls.html):** Provide functionality to display the carousel items one at a time, and to allow users to browse through them.

- **[Animations](animations.html):** Provide users with control over any animations in your carousel.

- **[Full Content](examples/carousel.html):** The complete example source code.

## Why is this important?

Carousels are frequently used, in particular on home pages, to draw the readers' attention to featured articles and products of the website. Given their prominence, inaccessible carousels can be a major obstacle for many website visitors. On the other hand, accessible carousels provide more effective access for many users including:

- **People using keyboard navigation and voice input software** can navigate between carousel items.
- **People using screen readers** will understand where they are and how to navigate between carousel items.
- **People who are distracted by movement** are able to pause the animations while reading the web page.
- **People who need more time to read** have sufficient time to read and understand each carousel item.

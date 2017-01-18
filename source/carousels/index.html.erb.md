---
title: Carousel Concepts
tutorial_title: Carousels
status: draft
order: 1
topic_order: 4
type: intro
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.2.2
  - 4.1.2
---

To implement an accessible carousel widget, provide a robust structure and user control:

* **[Structure](structure.html):**  Use semantic structure for the carousel to support proper function of assistive technology.
* **[Functionality](functionality.html):** Add functionality to display and announce carousel items.
* **[Animations](animations.html):** Add a slide-over animation and ensure users can stop and resume it.
* **[Styling](styling.html):** Style the carousel to make sure it’s useable and readable by everyone.

See also the [complete working example](working-example.html) and [full code](full-code.html) of the example carousel.

## What are carousels?

Carousels show a collection of items one at a time. They are also known as “slide shows” and “sliders”. Scrolling news headlines, featured articles on home pages, and image galleries are common uses of carousels.

## What are the key points?

- Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.
- All functionality, including navigating between carousel items, must be operable by keyboard.
- Carousel item changes must be announced to all users.
- The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.

## Why is this important?

Carousels are typically prominently located and are used to provide navigation or show page content. Accessible carousels are essential for many website users including:

- **People using keyboard navigation and voice input software** can navigate between individual items.
- **People using screen readers** will understand which item is currently shown and how to navigate between items.
- **People who are distracted by movement** are able to pause animations.
- **People who need more time to read** are able to pause animations, providing them with sufficient time to read and understand carousel content.

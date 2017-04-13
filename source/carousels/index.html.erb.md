---
title: Carousel Concepts
tutorial_title: Carousels
order: 1
topic_order: 4
type: intro
wcag_success_criteria:
  - 1.3.1
  - 2.1.1
  - 2.2.2
  - 4.1.2
first_published: "May 2015"
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Implement an accessible carousel widget by providing a robust structure and user control:

* **[Structure](structure.html):**  Use semantic structure for the carousel to support proper function of assistive technology.
* **[Functionality](functionality.html):** Add functionality to display and announce carousel items.
* **[Animations](animations.html):** Add a transition animation between items and ensure users can stop and resume it.
* **[Styling](styling.html):** Style the carousel to make sure it’s usable and readable by everyone.

See also the [complete working example](working-example.html) and [full code](full-code.html) of the example carousel.

## What are carousels?

Carousels show a collection of items one at a time. They are also known as “slideshows” and “sliders”. Typical uses of carousels include scrolling news headlines, featured articles on home pages, and image galleries.

## What makes a carousel accessible?

- Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.
- All functionality, including navigating between carousel items, must be operable by keyboard.
- Changes to carousel items must be communicated to all users, including screen reader users.
- The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.

**Note:** Carousels are disputed from a usability perspective because their content can be hard to discover. Ensuring accessibility can also improve usability.

## Why is this important?

Typically, carousels are prominently located and are used to provide navigation or show page content. Accessible carousels are essential for many website users including:

- **People using keyboard navigation and voice input software** can navigate between individual items.
- **People using screen readers** will understand which item is currently shown and how to navigate between items.
- **People who are distracted by movement** can pause animations.
- **People who need more time to read** can pause animations, providing them with sufficient time to read and understand carousel content.

---
title: "Risks: Why No ARIA is Better Than Bad ARIA"
nav_title: Risks
order: 6
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## The ARIA Contract

1. ARIA provides a vocabulary for describing the meaning and behavior of elements in a way that can be parsed by assistive technologies.
2. Each word in the ARIA vocabulary has a precise meaning defined in the [ARIA specification](https://www.w3.org/TR/wai-aria-1.1/) and explained in the [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/).
3. ARIA markup does not change visual appearance or responses to input from keyboard, touch, or mouse.

## Costs of Violating the Contract

Incorrect ARIA markup can have devistating effects for users of assistive technologies. 
It gives assistive technologies information about the UI that misleads the user.
Incorrect ARIA ccan not only make learning a UI more difficult but even unintentionally hide information or block interactions.

## Bad ARIA Examples

* If you give an element a checkbox role, but don't provide keyboard support, then you’ve said that you’ve made a checkbox but not given it any functionality.
* Or if you do role="presentation", or role="search" on a button that does search, then that can’t be operated by someone who is a screen reader user
* Or if you put ARIA hidden on it, then it hides all of its children, it's no longer accessible.
* ...


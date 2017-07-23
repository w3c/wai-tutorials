---
title: "The Custom Component Problem"
nav_title: "The Problem"
order: 4
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## The Custom Radio Problem

Consider the following HTML.

~~~ html
<div id="basic" class="plan-option"><img src="basic.png" alt="Basic"></div>
<div id="plus" class="plan-option"><img src="plus.png" alt="Plus"></div>
<div id="premium" class="plan-option"><img src="premium.png" alt="Premium"></div>
~~~

If these divs support functionality that enables users to choose one of the plan options, e.g., if clicking one chooses the corresponding plan, that is not something that the browser can determine. 
Thus, a screen reader user will only be able to perceive the presence of three static images, and a keyboard user will not be able to choose a plan either.

To make this new custom radio group accessible, it needs:

1. JavaScript and CSS that provide a keyboard interface.
2. ARIA markup that correctly expresses all six types of accessibility semantics.

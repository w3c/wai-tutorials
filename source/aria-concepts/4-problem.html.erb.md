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

## Custom Radio HTML

Consider the following HTML that could be used to replace the HTML radio group in our scenario.

~~~ html
<div id="basic" class="plan-option"><img src="basic.png" alt="Basic"></div>
<div id="plus" class="plan-option"><img src="plus.png" alt="Plus"></div>
<div id="premium" class="plan-option"><img src="premium.png" alt="Premium"></div>
~~~

This HTML contains very little accessibility semantics. 
A screen reader user can perceive only the presence of three static images -- not very helpful.

To make this new custom component accessible, it needs:

1. JavaScript and CSS that provide a keyboard interface.
2. ARIA markup that correctly expresses applicable accessibility semantics.

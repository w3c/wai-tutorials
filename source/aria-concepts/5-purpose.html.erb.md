---
title: What ARIA Does and Does Not Do for a Custom Component
nav_title: Purpose and Solution
order: 5
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## What the ARIA Solution Does and Does Not Do

1. ARIA tells browsers what to tell assistive technologies about the meaning, purpose, and behaviors of elements. 
2. ARIA does not create or change appearance or behaviors. 

Similar to how visual design expresses meaning through color, style, and position, ARIA expresses meaning with roles, states, and properties. 
Unlike visual design where there are infinite ways of expressing a specific affordance, each ARIA role, state, and property conveys a specific meaning. 

Armed with an understanding of the definitions and conventions associated with each ARIA role, state, and property, developers can accurately express the meanings and behaviors of nearly any visual design they can dream.

## Applying ARIA to the Custom Plan Chooser Component

Step one is to determine which ARIA role correctly describes the purpose and behavior of the new plan chooser component. 

The component:

1. Allows only one plan option to be chosen.
2. Requires an option to be chosen.

These are behaviors associated with a radio group. 
However, when choosing a role for an interactive widget, it is important to ensure the component design includes all behaviors minimally expected for a widget with that role.
To do this, review the keyboard interaction section for patterns that use that role in the WAI-ARIA Authoring Practices.

In this case, the 
[ARIA radio group pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton)
indicates that users expect the radio group to be a single tab stop and to navigate among options with the arrow keys, just like the native HTML `input` with type `radio`.

Once an appropriate pattern is chosen, apply the roles, states, and properties described in the pattern.
Applying the radio group pattern to the custom plan chooser component yields:

~~~ html
<div role="radiogroup" aria-label="Choose a plan">
  <div tabindex="0" role="radio" aria-checked="true" id="basic" class="plan-option"><img src="basic.png" alt="Basic"></div>
  <div tabindex="-1" role="radio" aria-checked="false" id="plus" class="plan-option"><img src="plus.png" alt="Plus"></div>
  <div tabindex="-1" role="radio" aria-checked="false" id="premium" class="plan-option"><img src="premium.png" alt="Premium"></div>
</div>
~~~

Note that:

1. A wrapping `div` was added for the `radiogroup` role. This is analgous to the HTML `fieldset`.
2. The radio buttons get their label from the `alt` attribute on the `img` elements contained inside of the `radio` element.
3. Browsers automatically calculate the number of radios in the group (aria-setsize) and the position of each radio in the group (aria-posinset).


---
title: Purpose and Limits: How to Implement with Understanding of What ARIA Does and Does NOT Do
nav_title: Purpose and Limits
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

1. ARIA tells browsers what to tell assistive technologies about the meaning, purpose, and behaviors of elements. That is, ARIA provides accessibility semantics.
2. ARIA does not create or change appearance or behaviors. Thus, ARIA does not cause browsers to provide a keyboard interface.

Similar to how visual design expresses meaning through color, style, and position, ARIA expresses meaning with roles, states, and properties. 
But, unlike visual design where there are infinite ways of expressing a specific affordance, each ARIA role, state, and property conveys a specific meaning. 

ARIA roles, states, and properties can almost be thought of as a set of CSS properties that control only the rendering of content by assistive technologies.
Thus, armed with an understanding of the definitions and conventions associated with each ARIA role, state, and property, developers can accurately express the meanings and behaviors of nearly any visual design they can dream.

## Applying ARIA to the Custom Plan Chooser Component

Step one is to determine which ARIA role correctly describes the purpose and behavior of the new XYZ plan chooser component. 

The component:

1. Allows only one plan option to be chosen.
2. Requires an option to be chosen.

These are behaviors associated with a radio group. 
However, when choosing a role for an interactive widget, it is important to ensure the component design includes at least the set of behaviors minimally expected for a widget with that role.
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

## Guidance for choosing an ARIA design pattern

Choosing a pattern to apply to a custom UI component from the 
[ARIA Authoring Practices design patterns](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex) 
is typically straight forward.
However, like much of UI engineering, there are circumstances where it requires as much art as science.

When choosing an ARIA design pattern for custom interactive widgets, keep in mind that:

1. Behavior matters more than appearance. If a widget behaves like a radio group, for example, even if it looks nothing like a radio group, radio group may be the best fit. With careful attention to detail, this concept opens up all kinds of possibilities, e.g., a gant chart built from a stack of ARIA toolbars containing menu buttons.
2. Avoid conflicts between ARIA roles and appearance. If an element behaves like a button, avoid giving it a button role while styling it like a link.
3. Implement at least all keyboard interactions that are not marked optional. If arrow keys do not move focus among elements with role `menuitem` contained in an element with role `menu`, then from the perspective of ARIA, the items are not in a menu.
4. ARIA design patterns are recommendations, not standards. They can be creatively extended and combined in any manner that fully complies with the ARIA specification. That said, doing so successfully is tricky and design oversights and implementation defects can have severe negative consequences so proceed with caution and test, test, test.
5. The ARIA Authoring Practices design pattern library is a living document that will never be complete. Feel free to raise a [GitHub issue](https://github.com/w3c/aria-practices/issues) to propose new patterns or inquire about applications of or variations on existing patterns.

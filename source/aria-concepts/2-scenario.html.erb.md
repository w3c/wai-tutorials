---
title: The Scenario: A Site Redesign Plan Replaces  HTML Radios with a Custom Component
nav_title: Scenario
order: 2
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## Scenario

A business offers three service levels, and its purchase page includes the following radio buttons.

<div>
<fieldset>
    <legend>Choose plan:</legend>
    <input id="basic" type="radio" name="plan" value="basic"/>
    <label for="basic">Basic</label><br>
    <input id="Plus" type="radio" name="plan" value="plus"/>
    <label for="plus">Plus</label><br>
    <input id="premium" type="radio" name="plan" value="premium"/>
    <label for="premium">Premium</label><br>
</fieldset>
</div>

The HTML is:

~~~ html
<fieldset>
    <legend>Choose plan:</legend>
    <input id="basic" type="radio" name="plan" value="basic">
    <label for="basic">Basic</label><br>
    <input id="Plus" type="radio" name="plan" value="plus">
    <label for="plus">Plus</label><br>
    <input id="premium" type="radio" name="plan" value="premium">
    <label for="premium">Premium</label><br>
</fieldset>
~~~

This radio group is fully accessible because:

1. The HTML is correctly written so it provides all semantic information required for accessibility.
2. Browsers automatically derive accessibility semantics from the HTML to provide accessibility information to assistive technologies and enable keyboard interaction.

This is really beautiful because the accessibility is almost free and very robust.
The effort to include the small bits of HTML, such as the legend element, label element, and name attribute, that enable browsers to make these radios accessible is trivial.

However, site management wants something new.
They have asked for a site redesign that replaces the vanilla radios with three clickable tiles that include lots of fun visual touches from a new toolkit.
Unfortunately, it is not feasible to alter the toolkit such that the tiles are made from restyled HTML input elements.

Before throwing away this accessibility beauty and building a custom radio group out of divs and images,
let's first understand the complete nature of the free accessibility that will be thrown out and then have to be recreated from the ground up.


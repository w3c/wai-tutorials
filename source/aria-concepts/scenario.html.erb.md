---
title: "The Scenario: A Site Redesign Plan Replaces  HTML Radios with a Custom Component
nav_title: "The Scenario"
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

Before throwing away these accessible beauties and building a custom radio group out of divs and images,
let's first understand the complete nature of the free accessibility that will be thrown out and then have to be recreated from the ground up.

## Accessibility Features Automatically Provided by Browsers When Rendering Semantic HTML

To grasp the purpose and limits of ARIA, it is helpful to understand what browsers do with the accessibility semantics baked into HTML. 
When parsing the above HTML radio group, browsers automatically provide two essential accessibility services:

1. A keyboard interface appropriate for the type of element being rendered.
2. Populating operating system accessibility APIs with semantic information needed by assistive technologies.

Let's take a closer look at each of these.

## Browser-Provided Keyboard Interfaces

For the HTML radio group, the browser automatically:

1. Includes the input elements in the tab sequence of the page.
2. Enables the space key to check the initially focused button if it is not already checked.
3. Because of the common `name` attribute value, includes only one input in the tab sequence and provides arrow key navigation among the radio buttons.
4. Changes the checked state when focus moves so that only one radio within the `fieldset` is checked.

To make keyboard operation as familiar and intuitive as possible, browsers build keyboard interfaces for HTML input elements, links, and buttons that mimic the interfaces of native GUI applications.
Providing the keyboard interface that is conventionally associated with each type of GUI component is an important aspect of accessibility for rich internet applications.
Some assistive technologies utilize the keyboard conventions associated with each type of component to help guide users through interactions.

## Browser-Extracted Accessibility Semantics

The HTML radio group illustrates all six types of accessibility semantics needed to construct rich user interfaces that can be perceived, understood, and operated by users of assistive technologies:

1. Structures
2. Labels
3. Roles
4. Properties
5. States
6. Events

### Structural Semantics

People who can see the visual layout can easily perceive that the radio buttons are related to one another and that they are each a member in a set of three.
Screen readers communicate that kind of information to their users by interpreting structural and relationship semantics provided by accessibility APIs.

When parsing an HTML radio group, 
browsers understand the `fieldset` element designates the group of elements that is labeled by the `legend` element 
and populate their accessibility APIs with structural semantics that describe the grouping. 

### Accessible Labels

While sighted users can easily determine the purpose of each radio is to choose a plan, browsers are able to explicitly communicate the label for the radio group to assistive technologies because of the `legend` element contained inside of the `fieldset` element. 
Similarly, browsers are able to tell assistive technologies about the label on each radio because of the `label` element with a `dfor` attribute that declares which `input` it labels.

### Accessibility Roles

Accessibility role semantics communicate the type of an element to assistive technologies, e.g., tell whether an element is a heading, paragraph, link, or button.
For `input` elements, browsers use the `type` attribute to put appropriate accessibility role semantics into their accessibility tree. 

A screen reader, for example, can then describe the purpose and, for interactive widgets, the interaction model, of the element. 
So, for the radio inputs, a screen reader may not only tell the user that it is a radio button but also explain how to move the focus to another button in the group.

### Accessibility Properties

When interacting with a radio group, it is helpful for the user to have a sense of how many radio buttons are in the group and which is focused. 
A screen reader user cannot easily perceive such information with a "glance" in the same way that a sighted user can.

There are several dozen accessibility properties that can be used to supplement the accessible rendering of an element provided by its label and role. 
For example, in grouped widgets, such as radio buttons, the number of elements (set size) and index of each element within the group (position in set) are calculated by the browser and included in its accessibility tree. 

### Accessibility States

Some interactive elements have states that can be changed dynamically by users. 
For instance, a radio button may or may not be checked. 
While there is visual styling that communicates the checked state to sighted users, that styling is syncronized with a `checked` state that is communicated to assistive technologies via the browser accessibility API.

### Accessible Events

Assistive technology users need to be aware of important changes that happen on screen. 
Browsers alert assistive technologies of such events via their accessibility APIs.

The HTML radio group illustrates two such events. 
When keyboard focus is in a radio group and an arrow key is pressed, the focus changes, which triggers a focus change event, and the checked state of the radios changes, which triggers a state change event.

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

---
title: Automatic Accessibility: Browsers Provide Accessibility for Semantic HTML
nav_title: Automatic Accessibility
order: 3
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## Accessibility Features Automatically Provided by Browsers When Rendering Semantic HTML

When parsing HTML elements that have accessibility semantics associated with them, browsers automatically provide two essential accessibility services:

1. If the element is interactive, a keyboard interface appropriate for the type of element being rendered.
2. Populating operating system accessibility APIs with information assistive technologies use to render and interact with the element.

To grasp the purpose and limits of ARIA, it is helpful to understand some of the details of the accessibility semantics baked into HTML. 

## Browser-Provided Keyboard Interfaces

For the HTML radio group in our scenario, the browser automatically:

1. Includes the input elements in the tab sequence of the page.
2. Enables the space key to check the initially focused button if it is not already checked.
3. Because of the common `name` attribute value, includes only one input in the tab sequence and provides arrow key navigation among the radio buttons.
4. Changes the checked state when focus moves so that only one radio within the `fieldset` is checked.

To make keyboard operation as familiar and intuitive as possible, browsers build keyboard interfaces for HTML input elements, links, and buttons that mimic the interfaces of native GUI applications.
Providing the keyboard interface that is conventionally associated with each type of GUI component is an important aspect of accessibility for rich internet applications.
Some assistive technologies utilize the keyboard conventions associated with each type of component to help guide users through interactions.

Browsers provide keyboard interfaces for interactive HTML elements. 
However, ARIA does not change the look or behavior of a web page. 
So, browsers do not create keyboard interfaces as a part of processing ARIA.

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

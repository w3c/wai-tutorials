---
title: "The Problem: A Site Redesign Replaces  Beautifully Accessible HTML Radio Group Isn’t Good Enough"
nav_title: "The Problem"
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

1. The HTML provides all semantic information required for accessibility.
2. Browsers automatically parse the accessibility semantics, provide accessibility information to assistive technologies, and enable keyboard interaction.

This is really beautiful because the accessibility is almost free.
The effort to include the small bits of HTML, such as the legend element, label element, and name attribute, that enable browsers to make these radios accessible is trivial.

However, management wants something new.
It is time for asite redesign that replaces the vanilla radios with three clickable tiles that include lots of fun visual touches from a new toolkit.
The bad news is that it is not feasible to alter the toolkit such that the tiles are made from restyled HTML input elements.

Before throwing away these accessible beauties and building a custom radio group out of divs and images,
let's first understand the complete nature of this free accessibility we will now have to recreate from the ground up.

## Accessibility Features Automatically Provided by Browsers When Rendering Semantic HTML

To grasp the purpose and limits of ARIA, it is helpful to understand what browsers do with the accessibility semantics baked into HTML. 
When parsing the above HTML radio group, browsers automatically provide two essential accessibility services:

1. A keyboard interface.
2. Populating operating system accessibility APIs with semantic information needed by assistive technologies.

Let's take a closer look at each of these.

## Browser-Provided Keyboard Interfaces

For the HTML radio group, the browser automatically:

1. Includes the input elements in the tab sequence of the page.
2. Enables the space key to check the initially focused button if it is not already checked.
3. Because of the common `name` attribute value, includes only one input in the tab sequence and provides arrow key navigation among the radio buttons.
4. Changes the checked state when focus moves so that only one radio within the `fieldset` is checked.

To make keyboard operation as familiar and intuitive as possible, browsers build keyboard interfaces for HTML input elements, links, and buttons that mimic the interfaces of native GUI applications.
Providing the keyboard interface that is most commonly associated with each type of GUI component is an important aspect of accessibility for rich internet applications.

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

When parsing an HTML radio group, browsers use the structural information provided by the `fieldset` element to populate their accessibility APIs with structural semantics that describe the grouping.

### Accessible Labels

fieldset legend
radio labels

### Accessibility Roles

type=radio

### Accessibility Properties

value, posinset, setsize

### Accessibility States

checked

### Accessible Events

state change
Focus change

## Building the Custom Radios

Time to get to work on the redesign.

~~~ html
<div id="basic" class="plan-option"><img src="basic.png"></div>
<div id="plus" class="plan-option"><img src="plus.png"></div>
<div id="premium" class="plan-option"><img src="premium.png"></div>
~~~

If these divs support functionality that enables users to choose one of the plan options, i.e., if they work like radio buttons, there is no way for an assistive technology to know. A div containing a clickable image could be anything.

To make this new custom radio group accessible, it will need to express all six types of accessibility semantics and provide a keyboard interface.
It takes both ARIA and JavaScript to create all the accessibility that was so easily declared and automatically provided when using HTML.
So, let's next discuss what ARIA does and does not do in this situation.

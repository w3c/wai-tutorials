---
title: "The Problem: The Beautifully Accessible HTML Radio Group Isn't Good Enough"
nav_title: "The Problem"
order: 2
tutorial_title: ARIA Use Prerequisites
status: editors-draft
type: intro
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

<fieldset>
  <legend>Choose plan:</legend>
  <input id="basic" type="radio" name="plan" value="basic">
  <label for="basic">Basic</label><br>
  <input id="Plus" type="radio" name="plan" value="plus">
  <label for="plus">Plus</label><br>
  <input id="premium" type="radio" name="plan" value="premium">
  <label for="premium">Premium</label><br>
</fieldset>

The HTML is:

```
<fieldset>
  <legend>Choose plan:</legend>
  <input id="basic" type="radio" name="plan" value="basic">
  <label for="basic">Basic</label><br>
  <input id="Plus" type="radio" name="plan" value="plus">
  <label for="plus">Plus</label><br>
  <input id="premium" type="radio" name="plan" value="premium">
  <label for="premium">Premium</label><br>
</fieldset>
```

This radio group is fully accessible because:

1. The HTML has the information required for accessibility; it is semantically accurate and complete.
2. Browsers use those semantics to automatically provide accessibility.

This is really beautiful because all the accessibility is almost free. 
It was really nothing to include the small bits of HTML that make these radios accessible.

However, management wants something new.
It is time for asite redesign that replaces the boring buttons with three clickable tiles that include lots of fun visual touches.
The bad news is that it is not feasible to make these tiles by styling HTML input elements.

Before throwing away these accessible beauties and building a custom radio group out of divs and images, 
let's first work on understanding exactly where they get all their accessibility.

## Accessibility Features Automatically Provided by Browsers When Rendering Semantic HTML

To accurately grasp the purpose and limits of ARIA, it is extremely helpful to first understand what browsers do with the accessibility semantics baked into HTML. When parsing the above HTML radio group, browsers automatically provide two essential accessibility services. They:

1. Create a keyboard interface.
2. Populate operating system accessibility APIs with all the semantic information needed to make the radio group fully accessible to any assistive technology. 

Let's take a closer look at each of these.

### Browser-Provided Keyboard Interfaces

For the HTML radio group, the browser automatically:

1. Includes the input elements in the tab sequence of the page.
2. Enables the space key to check the initially focused button if it is not already checked.
3. Because of the common `name` attribute value, includes only one input in the tab sequence and provides arrow key navigation among the radio buttons.
4. Changes the checked state when focus moves so that only one radio within the `fieldset` is checked.

To make keyboard operation as familiar and intuitive as possible, browsers build keyboard interfaces for HTML input elements, links, and buttons that mimic the interfaces of native GUI applications. 
Providing the keyboard interface that is most commonly associated with each type of GUI component is an extremely important aspect of accessibility for rich internet applications.

### Browser-Extracted Accessibility Semantics

The HTML radio group illustrates all six types of accessibility semantics needed to construct rich user interfaces that can be perceived, understood, and operated by users of assistive technologies:

1. Structures
2. Labels
3. Roles
4. Properties
5. States
6. Events

#### Structural Semantics

People who can see the visual layout can easily perceive that the radio buttons are related to one another and that they are each a member in a set of three. 
Screen readers can communicate that kind of information to their users by taking advantage of semantics about structure and relationships that are provided by accessibility APIs.

For the radio group, browsers use the structural information provided by the `fieldset` element to populate their accessibility API with structural semantics about the radio group.

#### Accessible Labels

fieldset legend
radio labels

### Accessibility Roles

type=radio

#### Accessibility Properties

value, posinset, setsize

#### Accessibility States

checked

### Accessible Events

state change
Focus change

### What ARIA is and does

ARIA is the developer telling the browser what to tell the assistive technology about what the developer has done;

* in order that a screen reader user can reliably know what feature is present, and to be able to operate it (perceive what it is, understand what it means, and operate on it)
* if you use any role, the developer is telling the AT via browser that they have provided keyboard support.

## What ARIA isn’t, and doesn’t do

* ARIA does not create any semantics;
* ARIA does not change what the browser does;
* ARIA doesn't add any functionality;
* ARIA is not a cross-platform API for interoperability.
* When you uses ARIA, you acquire new responsibilities

## Why these ARIA concepts are important

* Using ARIA the wrong way can make accessibility worse;
* [Matt can you clarify the following] something about input with type number (spin box) or simpler (check box));
* If you give a check box a role, but don't provide keyboard support, then you’ve essentially said that you’ve made a checkbox but not given it any functionality.
* Or if you do role="presentation", or role="search" on a button that does search, then that can’t be operated by someone who is a screen reader user [Matt please check]
* Or if you put ARIA hidden on it, then it hides all of its children, it's no longer accessible.

## References

* [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
* [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
* And more...

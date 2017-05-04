---
title: "Making an ARIA Radio Group"
nav_title: "ARIA Radio Group"
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

HTML gives you a checkbox

* It looks like a checkbox
* HTML can be fully accessible

For instance, if you start with an Accessible HTML Checkbox:

~~~html
<label><input type="checkbox"> Yes I agree to the above terms.</label>
~~~

It is accessible:

* Screen readers and other assistive technologies know the element is a checkbox because browsers automatically tell assistive technologies about the accessibility role of HTML inputs by mapping the type attribute into their accessibility APIs.
* Screen readers and other assistive technologies can communicate the checked or unchecked state because browsers automatically tell assistive technologies about the accessibility states and properties of HTML inputs by mapping the value of the checked attribute into their accessibility APIs.
* It has an accessible name provided by the label element.
* It is focusable with the keyboard because browsers automatically make HTML input elements focusable and includes them in the tab sequence.
* It is operable with the keyboard because browsers automatically provide keyboard operability appropriate for each input type. For checkboxes, the space bar toggles the state.

Now let's say you need a custom checkbox, because designers have asked you to do a combination of tasks that require that you have to replace the HTML input with a custom element. Now, your HTML looks like this.

~~~html
<div class="custom_checkbox">Yes I agree to the above terms.</div>
~~~

Your CSS makes it look just the way the designers want. It is a beautiful checkbox. And, you have JavaScript that listens for clicks and changes the state so it acts like one too.

* While it looks like a checkbox to people who can perceive it visually, and it acts like one for mouse users, it is not at all close to the HTML checkbox. It is missing accessibility.
* It is missing accessible role information: screen reader users cannot perceive the visual styling that makes the `div` appear to be a checkbox.
* It is missing accessible state information: screen reader users cannot perceive the appearance of the checked or unchecked state of the `div` element.
* It is missing an accessible name: the label is now just plain text from the perspective of a screen reader user.
* Keyboard users cannot focus the `div` that is styled to look like a checkbox.
* Keyboard users cannot change the checked or unchecked appearance of the `div` element.

Now we'll make this checkbox accessible  

ARIA is another way to make things accessible, but it comes with responsibilities.

Doing so will require more than just ARIA; it will require JavaScript as well.

To make it functional:

* Give it keyboard support (for operability)
* Give it a role (for understandability)
* Give it state(s) (for perception and operability)

Let's look at a relevant example from the ARIA Authoring Practices Guide

* Bear in mind that as a developer, you need to be thinking in roles, states and properties
  * And about these other things too @@@@, @@

## What ARIA roles do

* Explain purpose of role.
* Explain what it does.
* Show adding role.
* Talk about what it does not solve.

At this point, the ARIA is telling a lie! It this div is a checkbox, but it really is not because it does not yet behave like a checkbox.

* ARIA does not change browser behavior. Adding the role only tells ....

## What ARIA  states and properties do

Show adding checked state and talk about what that does and does not do.

* Keyboard Operability
* Talk about completing picture by adding tabindex and js for operability.

## Essential concepts

* Review the essential concepts that have been demonstrated and how they are demonstrated.

## Risks

Show examples of how misuse totally breaks things.

## What Else Can ARIA DO

Talk about tri-state checkbox and other custom widgets not possible without ARIA.

Let's add another level of complexity: create a tri-state checkbox

[Mini-example Tri-State Checkbox]

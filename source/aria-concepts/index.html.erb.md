---
title: A Developers' Introduction to Essential ARIA Concepts
tutorial_title: ARIA Concepts
order: 1
editors:
  - Matt King: "Facebook"
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## Abstract

This tutorial uses the process of creating a custom checkbox to demonstrate three fundamental concepts every developer must understand to effectively and safely apply ARIA. It teaches:

* Purpose: What ARIA does
* Limits: What ARIA does not do
* Risks: Why appropriate use is important

## What ARIA is and does

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

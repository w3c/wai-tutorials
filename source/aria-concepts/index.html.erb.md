---
title: Developers’ Introduction to Essential ARIA Concepts
tutorial_title: "ARIA Use Prerequisites"
nav_title: Introduction
order: 1
topic_order: 7
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

## Overview
Using a scenario where accessible HTML radio buttons need to be replaced with a custom radio group,
this tutorial demonstrates three fundamental concepts all developers must understand before using ARIA.
To help ensure developers can effectively and safely apply ARIA, it teaches:

1. Purpose: What ARIA does, i.e., understanding the role of ARIA gives developers amazing powers.
2. Limits: What ARIA does not do, i.e., using those amazing powers comes with critical responsibilities to provide the accessibility that ARIA does not provide.
3. Risks: Why appropriate use is critical to avoiding negative impacts on accessibility, i.e., why no ARIA is better than bad ARIA.

## Objective

Developers gain understanding of ARIA concepts sufficient to:

* Safely and creatively exploit the power of ARIA to build rrich experiences that are fully accessible.
* Effectively utilize the patterns, examples, guidance,  and techniques available in the WAI-ARIA Authoring Practices.

## Plan

1. Set up the problem:
    * Describe a scenario where replacing an HTML radio group with an ARIA radio group is necessary.
    * Explain   essential accessibility features automatically provided by browsers when rendering an HTML radio group.
    * Write the HTML for the custom radio group.
2. Illustrate purpose:
    * Add ARIA attributes to the custom radio HTML.
    * Explain which essential accessibility features are enabled by ARIA roles, states, and properties.
3. Demonstrate limits:
    * Examine  significant accessibility gaps, such as a keyboard interface,  that remain even with all the ARIA in place.
    * Describe how to fill those gaps.
4. Highlight risks:
    * Explain the contract authors invoke by using ARIA.
    * Show how violating that contract can silently obliterate  accessibility.
5. Wrap up:
    *     Summarize critical points.
    * Describe how the ARIA Authoring Practices Guide provides what developers need to unleash their accessibility creativity.
---
title: Introduction to ARIA Essentials for Developers
tutorial_title: "ARIA Essentials"
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

Using a scenario where a site redesign replaces accessible HTML radio buttons with a custom radio group,
this tutorial demonstrates three fundamental concepts developers must understand before using ARIA.
To help ensure developers effectively and safely apply ARIA, it teaches:

1. Purpose: What ARIA does, i.e., understanding the amazing powers of ARIA.
2. Limits: What ARIA does not do, i.e., using those amazing powers comes with critical responsibilities.
3. Risks: Why appropriate use is essential and inappropriate use is dangerous, i.e., no ARIA is better than bad ARIA.

## Objective

Developers gain understanding of essential ARIA concepts sufficient to:

* Safely and creatively exploit ARIA to build rrich experiences that are fully accessible.
* Effectively utilize the patterns, examples, guidance,  and techniques available in the WAI-ARIA Authoring Practices.

## Plan

1. Describe scenario: explain accessibility gaps that appear when an HTML radio group is replaced with a custom radio group.
2. Illustrate purpose and limits: 
    * Explain the gaps ARIA can fill and how to fill them.
    * Show the gaps ARIA does not fill and how to fill them with JavaScript and CSS.
3. Highlight risks:
    * Explain the contract authors invoke by using ARIA.
    * Show how violating that contract can silently obliterate  accessibility.

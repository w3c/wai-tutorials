---
title: A simple alt decision tree
nav_title: <code>alt</code> Decision Tree
status: draft
order: 9
type: tips
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zhara: "http://w3.org/People/shadi/"
contributors:
  - Steve Faulkner
  - Anna Bell Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

-   Is the complete content of a link or button defined by this image (or multiple images)?
    -   {:.yes} **Yes:**
        - Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](functional.html). 
    -   {:.no} **No:**
        - Continue.
-   Does this image contain text?
    -   {:.yes} **Yes:**
        -   … and the text in the image is also present as *real* text nearby. The `alt` attribute should be empty.
        -   … and the text is only shown for visual effects. The `alt` attribute should be empty.
        -   … and the text in the image is not present otherwise. Use the `alt` attribute to include the text of the image. See [Images of Text](textual.html#image-of-styled-text-with-decorative-effect).
    -   {:.no} **No:**
        - Continue.
-   Does the image contribute meaning to the current page or context?
    -   {:.yes} **Yes:** 
        -   … and it’s a simple graphic or photograph. The `alt` attribute should briefly describe the image in a way that conveys that meaning. See [Informative Images](informative.html).
        -   … and it’s a graph or complex piece of information. Include the information contained in the image elsewhere on the page. See [Complex Images](complex.html).
        -   … and it shows content that is redundant to *real* text nearby. The `alt` attribute should be empty. See [Functional Images](functional.html#logo-image-within-link-text).
    -   {:.no} **No:**
        -   Continue.
-   Is the image purely decorative or not intended for the user?
    -   {:.yes} **Yes:** 
        - Use an empty `alt` attribute. See [Decorative Images](decorative.html).
    -   {:.no} **No:** 
        - Continue.
-   Is the image’s use not listed above or it’s unclear what `alt` text to provide?
    -   {:.yes} This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Image Concepts Page](index.html).
{:.decision-tree}

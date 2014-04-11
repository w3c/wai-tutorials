---
title: A simple alt decision tree
nav_title: <code>alt</code> Decision Tree
status: draft
order: 9
type: tips
---

-   Is this image the only content of a link or form control?
    -   **Yes**: Use the `alt` attribute to communicate the destination of the link or action taken: See [Functional Images](functional.html).
    -   **No**: Continue on!
-   Does this image contain text?
    -   **Yes**:
        -   If the text in the image is also present as *real* text nearby, use an empty `alt` attribute.
        -   Otherwise, use the `alt` attribute to include the communicative text of the image (not text included for visual effect): See [Images of Text](textual.html#image-of-styled-text-with-decorative-effect).
    -   **No**: Continue on!
-   Does the image contribute meaning to the current page or context?
    -   **Yes**, and it’s a simple graphic or photograph: the `alt` attribute should briefly describe the image in a way that conveys that meaning, see [Informative Images](informative.html).
    -   **Yes**, and it’s a graph or complex piece of information: include the information contained in the image elsewhere on the page, see [Complex Images](complex.html).
    -   **No**: Continue on!.
-   Is the image purely decorative or not intended for the user?
    -   Use an empty `alt` attribute: See [Decorative Images](decorative.html)
-   Image use not listed above or unsure about what `alt` text to provide?
    -   This decision tree **does not** cover all cases, for detailed information on the provision of text alternatives refer to the [Image Concepts Page](index.html).

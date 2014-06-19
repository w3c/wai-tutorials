---
title: A simple alt decision tree
nav_title: <code>alt</code> Decision Tree
status: draft
order: 9
type: tips
---

-   Is the complete content of a link or button defined by this image (or multiple images)?
    -   **Yes**: Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](functional.html).
    -   **No**: Continue.
-   Does this image contain text?
    -   **Yes**:
        -   If the text in the image is also present as *real* text nearby, use an empty `alt` attribute.
        -   Otherwise, use the `alt` attribute to include the text of the image (but not text shown for visual effects only). See [Images of Text](textual.html#image-of-styled-text-with-decorative-effect).
    -   **No**: Continue.
-   Does the image contribute meaning to the current page or context?
    -   **Yes**, and it’s a simple graphic or photograph. The `alt` attribute should briefly describe the image in a way that conveys that meaning. See [Informative Images](informative.html).
    -   **Yes**, and it’s a graph or complex piece of information. Include the information contained in the image elsewhere on the page. See [Complex Images](complex.html).
    -   **Yes**, but it shows content that is redundant to *real* text nearby. The `alt` attribute should be empty. See [Functional Images](functional.html#logo-image-within-link-text).
    -   **No**: Continue.
-   Is the image purely decorative or not intended for the user?
    -   Use an empty `alt` attribute. See [Decorative Images](decorative.html).
-   Is the image’s use not listed above or it’s unclear what `alt` text to provide?
    -   This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Image Concepts Page](index.html).

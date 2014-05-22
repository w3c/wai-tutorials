---
title: Images Concepts
tutorial_title: Images
status: draft
order: 1
topic_order: 1
type: intro
---

Every image should have a text alternative that provides an equivalent alternative by describing the information or function represented in the image. Those alternatives improve the situation for [people with various disabilities](#why-is-this-important). The following tutorial pages show you how to provide appropriate text alternatives based on the purpose of the image:

-   **[Informative images](informative.html)**: Images that graphically illustrate concepts and information, typically pictures and illustrations. The text alternative should be at least a short description conveying the essential information presented by the image.

-   **[Decorative images](decorative.html)**: If the only purpose of an image is to add visual interest to the page, rather than to convey information that is important to understanding the text, the text alternative should be null (`alt=""`).

-   **[Functional images](functional.html)**: Used alone as a link or button to activate a function, like an icon for printing or submitting forms, the image’s text alternative should describe the function rather than the visual image.

-   **[Images of text](textual.html)**: Readable text in images (sometimes used when special fonts are wanted) is discouraged except for logos. However, if images of text are used, the text alternative should contain the same words as in the image.

-   **[Complex images](complex.html) such as graphs and diagrams**: To convey data or detailed information, the text alternative should be a full text equivalent of the data and information provided in the image.

-   **[Groups of images](groups.html)**: If multiple images convey a single piece of information, the text alternative for one item should convey the information conveyed by the entire group.

-   **[Image maps](imagemap.html)**: The text alternative for an image that contains multiple clickable areas should provide an overall context for the links. Each individual clickable area should describe the purpose or destination of the links in its alternative text.

## Why is this important?

Images are used extensively on websites and can create major barriers
when they are not made accessible. Accessible images are beneficial in
many situations such as for:

-   **People using screen readers:** The text alternative can be read aloud or rendered as Braille,
-   **People using speech input software:** Users can put the focus onto a button or linked image with a single voice command,
-   **People browsing speech-enabled websites:** The text alternative can be read aloud,
-   **Mobile web users:** Images can be turned off, especially for data-roaming,
-   **Search engine optimization:** Images become indexable by search engines.


{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Images are often important for communicating information and interacting with web pages. Illustrations make it much easier to understand information for people with some types of learning disabilities. Some people who enlarge web pages use images as cues for orientation. Removing images from websites (so called “text-only versions”) makes websites less accessible for these users.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

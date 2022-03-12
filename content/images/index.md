---
title: "Images Tutorial"
permalink: /tutorials/images/
ref: /tutorials/images/
lang: en
last_updated: 2022-02-08

description:
image: /content-images/wai-tutorials/social-images/images.png

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/index.md'
metafooter: true

resource:
  ref: /tutorials/
navigation:
  next: /tutorials/images/informative/

editors:
- Eric Eggert: "https://www.w3.org/People/yatil/"
- Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
- Shawn Lawton Henry: "https://www.w3.org/People/Shawn/"
- Howard Kramer
- Sharron Rush
- Bim Egan
- the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
- the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.


wcag_success_criteria:
- 1.1.1
- 1.4.5
- 1.4.9
---

Images must have text alternatives that describe the information or function represented by them. This ensures that images can be used by [people with various disabilities](#why-is-this-important). This tutorial demonstrates how to provide appropriate text alternatives based on the purpose of the image:

-   **[Informative images](/tutorials/images/informative/)**: Images that graphically represent concepts and information, typically pictures, photos, and illustrations. The text alternative should be at least a short description conveying the essential information presented by the image.

-   **[Decorative images](/tutorials/images/decorative/)**: Provide a null text alternative (`alt=""`) when the only purpose of an image is to add visual decoration to the page, rather than to convey information that is important to understanding the page.

-   **[Functional images](/tutorials/images/functional/)**: The text alternative of an image used as a link or as a button should describe the functionality of the link or button rather than the visual image. Examples of such images are a printer icon to represent the print function or a button to submit a form.

-   **[Images of text](/tutorials/images/textual/)**: Readable text is sometimes presented within an image. If the image is not a logo, avoid text in images. However, if images of text are used, the text alternative should contain the same words as in the image.

-   **[Complex images](/tutorials/images/complex/)** such as graphs and diagrams: To convey data or detailed information, provide a complete text equivalent of the data or information provided in the image as the text alternative.

-   **[Groups of images](/tutorials/images/groups/)**: If multiple images convey a single piece of information, the text alternative for one image should convey the information for the entire group.

-   **[Image maps](/tutorials/images/imagemap/)**: The text alternative for an image that contains multiple clickable areas should provide an overall context for the set of links. Also, each individually clickable area should have alternative text that describes the purpose or destination of the link.

For a quick overview on deciding which category a particular image fits into, see the [`alt` Decision Tree](/tutorials/images/decision-tree/). The text alternative needs to be determined by the author, depending on the usage, context, and content of an image. For example, the exact type and look of a bird in an image might be less relevant and described only briefly on a website about parks, but may be appropriate on a website specifically about birds.

## Why is this important?

Images and graphics make content more pleasant and easier to understand for many people, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content.

However, images are used extensively on websites and can create major barriers when they are not accessible. Accessible images are beneficial in many situations, such as:

-   **People using screen readers:** The text alternative can be read aloud or rendered as Braille
-   **People using speech input software:** Users can put the focus onto a button or linked image with a single voice command
-   **People browsing speech-enabled websites:** The text alternative can be read aloud
-   **Mobile web users:** Images can be turned off, especially for data-roaming
-   **Search engine optimization:** Images become indexable by search engines


{::nomarkdown}
{% include box.html type="start" title="Note" class="simple" %}
{:/}

Removing images from websites (so-called “text-only versions”) make them less accessible and functional for these users and situations.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

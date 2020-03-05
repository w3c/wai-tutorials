---
title: "An alt Decision Tree"
title_html: "An <code>alt</code> Decision Tree"
permalink: /tutorials/images/decision-tree/
ref: /tutorials/images/decision-tree/
lang: en
description:
image: /content-images/wai-tutorials/images/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.md'

resource:
  ref: /tutorials/images/
navigation:
  previous: /tutorials/images/imagemap/
  next: /tutorials/images/tips/

wcag_techniques:


metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Steve Faulkner
  - Anna Belle Leiserson
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

This decision tree describes how to use the `alt` attribute of the `<img>` element in various situations. For some types of images, there are alternative approaches, such as using CSS background images for decorative images or web fonts instead of images of text.

- **Does the image contain text?**
  - {:.yes} **Yes:**
    -   **… and the text is also present as *real* text nearby.**
      _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
    -   **… and the text is only shown for visual effects.**
      _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
    -   **… and the text has a specific function, for example is an icon.**
      _Use the `alt` attribute to communicate the function of the image. See [Functional Images](/tutorials/images/functional/)._
    -   **… and the text in the image is not present otherwise.** _Use the `alt` attribute to include the text of the image. See [Images of Text](/tutorials/images/textual/#image-of-styled-text-with-decorative-effect)._
  - {:.no} **No:**
    - Continue.
- **Is the image used in a link or a button, and would it be hard or impossible to understand what the link or the button does, if the image wasn’t there?**
  - {:.yes} **Yes:**
    - _Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](/tutorials/images/functional/)._
  - {:.no} **No:**
    - Continue.
- **Does the image contribute meaning to the current page or context?**
  - {:.yes} **Yes:**
    - **… and it’s a simple graphic or photograph.**
      _Use a brief description of the image in a way that conveys that meaning in the `alt` attribute. See [Informative Images](/tutorials/images/informative/)._
    - **… and it’s a graph or complex piece of information.**
      _Include the information contained in the image elsewhere on the page. See [Complex Images](/tutorials/images/complex/)._
    - **… and it shows content that is redundant to *real* text nearby.**
      _Use an empty `alt` attribute. See (redundant) [Functional Images](/tutorials/images/functional/#logo-image-within-link-text)._
  - {:.no} **No:**
    - Continue.
- **Is the image purely decorative or not intended for the user?**
  - {:.yes} **Yes:**
    - _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
  - {:.no} **No:**
    - Continue.
- **Is the image’s use not listed above or it’s unclear what `alt` text to provide?**
  - {:.yes} This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Image Concepts Page](/tutorials/images/).
{:.decision-tree}
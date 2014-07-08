---
title: Tips and Tricks
status: draft
order: 10
type: tips
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zhara: "http://w3.org/People/shadi/"
contributors:
  - Anna Bell Leiserson
  - Sharron Rush
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

## Tips

-   **Choosing appropriate text alternatives:** <br>
    Imagine that you’re reading the web page aloud over the phone to someone who needs to understand the page. This should help you decide what (if any) information or function the images have. If they appear to have no informative value and aren’t links or buttons, it’s probably safe to treat them as [decorative](decorative.html).

-   **Prioritize information in alternative text:** <br>
    Aim to put the most important information at the beginning of alternative text.

-   **Length of alternative text:** <br>
    The `alt` text should be the most concise description possible of the image’s purpose. If anything more than a short phrase or sentence is needed, it would be better to use one of the long description methods discussed in [complex images](complex.html).

-   **Punctuation within `alt` attributes:**

    * As in visible text, using punctuation in the text alternative can make it easier to understand. In addition, to avoid having words run together when read by a screen reader, if there’s no space between the image and adjacent text, a space character may be needed within the `alt` value.
    
    * If you use a null alternative (`alt=""`) text to hide decorative images, make sure that there is no space character in between the quotes. If a space character is present, the image may not be effectivly hidden from assistive technologies. For instance, some screen readers will still announce the presence of an image if a space is put between the quotes.

-   **Superfluous information in alternative text:** <br>
    Usually there’s no need to include words like “image”, “icon” or “picture” in the alt text. People who can see will know this already and screen readers announce the presence of an image. If it’s a painting, photograph or illustration, that may be a good case for including text that describes the type of image, but it’s best to avoid the more generic terms.

-   **SVG graphics:** 

    * SVG graphics can be referenced in the `src` attribute of an `<img>` element like other image formats (PNG, JPEG, GIF). In this case the examples of this tutorial apply can be used with SVG as well.

    * As SVG images consists of tags like HTML, their code can also be used in HTML5 directly. In this case you can provide alternative text in a `<title>` element within the SVG image.

-   **Logos:** <br>
    Logo images with text are exempt from some of the accessibility guidelines for images with text. For instance, there is no minimum contrast requirement.

## Frequently Asked Questions

-   **I heard that text-only versions are bad? Is that true?**

    Yes. In many situations images and graphics can make content easier to understand. They can also help visually impaired people to orient themselves on the page and even screen reader users if no other structure is available. Make sure that the image is properly described with an alternative text or long description to provide easy access to your content to as many people as possible.

## Other W3C Resources

-   Background information on [providing text alternatives for non-text content](http://www.w3.org/WAI/intro/people-use-web/principles#alternatives) in How People with Disabilities Use the Web.
-   Test the accessibility of images on your site: [Quick Checks Image text alternatives](http://www.w3.org/WAI/EO/Drafts/eval/checks#images).
-   Examples of good and bad practice in selecting text alternatives can be found in the [Before and After Demonstration](http://www.w3.org/WAI/demos/bad/) (BAD).

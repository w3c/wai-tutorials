---
title: Tips and Frequently Asked Questions (FAQ)
nav_title: Tips and FAQ
status: draft
order: 10
type: tips
---

## Tips

-   **Prioritize information in `alt` values:** Aim to put the most important information at the start of the `alt` value.

-   **Choosing appropriate text alternatives:** Imagine that you’re reading the web page aloud over the phone to someone who needs to understand the page. This should help you decide what (if any) information or function the images have. If they appear to have no informative value and aren’t links or buttons, it’s probably safe to treat them as [decorative](decorative.html).

-   **Punctuation within `alt` attributes:** As in visible text, using punctuation in the text alternative can make it easier to understand. In addition, to avoid having words run together when read by a screen reader, if there’s no space between the image and adjacent text, a space character may be needed within the `alt` value.

-   **SVG graphics:** 

    * SVG graphics can be referenced in the `src` attribute of an `<img>` element like other image formats (PNG, JPEG, GIF). In this case the examples of this tutorial apply can be used with SVG as well.

    * As SVG images consists of tags like HTML, their code can also be used in HTML5 directly. In this case you can provide alternative text in a `<title>` element within the SVG image.

-   **Logos:** Logo images with text are exempt from some of the accessibility guidelines for images with text. For instance, there is no minimum contrast requirement.

## Frequently Asked Questions

-   **I've been told to remove the `alt` from most of the images in my template. Is that right?**

    No that's incorrect. The `alt` is a required attribute. If the images are part of the page design and don’t convey information, you can remove any text values, leaving just the quotes (`alt=""`).

-   **I can’t remember – should the alt be a space or null (empty) if a description is not needed?**

    It should be null (empty) `alt` text (`alt=""`), with no space between the quotes. Having a space between the quotes doesn’t effectively hide the image from all assistive technologies. For instance, some screen readers will still announce the presence of an image if a space is put between the quotes.

-   **My CMS system puts in a default `alt` of “image of”. Can I just add to that?**

    It will depend on the function of the image. However, default values may result in inappropriate alternative text. Normally there's no need to include words like “image”, “icon” or “picture” in the `alt` text. People who can see will know this already and screen readers announce the presence of an image. If it's a painting, photograph or illustration, that may be a good case for including text that describes the type of image, but it's best to avoid the more generic terms.

-   **How long can the `alt` text be? Is it up to 90 words?**

    The `alt` text should be the most concise description possible of the image’s purpose. If anything more than a short phrase or sentence is needed, it would be better to use one of the long description methods discussed in [complex images](complex.html).

-   **When I plan new content for my website, should I use text instead of images more often?**

    In many situations images and graphics can make content easier to understand, especially for persons that are unable to read or understand written language. Make sure that the image is properly described with an alternative text or long description to provide easy access to your content to as many people as possible.

## Other W3C Resources

-   Background information on [providing text alternatives for non-text content](http://www.w3.org/WAI/intro/people-use-web/principles#alternatives) in How People with Disabilities Use the Web
-   Further examples and a helpful decision tree: [HTML5: Techniques for providing useful text alternatives](http://www.w3.org/TR/html-alt-techniques/)
-   Test the accessibility of images on your site: [Quick Checks Image text alternatives](http://www.w3.org/WAI/EO/Drafts/eval/checks#images)
-   Examples of good and bad practice in selecting text alternatives can be found in the [Before and After Demonstration](http://www.w3.org/WAI/demos/bad/) (BAD)

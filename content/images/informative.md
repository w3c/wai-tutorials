---
title: "Informative Images"
permalink: /tutorials/images/informative/
ref: /tutorials/images/informative/
lang: en
description:
image: /content-images/wai-tutorials/images/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/images/informative.md'

resource:
  ref: /tutorials/images/
navigation:
  previous: /tutorials/images/
  next: /tutorials/images/decorative/

wcag_techniques:
- H37
- G94

metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - Liam McGee
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---


{::nomarkdown}
{% include box.html type="start" h="2" title="Overview" class="full" %}
{:/}

Informative images convey a simple concept or information that can be expressed in a short phrase or sentence. The text alternative should convey the meaning or content that is displayed visually, which typically isn’t a literal description of the image.

In some situations a detailed literal description may be needed, but only when the content of the image is all or part of the conveyed information. Whether to treat an image as informative or [decorative](/tutorials/images/decorative/) is a judgment that authors make, based on the reason for including the image on the page.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include_cached toc.html %}

## **Example 1:** Images used to label other information

This example shows two image icons – one of a telephone, one of a fax machine. A phone number follows each image. Consistent with the visual presentation, the text alternatives “Telephone:” and “Fax:” are used to identify the device associated with each number.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![Telephone:]({{ "/content-images/wai-tutorials/images/phone.png" | relative_url }}){:style="vertical-align:middle;"} 0123 456 7890

![Fax:]({{ "/content-images/wai-tutorials/images/fax.png" | relative_url }}){:style="vertical-align:middle;"} 0123 456 7891

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<p>
  <img src="phone.png" alt="Telephone:"> 0123 456 7890
</p>
<p>
  <img src="fax.png" alt="Fax:"> 0123 456 7891
</p>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 2:** Images used to supplement other information

The following image shows a dog wearing a bell. It supplements the adjacent text that explains the purpose of this bell. A short text alternative is sufficient to describe the information that is displayed visually but is not explained in the text; in this case, the text alternative is “Dog with a bell attached to its collar.”.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![Dog with a bell attached to its collar.]({{ "/content-images/wai-tutorials/images/dog.jpg" | relative_url }}){:style="float: left; margin-right: 1em;"} Off-duty guide dogs often wear a bell. Its ring helps the blind owner keep track of the dog’s location

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<p>
  <img src="dog.jpg" alt="Dog with a bell attached to its collar.">
  Off-duty guide dogs often wear ...
</p>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple" %}
{:/}

If the text included an explanation of how the dog wears a bell, the image might be considered redundant and therefore [decorative](/tutorials/images/decorative/). As this isn’t mentioned in the text, the image is deemed to be informative.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 3:** Images conveying succinct information

This simple diagram illustrates a counter-clockwise direction for unscrewing a bottle top or cap. The information can be described in a short sentence, so the text alternative “Push the cap down and turn it counter-clockwise (from right to left)” is given in the `alt` attribute.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<img src="{{ "/content-images/wai-tutorials/images/counter-clockwise.jpg" | relative_url }}" alt="Push the cap down and turn it counter-clockwise (from right to left)" style="vertical-align: middle; margin-right: .5em;">

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img src="cap.png" alt="Push the cap down and turn it counter-clockwise (from right to left)">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Notes" class="simple note" %}
{:/}

1. An alternative technique would be to provide the instructions within the main content rather than as a text alternative to the image. This technique makes all information available in text for everyone while providing an illustration for people who prefer to view the information visually.

2. If more information than that of the diagram is intended to be conveyed by the image, it may be better to follow one of the approaches described in [Complex images](/tutorials/images/complex/). For example, if the fact that this diagram appears on a bottle or if the shape and size of the bottle were relevant pieces of information, use a more detailed alternative text.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 4:** Images conveying an impression or emotion

This photograph shows a happy family group. It’s a stock image so the individuals should not be identified. It’s being used to give the impression that the website or the company it represents is family-friendly. The text alternative is “We’re family-friendly” as this best describes the intended impression.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

![We’re family-friendly.]({{ "/content-images/wai-tutorials/images/family.jpg" | relative_url }})

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<img src="family.jpg" alt="We’re family-friendly. ">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple" %}
{:/}

If the purpose of this image were simply to improve the look of a page rather than convey an impression, it could be deemed to be decorative, as shown in [“Decorative Images: Image used for ambiance”](/tutorials/images/decorative/#image-used-for-ambiance-eye-candy). The author determines the purpose for using the image.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## **Example 5:** Images conveying file format

In this example, a document is available to download in three different
formats identified by format icons within text links. They have the text
alternatives “HTML”, “Word document”, and “PDF” to distinguish the file
type for each link:

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

[2012 Annual report and accounts ![HTML]({{ "/content-images/wai-tutorials/images/html5logo.png" | relative_url }}) (43KB)](../beyond.html), also available in [![Word document]({{ "/content-images/wai-tutorials/images/worddocument.png" | relative_url }}) (254KB)](../beyond.html) or [![PDF]({{ "/content-images/wai-tutorials/images/pdfdocument.png" | relative_url }}) (353KB)](../beyond.html) format.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<p>
  <a href="…">
    2012 Annual report and accounts
    <img src="html5logo.png" alt="HTML" > (43KB)
  </a>, also available in
  <a href="…">
    <img src="worddocument.png" alt="Word document"> (254KB)
  </a>
  or
  <a href="…">
    <img src="pdfdocument.png" alt="PDF"> (353KB)
  </a>
  format.
</p>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple" %}
{:/}

1. If the format identification were written as part of the link text, the image might be considered [decorative](/tutorials/images/decorative/) and have a null (empty) `alt` attribute (`alt=""`). It could remain in the same link element (`<a>`) as the text, to include it in the clickable area. Further discussion is provided in [“Functional Images: Logo image within link text”](/tutorials/images/functional/#logo-image-within-link-text).

2. This particular example is similar to the [Functional Images: icon within linked text in ](/tutorials/images/functional/#icon-image-conveying-information-within-link-text) in that the image conveys information that isn’t given in the link text.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

---
title: Informative Images
status: draft
technologies: HTML5
order: 2
---

Informative images are those that convey a simple concept or information
that can be expressed in a short phrase or sentence. In this case, the
text alternative needs to convey the meaning or identification that is
visually apparent, which isn’t normally a literal description of the
image. In some situations a detailed literal description may be needed,
but only where content of the image is all or part of the
information being conveyed. Whether to treat an image as informative or
[decorative](decorative.html) is a judgement that only the author can make,
based on the reason for including the image on the page.

## Image used to label other information
{:.ex}

This example shows two images, one of a telephone, one of a fax machine.
Each image is followed by a phone number. Consistent with the visual
presentation the text alternatives “Telephone:” and “Fax:” are used to
identify which number is which.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Telephone:](phone.png){:style="vertical-align:middle;"} 0123 456 7890

![Fax:](fax.png){:style="vertical-align:middle;"} 0123 456 7891

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="phone.png" alt="Telephone:"> 0123 456 7890
</p>
<p>
	<img src="fax.png" alt="Fax:"> 0123 456 7891
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Image used to supplement other information
{:.ex}

The following image shows a dog wearing a bell. It supplements the
adjacent text that explains the purpose of this bell. A short text
alternative is sufficient to describe the information that is visually
evident but not explained in the text; in this case the text alternative
is “Dog with a bell attached to its collar.”.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Dog with a bell attached to its collar.](dog.jpg){:style="float: left; margin-right: 1em;"} Off-duty guide dogs often wear a bell, it's ring helps the blind owner keep track of the dog's location

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="dog.jpg" alt="Dog with a bell attached to its collar.">
	Off-duty guide dogs often wear ...
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the text included an explanation of how the dog wears a bell, the image might be considered [decorative](../decorative/). As this isn’t mentioned in the text, the image is deemed to be informative.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Image conveying succinct information
{:.ex}

This simple diagram illustrates an anti-clockwise direction for unscrewing a bottle top or cap. The information can be described in a short sentence, so the text alternative “Anti-clockwise diagram: Push the cap down and turn it from right to left” is given in the `alt` attribute.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<img src="../../img/counter-clockwise.jpg" alt="Anti-clockwise diagram: Push the cap down and turn it from right to left." style="vertical-align: middle; margin-right: .5em;">

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="cap.png" alt="Anti-clockwise diagram: Push the cap down and turn
it from right to left.">
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note 1:** An alternative technique would be to include all of the
information in the visible text, using the image as a redundant
([decorative](decorative.html)) effect, in which case the visual text could
be “Turn counter-clockwise (right to left) to unscrew the cap”. This
makes all information available in text, while providing additional
visual clues for people who find text more difficult to understand.

**Note 2:** If the information conveyed by the image is substantial, use
one of the approaches described in [Complex images](complex.html).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Image conveying an impression or emotion
{:.ex}

This photograph shows a smiling family group, it is a stock image so the
individuals don't need to be identified. It is being used to give the
impression that the website or the company it represents is family
friendly. The text alternative is “We're family friendly” as this best
describes the intended impression.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![We're family friendly.](family.jpg)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="family.jpg" alt="We're family friendly. ">
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the purpose of this image was simply to improve the look of a page rather than convey an impression, it could be deemed to be decorative, as shown in [“Decorative Images”: “Image used for ambience”](decorative.html#image-used-for-ambience-eye-candy). The purpose for using the image needs to be determined by the author.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Image conveying file format
{:.ex}

In this example, a document is available to download in three different
formats identified by format icons within text links. They have the text
alternatives “HTML”, “Word document” and “PDF” to distinguish the file
type for each link:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[2012 Annual report and accounts ![HTML](html5logo.png) (43KB)](../beyond.html), also available in [![Word document](worddocument.png) (254KB)](../beyond.html) or [![PDF](../img/pdfdocument.png) (353KB)](../beyond.html) format.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note 1:** If the format identification were written as part of the link text, the image may be considered [decorative](decorative.html) and have a null (empty) `alt` attribute (`alt=""`) but must be in the same link anchor as the text, as in [“Functional Images”: “Logo image within link text”](functional.html#logo-image-within-link-text).

**Note 2:** This particular example is similar to the [icon within linked text in Functional Images](functional.html#icon-image-conveying-information-within-link-text) in that the image conveys information that isn’t given in the link text.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Related WCAG2.0 Techniques

The following WCAG 2.0 techniques were used in the examples above:

-   [H37: Using alt attributes on img
    elements](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H37.html)
-   [G94: Providing short text alternative for non-text content that
    serves the same purpose and presents the same information as the
    non-text content](http://www.w3.org/TR/WCAG20-TECHS/G94.html)

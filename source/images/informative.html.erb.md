---
title: Informative Images
technologies: HTML5
wcag_techniques:
  - H37
  - G94
order: 2
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - Liam McGee
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Informative images convey a simple concept or information that can be expressed in a short phrase or sentence. The text alternative should convey the meaning or content that is displayed visually, which typically isn’t a literal description of the image.

In some situations a detailed literal description may be needed, but only when the content of the image is all or part of the conveyed information. Whether to treat an image as informative or [decorative](decorative.html) is a judgment that authors make, based on the reason for including the image on the page.

## Images used to label other information
{:.ex}

This example shows two image icons – one of a telephone, one of a fax machine. Each image is followed by a phone number. Consistent with the visual presentation the text alternatives “Telephone:” and “Fax:” are used to identify what device each number relates to.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Phone:](phone.png){:style="vertical-align:middle;"} 0123 456 7890

![Fax:](fax.png){:style="vertical-align:middle;"} 0123 456 7891

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="phone.png" alt="Phone:"> 0123 456 7890
</p>
<p>
	<img src="fax.png" alt="Fax:"> 0123 456 7891
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Images used to supplement other information
{:.ex}

The following image shows a dog wearing a bell. It supplements the adjacent text that explains the purpose of this bell. A short text alternative is sufficient to describe the information that is displayed visually but is not explained in the text; in this case the text alternative is “Dog with a bell attached to its collar.”.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Dog with a bell attached to its collar.](dog.jpg){:style="float: left; margin-right: 1em;"} Off-duty guide dogs often wear a bell. Its ring helps the blind owner keep track of the dog’s location

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

**Note:** If the text included an explanation of how the dog wears a bell, the image might be considered redundant and therefore [decorative](decorative.html). As this isn’t mentioned in the text, the image is deemed to be informative.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Images conveying succinct information
{:.ex}

This simple diagram illustrates a counter-clockwise direction for unscrewing a bottle top or cap. The information can be described in a short sentence, so the text alternative “Push the cap down and turn it counter-clockwise (from right to left)” is given in the `alt` attribute.

{::nomarkdown}
<%= sample_start %>

<img src="../../img/counter-clockwise.jpg" alt="Push the cap down and turn it counter-clockwise (from right to left)" style="vertical-align: middle; margin-right: .5em;">

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="cap.png" alt="Push the cap down and turn it counter-clockwise (from right to left)">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note 1:** An alternative technique would be to provide the instructions within the main content rather than as a text alternative to the image. This makes all information available in text for everyone, while providing an illustration for people who prefer to view the information visually.

**Note 2:** If more information than that of the diagram is intended to be conveyed by the image, for example if the fact that this diagram appears on the bottle or if the shape and size of the bottle were relevant pieces of information, then it may be better to follow one of the approaches described in [Complex images](complex.html).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Images conveying an impression or emotion
{:.ex}

This photograph shows a smiling family group. It’s a stock image so the individuals should not be identified. It’s being used to give the impression that the website or the company it represents is family-friendly. The text alternative is “We’re family-friendly” as this best describes the intended impression.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![We’re family-friendly.](family.jpg)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="family.jpg" alt="We’re family-friendly. ">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the purpose of this image were simply to improve the look of a page rather than convey an impression, it could be deemed to be decorative, as shown in [“Decorative Images: Image used for ambience”](decorative.html#image-used-for-ambience-eye-candy). The author determines the purpose for using the image.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Images conveying file format
{:.ex}

In this example, a document is available to download in three different
formats identified by format icons within text links. They have the text
alternatives “HTML”, “Word document”, and “PDF” to distinguish the file
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

**Note 1:** If the format identification were written as part of the link text, the image might be considered [decorative](decorative.html) and have a null (empty) `alt` attribute (`alt=""`). It could still remain in the same link element (`<a>`) as the text, to include it in the clickable area. Further discussion is provided in [“Functional Images: Logo image within link text”](functional.html#logo-image-within-link-text).

**Note 2:** This particular example is similar to the [Functional Images: icon within linked text in ](functional.html#icon-image-conveying-information-within-link-text) in that the image conveys information that isn’t given in the link text.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

---
title: Decorative Images
status: draft
technologies: WAI-ARIA, HTML5
wcag_techniques: 
  - H2
  - H67
order: 3
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zhara: "http://w3.org/People/shadi/"
contributors:
  - Anna Bell Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Decorative images don’t add information to the content of a page. For example, the information provided by the image might already be given using adjacent text or the image might be included for visual interest only. 

In these cases, a null (empty) `alt` text should be provided (`alt=""`) so that they can be ignored by assistive technologies such as screen readers. Text values for this type of images would add audible clutter to screen reader output or could distract users if the topic is different from that in adjacent text.

If the `alt` attribute is not used at all some screen readers will announce the image’s file name. Whether to treat an image as decorative or [informative](informative.html) is a judgement that only the author can make, based on the reason for including the image on the page. Images may be decorative when they are:

-   Visual styling such as borders, spacers, and corners
-   Supplementary to link text to improve its appearance or increase the clickable area
-   Illustrative of adjacent text but not contributing information (“eye-candy”)
-   Identified and described by surrounding text

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Where possible decorative images should be part of the CSS
styling rather than being in the HTML.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}


## Image used as part of page design
{:.ex}

This image is used as a border in the page design and has a purely
decorative purpose.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![](topinfo_bg.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="topinfo_bg.png" alt="">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Screen readers also allow the use of WAI-ARIA to hide elements by using `role="presentation"`. Note that this feature is not as widely supported as using a null `alt` attribute.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="topinfo_bg.png" role="presentation">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the image was used to indicate a thematic break, e.g. a scene change in a story, or a transition to another topic, using the `<hr>` element would be appropriate to notify assistive technology.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Decorative image as part of a text link
{:.ex}

This illustration of a crocus bulb is used to make the link easier to
identify and to increase the clickable area, but doesn’t add to the
information given in adjacent link text.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[![](crocus.jpg){:style="vertical-align: middle; margin-right: 1em;"}**Crocus bulbs**](../beyond.html)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="crocuspage.html">
	<img src="crocus.jpg" alt="">
	<strong> Crocus bulbs</strong>
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The null or empty `alt` value can only be used on linked images
if the image and text are part of a single link anchor and the image
does not add visual information to the link.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Image with adjacent text alternative
{:.ex}

This picture of a sleeping dog is already identified by the
adjacent caption. The caption acts as the text alternative and should not be repeated in the `alt` attribute.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![](../img/sleeping.jpg){:style="float:left; margin-right: 1em;"} **Let sleeping dogs lie.** This is a proverb that means: “don’t initiate trouble. If something that could be troublesome is quiet, then leave it alone”.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<p>
	<img src="sleepingdog.jpg" alt="">
	<strong>Let sleeping dogs lie:</strong> ...
</p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Image used for ambience (eye-candy)
{:.ex}

This image is used to add ambience or visual interest to the page.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![](kew.jpg){:style="float:left; margin-right: 1em;"} don’t miss the impressive Tropical House – a huge greenhouse that displays examples of exotic plant-life from every tropical environment on the planet.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<img src="tropical.jpg" alt="">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the purpose of this image was to identify a plant or convey other information, rather than to just improve the look of the page, it should probably be treated as [informative](informative.html). The author determines the purpose for the use of the image.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

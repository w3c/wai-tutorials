---
title: Subtitle concepts and examples
nav_title: Subtitles
order: 5
status: editors-draft
wcag_success_criteria:
  - 1.2.2
wcag_techniques:
  - G87
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Subtitle basics

Subtitles (also known as foreign-language subtitles) are, from a
technical perspective, similar to captions: they are text (or sometimes
images of text) presented through markup that contains timing
information and positioning codes. They can be created using the same
authoring tools as captions, and they can also be delivered using the
same basic timed-text markup formats:

-   [Timed Text Markup Language
    (TTML)](https://www.w3.org/TR/ttaf1-dfxp/)
-   [Web Video Text Tracks (WebVTT)](https://w3c.github.io/webvtt/)
-   [SRT](https://matroska.org/technical/specs/subtitles/srt.html)

And, as with captions, they can be open or closed:

-   **Closed subtitles** can be hidden and revealed by users, typically
    by operating a button or menu on the player's control bar.
-   **Open subtitles** are visible to everyone and cannot be turned off.

In instances where subtitles cannot be presented using true text, they
can instead be presented as bitmaps: in other words, pictures of text or
other symbols. The bitmaps themselves can still be transmitted using
markup, though, by using [TTML Profiles for Internet Media Subtitles and
Captions 1.0 (IMSC1)](https://www.w3.org/TR/ttml-imsc1/). Keep in mind that bitmap captions cannot be customized, which may diminish their usefulness to viewers with certain types of visual impairments.  Learn more about [why caption customization is important](production-captions.html#custom_cc).

## Differences between subtitles and captions

Subtitles are not the same as captions, nor are they aimed at the same
audiences. Here are some of the basic differences.

<table>
	<tr>
		<th scope="col">Subtitles</th>
		<th scope="col">Captions</th>
	</tr>
	<tr>
		<td>Intended for people who can hear</td>
		<td>Intended for people who are deaf or hard of hearing</td>
	</tr><tr>
		<td>Translation of the audio</td>
		<td>Same language as the audio</td>
	</tr><tr>
		<td>Do not contain non-speech information<br>
		(indications of music, sound effects, etc.)</td>
		<td>Contain non-speech information</td>
	</tr><tr>
		<td>Not positioned to convey who is speaking</td>
		<td>Often positioned to indicate who is speaking</td>
	</tr>
</table>

##Delivering subtitles to viewers

Subtitles are delivered to viewers using HTML5's `<track>` element.
`<track>` is used as a child element of the `<video>` element. Be sure
to set the value of the `kind` attribute to `"subtitles"` and to specify
the language in the `label` attribute:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<video controls>
    <source src="myvideo.mp4" type="video/mp4" />
    <track kind="subtitles" src="my_italian_subtitles.vtt" srclang="en" label="Italian" default />
</video>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In some cases, it may be necessary to use captions and subtitles
together: for example, if an important sound effect is used in the audio
track, that sound can be conveyed through a single sound-effect caption
placed near the a subtitle, as shown in the image below.

![A frame of video showing a sound-effect caption positioned above a
subtitle.](cc_sub_together.png)

---
title: Caption formats and examples
nav_title: Caption formats
order: 3
status: editors-draft
wcag_success_criteria:
  - 1.2.2
wcag_techniques:
  - G87
  - H95
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---
## Caption formats

Nearly all modern user agents (browsers, media players) on both desktop
and mobile platforms provide support for the display of closed captions,
but not all support the same caption-delivery formats. The three most
common formats used for online media are listed below.

-   [Timed Text Markup Language
    (TTML)](https://www.w3.org/TR/ttaf1-dfxp/)
-   [Web Video Text Tracks (WebVTT)](https://w3c.github.io/webvtt/)
-   [SRT](https://matroska.org/technical/specs/subtitles/srt.html)

Captions can be displayed by most modern media players on desktop and mobile platforms, in standalone applications as well as in Web browsers:

-   Standalone players typically support WebVTT and/or TTML.
-   Streaming media services typically use TTML to convey captions to users.
-   Web browsers support various caption formats, as shown in the table below.


<table>
	<tr>
		<th scope="col">Browser</th>
		<th scope="col">OS</th>
		<th scope="col">Supported caption format(s)</th>
	</tr>
	<tr>
		<th scope="row">Firefox</th>
		<td>Windows, OS X, Android, iOS</td>
		<td>WebVTT</td>
	</tr>
	<tr>
		<th scope="row">IE 10, 11; Edge</th>
		<td>Windows</td>
		<td>TTML, WebVTT</td>
	</tr>
	<tr>
		<th scope="row">Safari</th>
		<td>OS X; iOS</td>
		<td>WebVTT</td>
	</tr>
	<tr>
		<th scope="row">Chrome</th>
		<td>Windows, OS X, Chrome OS, Android, iOS</td>
		<td>WebVTT</td>
	</tr>
</table>

SRT is not supported natively by any browser, but is supported by most
other types of media players including those provided by popular
video-hosting services, some social-media platforms and by custom
players.

WebVTT, TTML and SRT are "sidecar" files, which is to say they are
transmitted separately from their corresponding video files (riding
alongside the video data in the delivery stream, rather than being
embedded directly into the video file), and are synchronized and
displayed by the user agent at the time of playback.

## Delivering captions to viewers

Captions are delivered to viewers using HTML5's `track` element, which
was created specifically for carrying text tracks, such as captions,
subtitles and [text-based audio descriptions](g). `track` is used as a
child element of the `video` element:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<video controls>
    <source src="myvideo.mp4" type="video/mp4" />
        <track kind="captions" src="myvideo_captions.vtt" srclang="en" label="Captions" default />
</video>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

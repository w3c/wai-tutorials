---
title: Transcript Concepts and Examples
nav_title: Transcripts
order: 6
status: editors-draft
wcag_success_criteria:
  - 1.2.1
  - 1.2.8
wcag_techniques:
  - G158
  - G159
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Transcript basics

A transcript is a textual version of a program's audio track. They have
a wide variety of uses:

-   Users can quickly scan a transcript to learn about a video's subject
    matter prior to watching the video.
-   Transcripts can be easily searched.
-   Transcripts can be printed or converted to braille, or can be read
    offline on any desktop or mobile device.
-   They can be used as a basis for foreign-language translations.

Transcripts can be static documents or they can be interactive: e.g.,
words can be highlighted automatically as they are spoken, or words can
selected by the user in order to move to that spot in the video.

[![An example of an interactive transcript.](xcr_perspectives.png)](https://www.w3.org/WAI/perspectives/keyboard.html)

## Creating and presenting a transcript

Most caption-editing tools provide an option to export a plain-text
transcript (that is, one that is stripped of all timing, positioning and
other markup). This text file can then be formatted for accessible
presentation. Transcripts can also be created by simply listening to a
program's audio track and typing text into any word processor or text
editor.

HTML is the most accessible format for transcript presentation. As with
any Web page, an accessible transcript should be marked up with
headings, links, landmark roles, lists and other structure in order to
make navigation as efficient as possible. This also helps with SEO. Read
more about [best practices for creating
transcripts](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html#best).

### Basic workflow for creating transcripts:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

1.  Write a brief summary of the subject matter.
2.  Listen to the audio and transcribe all dialog and narration.
3.  Identify each time the speaker changes.
4.  Include relevant non-speech information (e.g., sound effects,
    audience laughter).
5.  Include descriptions of important on-screen action or evens.
6.  Transcribe any on-screen text (e.g., telephone numbers, URLs,
    credits, etc.).

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}


Transcripts can be presented to users in a number of ways:

-   [linking to a separate document or Web
    page](https://www.w3.org/WAI/highlights/200606wcag2interview.html);
-   [integrated into the same Web page as the
    video](https://www.commoncraft.com/video/rss);
-   [as an interactive
    transcript](http://www.nytimes.com/interactive/2012/01/24/us/politics/state-of-the-union-2012-video-transcript.html#)
    that can be used as a method to navigate through a video clip.

Here's an example of markup that could be used to present a transcript
of a simple interview (one host, one guest):

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div id="main">
    <h1>Podcast: Interview on WCAG 2</h1>

    <p>Shawn Henry discussed WCAG 2.0 with Giles Colborne following the UPA conference in June, 2006.</p>

    <p><strong>Giles:</strong>  Elsewhere in the conference I bumped into Shawn Henry of the World Wide Web Consortium, the guiding body of the Web. I called her after the conference to ask about the new guidelines from the Web Accessibility Initiative, or WAI, known as WCAG 2.0. I began by asking her why we needed an update when most people haven't yet got to grips with the current guidelines.</p>

    <p><strong>Shawn:</strong>  WCAG 2.0 will be much more appropriate for current and future Web development.  WCAG 1.0 was finalized in May of 1999 and it focused on HTML. Obviously a lot has changed since then. WCAG 2.0 is focused on applying more broadly to different technologies and is updated for the state of Web technology currently, as well as designed so that it can apply more relevantly as technology develops in the future.</p>
...
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---
title: Production options for audio descriptions
nav_title: Audio descriptions
order: 7
status: editors-draft
wcag_success_criteria:
  - 1.2.3
  - 1.2.5
  - 1.2.7
wcag_techniques:
  - G8
  - G78
  - G159
  - G203
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Description basics

Audio descriptions can be open or closed:

-   **Open audio descriptions** are integrated into the program audio
    track and are heard by everyone. They cannot be turned off.
-   **Closed audio descriptions** can be turned on and off by viewers.

Additionally...

-   Audio descriptions are usually timed to play during pauses or breaks
    in narration or dialog, although [extended audio
    descriptions](#ext_dx) may be implemented where necessary.
-   In cases where no pauses are available, a single summary, called a
    pre-description, can be inserted at the beginning of the
    presentation.
-   Audio-description tracks can be presented as pre-recorded
    human-recorded speech or text-to-speech (TTS) audio, or they can be
    text tracks that are delivered on the fly invisibly and read aloud
    by screen readers.

Most described content today is presented with open descriptions, using
one of two options:

-   Two separate videos, one with open descriptions, and the other with
    no descriptions. Authors give users a link or some other method to
    choose one or the other.
-   A single video that contains two audio tracks, one with descriptions
    and one without. Authors give users a button or menu to switch from
    one track to the other.

## Pre-produced audio descriptions

Describing a video can be a time-consuming and complex process,
depending on the subject matter. Before beginning, take a look at the
[description decision tree](decision-tree.html) to determine if descriptions are
even necessary. For longer videos, it may be more time- and
cost-efficient to hire a professional audio-description service provider
to write and record descriptions.

Descriptions are usually recorded as human narration before being
integrated into the video presentation, but technology and markup now
exist to convey descriptions as text which are read aloud on the fly by
screen readers or other text-to-speech (TTS) methods. [Read more about
text-to-speech descriptions](#production-workflow-audio-descriptions-tts-narration).

An excellent place to learn the basics about audio descriptions is [The
Description Key](http://www.descriptionkey.org/). See [an
example of a described
video](https://www.w3.org/WAI/perspectives/captions.html), and be sure
to select the “Enable audio description” button located just below the
player to turn on the descriptions. Other [audio-description
samples](http://www.acb.org/adp/samples.html) are available from the
American Council of the Blind’s [Audio Description
Project](http://www.acb.org/adp/).


## Production workflow: audio descriptions (human-recorded narration)

### Basic workflow for creating pre-produced audio descriptions:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

1. **Watch the video**<br>
    Note opportunities for descriptive narration (i.e., pauses in
    narration or dialog into which descriptions can be inserted).
2. **Write the description script**<br>
    Use a description-authoring tool, a word processor or any text
    editor to create the script that will be recorded by the narrator.
3. **Record the descriptions**<br>
    Using audio-editing software, record the narrator reading the
    description script. [Learn more about recording audio
    descriptions](http://www.descriptionkey.org/technical_issues.html).
    -   Alternatively, create a computer-generated rendering of the
        description script using TTS software. [See examples of
        pre-recorded TTS descriptions](http://ncamftp.wgbh.org/ibm/dvs/)
        to learn whether or not they are appropriate for all types of
        media presentations.
4. **Create an open-described audio track**<br>
    Using audio-editing software, duplicate the original program audio
    track, then paste each audio description into this track at the
    appropriate time intervals. Add this new, open-described audio track
    to the presentation.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}


When recording the descriptions, it will pay to create the
highest-quality audio files possible. Keep these points in mind:

-   Use the highest-quality microphone and recording software available.
-   Use a microphone stand and speak clearly into the microphone.
-   Record the descriptions in a room that is isolated from all external
    sounds.
-   Avoid rooms with hard surfaces (e.g., tile or wood floors).
-   When mixing the descriptions into the program audio, lower the
    program-audio level when the description plays while simultaneously
    raising the description's audio level. When the description is
    finished playing, lower the description audio level and raise the
    program-audio level to its proper setting. Repeat this process
    (known as "ducking") for every description instance.

## Production workflow: audio descriptions (TTS narration)

TTS descriptions are not pre-recorded. Instead, they are transmitted at
the proper intervals to users during playback, and are read aloud by the
user's screen reader. Think of them as an invisible text track that
screen readers can read aloud as the text is delivered. See [examples of
TTS descriptions](http://ncamftp.wgbh.org/ibm/dvs/). The basic workflow
for TTS audio descriptions generally follows this pattern:

### Basic workflow for creating pre-produced TTS audio descriptions:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

1. **Watch the video**<br>
    Note opportunities for descriptive narration (i.e., pauses in
    narration or dialog into which descriptions can be inserted).
2. **Write the description script**<br>
    Using a **caption-editing tool**, write the description script that
    will be read aloud by a screen reader during the time of playback.
3. **Assign timecodes to each description**<br>
    Each timecode will represent when the description should be read by
    the user's screen reader.
4. **Export the description file**<br>
    Use the caption format (e.g., WebVTT or TTML) that is supported by
    the target player. This file will be transmitted during playback and
    will be read aloud by the user's screen reader.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

Below is an image of a caption editor being used to timestamp an audio-description script.

![A caption editor showing a timestamped description script.](dx_script.png)

<p>Using the <code>track</code> element and the <code><a href="https://html.spec.whatwg.org/multipage/embedded-content.html#text-track-kind">kind</a></code> attribute, the descriptions can be delivered at the time of playback and a screen reader will read them aloud. Below is a code sample:</p>

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<video controls>
  <source src="myvideo.mp4" type="video/mp4" />
  <track kind="descriptions" class="visually-hidden" src="my_tts_descriptions.vtt" srclang="en" label="Descriptions" />
</video>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The `kind` attribute will cause the description file to be received invisibly (e.g., off-screen) so sighted users will not see it, but screen readers will be aware of it. Screen readers will then read the description text as it is delivered, synchronized at the time of playback. Read more about [techniques for delivering TTS descriptions](https://www.w3.org/WAI/GL/wiki/Using_the_track_element_to_provide_audio_descriptions). See [functioning examples of TTS descriptions](http://ncamftp.wgbh.org/ibm/dvs/#videos) using the `track` element along with Javascript to illustrate how screen readers will read off-screen descriptions aloud.

## Extended descriptions

Typically, descriptions are written to fit into natural pauses in narration or dialog. However, there will be circumstances where the pauses are not long enough to accommodate a full description. In these cases, extended descriptions may be implemented. In an extended description, the video and audio tracks are programmatically paused when the description begins playing. When the description is finished playing, the video and audio tracks are programmatically resumed. At the next instance of an extended description, the process is repeated. Note that extended and "regular" descriptions may be mixed in a single multimedia presentation.

The only markup-based method for providing extended audio descriptions is to use [SMIL 3.0](https://www.w3.org/TR/SMIL3/), a language for writing interactive multimedia presentations. Support for SMIL is very limited, however, and may require the use of a custom player. Other non-markup-based methods have been experimented with, such as creating an open-described video with a video track that appears to freeze while a separate open-description track plays. See an [example of a video with open extended audio descriptions](https://mass.pbslearningmedia.org/resource/tdc02.sci.life.reg.deathvall/teri-and-jairus-biome-buddies/na/) (created using a non-markup method). Also, read [one method for creating videos with extended open audio descriptions (see chapter 4.9)](http://ncam.wgbh.org/file_download/103).</p>

## Resources for writing descriptions

The importance of presenting users with high-quality, accurate descriptions cannot be overemphasized. Use the guidelines below to help create descriptions that are informative and useful.

-  [<abbr title="Described and Captioned Media Program">DCMP</abbr> Description Key](http://www.descriptionkey.org/how_to_describe.html)
-  [<abbr title="Described and Captioned Media Program">DCMP</abbr> Description Tip Sheet](https://www.dcmp.org/ai/227/)
-  [Accessible Multimedia whitepaper](http://diagramcenter.org/research.html#multimedia)
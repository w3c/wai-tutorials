---
title: Production options for captions
nav_title: Captions
order: 2
status: editors-draft
wcag_success_criteria:
  - 1.2.2
wcag_techniques:
  - G87
  - G93
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Caption basics

Captions were invented for people who are deaf or hard of hearing, although they are [recognized to benefit many audiences](concepts.html#cc+ad_purpose). They can be open or closed:

-   **Closed captions** can be hidden and revealed by users, typically
    by operating a button or menu on the player's control bar.
-   **Open captions** are visible to everyone and cannot be turned off.

Captions always reflect dialog and narration, and are always written in the same language as the audio ([subtitles](subtitles.html), on the other hand, are a translation of the audio into another language). They also contain important **non-speech information**, such as sound effects or speaker cues.

There are three ways to present captions to viewers:

-   **Pop-on**: Captions which appear in discrete blocks, usually
    containing 1-3 rows of text. These are normally created for
    pre-produced material, and are used in the majority of captioned
    online videos.<br />
    [![An example of pop-on captions.](cc_perspectives.png)](https://www.w3.org/WAI/perspectives/captions.html)
-   **Roll-up**: Captions which scroll up, one row at a time, onto the
    screen. These are normally created for live programming, but can
    also be used for pre-produced material.<br />
    [![An example of roll-up captions.](roll-up.png)](http://ncamftp.wgbh.org/sp/wai/roll-up_cc.mp4)
-   **Paint-on**: Text that appears to "paint" onto the screen, one character at a time, as the data are received. Typically, when one row of captions finishes painting onto the screen, the row scrolls up and a new row begins paint onto the screen.<br />
    [![An example of paint-on captions.](paint-on.png)](http://ncamftp.wgbh.org/sp/wai/paint-on_cc.mp4)

Note that if a video has no narration or dialog, it is important to
indicate this to viewers so they do not think that captions are simply
missing from the presentation. In this situation, provide a brief
caption at the beginning of the presentation that indicates that no
audio is provided.

## Production workflow: pre-produced captions

From a technical perspective, captions are simply text presented through
markup that contains timing information and positioning codes. There are
a variety of do-it-yourself tools available for creating captions for
pre-produced video and audio clips.

### Basic workflow for creating pre-produced captions:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

1.  **Enter caption text into the editor**<br>
    Transcribe the audio directly into the caption editor or, if
    available, import a transcript.
2.  **Edit and break text into captions**<br>
    Edit for proper spelling and grammar; divide the text into caption
    blocks.
3.  **Time the captions**<br>
    Assign a timecode to each caption that indicates when it will appear
    or disappear from the screen.
4.  **Review the captions**<br>
    Watch the captioned video carefully and eliminate any errors.
    Accuracy is paramount: misspelled or poorly edited and timed
    captions will only make it harder for viewers to follow what is
    happening on-screen.
5.  **Export a caption file**<br>
    Export the captions in the target format. See [caption formats and
    examples](formats.html) for more information.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}


Below is an image of a caption editor showing how captions have been
formatted and timestamped.

![A caption editor showing timestamped caption text.](timecodes.png)

### Caption quality

Always provide the highest-quality captions that convey 100% accuracy.
See [resources for writing quality captions](#resources-for-writing-quality-captions) for more
information. Keep the following basic points in mind when writing
captions:

-   Ensure that there are no spelling errors. This includes the names of
    characters or speakers.
-   Use conventional grammar rules. After end punctuation (period,
    question mark, exclamation point, etc.), always begin a new caption.
-   Do not edit unless you have a specific reason to do so (e.g., to
    achieve a specific reading level). Fillers such as "um," "ah," etc.,
    can be deleted to save reading time unless doing so alters the
    representation of the speaker.
-   Do not censor: the captions should always accurately represent what
    is spoken.

### A word about styling captions

Most caption-creation tools give authors the ability to style captions in a number of ways: e.g., adding color to the text or background, specifying different font faces and sizes, etc. While it is possible to add styling information to captions, the support in browsers and other media players varies. If the media is produced for a specific player, style the captions to that player’s capabilities.  Otherwise, rely instead on the player's default presentation style (usually white characters on a black box).

Note that many media players give users the option to [customize captions to personal preferences](playing.html#user-customization-of-captions), and these preferences always override author styling. For some users, customizing captions is essential, not just an enhancement:  styling captions in specific manners (for example, yellow text over a black background, with a very large font size) may be the only way for them to make the text readable.
{:#cutom_cc}

Below is an image showing how bold text can be added to captions in a
caption-authoring tool.

![A caption editor showing white caption text on a black background. One
row of text is bold.](text_bold.png)
And here is the WebVTT markup for that caption...

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
1
00:00:00.670 --> 00:00:06.680
The genome is a storybook that's been edited
<b>for a couple billion years.</b>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

...and the TTML markup for the same caption:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<p xml:id="s_1" begin="00:00:00.67" end="00:00:06.67">
The genome is a storybook that's been edited<br />
<span tts:fontWeight="bold">for a couple billion years.</span></p>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Automatically generated captions

Automatically generated captions should **never** be used as the sole
method to produce captions, but they can be a part of the production
workflow. See the [discussion about automatic captions](automatically-generated-captions.html) for
more information.

## Resources for writing quality captions

The importance of presenting users with high-quality, accurate captions
cannot be overemphasized. Use the guidelines below to help create
captions that are informative and easy to read.

-   [<abbr title="Described and Captioned Media Program">DCMP</abbr> Captioning
    Key](http://www.captioningkey.org/quality_captioning.html)
-   [<abbr title="Described and Captioned Media Program">DCMP</abbr> Captioning Tip Sheet](https://www.dcmp.org/ai/225/)
-   [Captioning
    FAQ](http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html)

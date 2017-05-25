---
title: Captions and descriptions decision trees
nav_title: Decision Trees
order: 9
status: editors-draft
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Captions

-   **Does the media contain only audio and no video?**
	-   {:.yes} **Yes:**
		-   **… and the audio contains dialog or narration.**
			_Provide an alternative that presents equivalent information (e.g., captions or a transcript).  See [SC 1.2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)._
		-   **… and the audio does not contain dialog or narration but does contain other non-speech audio elements.**
			_Provide an alternative that presents equivalent information (e.g., captions or a transcript that reflects the non-speech content, such as sound effects).  See [SC 1.2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)._
		-   **… and the media is an audio-only clip.**
      _Provide captions or a complete transcript. See [production options for captions](production-captions.html) or [transcript concepts and examples](transcript.html)._
		-   **… and there is already text on the screen that accurately reflects the audio.** _Do not provide additional captions._
	-   {:.no} **No:**
		- Continue.
-   **Does the media contain only video and no audio?**
	-   {:.yes} **Yes:**
		-   **… and there is already informative text on the screen.**
			_An alternative is not required._
		-   **… and the audio does not contain dialog or narration but does contain other non-speech audio elements.**
			_Provide an alternative that presents equivalent information (e.g., captions or a transcript that reflects the non-speech content, such as sound effects).  See [SC 1.2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)._
		-   **… and the media is an audio-only clip.**
      _Provide captions or a complete transcript. See [production options for captions](production-captions.html) or [transcript concepts and examples](transcript.html)._
		-   **… and there is already text on the screen that accurately reflects the audio.** _Do not provide additional captions._
	-   {:.no} **No:**
		- Continue.
-   **Does the media contain video with synchronized audio?**
	-   {:.yes} **Yes:**
		-   **… and the audio contains dialog or narration.**
			_Provide captions for all prerecorded audio content in synchronized media.  See [SC 1.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)._
		-   **… and the audio does not contain dialog or narration but does contain other non-speech audio elements.**
			_Provide a synchronized alternative that presents equivalent information (e.g., captions that reflect the non-speech content, such as sound effects). See [SC 1.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)._
		-   **… and there is already text on the screen that accurately reflects the audio (including both speech and non-speech elements).**
      _An alternative is not required._
	-   {:.no} **No:**
		- Continue.
- **See the previous two items.**
{:.decision-tree}

## Audio descriptions

-   **Does the media contain visual elements but no audio?**
	-   {:.yes} **Yes:**
		-   **… and the visual elements (e.g., moving or static images; text) are critical for understanding on-screen action.**
			_Provide an alternative such as synchronized audio descriptions or a text-based alternative. See [SC 1.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)._
	-   {:.no} **No:**
		- Continue.
-   **Does the media contain visual elements with synchronized audio?**
	-   {:.yes} **Yes:**
		-   **… and the visual elements (e.g., moving or static images; text) are critical for understanding on-screen action.**
			_Provide audio descriptions for all prerecorded video content in synchronized media. See [SC 1.2.5](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)._
		-   **… and the audio does not provide sufficient information about important visual elements.**
    	_Provide audio descriptions where necessary.  See [SC 1.2.5](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)._
		-   **… and pauses in the dialog or narration are available but insufficient to accommodate complete descriptions.**
    	_Provide extended descriptions. See [SC 1.2.7](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html)._
		-   **… and no pauses are available.**
    	_Provide extended descriptions; see [SC 1.2.7](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html).  Or provide a pre-description; see [production options for descriptions](production-audio-description.html)._
	-   {:.no} **No:**
		- Continue.
-   **If there are no important visual elements in the media, descriptions are not necessary.**
{:.decision-tree}

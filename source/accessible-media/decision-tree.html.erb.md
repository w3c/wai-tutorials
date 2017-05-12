---
title: Captions and descriptions decision trees
nav_title: Decision Trees
order: 9
status: editors-draft
editors:
  - Geoff Freed
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/@@/">@@ project</a>
---

## Captions

-   **Does the media contain audio?**
	-   {:.yes} **Yes:**
		-   **… and the audio contains dialog or narration.**
			_Provide captions. See [production options for captions](production-captions.html)._
		-   **… and the audio does not contain dialog or narration but does contain other audio elements.**
			_Provide captions indicating any important non-speech information. See [production options for captions](production-captions.html)._
		-   **… and the media is an audio-only clip.**
      _Provide captions or a complete transcript. See [production options for captions](production-captions.html) or [transcript concepts and examples](transcript.html)._
		-   **… and there is already text on the screen that accurately reflects the audio.** _Do not provide additional captions._
	-   {:.no} **No:**
		- Continue.
-   **Provide a no-audio caption at the beginning of the presentation (see [production options for captions](production-captions.html)).**
{:.decision-tree}

## Audio descriptions

-   **Does the media contain important visual elements?**
	-   {:.yes} **Yes:**
		-   **… and the elements are referred to in the narration or dialog.**
			_Provide descriptions during pauses near the point when the references occur. See [production options for descriptions](production-audio-description.html)._
		-   **… and the elements are critical for understanding on-screen action.**
			_Describe relevant on-screen elements during pauses in the audio. See [production options for descriptions](production-audio-description.html)._
		-   **… and the audio does not provide sufficient information about what is happening visually, or about elements which provide important visual context.**
			_Describe relevant on-screen elements during pauses in the audio. See [production options for descriptions](production-audio-description.html)._
		-   **… and there is text displayed on the screen.** _Include the text in a description. See [production options for descriptions](production-audio-description.html)._
		-   **… and pauses in the dialog or narration are available, but they are not long enough to accommodate sufficient descriptions.** _Provide extended descriptions. See [production options for descriptions](production-audio-description.html)._
		-   **… and no pauses are available.** _Provide a pre-description. See [production options for descriptions](production-audio-description.html)._
	-   {:.no} **No:**
		- Continue.
-   **If there are no important visual elements in the media, descriptions are not necessary.**
{:.decision-tree}

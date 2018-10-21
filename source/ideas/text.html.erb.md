---
title: Text
nav_title: Text (for Design)
status: editors-draft
order: 2
wcag_success_criteria:
  - 1.4.4
wcag_techniques:
  - C12
  - C13
  - C14
  - C20
  - C28
  - G179
---

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

Needs to be serverly condensed. Also: This part of the tutorial feels not right here, maybe move it in a more design-oriented tutorial?

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

For some people, the visual look and readability of the web page is crucial to understand the content as web pages with many components can distract from the main content or purpose of the page. Visual cues, like a distinct main headline, can will help users to orient around the page. Key sections of the page can be separated from other content using background colors or borders. Navigation sections can be easier to find if they have a distinctive look.

The following gives a brief overview on best practices to assure good readability.

## Font size

User preferences for font size vary grately. As users resize text to 200%, it should not become truncated or overlap adjacent content. Define font sizes in relative units, such as percentages, `em`, or `rem`. Text set in pixels  cannot be zoomed independently from the rest of the page in some browsers. While the other units calculate the font size from the parent element, `rem` calculates the font size from the root element. Consider the following two declarations:

{::nomarkdown}
<%=code_start('','em unit')%>
{:/nomarkdown}

(This example assumes that the root font-size is `16px`.)

~~~css
.content {
  font-size: 1.25em; /* 16px × 1.25 = 20px */
}
.content h1 {
  font-size: 1.25em; /* 16px × 1.25 × 1.25 = 25px */
}
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

The container with the class `content` has a font size that is `1.25` times the font size of its parent element (which we assume is the body). The `<h1>` heading in the content area is `1.25` times than the font size in its parent container (`.content`). To achieve the same result using the `rem` units, the following code is used.

{::nomarkdown}
<%=code_start('','rem unit')%>
{:/nomarkdown}

(This example assumes that the root font-size is `16px`.)

~~~css
.content {
  font-size: 1.25rem;   /* 16px × 1.25   = 20px */
}
.content h1 {
  font-size: 1.5625rem; /* 16px × 1.5625 = 25px */
}
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

While the resulting number for the `font-size` property is more complicated, only one step of calculation needs to be performed which makes setting font-sizes more predictable for developers.

Be aware that using `em` and `rem` units are mainly useful for text and text-related measurements. Borders and most margins and paddings can be defined in pixels (`px`) to avoid thick borders or wide margins for users that use text zoom.

## Line height

The line height needs to be large enough to allow good readability. If the line height is too large, it is hard to connect to the next line when the text wraps. The line height is dependent on the font used on the website, a certain line height value can be too small with one font and too large for another. As a rule of thumb larger text needs smaller line-heights. For body text the line height usually varies between 1.3 and 1.75.

## Text alignment

Main body text should be aligned to one side of the page, left in left-to-right languages. This makes the text easy to discover for people using text resizing or zoom. If the text doesn’t start at the same point on the left side, it is also hard to read for users that are not proficient reading text in this language or have a learning disability.

Centered or justified longer pieces of text can be hard to read as well. Justified text adds space in between words that can cause rivers of white space through lines making reading difficult for some users with dyslexia. If hyphenation is supported this can reduce this effect but hyphenated words can be a barrier for many readers.

## Line length

A best practice is to enable users to set column withs in a way that one line of text isn’t longer than 80 characters. This helps users with certain reading or visual disabilities that have trouble keeping their place when reading long lines of text. If the width of the text container is resized, it should be allowed to scale in a way so 80 characters or less are shown. An very basic way to do this is using `max-width: 55em` in CSS. Another way to ensure good line-length is to use a fluid layout or apply responsive web design techniques that allow the user to resize the window to find a comfortable line length.

{::nomarkdown}
<%=notes_start%>
{:/nomarkdown}

**Note:** This is only required when conforming to WCAG, Level AAA.

{::nomarkdown}
<%=notes_end%>
{:/nomarkdown}

## Highlight section

The HTML5 `<mark>` element can be used to highlight sections of text. By default the text is just <mark>highlighted by color</mark>. It is not supported by assistive technology at the time of writing. It can, however, be used to mark auxiliary information, like search terms in a list of articles. This allows better visual orientation. The color combination of the highlight color, the background color and the text color needs to meet <a href="/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast">minimum contrast requirements of WCAG 2.0</a>.

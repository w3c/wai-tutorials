---
title: Styling
status: draft
order: 5
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

## Visual clarity

Web pages with many components can distract from the main content or purpose of the page, which is especially useful for users that can’t concentrate very well. The main content’s headline should have a distinct visual style that invites the reader to look at the main content first.

All headings should be styled differently to the body text. Separating key sections of the page using background colors or borders can also help users to separate main from auxiliary content.

## Font size

The user needs to be able to resize the text to 200% of its size anywhere on the page, without the text being cut off or overlapping other text. The font size should be defined in relative units, such as percentages, `em` or `rem`. It is not possible to zoom text set in pixels independently from the rest of the page in some browsers. While the other units calculate the font size from the parent element, `rem` calculates the font size from the root element. Consider the following two declarations:

{::nomarkdown}
<%=code_start('','em unit')%>
{:/nomarkdown}

(The `px` values assume that the root font-size is `16px`.)

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

(The `px` values assume that the root font-size is `16px`.)

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


## Text alignment

Main body text should be aligned to one side of the page, usually left in left-to-right languages. This makes the text easy to discover for people using text resizing or zoom. If the text doesn’t start at the same point on the left side, it is also hard to read for users that are not proficient reading text in this language or have a learning disability.

Centered or justified longer pieces of text can be hard to read as well. Justified text adds space in between words that can cause rivers of white space through lines making reading difficult for some users with dyslexia. If hyphenation is supported this can reduce this effect but hyphenated words can be a barrier for many readers.

## Line length

A line of text shouldn’t be longer than 80 characters. This helps users with certain reading or visual disabilities that have trouble keeping their place when reading long lines of text. If the width of the text container is resized, it should be allowed to scale in a way so 80 characters or less are shown. An easy way to do this is using `max-width: 70em` in CSS. Another way to ensure good line-length is to use a fluid layout or apply responsive web design techniques that allow the user to resize the window to find a comfortable line length.

## Highlight section

The HTML5 `<mark>` element can be used to highlight sections of text. By default the text is just <mark>highlighted by color</mark>. It is not supported by assistive technology at the time of writing. It can, however, be used to mark auxiliary information, like a section that is currently read by a page reading plugin. Also search terms can be highlighted in a list of articles to allow better visual orientation.

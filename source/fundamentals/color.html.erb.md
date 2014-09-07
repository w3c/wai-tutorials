---
title: Color
status: editors-draft
order: 5
type: tips
wcag_techniques:
  - G138
  - G183
wcag_success_criteria:
  - 1.4.1
  - 1.4.3
  - 1.4.6
---

Color, especially the lack of contrast, can be a major accessibility barrier.

## Why is this important?

* **Blind persons** are not able to see color at all.
* For **people with color blindness**, two colors can look so alike that they can’t tell if it is one or the other.
* **People with low vision** may see content blurry or unreadable if there is not enough enough contrast.

## What to do?

### Don’t rely on color alone.

If there is some information conveyed through color alone, for example a green circle that shows that an item is in stock and red one that it isn’t, this information will be invisible to a lot of people.

Make sure to [add an alternative text](/images/informative.html) if an image is used. Have one of the icons in a different shape to distinguish it from the other. The not-in-stock icon could be a square, for example. Additionally a `title` attribute can help as well. Note that – because the colors are used in traffic lights – the meaning of the colors red and green may be known, where the meaning of circle and square is not. In such cases, a legend or an explanation will help all users.

### Use a sufficient contrast ratio.
{:#contrast-ratio}

Text and the background color need to have a certain contrast ratio to make sure that it is readable for people with low vision or in bad light conditions. The relative luminance contrast should be at least 4.5:1 for normal text and 3:1 for large scale text.

To see if color combinations on websites comply with the contrast ratio, a number of tools are available{::comment}, see the [Web Accessibility Evaluation Tools List](…){:/comment}. For example:

* [Contrast Analyser – Application](http://www.paciellogroup.com/resources/contrastAnalyser)
* [Contrast Ratio – Online tool](https://leaverou.github.io/contrast-ratio/)
* [WCAG Contrast checker – Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/)
* [Color Contrast Analyzer – Chrome Extension](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)

**Note:** Resources are for information purposes only, no endorsement implied.

---
title: Headings
status: editors-draft
order: 3
type: tips
wcag_success_criteria:
  - 1.3.1
  - 2.4.1
  - 2.4.6
  - 2.4.10
wcag_techniques:
  - H69
  - H80
  - PDF9
  - G130
  - G141
  - ARIA12
  - H42
---

## Why is this important?

* **Screen readers** provide mechanisms to present a list of headings to the user that allows jumping to those individual headings.
* Headings help people that experience the page **visually** by adding a visual structure of the text.

## What to do?

### Organize the page using headings

In HTML, `<h1>` to `<h6>` are used to structure the page. Those headings can be used to identify parts of the page programmatically as well as the content itself. The main title should be marked up as `<h1>`, so that it can be easily discovered.

It is good practice not to jump heading levels and nest properly. That means that an `<h1>` is followed by an `<h1>` (rarely) or `<h2>`, an `<h2>` is followed by a `<h2>` or `<h3>` etc.

### Style headings in contrast to body text

It is also important to style headings differently than other text, to help with scanning the page. This is especially important for people searching a certain information or skimming the text. It also helps people that have a hard time focusing on a portion of the text to rediscover their position in the text.

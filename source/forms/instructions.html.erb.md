---
title: Instructions
status: editors-draft
order: 4
---

- **What to do:**Provide clear, well positioned overall and in-line instructions .
- **Why:**Users need to be told if any fields require a specific format, or are in themselves required fields.
- **How:** Always position instructions ahead of the field or fields that they relate to. Give clear information about any necessary formats, including an example if appropriate. Ensure that in-line instructions are positioned so that they can be announced as part of the field label wherever possible.
- **Conformance:**Required to meet [SC 3.3.2 Labels and Instructions](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-cues).

## Overview instructions
{:.ex}

Position instructions that are common to several fields ahead of the form itself. These should include information on any data format restrictions, how any required fields are identified and can also include help to find in-line format tips.

Here are some instructions that should be positioned ahead of the form as a whole, or before a group of fields:

{::nomarkdown}<%= sample_start %>{:/nomarkdown}

- All fields marked * must be completed.
- Dates should all be typed in the format dd/mm/yyy, (as in 21/07/2013).
- Passwords must contain at least 8 letters and/or numbers.
- Extra help can be found immediately after each field.

{::nomarkdown}<%= sample_end %>{:/nomarkdown}

## In-line instructions
{:.ex}

Some in-line instructions, such as required field indicators must be part of the label itself, otherwise it might not be picked up by screen readers. Other instructions, such as format tips are most accessible as part of the label element, but might be positioned to the right of a field as long as this is included in the overview instruction, otherwise people who can’t see the screen won’t know whether the tip relates to the field before it or the one after.

{::nomarkdown}<%= sample_start %>{:/nomarkdown}

<form method="post" action="#">
  <div>
    <label for="date">Date (dd-mm-yyyy):</label> <input type="text" name="date" id="date">
  </div>
</form>

{::nomarkdown}<%= sample_end %>{:/nomarkdown}

{::nomarkdown}<%= code_start %>{:/nomarkdown}

~~~ html
<form method="post" action="#">
  <div>
    <label for="date">Date (dd-mm-yyyy):</label>
    <input type="text" name="date" id="date">
  </div>
</form>
~~~

{::nomarkdown}<%= code_end %>{:/nomarkdown}

## Related WCAG2.0 Techniques

The following WCAG 2.0 technique was used in the examples above:


- [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/WCAG20-TECHS/G184.html)
- [G89: Providing expected data format and example](%0Ahttp://www.w3.org/TR/WCAG20-TECHS/G89.html)

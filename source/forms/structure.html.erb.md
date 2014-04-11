---
title: Structure
status: editors-draft
order: 3
---

- **What to do:** Build a logical structure into your forms. Split long forms over several topic organised pages, and code related groups of controls using structural elements to define the topic they have in common.
- **Why:** Forms that are split into logical stages over several pages can make it easier for people with learning difficulties to concentrate. Grouping related fields can ensure that the topic as well as the individual label can be announced by screen readers.
- **How:** Plan any long form so that, wherever possible, it is presented in logical stages. Use `<fieldset>` and `<legend>` elements to give the overall topic of groups of form controls.
- **Conformance:** Required to meet [SC 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG20/quickref/20120103/#content-structure-separation-programmatic) and [SC 3.3.2 Labels and Instructions](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-cues).

## Forms spanning multiple pages

Some forms, such as for on-line purchasing are a typical example where topic division is almost essential. It presents fewer challenges when users have manageable stages to complete.

- Where a form spans several pages, the first stage should explain how many stages will need to be followed, and how users can find any help that may be provided along the way.
- Within each stage, let users know their current position in the process, what to do for this stage, and provide a reminder about help messages or mandatory fields.

## Grouping related fields with fieldsets
{:.ex}

The fieldset element is needed to establish relationships between groups of form fields, to help users to focus on the particular topic in hand.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<form method="post" action="#">
<fieldset>
<legend>I want to receive</legend>
	<input type="checkbox" name="check1" id="check_1"> <label for="check_1">The weekly newsletter</label> <br>
	<input type="checkbox" name="check2" id="check_2"> <label for="check_2">Offers from the company</label> <br>
	<input type="checkbox" name="check3" id="check_3"> <label for="check_3">Offers from associated companies</label>
</fieldset>
</form>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<form method="post" action="#">
<fieldset>
<legend>I want to receive</legend>
	<input type="checkbox" name="check1" id="check_1">
	<label for="check_1">The weekly newsletter</label>
	<br>

	<input type="checkbox" name="check2" id="check_2">
	<label for="check_2">Offers from the company</label>
	<br>

	<input type="checkbox" name="check3" id="check_3">
	<label for="check_3">Offers from associated companies</label>
</fieldset>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}



## Related WCAG2.0 Techniques

The following WCAG 2.0 technique was used in the example above

- [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/WCAG20-TECHS/H71.html).

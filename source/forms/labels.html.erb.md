---
title: Labels
status: editors-draft
order: 2
---

- **What to do:** Form elements need clear, descriptive, well-positioned labels. Ideally labels should be explicitly associated with the form control.
- **Why:** An explicit label becomes a clickable area that can be used to put focus into the field either by mouse or by voice input software, it also ensures that screen readers announce the correct text when a field has focus.
- **How:** To associate a label and its form control, the `<label>` element must have a `for` attribute which exactly matches the value of an `id` attribute in its related field.
- **Conformance:** Providing descriptive, well positioned associated labels is required to meet [SC 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG20/quickref/20120103/#content-structure-separation-programmatic), [SC 2.4.6 Headings and Labels](http://www.w3.org/WAI/WCAG20/quickref/20120103/#navigation-mechanisms-descriptive), [SC 3.3.2 Labels and Instructions](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-cues) or [SC 4.1.2 Name, Role, Value](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv).

## Explicitly associated label
{:.ex}

All fields marked * must be completed.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<form method="post" action="#">
	<div>
		<label for="firstname">First name: </label> <input type="text" name="firname" id="firstname">
	</div>
	<div>
		<label for="lastname">Last name: *</label> <input type="text" name="lastname" id="lastname">
	</div>
</form>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

<%= notes_start %>

**Note:** It’s essential that required field indicators, and any other important information is kept within the label element, screen readers will not read out any text that is outside explicitly associated labels, if a different color is wanted for the indicator, this can be positioned within a span element inside the label element.

<%= notes_end %>

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
	<label for="firstname">First name:</label>
	<input type="text" name="firstname" id="firstname">
</div>
<div>
	<label for="lastname">Last name: *</label>
	<input type="text" name="lastname" id="lastname">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


## Label position

To maximize predictability, (e.g. for people using high screen magnification), radio button and checkbox labels must be to the right of the field, labels for all other fields must be positioned to the left of the field.


## Related WCAG2.0 Techniques:

- [G131: Providing descriptive labels](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G131);
- [H44: Using label elements to associate text labels with form controls;](http://www.w3.org/TR/WCAG20-TECHS/H44.html)
- [H93: Ensuring that id attributes are unique on a Web page;](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H93)
- [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G162).

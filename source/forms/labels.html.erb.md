---
title: Labels
status: editors-draft
order: 2
---

Form elements need clear, descriptive, well-positioned labels, which should be explicitly associated with the form control. Such a label becomes a clickable area that can be used to put focus into the field either by mouse or by voice input software. It also ensures that screen readers announce the correct text when a field has focus.

To associate a label and its form control, the `<label>`{:.elem} element must have a `for`{:.attrib} attribute which exactly matches the value of an `id`{:.attrib} attribute in its related field.

<!--
- **Conformance:** Providing descriptive, well positioned associated labels is required to meet [SC 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG20/quickref/20120103/#content-structure-separation-programmatic), [SC 2.4.6 Headings and Labels](http://www.w3.org/WAI/WCAG20/quickref/20120103/#navigation-mechanisms-descriptive), [SC 3.3.2 Labels and Instructions](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-cues) or [SC 4.1.2 Name, Role, Value](http://www.w3.org/WAI/WCAG20/quickref/20120103/#ensure-compat-rsv).
-->


## Explicitly associated label
{:.ex}

{::nomarkdown}
<%= sample_start %>

<div>All fields marked (required) must be completed.</div>
<form method="post" action="#">
	<div>
		<label for="firstname">First name: </label> <input type="text" name="firstname" id="firstname">
	</div>
	<div>
		<label for="lastname">Last name: (required)</label> <input type="text" name="lastname" id="lastname">
	</div>
	<div>
		<input type="checkbox" id="premium" name="premium"> <label for="premium">Premium Membership</label>
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
	<label for="firstname">First name:</label>
	<input type="text" name="firstname" id="firstname">
</div>
<div>
	<label for="lastname">Last name: (required)</label>
	<input type="text" name="lastname" id="lastname">
</div>
<div>
	<input type="checkbox" id="premium" name="premium">
	<label for="premium">Premium Membership</label>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


To maximize predictability, (e.g. for people using high screen magnification), radio button and checkbox labels must be to the right of the field, labels for all other fields must be positioned to the left of the field.

It’s essential that required field indicators, and any other important information, is kept within the label element: Screen readers will not read out _any text_ that is outside explicitly associated labels.

## Related WCAG2.0 Techniques:

- [G131: Providing descriptive labels](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G131);
- [H44: Using label elements to associate text labels with form controls;](http://www.w3.org/TR/WCAG20-TECHS/H44.html)
- [H93: Ensuring that id attributes are unique on a Web page;](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H93)
- [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G162).

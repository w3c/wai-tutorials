---
title: Grouping Controls
order: 3
wcag_success_criteria:
  - 1.3.1
  - 3.3.2
wcag_techniques:
  - H71
  - ARIA17
---

Grouping related form controls makes forms more understandable for all users. Group them both visually and within the code. Use the `<fieldset>` and `<legend>` elements to associate related form controls.

## Associating related controls with `fieldset`
{:.newex}

The `<fieldset>` element provides a container for related form elements, and the `<legend>` element acts like a heading to identify the group. In the example below there are three checkboxes that are all part of an opt-in function for receiving different types of information.

The legend for a group of controls can also highlight common attributes of all controls, for example state the fact that all fields in the group are required.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<fieldset>
<legend>I want to receive</legend>
	<div>
		<input type="checkbox" name="newsletter" id="check_1"> <label for="check_1">The weekly newsletter</label>
	</div>
	<div>
		<input type="checkbox" name="company_offers" id="check_2"> <label for="check_2">Offers from the company</label>
	</div>
	<div>
		<input type="checkbox" name="assoc_offers" id="check_3"> <label for="check_3">Offers from associated companies</label>
	</div>
</fieldset>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<fieldset>
<legend>I want to receive</legend>
	<div>
		<input type="checkbox" name="newsletter" id="check_1">
		<label for="check_1">The weekly newsletter</label>
	</div>
	<div>
		<input type="checkbox" name="company_offers" id="check_2">
		<label for="check_2">Offers from the company</label>
	</div>
	<div>
		<input type="checkbox" name="assoc_offers" id="check_3">
		<label for="check_3">Offers from associated companies</label>
	</div>
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

**Note:** Depending on the configuration, some screen readers read out the legend either _with every form element_, _once_, or, rarely, _not at all_. To accommodate this consider the following:

* Make the legend as short as possible for situations in which it is read together with the label each time.
* Make the individual labels sufficiently self-explanatory for situations in which legends are not read aloud, without repeating the legend in every label.

## Associating related controls with WAI-ARIA

WAI-ARIA provides a grouping role that functions similarly to `fieldset` and `legend`.  In this example the `div` element has `role=group` to indicate that the contained elements are members of a group and the `aria-labelledby` attribute references the `id` for text that will serve as the label for the group.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<div role="group" aria-labelledby="ssn1">
   <span id="ssn1">Social Security#</span> 
   <span style="color: #D90D0D;"> * </span>
   <input size="3" type="text" aria-required="true" title="First 3 digits" />-
   <input size="2" type="text" aria-required="true" title="Next 2 digits" />-
   <input size="4" type="text" aria-required="true" title="Last 4 digits" />
</div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div role="group" aria-labelledby="ssn1">
   <span id="ssn1">Social Security#</span> 
   <span style="color: #D90D0D;"> * </span>
   <input size="3" type="text" aria-required="true" title="First 3 digits" />-
   <input size="2" type="text" aria-required="true" title="Next 2 digits" />-
   <input size="4" type="text" aria-required="true" title="Last 4 digits" />
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

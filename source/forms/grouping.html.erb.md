---
title: Grouping Controls
order: 3
wcag_success_criteria:
  - 1.3.1
  - 3.3.2
wcag_techniques:
  - H71
  - ARIA17
  - H85
---

Grouping related form controls makes forms more understandable for all users as related fields are easier to identify. Such Groups can be processed individually instead of processing the complete form at once. The grouping needs to be carried out visually and in the code, for example by using the `<fieldset>` and `<legend>` elements to associate related form controls.

## Associating related controls with `fieldset`
{:.ap}

The `<fieldset>` element provides a container for related form elements, and the `<legend>` element acts like a heading to identify the group.

The legend for a group of controls can also highlight common attributes of all controls, for example state the fact that all fields in the group are required.

### … to group checkboxes
{:.ex}

In the example below there are three checkboxes that are all part of an opt-in function for receiving different types of information.

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
		<input type="checkbox" name="newsletter" id="check_1"> <label for="check_1">The weekly newsletter</label>
	</div>
	[…]
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### … to group related fields
{:.ex}

This example shows form fields to enter shipping and invoice addresses. As the labels in both groups have the same text, a `fieldset` is added to indicate which fields belong together.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<fieldset style="float:left;">
		<legend>Shipping Address:</legend>
		<div>
			<label for="shipping_name">Name:</label><br>
			<input type="text" name="shipping_name" id="shipping_name">
		</div>
		<div>
			<label for="shipping_street">Street:</label><br>
			<input type="text" name="shipping_street" id="shipping_street">
		</div>
		<div>
			<label for="shipping_number">Number:</label><br>
			<input type="text" name="shipping_number" id="shipping_number">
		</div>
		<div>
			<label for="shipping_city">City:</label><br>
			<input type="text" name="shipping_city" id="shipping_city">
		</div>
		<div>
			<label for="shipping_zip">ZIP code:</label><br>
			<input type="text" name="shipping_zip" id="shipping_zip">
			</div>
	</fieldset>
	<fieldset style="float:left;">
		<legend>Invoice Address:</legend>
		<div>
			<label for="invoice_name">Name:</label><br>
			<input type="text" name="invoice_name" id="invoice_name">
		</div>
		<div>
			<label for="invoice_street">Street:</label><br>
			<input type="text" name="invoice_street" id="invoice_street">
		</div>
		<div>
			<label for="invoice_number">Number:</label><br>
			<input type="text" name="invoice_number" id="invoice_number">
		</div>
		<div>
			<label for="invoice_city">City:</label><br>
			<input type="text" name="invoice_city" id="invoice_city">
		</div>
		<div>
			<label for="invoice_zip">ZIP code:</label><br>
			<input type="text" name="invoice_zip" id="invoice_zip">
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
	<legend>Shipping Address:</legend>
	<div>
		<label for="shipping_name">Name:</label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
	[…]
</fieldset>
<fieldset>
	<legend>Invoice Address:</legend>
	<div>
		<label for="invoice_name">Name:</label><br>
		<input type="text" name="invoice_name" id="invoice_name">
	</div>
	[…]
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

**Note:** Depending on the configuration, some screen readers read out the legend either _with every form element_, _once_, or, rarely, _not at all_. To accommodate this consider the following:

* Make the legend as short as possible for situations in which it is read together with the label each time.
* Make the individual labels sufficiently self-explanatory for situations in which legends are not read aloud, without repeating the legend in every label.

## Associating related controls with WAI-ARIA
{:.ap}

WAI-ARIA provides a grouping role that functions similarly to `fieldset` and `legend`.  In this example the `div` element has `role=group` to indicate that the contained elements are members of a group and the `aria-labelledby` attribute references the `id` for text that will serve as the label for the group.

This technique provides additional styling possibilities.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<div role="group" aria-labelledby="shipping_head" style="float:left; border: 1px solid #333; padding: 0 .5em .5em; margin-right: 1em;">
		<div id="shipping_head" style="font-weight: bold; padding: .25em 0;">Shipping Address:</div>
		<div>
			<label for="aria_shipping_name">Name:</label><br>
			<input type="text" name="aria_shipping_name" id="aria_shipping_name">
		</div>
		<div>
			<label for="aria_shipping_street">Street:</label><br>
			<input type="text" name="aria_shipping_street" id="aria_shipping_street">
		</div>
		<div>
			<label for="aria_shipping_number">Number:</label><br>
			<input type="text" name="aria_shipping_number" id="aria_shipping_number">
		</div>
		<div>
			<label for="aria_shipping_city">City:</label><br>
			<input type="text" name="aria_shipping_city" id="aria_shipping_city">
		</div>
		<div>
			<label for="aria_shipping_zip">ZIP code:</label><br>
			<input type="text" name="aria_shipping_zip" id="aria_shipping_zip">
			</div>
	</div>
	<div role="group" aria-labelledby="invoice_head" style="float:left; border: 1px solid #333; padding:0 .5em .5em;">
		<div id="invoice_head" style="font-weight: bold; padding: .25em 0;">Invoice Address:</div>
		<div>
			<label for="aria_invoice_name">Name:</label><br>
			<input type="text" name="aria_invoice_name" id="aria_invoice_name">
		</div>
		<div>
			<label for="aria_invoice_street">Street:</label><br>
			<input type="text" name="aria_invoice_street" id="aria_invoice_street">
		</div>
		<div>
			<label for="aria_invoice_number">Number:</label><br>
			<input type="text" name="aria_invoice_number" id="aria_invoice_number">
		</div>
		<div>
			<label for="aria_invoice_city">City:</label><br>
			<input type="text" name="aria_invoice_city" id="aria_invoice_city">
		</div>
		<div>
			<label for="aria_invoice_zip">ZIP code:</label><br>
			<input type="text" name="aria_invoice_zip" id="aria_invoice_zip">
		</div>
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div role="group" aria-labelledby="shipping_head">
	<div id="shipping_head">Shipping Address:</div>
	<div>
		<label for="shipping_name">Name:</label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
	[…]
</div>
<div role="group" aria-labelledby="invoice_head">
	<div id="invoice_head">Invoice Address:</div>
	<div>
		<label for="invoice_name">Name:</label><br>
		<input type="text" name="invoice_name" id="invoice_name">
	</div>
	[…]
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Group items in `select` elements

For `select` elements with groups of options, the `optgroup` element can be used to indicate such groups. `Optgroup`’s `label` attribute is used to label the group. This is especially useful for lists with many options. In the example below, the user can chose from a lectures in one of three courses.

{::nomarkdown}
<%= sample_start %>

<form action="#" method="get">
	<p>
		Which course would you like to watch today?<br>
		<label id="course">Course:</label>
		<select name="course" id="course">
			<option></option>
			<optgroup label="8.01 Physics I: Classical Mechanics">
				<option value="8.01.1">Lecture 01: Powers of Ten</option>
				<option value="8.01.2">Lecture 02: 1D Kinematics</option>
				<option value="8.01.3">Lecture 03: Vectors</option>
			</optgroup>
			<optgroup label="8.02 Physics II: Electricity and Magnestism">
				<option value="8.02.1">Lecture 01: What holds our world together?</option>
				<option value="8.02.2">Lecture 02: Electric Field</option>
				<option value="8.02.3">Lecture 03: Electric Flux</option>
			</optgroup>
			<optgroup label="8.03 Physics III: Vibrations and Waves">
				<option value="8.03.1">Lecture 01: Periodic Phenomenon</option>
				<option value="8.03.2">Lecture 02: Beats</option>
				<option value="8.03.3">Lecture 03: Forced Oscillations with Damping</option>
			</optgroup>
		</select>
		<input type=submit value="▶ Play">
	</p>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<select>
	<optgroup label="8.01 Physics I: Classical Mechanics">
		<option value="8.01.1">Lecture 01: Powers of Ten</option>
		<option value="8.01.2">Lecture 02: 1D Kinematics</option>
		<option value="8.01.3">Lecture 03: Vectors</option>
	</optgroup>
	<optgroup label="8.02 Physics II: Electricity and Magnestism">
		<option value="8.02.1">Lecture 01: What holds our world together?</option>
		[…]
	</optgroup>
	[…]
</select>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

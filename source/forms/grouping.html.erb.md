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
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="http://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify. It also makes it easier for people to focus on smaller and more manageable groups rather than try to grasp the entire form at once.

Grouping needs to be carried out visually and in the code, for example, by using the `<fieldset>` and `<legend>` elements to associate related form controls. Also, related entries of a `<select>` element can be grouped using `<optgroup>`.

## Associating related controls with `fieldset`
{:.ap}

The `<fieldset>` element provides a container for related form controls, and the `<legend>` element acts like a heading to identify the group.

The legend for a group of controls can also highlight common attributes of all controls, for example to advise that all fields in the group are required.

### Radio buttons
{:.ex.inap}

In the example below, there are three radio buttons that allow the user to choose an output format. Radio button groups should always be grouped using `<fieldset>`.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<fieldset>
<legend>Output format</legend>
  <div>
    <input type="radio" name="format" id="txt" value="txt" checked> <label for="txt">Text file</label>
  </div>
  <div>
    <input type="radio" name="format" id="csv" value="csv"> <label for="csv">CSV file</label>
  </div>
  <div>
    <input type="radio" name="format" id="html" value="HTML"> <label for="html">HTML file</label>
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
<legend>Output format</legend>
  <div>
    <input type="radio" name="format" id="txt" value="txt" checked>
    <label for="txt">Text file</label>
  </div>
  <div>
    <input type="radio" name="format" id="csv" value="csv">
    <label for="csv">CSV file</label>
  </div>
  […]
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Checkboxes
{:.ex.inap}

In the example below, there are three checkboxes that are all part of an opt-in function for receiving different types of information.

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
	[…]
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Related fields
{:.ex.inap}

This example shows form fields to enter shipping and billing addresses. As the labels in both groups have the same text, the `fieldset` element also helps to distinguish the form fields by their groups. In case the `<legend>` is not read by screen readers (see note below), labels for the first form control in each group should include the group’s name. This name can be hidden visually.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<fieldset style="float: left;">
		<legend>Shipping Address:</legend>
		<div>
			<label for="shipping_name"><span class="visuallyhidden">Shipping </span>Name:</label><br>
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
	<fieldset style="float: left;">
		<legend>Billing Address:</legend>
		<div>
			<label for="billing_name"><span class="visuallyhidden">Billing </span>Name:</label><br>
			<input type="text" name="billing_name" id="billing_name">
		</div>
		<div>
			<label for="billing_street">Street:</label><br>
			<input type="text" name="billing_street" id="billing_street">
		</div>
		<div>
			<label for="billing_number">Number:</label><br>
			<input type="text" name="billing_number" id="billing_number">
		</div>
		<div>
			<label for="billing_city">City:</label><br>
			<input type="text" name="billing_city" id="billing_city">
		</div>
		<div>
			<label for="billing_zip">ZIP code:</label><br>
			<input type="text" name="billing_zip" id="billing_zip">
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
		<label for="shipping_name">
      <span class="visuallyhidden">Shipping </span>Name:
    </label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
  <div>
    <label for="shipping_street">Street:</label><br>
    <input type="text" name="shipping_street" id="shipping_street">
  </div>
	[…]
</fieldset>
<fieldset>
	<legend>Billing Address:</legend>
	<div>
		<label for="billing_name">
      <span class="visuallyhidden">Billing </span>Name:
    </label><br>
		<input type="text" name="billing_name" id="billing_name">
	</div>
  <div>
    <label for="billing_street">Street:</label><br>
    <input type="text" name="billing_street" id="billing_street">
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
	<div role="group" aria-labelledby="shipping_head" style="float: left; border: 1px solid #333; padding: 0 .5em .5em; margin-right: 1em;">
		<div id="shipping_head" style="font-weight: bold; padding: .25em 0;">Shipping Address:</div>
		<div>
			<label for="aria_shipping_name"><span class="visuallyhidden">Shipping </span>Name:</label><br>
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
	<div role="group" aria-labelledby="billing_head" style="float: left; border: 1px solid #333; padding: 0 .5em .5em;">
		<div id="billing_head" style="font-weight: bold; padding: .25em 0;">Billing Address:</div>
		<div>
			<label for="aria_billing_name"><span class="visuallyhidden">Billing </span>Name:</label><br>
			<input type="text" name="aria_billing_name" id="aria_billing_name">
		</div>
		<div>
			<label for="aria_billing_street">Street:</label><br>
			<input type="text" name="aria_billing_street" id="aria_billing_street">
		</div>
		<div>
			<label for="aria_billing_number">Number:</label><br>
			<input type="text" name="aria_billing_number" id="aria_billing_number">
		</div>
		<div>
			<label for="aria_billing_city">City:</label><br>
			<input type="text" name="aria_billing_city" id="aria_billing_city">
		</div>
		<div>
			<label for="aria_billing_zip">ZIP code:</label><br>
			<input type="text" name="aria_billing_zip" id="aria_billing_zip">
		</div>
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

Because WAI-ARIA not fully supported in all web browser and screen reader combinations, a group identifier should be added to the first form control in the group.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<div role="group" aria-labelledby="shipping_head">
	<div id="shipping_head">Shipping Address:</div>
	<div>
		<label for="shipping_name">
      <span class="visuallyhidden">Shipping </span>Name:
    </label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
	[…]
</div>
<div role="group" aria-labelledby="billing_head">
	<div id="billing_head">Billing Address:</div>
	<div>
		<label for="billing_name">
      <span class="visuallyhidden">Billing </span>Name:
    </label><br>
		<input type="text" name="billing_name" id="billing_name">
	</div>
	[…]
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Grouping items in `select` elements

For `select` elements with groups of options, the `optgroup` element can be used to indicate such groups. The `label` attribute of the `optgroup` element is used to provide a label for the group. This is especially useful for lists with many related options. In the example below, users can chose from lectures in one of three courses.

{::nomarkdown}
<%= sample_start %>

<form action="#" method="get">
	<fieldset>
		<legend>Which course would you like to watch today?</legend>
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
	</fieldset>
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

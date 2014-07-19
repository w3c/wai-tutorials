---
title: Labels
status: editors-draft
order: 2
wcag_success_criteria: 
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
wcag_techniques:
  - G131
  - H44
  - H93
  - G162
  - G17
  - G18
---

Form elements need clear, descriptive, well-positioned labels, which should be associated to the form control. Labels also increases the clickable area that put focus into the field when it’s clicked. Also it helps people using voice input software setting the focus in the input field and also ensures that screen readers announce the correct text when a field has focus.

To maximize predictability, labels must be positioned on the right of radio buttons and checkboxes and on the top or left for every other field (in left-to-right languages). For people using high screen magnification and in mobile context labels above form fields are often preferred.

It’s essential that required field indicators and other important information is kept within the label element: Screen readers will usually not read out _any text_ that is outside labels if in “Forms Mode”.

## Using Implicit Labels
{:.ex}

The most basic way to associate a descriptive text to a form field is to wrap them in a `label` element:

{::nomarkdown}
<%= sample_start %>

<div>All fields marked (required) must be completed.</div>
<form method="post" action="#">
  <div>
    <label>First name: <input type="text" name="firstname"></label>
  </div>
  <div>
    <label>Last name: (required) <input type="text" name="lastname"></label>
  </div>
  <div>
    <label><input type="checkbox" name="premium"> Premium Membership</label>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>All fields marked (required) must be completed.</div>
<form method="post" action="#">
  <div>
    <label>
      First name: <input type="text" name="firstname">
    </label>
  </div>
  <div>
    <label>
      Last name: (required) <input type="text" name="lastname">
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" name="premium"> Premium Membership
    </label>
  </div>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Using Explicit Labels
{:.ex}

To explicitly associate a label and its form control, the `<label>`{:.elem} element must have a `for`{:.attrib} attribute which exactly matches the value of an `id`{:.attrib} attribute in its related field.

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

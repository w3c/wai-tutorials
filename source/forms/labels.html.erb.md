---
title: Labels and Descriptions
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

It’s essential that required field indicators and other important information is kept within the label element: Screen readers will not read out _any text_ that is outside labels.

## Associating labels

### Implicit labels
{:.ap}

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

### Explicit labels
{:.ap}

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

## Additional descriptions
{:.newap}

Sometimes it is necessary to add additional, auxiliary to an input field to make it easier for users to enter the correct value into the form field.

### Multiple labels
{:.ap}

### Placeholder text
{:.ap}

Placeholder text is a short hint of the kind of data to put into a field. It’s usually shown as low-contrast text inside the form field. **It’s not a replacement for a label**, especially they are not treated as labels by assistive technology.

If the placeholder text is customized, it should have distinctively less contrast than regular text input so it is not mistaken as pre-populated while obeying the contrast ratio rules.

{::nomarkdown}
<%= sample_start %>
<form method="post" action="#">
  <div>
    <label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
  </div>
  <div>
    <label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
  <label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
</div>
<div>
  <label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Assign a description using WAI-ARIA
{:.ap}

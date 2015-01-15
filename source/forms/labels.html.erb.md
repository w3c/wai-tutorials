---
title: Labeling Controls
order: 2
contributors:
  - HTML5 Boilerplate
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
wcag_techniques:
  - G131
  - H44
  - H93
  - G17
  - G18
  - G167
  - H65
  - ARIA14
  - ARIA16
---

Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases this is done by using the `<label>` element.

Labels need to describe the purpose of the form control. This section of the tutorial describes how to provide labels that are properly associated with form controls. Later sections explain how to provide [instructions](instructions.html), [validate user input](validation.html), and [provide feedback](notifications.html) to help users complete your form.

A label and a form control need to be associated with each other either implicitly or explicitly. This allows browsers to use the label as a larger clickable area to access or activate the control, for example. It also ensures that assistive technology is able to refer to the correct label when presenting a form control.

## Associating labels explicitly
{:.newex}

Use the `for` attribute of the `<label>` element to explicitly associate labels with their form controls. The value of the `for` attribute must exactly match the value of the `id` attribute of the referenced form element.

This approach is robust because as it explicitly associates the labels with the form elements within the code. It allows the labels and form controls to be displayed separately, for example on a mobile device when only one of the controls can be displayed at a time. It is also independent of the HTML code structure, which is particularly useful when the label text and form element are not included within the same parent element in the HTML code -- for example, when the form is designed to look like a table.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<label for="firstname">First name: </label>
	<input type="text" name="firstname" id="firstname">
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<label for="firstname">First name: </label>
<input type="text" name="firstname" id="firstname">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

WAI-ARIA provides an additional way to explicitly associate text on a web page with a form control, using the `aria-labelledby` attribute. This attribute references the `id` of an element containing text that can serve as a label for the control. Like other uses of ARIA, support for the use of the `aria-labelledby` attribute is still developing in user agents.

## Associating labels implicitly
{:.newex}

Another way to associate labels with form controls is to provide both the label text and the form control within the same `<label>` element. In the following example, the `<input>` element of type `text` allows users to provide their first name. This input field is embedded inside a `<label>` element with the text "First name:", to indicate the purpose of the input field to the user:

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<label>First name: <input type="text" name="firstname"></label>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label>First name: <input type="text" name="firstname"></label>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Associating labels to buttons

### … using the `<input>` element
{:.ap}

When using the `<input>` element to create buttons, the label is set in the `value` attribute of the element.

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<input type="button" value="Cancel">
<input type="submit" value="Submit">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the image button (`<input type="image">`) is used, the label is set in the `alt` attribute, for example:
`<input type="image" src="searchbutton.png" alt="Search">`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### … using the `<button>` element
{:.ap}

Using the `<button>` element gives more flexibility as the label is set inside the element which can include markup, providing the possibility for more advanced accessibility hints.

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<button type="button">Cancel</button>
<button type="submit">Submit</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Positioning labels
{:.newex}

In left-to-right languages it is customary to visually position labels to the right of radio buttons and checkboxes, and to the left or directly above other form fields. Maintaining this practice increases predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce horizontal scrolling for people using screen magnification and for mobile device users. However, the usefulness of this approach depends on other design aspects, such as the proximity of other nearby form fields and content, and needs to be assessed individually. The aim should be to maintain a close and distinct visual relationship between the label and the form control.

## Hiding labels
{:.newex}

A label for a form control helps everyone better understand its purpose. In some cases the purpose may be clear enough from the context when the content is rendered visually. In such cases a label can be hidden visually though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users. The method that hides an element from sight but keeps it accessible for assistive technologies, that is used in this tutorial (using the `visuallyhidden` class) can be found [below](#note-on-hiding-elements).

### Single form control
{:.ex}

In the example below, the search field is positioned directly beside the search button. The purpose of the form field is evident from the context in most situations.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<div>
		<label for="search" class="visuallyhidden">Search: </label>
		<input type="text" name="search" id="search">
		<button type="button">Search</button>
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

#### Hiding the label element
{:.ap}

A `<label>` element is provided to identify the form element within the code, but is visually hidden to avoid redundancy for those who don't need it.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="search" class="visuallyhidden">Search: </label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Using aria-label
{:.ap}

In this example, the `aria-label` attribute provides the label to assistive technology.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input type="text" name="search" aria-label="Search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Set of form controls
{:.ex}

In the following example, the user is asked to provide date of birth. There are three form controls: a small text field for day of month, a pull-down menu for month, and a slightly larger text field for year. The text controls also use placeholder text (see [instructions](instructions.html#placeholder-text)) to further indicate the purpose of these two fields. A single visible label "Date of birth" is sufficient to explain this related set of form controls in most situations.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<div>
		<label for="day">Date of birth: </label> <label class="visuallyhidden" for="day">Day: </label> <input type="text" id="day" maxlength="2" style="width:1.5em;text-align:right;" placeholder="01">
		<label class="visuallyhidden" for="month">Month: </label> <select name="month" id="month">
			<option value="01">January</option>
			<option value="02">Febuary</option>
			<option value="03">March</option>
			<option value="04">April</option>
			<option value="05">May</option>
			<option value="06">June</option>
			<option value="07">July</option>
			<option value="08">August</option>
			<option value="09">September</option>
			<option value="10">October</option>
			<option value="11">November</option>
			<option value="12">December</option>
		</select>
		<label class="visuallyhidden" for="year">Year: </label> <input type="text" id="year" maxlength="4" style="width:2.5em;text-align:right;" placeholder="1970">
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

#### Hiding the label element
{:.ap}

To make the code more robust and address other situations, such as displaying the form controls individually on a mobile device, hidden labels have been provided for each form element. They are now identified as “Day”, “Month”, and “Year” within the code.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="day">Date of birth: </label>

<label for="day" class="visuallyhidden">Day: </label>
<input type="text" id="day" maxlength="2" placeholder="01">

<label for="month" class="visuallyhidden">Month: </label>
<select name="month" id="month">
	<option value="01">January</option>
	<option value="02">Febuary</option>
	[…]
</select>

<label for="year" class="visuallyhidden">Year: </label>
<input type="text" id="year" maxlength="4" placeholder="1970">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note 1:** The label “Date of birth” is associated with the first form field “Day”, so that the focus is set on this first form field when the label is clicked. HTML allows form fields to be associated with more than one label.

**Note 2:** While the example above works, it is preferable to avoid such compounded groups of form fields where possible. In most situations forms are clearer and easier to understand when form controls are designed to be presented individually and with visible labels for each.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

#### Using aria-label
{:.ap}

The code can be simplified by using `aria-label`, with the same outcome as above. It is however less flexible, for example, if the labels need to be shown or hidden depending on the screen size.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="day">Date of birth: </label>

<input type="text" id="day" maxlength="2" placeholder="01" aria-label="Day">

<select name="month" id="month" aria-label="Month">
	<option value="01">January</option>
	<option value="02">Febuary</option>
	[…]
</select>

<input type="text" id="year" maxlength="4" placeholder="1970"  aria-label="Year">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Note on hiding elements

Screen readers and other assistive technology, as with web browsers, hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`. Use CSS that will display the elements yet make them virtually invisible to hide them visually but keep them active for screen readers and other assistive technology. The CSS code used in the previous examples is provided below:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ css
.visuallyhidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Using the `title` attribute
{:.newex}

The `title` attribute can be used to identify form elements. This approach is generally less reliable and not recommended because some screen readers and assistive technology do not interpret the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information. The information of the `title` attribute is shown to visual users as a tool tip when hovering over the form field with the mouse.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<div>
		<input title="Search" type="text" name="search">
		<button type="button">Search</button>
	</div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input title="Search" type="text" name="search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---
title: Labels
status: editors-draft
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
  - G162
  - G17
  - G18
---

Each form element needs a clear, descriptive, well-positioned, and properly associated label. Labels increase the clickable area that puts the cursor into text fields or check checkboxes, when the label is clicked. Also it helps people using voice input software setting the focus into the input field and also ensures that screen readers announce the correct description when they encounter a form field.

It’s essential that required field indicators and other important information is kept within the label element: Screen readers will usually not read out any text that is outside labels, if they are in “Forms Mode”.

## Position of labels

To maximize predictability, labels must be positioned on the right of radio buttons and checkboxes, and on the top or left for every other field (in left-to-right languages). For people using high screen magnification and in mobile context labels above such form fields are often preferred.

## Implicit labels
{:.ex}

The most basic way to associate a descriptive text to a form field is to wrap text and field in a `label` element:

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

## Explicit labels
{:.ex}

To explicitly associate a label and its form control, the `<label>`element must have a `for` attribute which exactly matches the value of an `id` attribute in its related field.

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

## Form fields without (visible) labels
{:.ex}

In rare cases, visual users don’t need a label to indicate what data should be entered into a form field as the context of the field gives enough hints on its the purpose. For non-visual users, the presence of a field description is essential to be able to know what the form field is about or to select the field using voice input.

### Hiding labels
{:.ap}

#### … for a single form field

In the example below, the search field does not need a visual label as the button says “Search” and thus the purpose of the field is clear. A label was added in the code but subsequently hidden, so it is not visible.

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

#### … for a group of fields

In the following example, the layout and example text in the form fields indicate which data needs to be entered into which form field. The visible “Date of birth:” label is associated with the day field to have the possibility to click on the label and set the focus in the first form field this way. Additionally, as one form field can have multiple labels, the “Day” label is associated to this form field as well. All other form fields have a hidden label as well.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="day">Date of birth: </label> <label class="visuallyhidden" for="day">Day</label> <input type="text" id="day" maxlength="2" style="width:1.5em;text-align:right;" placeholder="01">
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

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="day">Date of birth: </label> 

<label for="day" class="visuallyhidden">Day</label> 
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

#### A node on hiding elements

Screen readers and other assistive technology treat elements hidden from the page by using `display: none;` or `visibility: hidden;` as not existing on the page, hiding it from non-visual and other users. That’s why a special class is needed that doesn’t use either of those rules, you can find one example of such a class at the bottom:

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

### Using the title attribute
{:.ap}

Another way to tell non-visual users about the label is to use the `title` attribute of the form field. As the `title` attribute is usually used for additional and non-essential information, some assistive technology might not interpret it as a label replacement.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <input title="Search" type="text" name="search" id="search2"> 
    <button type="button">Search</button>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input title="Search" type="text" name="search" id="search"> 
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

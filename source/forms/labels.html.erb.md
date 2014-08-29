---
title: Labeling Controls
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
  - G167
---

Provide labels to identify all form controls including text fields, checkboxes, radio buttons, drop-down menus, and button elements. In most cases this is done by using the `<label>` element, and in rare cases the `title` attribute.

Labels need to describe the purpose of the form control. This section of the tutorial describes how to provide labels in ways so that they are properly associated with form controls. Later sections explain how to provide instructions, check user input, and provide feedback to help users complete your form.

## Associating labels implicitly
{:.newex}

The most basic way to associate labels with form controls is to provide both the label and the form control within the same `<label>` element:

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

## Associating labels explicitly
{:.newex}

You can also use the `for` attribute of the `<label>` element to associate labels with form controls. The value of the `for` attribute must exactly match the value of the `id` attribute for the referenced form element.

This approach is more robust because it explicitly associates the labels with the form elements within the code. It allows the labels and form controls to be displayed separately, for example on a mobile device when only one of them can be displayed at a time. It is also independent of the HTML code structure, which is particularly useful when the label text and form element are not included within the same parent element in the HTML code. For example, when the form is formatted to look like a table, as in the example below.

{::nomarkdown}
<%= sample_start %>

<div>All fields marked (required) must be completed.</div>
<form method="post" action="#" id="expl_label_form">
  <div>
    <div>
      <label for="firstname">First name: </label>
    </div>
    <div>
      <input type="text" name="firstname" id="firstname">
    </div>
  </div>
</form>

<style>
  #expl_label_form {display:table}
  #expl_label_form>div {display:table-row}
  #expl_label_form>div>div {display:table-cell;}
</style>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<form method="post" action="#" id="expl_label_form">
  <div>
    <div>
      <label for="firstname">First name: </label>
    </div>
    <div>
      <input type="text" name="firstname" id="firstname">
    </div>
  </div>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
#expl_label_form {display:table}
#expl_label_form>div {display:table-row}
#expl_label_form>div>div {display:table-cell;}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Positioning labels
{:.newex}

In left-to-right languages it is custom to visually position labels to the right of radio buttons and checkboxes, and to left or directly above other form fields. Maintaining this practice increases predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce horizontal scrolling for people using screen magnification and for mobile device users. However, the usefulness of this approach depends on other design aspects, such as the placement of other nearby form fields and content, and needs to be assessed individually.

## Hiding labels
{:.newex}

Labels for form controls help everyone better understand their purpose. In some cases the purpose may be clear enough from the context, when the content is rendered visually. In such cases the labels can be hidden visually though they still need to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.

### Single form control
{:.ex}

In the example below, the search field is positioned directly beside the search button. The purpose of the form field is evident from the context in most situations. A label is provided to identify the form element within the code, but is visually hidden to avoid redundancy for those who don't need it.

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

### Set of form controls
{:.ex}

In the following example, the user is asked to provide the date of birth. There are three form controls, one of which is a pull-down menu with the text “January” visible. The other two form controls are text fields placed just before and after the pull-down menu. They have different sizes that match the 2-digit day of the month and 4-digit year numbers. There is also placeholder text provided to further indicate the purpose of these two fields. A single visible label "Date of birth" is sufficient to explain this related set of form controls in most situations.

To make the code more robust and address other situations, such as displaying the form controls individually on a mobile device, hidden labels have been provided for each form element. They are now identified as “Day”, “Month”, and “Year” within the code.

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

**Note 1:** The label “Date of birth” is associated with the first form field "Day", so that the focus is set on this first form field when the label is clicked. HTML allows form fields to be associated with more than one label.

**Note 2:** While the example above works, it is preferable to avoid such compounded groups of form fields where possible. In most situations forms are clearer and easier to understand when form controls are designed to be presented individually and with visible labels each.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Note on hiding elements

Just like web browsers, screen readers and other assistive technology hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`. Use a styling that will display the elements yet make them virtually non-visible to hide them visually but keep them active for screen readers and other assistive technology. The CSS code used in the previous examples is provided below:

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

## Using the title attribute
{:.newex}

The example below uses the `title` attribute of the form element to identify it. This approach is generally less reliable because some screen readers and assistive technology do not interpret the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information.

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

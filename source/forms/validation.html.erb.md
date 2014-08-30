---
title: Validating Input
status: editors-draft
order: 5
wcag_success_criteria:
  - 3.3.1
  - 3.3.4
wcag_techniques:
  - G164
  - G98
  - G83
  - G85
  - G155
  - G168
---

In addition to providing instructions, validate user input to help users avoid mistakes. HTML5 provides a range of built-in functionality to check common types of input, like email addresses and dates. In some cases, such as for custom controls, additional scripting may be necessary to validate user input.

## Validating required input
{:.newex}

Forms frequently include required controls that need to be clearly highlighted through their labels. In addition, the `required` attribute can be added to the form element, to indicate this requirement programmatically. Most current web browsers support this attribute. They will communicate missing required input to the user, using the standard dialog mechanisms of the web browser. Ideally these dialogs respect the settings and preferences of the user, including any relevant settings made in the operating system, such as font-sizes and colors.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="name">Name (required): </label> <input type="text" name="name" id="name" required aria-required="true">
		<input type="submit" value="Submit">
	</div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="name">Name (required): </label>
<input type="text" name="name" id="name" required aria-required="true">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The `aria-required` attribute informs assistive technologies about required controls so that they are appropriate announced to the users (as opposed to validate the input). Most current web browsers set its value to `true` when the HTML5 `required` attribute is present. In this example it is provided redundantly to support web browers that don’t communicate the `required` attribute to assistive technologies.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Validating common input
{:.newex}

HTML5 also provides input types for other data, like `email`, `url`, `number`, `range`, `date`, or `time`. Most common web browsers support these features and handle the input checking. In addition, they help user provide the input by providing controls such as date pickers and custom on-screen keyboards.

The example below shows these HTML5 input types. They are displayed as simple `text` input fields in older web browsers without HTML5 support.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#" id="valform">
  <div>
    <div><label for="email">Email: </label></div>
    <div><input type="email" name="email" id="email"></div>
  </div>
  <div>
    <div><label for="url">Website: </label></div>
    <div><input type="url" name="url" id="url"></div>
  </div>
  <div>
    <div><label for="number">Number: </label></div>
    <div><input type="number" name="number" id="number" min="0" max="100" step="10" value="0"></div>
  </div>
  <div>
    <div><label for="range">Range: </label></div>
    <div><input type="range" name="range" id="range" min="0" max="100" step="10" value="0"></div>
  </div>
  <div>
    <div><label for="date">Date: </label></div>
    <div><input type="date" name="date" id="date"></div>
  </div>
  <div>
    <div><label for="time">Time: </label></div>
    <div><input type="time" name="time" id="time"></div>
  </div>
  <div>
    <div></div>
    <div><input type="submit" value="Submit"></div>
  </div>
</form>

<style>
  #valform {display:table}
  #valform>div {display:table-row}
  #valform>div>div {display:table-cell; padding: .1em;}
</style>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
  <label for="email">Email: </label>
  <input type="email" name="email" id="email">
</div>
<div>
  <label for="url">Website: </label>
  <input type="url" name="url" id="url">
</div>
<div>
  <label for="number">Number: </label>
  <input type="number" name="number" id="number" min="0" max="100" step="10" value="0">
</div>
<div>
  <label for="range">Range: </label>
  <input type="range" name="range" id="range" min="0" max="100" step="10" value="0">
</div>
<div>
  <label for="date">Date: </label>
  <input type="date" name="date" id="date">
</div>
<div>
  <label for="time">Time: </label>
  <input type="time" name="time" id="time">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Several of these HTML5 input types have additional parameters to help limit and validate the input. They include:

* `maxlength` defines the maximum length of a text field.
* `min` and `max` define the minimum and maximum of `number` and `range` fields.
* `steps` defines in what steps number and range fields can be incremented and decremented.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Validating custom input
{:.newex}

The HTML5 `pattern` attribute allows the use of regular expressions to specify custom formats for the input. This is useful for specific types of data patterns such as telephone numbers, postal codes, and serial numbers.

### Car license plate numbers
{:.ex}

In the example below, the `pattern` attribute of the `input` element specifies a particular format that matches car license plate (registration) numbers in Germany. The required pattern consists of one to three letters (for the city where the car is registered), followed by a space, two to four random letters, another space, then one to four random numbers.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="license">German License Plate (CCC XXXX 9999):</label> <input type="text" id="license" pattern="[A-ZÖÄÜ]{1,3}( )[A-Z]{2,4}( )[0-9]{1,4}" />
  </div>
  <div>
  </div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
  <input type="text" id="license"
    pattern="[A-ZÖÄÜ]{1,3}( )[A-Z]{2,4}( )[0-9]{1,4}"
  >
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Note on input validation

Where possible, validation should accommodate different input options to make forms easier to complete. For example, telephone numbers are often written with different separators and digit groupings, and your form will be easier to use if it can interpret multiple notations.

Client-side validation has many benefits. In general responses are quicker when validation is carried out on the client-side and users do not need to leave the page. This can also reduce network and server load. However, not all web browsers may support HTML5 or any custom validation scripts, so that validation needs to be carried out server-side as well.

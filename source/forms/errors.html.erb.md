---
title: Error Handling
status: editors-draft
order: 4
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
  - 3.3.4
wcag_techniques:
  - G164
  - G98
  - G83
  - G85
  - G155
  - G168
---

## Preventing Errors

The best way to avoid errors in forms is to inform users about potential errors as soon as possible. HTML5 provides a range of validation options that gives browsers the possibility to notify users instantly about possible errors. It also prevents the user from submitting the form, so unnecessary back and forth to the server is avoided.

If possible interpret content in fields as loosely as possible. A credit card number, for example, consists of 16 digits but is often written with spaces after every four digits. Consider accepting both notations.

### Marking up required fields
{:.ex}

The label of required fields should always show that the field is required. This is the most broadly supported way to inform the user. Additionally, in HTML5, the `required` attribute can be added to the form field to prevent the user from submitting empty fields.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="name">Name (required): </label> <input type="text" name="name" id="name" required>
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
<input type="text" name="name" id="name" required>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

To inform users of assistive technology about required fields, you can use `aria-required="true"` on the form field. Most browsers set `aria-required` to `true` if a HTML5 `required` attribute is present.

### Specifying the format of form fields
{:.ex}

HTML5 also provides input types that require the user to enter information, like `email`, `url`, `number`, `range`, `date` and `time`, in a specific format. Capable browsers may show field specific controls or a different on-screen keyboard. If a browser is not capable of displaying one if the controls, it falls back to a simple `text` input.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
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
  <div>
    <input type="submit" value="Submit">
  </div>
</form>

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

Some additional HTML attributes can help users to prevent errors:

* `maxlength` defines the maximum length of a text field.
* `min` and `max` define the minimum and maximum of `number` and `range` fields.
* `steps` defines in what steps number and range fields can be incremented and decremented.

The `pattern` attribute allows to use a regular expression to define the format of the input, which is useful for serial numbers or similar data.

For example in Germany license plate consist of one to three letters for the city the car is registered in, followed by a space, two to four random letters, another space and a one to four random numbers. Especially the first space makes a difference, as “K LM 123” is a car registered in Cologne but “KL M 123” is not.

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

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** Although HTML5 enabled browsers won’t allow users to submit forms with such validation features, non-HTML5 browsers may allow submitting the form, so validation must be carried out server-side as well.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Undo reversible changes

If a change by the user can be easily reversible or cancelled, it is useful to provide this functionality. For example:

* A Content Management System (CMS) has the ability to delete unwanted comments. Instead of deleting them right away, they get stored in a ”trash” folder and can be easily restored.

* A web email application allows users to “undo” sending of an email for a few seconds. This is useful if the user forget to attach a file or wanted to send the email to the wrong recipient.

* An online shopping website lets users cancel purchases up to 24 hours after the order is submitted. The website explains their policy, and includes a summary of the policy on the purchase receipt emailed to the user. After 24 hours, the purchase will be shipped to the user and can no longer be canceled.

### Confirm irreversible changes

Instant and irreversible transactions, especially if carried out on a single page, can provide users with a checkbox or a confirmation dialog box to confirm that they want the requested action to take place.

* In a Content Management System (CMS) comments can be deleted (for good) from the trash folder. When the user clicks on the “Empty trash”, a confirmation dialog box shows up asking the user “Are you sure to delete 42 comments?” The action is only carried out if the user choses the “OK” button.

* A bank won’t be able to revert a currency exchange transaction as charges or changes in exchange rates would burden a cost to the user. After collecting the account and amount data, and before the submit button, a checkbox with a label like “I have checked that the amount I wish to transfer is correct” is placed. The form should then fail to validate unless the checkbox is checked.

* The checkout page on a shopping website includes a form that collects order, shipping and billing information. After submitting the form, the user is taken to another page where the information they have submitted is summarized for review. Below the summary, The user must activate a “complete order” button on the review page to complete the transaction.

## Error Messages

If an error couldn’t be prevented, the resulting error messages should be easy to find and accurately describe which fields are in error and why. The set of error messages should have a descriptive heading, so they are easy to locate for visual and screen reader users alike. Each error should use an in-page link to the respective field using a fragment identifier (“hash link” with the ID of the form field that is erroneous).

### Usage

The error message should consist of the following elements to be as helpful as possible for the user:

* Use the _same wording_ that is used on the label in the error message. This helps users to identify the exact form element that contains the error.
* Describe the _cause of error_, for example mention that the field was required or that the format was wrong.
* Tell the user _how to fix_ the error, consider using a more elaborate example as there is now more space available than in the labels of the form.

### Examples

{::nomarkdown}
<%= sample_start %>

<h4>2 Errors in this form</h4>
<ul>
  <li>
    <a href="#firstname">
      The First name field is empty, it is a required field and must be filled in.
    </a>
  </li>
  <li>
    <a href="birthdate">
      The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year)
    </a>
  </li>
</ul>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h4>2 Errors in this form</h4>
<ul>
  <li>
    <a href="#firstname">
      The First name field is empty, it is a required field and must be filled in.
    </a>
  </li>
  <li>
    <a href="birthdate">
      The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year).
    </a>
  </li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

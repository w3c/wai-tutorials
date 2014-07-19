---
title: Error Handling
status: editors-draft
order: 5
wcag_success_criteria: 
  - 3.3.4
wcag_techniques:
---

## Preventing Errors

The best way to avoid errors in forms is to inform users about potential errors as soon as possible. With HTML5 browsers have implemented a whole range of validation options that notify users instantly and in their language about possible errors. It also prevents the user from submitting the form, so additional server-side roundtrips can be avoided.

### Marking up required fields
{:.ex}

The label of required fields should always show that the field is required. This is the most broadly supported way to inform the user. Additionally in HTML5, the `required` attribute can be added to the form field, so browsers can handle required fields accordingly by validating that there is data in the form field.

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

HTML5 provides some new input types that require the user to input the correct information, like `email`, `url`, `number`, `range`, `date` and `time`. Capable browsers may show field specific controls or a different on-screen keyboard. If a browser is not capable of displaying one if the controls, it falls back to a simple `text` input. 

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="email">Email: </label> <input type="email" name="email" id="email">
	</div>
	<div>
    <label for="url">Website: </label> <input type="url" name="url" id="url">
	</div>
	<div>
    <label for="number">Number: </label> <input type="number" name="number" id="number" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="range">Range: </label> <input type="range" name="range" id="range" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="date">Date: </label> <input type="date" name="date" id="date">
	</div>
	<div>
    <label for="time">Time: </label> <input type="time" name="time" id="time">
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
    <label for="email">Email: </label> <input type="email" name="email" id="email">
	</div>
	<div>
    <label for="url">Website: </label> <input type="url" name="url" id="url">
	</div>
	<div>
    <label for="number">Number: </label> <input type="number" name="number" id="number" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="range">Range: </label> <input type="range" name="range" id="range" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="date">Date: </label> <input type="date" name="date" id="date">
	</div>
	<div>
    <label for="time">Time: </label> <input type="time" name="time" id="time">
	</div>
	<div>
		<input type="submit" value="Submit">
	</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

There are a number of HTML attributes that can help users to prevent errors:

* `maxlength` defines the maximum length of a text field.
* `min` and `max` define the minimum and maximum of number and range fields.
* `steps` defines in what steps number and range fields can be incremented and decremented.

Additionally you can define your own patterns of input with the `pattern` attribute:

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="license">German License Plate (CCC XXXX 9999):</label> <input type="text" id="license" pattern="[A-Z]{1,3}( )[A-Z]{2,4}( )[0-9]{1,4}" />
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
    <label for="email">Email: </label> <input type="email" name="email" id="email">
	</div>
	<div>
    <label for="url">Website: </label> <input type="url" name="url" id="url">
	</div>
	<div>
    <label for="number">Number: </label> <input type="number" name="number" id="number" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="range">Range: </label> <input type="range" name="range" id="range" min="0" max="100" step="10" value="0">
	</div>
	<div>
    <label for="date">Date: </label> <input type="date" name="date" id="date">
	</div>
	<div>
    <label for="time">Time: </label> <input type="time" name="time" id="time">
	</div>
	<div>
		<input type="submit" value="Submit">
	</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


To help users correct errors, a layer of protection is needed, especially when a form has significant consequences for the user. Those consequences could be some legally binding agreement, like in an online shop, a financial transaction, deleting of data from the database, or submitting responses of a test. Users should have a possibility to correct errors before such submissions are finally accepted, in one or more of the following ways:

- **Reversible:** Users are able to cancel transactions or undo recent changes to a database.
- **Checked:** Data entered by the user is checked for input errors and the user is given an opportunity to make corrections.
- **Confirmed:** The information can be reviewed, confirmed, and corrected before finalizing the submission.

### Reversing a transaction

* An online shopping Website lets users cancel purchases up to 24 hours after the order is submitted. The Web site explains their policy, and includes a summary of the policy on the purchase receipt emailed to the user. After 24 hours, the purchase will be shipped to the user and can no longer be canceled.

* A web email application allows users to “undo” sending of an email for a few seconds. This is useful if the user forget to attach a file or wanted to send the email to the wrong recipient.

### Checking input

* asd

### Confirmed

*  Instant and irreversible transactions, especially if carried out on a single page, can provide users with a checkbox to confirm that they do want the requested action to take place. For instance currency conversion transactions, where charges or changes in exchange rates would not permit the transaction to be reversed without cost to the user. After collecting the account and amount data, and before the submit button, a checkbox with a label like “I have checked that the amount I wish to transfer is correct”. The form should then fail to validate unless the checkbox is checked.

* The checkout page on a shopping website includes a form that collects order, shipping and billing information. After submitting the form, the user is taken to another page where the information they have submitted is summarized for review. Below the summary, The user must activate a “complete order” button on the review page to complete the transaction.

### Related WCAG2.0 Technique

The following WCAG 2.0 technique was used in the examples above:

- [G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request;](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G164)
- [G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G98);
- [G155: Providing a checkbox in addition to a submit button](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G155);
- [G168: Requesting confirmation to continue with selected action](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G168).


## Error Messages

- **What to do:** When a form is in error, provide error messages that users can find easily and that accurately describe in text which fields are in error and why;
- **Why:** When users have made errors, clearly they need more help. Some users, such as blind people, may not even be aware that an error has occurred. Other users may not have understood the initial instructions, and further help, such as a format example, may be needed so that they understand what is to do;
- **How:** If an error is detected, provide error messages that are easy to locate and understand;
- **Conformance:**Required to meet [SC 3.3.1 Error Identification](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-identified) and [SC 3.3.3 Error Suggestion](http://www.w3.org/WAI/WCAG20/quickref/20120103/#minimize-error-suggestions)

## Error messages should be text descriptions that identify:

- **Each field in error:** It’s best to use the same wording as used for the label, (the error message can also be an in-page link to the error field).
- **The cause of the error:** Whether it’s a required field that’s been left empty or a required format that hasn’t been used for instance.
- **How to fix it:** By using example, description or a corrected sample of the user’s data (and information on how to use the sample).

## Example error messages

The links here don’t go anywhere, but should reference the id attribute value of each related error field:

- [The First name field is empty, it is a required field and must be filled in.](#)
- [The Date field is in the wrong format, it should be similar to 17/09/2013, (using a / to separate day , month and year)](#).

## Related WCAG2.0 Technique

The following WCAG 2.0 technique was used in the example above:

- [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G83)
- [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G85.html)

---
title: User Interaction
status: editors-draft
order: 6
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
---

Provide feedback to users to indicate errors, successes, and so that they can undo or confirm changes. Make error messages clear and easy to understand, and provide guidance to help users correct mistakes.

## Providing Notifications (@@section needs editing)
{:.newex}

Notifications need to be perceivable to the user, both visually and programmatically @@@.

### @@check-mark and highlighting for successful input (eg password-strength checkers)
{:.ex}

### @@inline error message or other feedback displayed near control (maybe as pop-up?)
{:.ex}

### @@dynamically-generated output displayed anywhere on the page (keyboard focus?)
{:.ex}

### @@communicating "data loading" (with or without spinner)
{:.ex}

### @@communicating status in the title element of the page
{:.ex}

## Error Messages (@@section needs editing)
{:.newex}

Error message should be concise yet descriptive and easy to understand @@@.

If an error couldn’t be prevented, the resulting error messages should be easy to find and accurately describe which fields are in error and why. The set of error messages should have a descriptive heading, so they are easy to locate for visual and screen reader users alike. Each error should use an in-page link to the respective field using a fragment identifier (“hash link” with the ID of the form field that is erroneous).

The error message should consist of the following elements to be as helpful as possible for the user:

* Use the _same wording_ that is used on the label in the error message. This helps users to identify the exact form element that contains the error.
* Describe the _cause of error_, for example mention that the field was required or that the format was wrong.
* Tell the user _how to fix_ the error, consider using a more elaborate example as there is now more space available than in the labels of the form.

### @@error message at page-top (with in-page links to the actual errors)
{:.ex}

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

### @@in-line error message near the control
{:.ex}

## Success Messages (@@section needs editing)
{:.newex}

Inform users about successes - (1) when form input is correctly entered; (2) when the entire form is correctly completed and ready for submission; (3) when form controls are successfully submitted (eg. "thank you!")

## Allow users to undo reversible changes (@@section needs editing)
{:.newex}

If a change by the user can be easily reversible or cancelled, it is useful to provide this functionality. For example:

* A Content Management System (CMS) has the ability to delete unwanted comments. Instead of deleting them right away, they get stored in a ”trash” folder and can be easily restored.

* A web email application allows users to “undo” sending of an email for a few seconds. This is useful if the user forget to attach a file or wanted to send the email to the wrong recipient.

* An online shopping website lets users cancel purchases up to 24 hours after the order is submitted. The website explains their policy, and includes a summary of the policy on the purchase receipt emailed to the user. After 24 hours, the purchase will be shipped to the user and can no longer be canceled.

## Allow users to confirm irreversible changes (@@section needs editing)
{:.newex}

Instant and irreversible transactions, especially if carried out on a single page, can provide users with a checkbox or a confirmation dialog box to confirm that they want the requested action to take place.

* In a Content Management System (CMS) comments can be deleted (for good) from the trash folder. When the user clicks on the “Empty trash”, a confirmation dialog box shows up asking the user “Are you sure to delete 42 comments?” The action is only carried out if the user choses the “OK” button.

* A bank won’t be able to revert a currency exchange transaction as charges or changes in exchange rates would burden a cost to the user. After collecting the account and amount data, and before the submit button, a checkbox with a label like “I have checked that the amount I wish to transfer is correct” is placed. The form should then fail to validate unless the checkbox is checked.

* The checkout page on a shopping website includes a form that collects order, shipping and billing information. After submitting the form, the user is taken to another page where the information they have submitted is summarized for review. Below the summary, The user must activate a “complete order” button on the review page to complete the transaction.

## Allow users to supress or extend time limits (@@section needs editing)
{:.newex}

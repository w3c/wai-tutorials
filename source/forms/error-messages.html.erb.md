---
title: Error Messages
status: editors-draft
order: 7
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
---

If an error couldn’t be prevented, the resulting error messages should be easy to find and accurately describe which fields are in error and why. The set of error messages should have a descriptive heading, so they are easy to locate for visual and screen reader users alike. Each error should use an in-page link to the respective field using a fragment identifier (“hash link” with the ID of the form field that is erroneous).

## Usage

The error message should consist of the following elements to be as helpful as possible for the user:

* Use the _same wording_ that is used on the label in the error message. This helps users to identify the exact form element that contains the error.
* Describe the _cause of error_, for example mention that the field was required or that the format was wrong.
* Tell the user _how to fix_ the error, consider using a more elaborate example as there is now more space available than in the labels of the form.

## Examples

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

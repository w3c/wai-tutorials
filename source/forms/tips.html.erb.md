---
title: Tips and Tricks
status: editors-draft
order: 9
type: tips
---

* **Keep it simple:** Complex forms are more often abandoned by users than simple forms, regardless how accessible they are.

* **Take data gracefully:** Try to interpret data as liberally as possible. Don’t throw error messages at users because they don’t obey the number of parentheses you expect.

* **Be careful with required formats:** Postal codes are not numbers in every country, so using and `input` of the type `number` could easily become a problem.

* **Forms are not art:** Be creative with forms but don’t alter them to drastically from the standard operating system look that users are used to.

* **Allow users to disable or extend time limits:** If possible, forms should not be subject to a time limit to allow users to complete the form in their own pace. If a time limit needs to be in place (for example, for security reasons), the user should have the possibility to turn it off, adjust it, or extend it. This does not apply if the time limit is due to a live event (like an auction or a game) or if the time to complete the form is essential for a valid submission.

* **User should be able to undo reversible changes:** If a change by the user can be easily reversed or canceled, it is useful to provide this functionality. Examples:

  * A Content Management System (CMS) has the ability to delete unwanted comments. Instead of deleting them right away, they get stored in a ”trash” folder and can be easily restored.

  * A web email application allows users to “undo” sending of an email for a few seconds. This is useful if the user forgot to attach a file or sent the email to the wrong recipient.

  * A shopping website lets users cancel purchases up to 24 hours after the order is submitted. The website explains their policy, and includes a summary of the policy on the purchase receipt emailed to the user. After 24 hours, the purchase will be shipped to the user and can no longer be canceled.

* **Users need to confirm irreversible changes:** If a form submission results in the deletion of data, the user should be required to confirm the decision either by using a checkbox or selecting “Yes” or “OK” in a confirmation dialog. Examples:

  * In a Content Management System (CMS) comments can be deleted (for good) from the trash folder. When the user clicks on the “Empty trash” icon, a confirmation dialog box asks “Are you sure to delete 42 comments?” The action is only carried out if the user choses the “OK” or “Yes” button.

  * A bank won’t be able to revert currency exchange transactions, as charges or changes in exchange rates would increase cost for their customers. After collecting the account data and the amount to exchange, and before the submit button, a checkbox with a label “I have checked that the amount I wish to transfer is correct.” is placed. The form can’t be submitted unless the checkbox is checked.

  * The checkout page on a shopping website includes a form that collects order, shipping and billing information. After submitting the form, the user is taken to another page where the information they have submitted is summarized for review. Below the summary, The user must activate a “complete order” button on the review page to complete the transaction.

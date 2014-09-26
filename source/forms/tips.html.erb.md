---
title: Tips and Tricks
status: draft
order: 9
type: tips
---

* **Keep it simple:** Complex forms are more often abandoned by users than simple forms, regardless how accessible they are. Only ask users to enter what is requierd to complete the transation or process; if extraneous data is requested, users often abandon the form.

* **Interpret data gracefully:** Try to interpret data as liberally as possible. Don’t throw error messages at users because they don’t obey the number of parentheses you expect. For example accept spaces, dashes, etc., in phone numbers; these can be removed afterwards if required.

* **Be careful with required formats:** Postal codes are not numbers in every country, so using and `input` of the type `number` could easily become a problem.

* **Forms are not art:** Be creative with forms, but don’t alter them too drastically from the standard operating system look that users are accustomed to.

* **Allow users to disable or extend time limits:** If possible, forms should not be subject to a time limit.  This allows users to complete the form at their own pace. If a time limit needs to be in place (for example, for security reasons), the user should have the option to turn it off, adjust it, or extend it. This does not apply if the time limit is due to a live event (like an auction or a game) or if the time to complete the form is essential for a valid submission.

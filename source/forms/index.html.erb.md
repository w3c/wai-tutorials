---
title: Forms Concepts
tutorial_title: Forms
status: editors-draft
order: 1
topic_order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
type: intro
---

Forms are usually the main interaction component in websites and web applications. They’re used to send information to the server or for input and output in client-side JavaScript applications.

- **[Labeling Controls](labels.html)** Use the `<label>` element, and, in rare cases, the `title` attribute, to indentify each form control.

- **[Grouping Controls](structure.html)** Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.

- **[Form Instructions](instructions.html)** Provide instructions to help users understand how to complete the form and individual form controls.

- **[Validating Input](validation.html)** Use built-in HTML5 features, and, where needed, custom scripts to validate user input and help users avoid mistakes.

- **[User Interaction](error-messages.html)** Provide feedback to users to indicate errors, successes, and so that they can undo or confirm changes.

- **[Multi-Step Forms](multi-step.html)** Divide long forms into multiple smaller forms that constitute a series of logical steps or stages.

- **[Custom Controls](in-disguise.html)** Use stylized form elements and other progressive enhancement techniques to provide custom controls.

## Why is this important?

Forms can be visually and cognitively complex and difficult to use. Accessible forms are easier to use for everyone, including people with disabilities.

- **People using speech input assistive technology** can move the cursor into the fields they need to fill out using voice commands.

- **People with shaky hands** use the label as a larger clickable area for selecting small controls such as radio buttons and checkboxes.

- **People using screen readers** can identify the purpose of a form field if a label is properly assigned, including information on the format expected or if the field is required.

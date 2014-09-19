---
title: Forms Concepts
tutorial_title: Forms
status: draft
order: 1
topic_order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
type: intro
---

Forms are used to provide functionality in websites and web applications. For example, forms are used for login, registering, commenting, purchasing, and other functionality.

To make forms are accessible, ensure that all controls are appropriately labeled and grouped where relevant. Also provide clear and simple instructions, validate the input, and provide feedback to the users.

This tutorial shows you how to create accessible forms, regardless whether they are processed by server-side or client-side scripts, or possibly both.

- **[Labeling Controls](labels.html):** Use the `<label>` element, and, in rare cases, the `title` attribute, to indentify each form control.

- **[Grouping Controls](grouping.html):** Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.

- **[Form Instructions](instructions.html):** Provide instructions to help users understand how to complete the form and individual form controls.

- **[Validating Input](validation.html):** Validate input provided by the user, and provide options to undo changes and confirm data entry.

- **[User Notifications](notifications.html):** Notify users about successful task completion, any errors, and provide instructions to correct mistakes.

- **[Multi-Step Forms](multi-step.html):** Divide long forms into multiple smaller forms that constitute a series of logical steps or stages and inform users about their progress.

- **[Custom Controls](custom-controls.html):** Use stylized form elements and other progressive enhancement techniques to provide custom controls.

## Why is this important?

Forms can be visually and cognitively complex and difficult to use. Accessible forms are easier to use for everyone, including people with disabilities.

- **People with cognitive disabilities** can better understand the form and how to completed due to the improved layout structure, instructions, and feedback.

- **People using speech input** can use the labels via voice commands to activate controls and move the focus to the fields that they need to complete.

- **People with limited dexterity** benefit from enlarged clickable areas that include the labels, particularly for smaller controls, such as radio buttons and checkboxes.

- **People using screen readers** can identify form controls more easily because they are associated with labels, field sets, and other structural elements.

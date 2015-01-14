---
title: Forms Concepts
tutorial_title: Forms
order: 1
topic_order: 3
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
type: intro
---

Forms are commonly used to provide user interaction in websites and web applications. For example, login, registering, commenting, and purchasing. This tutorial shows you how to create accessible forms. The same concepts apply to all forms, whether they are processed client or server-side.

- **[Labeling Controls](labels.html):** Use the `<label>` element, and, in specific cases, other mechanisms (e.g. ARIA, `title` attribute etc.), to identify each form control.

- **[Grouping Controls](grouping.html):** Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.

- **[Form Instructions](instructions.html):** Provide instructions to help users understand how to complete the form and individual form controls.

- **[Validating Input](validation.html):** Validate input provided by the user, and provide options to undo changes and confirm data entry.

- **[User Notifications](notifications.html):** Notify users about successful task completion, any errors, and provide instructions to help correct mistakes.

- **[Multi-Page Forms](multi-page.html):** Divide long forms into multiple smaller forms that constitute a series of logical steps or stages and inform users about their progress.

- **[Custom Controls](custom-controls.html):** Use stylized form elements and other progressive enhancement techniques to provide custom controls.

## Why is this important?

Forms can be visually and cognitively complex and difficult to use. Accessible forms are easier to use for everyone, including people with disabilities.

- **People with cognitive disabilities** can better understand the form and how to complete it, as making forms accessible improves the layout structure, instructions, and feedback.

- **People using speech input** can use the labels via voice commands to activate controls and move the focus to the fields that they need to complete.

- **People with limited dexterity** benefit from large clickable areas that include the labels, especially for smaller controls, such as radio buttons and checkboxes.

- **People using screen readers** can identify and understand form controls more easily because they are associated with labels, field sets, and other structural elements.

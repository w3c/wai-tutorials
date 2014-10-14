---
title: Form Instructions
status: draft
order: 4
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
wcag_techniques:
  - G131
  - H44
  - H93
  - G162
  - G17
  - G18
---

Provide instructions to help users understand how to complete the form and individual form controls. This includes indicating any required and optional input, data formats, and other important aspects of the form.

**Important:** Screen readers often switch to “Forms Mode” when they are processing content within a `<form>` element. In this mode they usually only read aloud form elements such as `<input>`, `<select>`, `<textarea>`, `<legend>`, and `<label>`. It is critical to include form instructions in ways that they will be read aloud.

## Overall instructions
{:.newex}

Where relevant, provide overall instructions that apply to the entire form. For example, indicate any required and optional input, allowable data formats, and timing limitations. Provide such instructions before the `<form>` element to ensure that it is read aloud by screen readers before they switch to “Forms Mode”.

In the example below, form instructions indicate how required fields are marked, the expected format for key data fields, and where to find additional help for each input.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

- All fields marked “required” must be completed.
- Dates should all be typed in the format dd/mm/yyyy, (as in 21/07/2013).
- Passwords must contain at least 8 letters and/or numbers.
- Extra help can be found immediately after each field.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

## In-line instructions
{:.newex}

In addition to the overall instructions, it is also important to provide relevant instructions within the labels of the form controls. For example, indicate required input fields and data formats in the text of the labels.

### Providing instructions within labels
{:.newex}

For simple use cases, providing instructions within labels may be sufficient. This is most reliable approach across different web browsers and assistive technologies, although may require some additional thought to support styling needs.

In the example below, the required format for the “Expiry Date” is indicated by “MM/YYYY” within the same label:

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="expire">Expiry date (MM/YYYY): </label> <input type="text" name="expire" id="expire">
  </div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="expire">Expiry date (MM/YYYY): </label> <input type="text" name="expire" id="expire">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Providing instructions outside labels
{:.newex}

Providing instructions outside labels allows more flexible positioning and design but sometimes it can be missed. The two approaches outlined below can be combined to reduce this risk.

#### Informing users
{:.ap}

Content outside form elements may be missed by screen readers that are in “Forms Mode”. In the example below, users are informed that extra help is available for each field in the overall instructions before they enter the actual form, so that they don't miss it.

{::nomarkdown}
<%= sample_start %>

<ul>
  <li>Extra help can be found immediately after each field.</li>
</ul>

<form method="post" action="#">
  <div>
    <label for="expire2">Expiry date:</label> <input type="text" name="expire" id="expire2"> <span>(MM/YYYY)</span>
  </div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="expire">Expiry date:</label> <input type="text" name="expire" id="expire"> <span>(MM/YYYY)</span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** A caveat of this approach is that users receive the instructions after the form element. This is usually not ideal, especially when the form controls are large, when they are displayed on mobile devices, or when using screen magnification. In such cases these instructions may not be easy to find.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

#### Using WAI-ARIA
{:.ap}

Another approach is to use the WAI-ARIA `aria-labelledby` attribute to associate the instructions with form elements. At the time of writing, this approach may not be fully supported by all web browsers and assistive technologies.

{::nomarkdown}
<%= sample_start %>

<style>
  #ex3 span {
    display: inline-block;
    vertical-align: top;
  }
  #ex3 span span {
    display: block;
    font-size: 0.8em;
  }
</style>
<form method="post" action="#" id="ex3">
  <div>
    <label for="expire4">Expiry date:</label>
    <span>
      <input type="text" name="expire" id="expire4" aria-labelledby="expDesc2">
      <span id="expDesc2">MM/YYYY</span>
    </span>
  </div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="expire">Expiry date:</label>
<span>
  <input type="text" name="expire" id="expire" aria-labelledby="expDesc">
  <span id="expDesc">MM/YYYY</span>
</span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This technique is mostly interpreted by screen readers, so that non-screen reader users may not gain the information as easily. Until such associations are more broadly used by other assistive technology as well, it is often useful to additionally inform the user that instructions directly follow form controls.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Placeholder text
{:.newex}

Placeholder text provides instructions or an example of the required data format inside form fields that have not yet been edited by the user. Placeholder text is usually displayed with lower color contrast than text provided by users, and it disappears from form fields when users start entering text. If the placeholder text contains instructional information or examples, having it disappear can make it more difficult for users to check their responses prior to submitting the form.

While placeholder text provides important guidance for many users, **placeholder text is not a replacement for labels**. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing, placeholder text is not broadly supported across assistive technologies.

Refer to the techniques described in [Hidden labels](labels.html#hidden) in cases where you want to avoid redundancy of (visible) labels and placeholder text.

{::nomarkdown}
<%= sample_start %>
<form method="post" action="#">
  <div>
    <label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
  </div>
  <div>
    <label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<div>
  <label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
</div>
<div>
  <label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** To provide more clarity, ensure that the style of placeholder text is distinguishable from regular text. This is commonly done by reducing the contrast ratio of placeholder text. Usually browsers take care of this. If custom styling of the placeholder text is needed, consider to meet the [minimum color contrast requirement of WCAG 2.0](/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

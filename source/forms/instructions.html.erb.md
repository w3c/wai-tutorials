---
title: Instructions
status: editors-draft
order: 3
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

Sometimes it is necessary to add additional, auxiliary information to a form field to make it easier for users to enter the information correctly or in the correct format.

Screen reader in “Forms Mode” usually only read elements that are form elements (like `input`, `select`, and `textarea`) so the location of instructions is very important.

## Overview Instructions

Instructions that are common to several fields should be positioned ahead of the form itself. Examples for such instructions are data format restrictions or how required fields are identified. They can also include help to find in-line format tips.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

- All fields marked (required) must be completed.
- Dates should all be typed in the format dd/mm/yyyy, (as in 21/07/2013).
- Passwords must contain at least 8 letters and/or numbers.
- Extra help can be found immediately after each field.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

## In-line Instructions

Some in-line instructions, such as required field indicators, must be part of the label itself to be picked immediately by assistive technologies like screen readers.

### Adding instructions in labels
{:.ex}

For simple use cases, adding the instruction into the label may be enough. This approach might not enable the most styling options but is very reliable across different assistive technologies.

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

### Instructions following labels
{:.ex}

Formatting tips might also be positioned after a field as long as the user gets to know where to find them before entering the form.

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

### Using WAI-ARIA
{:.ex}

Another approach is to use WAI-ARIA attributes to provide additional information _specifically to assistive technologies_. This information is interpreted mostly by screen readers at the moment.

`Aria-describedby` can be used to associate auxiliary text to a form field. If supported by assistive technology it is conveyed to the user either immediately when the form field is entered or on demand, usually after the content of the label element is provided.

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
      <input type="text" name="expire" id="expire4" aria-describedby="expDesc2">
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
  <input type="text" name="expire" id="expire" aria-describedby="expDesc">
  <span id="expDesc">MM/YYYY</span>
</span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Placeholder text
{:.ex}

Placeholder text is a short hint of the kind of data to put into a field. It’s usually shown as low-contrast text inside empty form fields and disappears as soon as the user starts typing. **It’s not a replacement for a label**, especially they are not treated as labels by assistive technology. See [Form fields without (visible) labels](labels.html#hidden) for more information. Assistive technology may not support placeholder text yet.

If the style of placeholder text is customized, it should have distinctively less contrast than regular text input so it is not mistaken as pre-populated while obeying the WCAG 2.0 contrast ratio rules.

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

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

Sometimes it is necessary to add additional, auxiliary information to an input field to make it easier for users to enter the information correctly or in the correct format into a form field.

Screen reader in “Forms Mode” usually only read elements that are form elements, like `input`, `select`, and `textarea`, so the position of the instruction is as important as the association with the form field it applies to.

## Overview Instructions

Instructions that are common to several fields should be positioned ahead of the form itself. These should include information on any data format restrictions, how any required fields are identified and can also include help to find in-line format tips.

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

- All fields marked (required) must be completed.
- Dates should all be typed in the format dd/mm/yyy, (as in 21/07/2013).
- Passwords must contain at least 8 letters and/or numbers.
- Extra help can be found immediately after each field.

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

## In-line Instructions

Some in-line instructions, such as required field indicators, must be part of the label itself to be picked immediately by assistive technologies like screen readers.

### Nesting instructions in labels
{:.ex}

For simple use cases, nesting the description into the label may be enough. This approach limits the possibilities to style the description.

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

Formatting tips might also be positioned after of a field as long as the user is instructed before entering the form.

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

{::comment}

### Using multiple labels
{:.ap}

For more complex use cases, or when styling is important, it is possible to use multiple labels with their `for` attributes pointing at the `id` of the form element.

{::nomarkdown}
<%= sample_start %>

<style>
  #ex1 span {
    display: inline-block;
    vertical-align: top;
  }
  #ex1 span label {
    display: block;
    font-size: 0.8em;
  }
</style>
<form method="post" action="#" id="ex1">
  <div>
    <label for="expire2">Expiry date:</label> 
    <span>
      <input type="text" name="expire" id="expire2"> 
      <label for="expire2">MM/YYYY</label>
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
  <input type="text" name="expire" id="expire"> 
  <label for="expire">MM/YYYY</label>
</span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{:/comment}

### Using WAI-ARIA
{:.ex}

Another approach is to use WAI-ARIA attributes to provide additional information _specifically to assistive technologies_ and is interpreted mostly by screen readers at the moment.

{::comment}

`Aria-labelledby` produces a result that is similar to the [multiple labels approach](#multiple-labels) above: The text is immediately read when the form field gets focus.

{::nomarkdown}
<%= sample_start %>

<style>
  #ex2 span {
    display: inline-block;
    vertical-align: top;
  }
  #ex2 span span {
    display: block;
    font-size: 0.8em;
  }
</style>
<form method="post" action="#" id="ex2">
  <div>
    <label for="expire3">Expiry date:</label>
    <span>
      <input type="text" name="expire" id="expire3" aria-labelledby="expDesc"> 
      <span id="expDesc">MM/YYYY</span>
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
{:/comment}

`Aria-describedby` provides additional text either on demand or when focussing the form field, but after the content of the label element is read out.

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

Placeholder text is a short hint of the kind of data to put into a field. It’s usually shown as low-contrast text inside the form field. **It’s not a replacement for a label**, especially they are not treated as labels by assistive technology. Also, some assistive technology may not support placeholder text.

If the placeholder text is customized, it should have distinctively less contrast than regular text input so it is not mistaken as pre-populated while obeying the WCAG 2.0 contrast ratio rules.

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

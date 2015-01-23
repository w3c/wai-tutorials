---
title: Labeling Controls
order: 2
contributors:
  - HTML5 Boilerplate
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
wcag_success_criteria:
  - 1.3.1
  - 2.4.6
  - 3.3.2
  - 4.1.2
wcag_techniques:
  - G131
  - H44
  - H93
  - G17
  - G18
  - G167
  - G162
  - H65
  - ARIA14
  - ARIA16
---

Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases this is done by using the `<label>` element.

Labels need to describe the purpose of the form control. This section of the tutorial describes how to provide labels that are properly associated with form controls. Later sections explain how to provide [instructions](instructions.html), [validate user input](validation.html), and [provide feedback](notifications.html) to help users complete your form.

A label and a form control need to be associated with each other either implicitly or explicitly. This allows browsers to use the label as a larger clickable area to access or activate the control, for example. It also ensures that assistive technology is able to refer to the correct label when presenting a form control.

## Associating labels explicitly
{:.newap}

Whenever possible use the `label` element to explicitly associate text with form elements. The `form` attribute of the label must exactly match the `id` of the form field.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <label for="firstname">First name: </label>
  <input type="text" name="firstname" id="firstname"><br>
  <input type="checkbox" name="subscribe" id="subscribe">
  <label for="subscribe">Subscribe to newsletter</label>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<label for="firstname">First name: </label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Hiding label text
{:.newex}

A label for a form control helps everyone better understand its purpose. In some cases the purpose may be clear enough from the context when the content is rendered visually. In such cases a label can be hidden visually though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users. The method that hides an element from sight but keeps it accessible for assistive technologies, that is used in this tutorial (using the `visuallyhidden` class) can be found [below](#note-on-hiding-elements).

In the example below, the search field is positioned directly beside the search button. The purpose of the form field is evident from the context in most situations.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <label for="search" class="visuallyhidden">Search: </label>
    <input type="text" name="search" id="search">
    <button type="button">Search</button>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

#### Hiding the label element
{:.ap}

A `<label>` element is provided to identify the form element within the code, but is visually hidden to avoid redundancy for those who don't need it.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="search" class="visuallyhidden">Search: </label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Using aria-label
{:.ap}

The `aria-label` attribute can also be used to identify form elements. This approach is generally well understood by screen readers and other assistive technology, but, unlike the [`title` attribute](#using-the-title-attribute), does not convey the information to visual users.
Example:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input type="text" name="search" aria-label="Search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Using the `title` attribute
{:.ap}

The `title` attribute can be used to identify form elements. This approach is generally less reliable and not recommended because some screen readers and assistive technology do not interpret the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information. The information of the `title` attribute is shown to visual users as a tool tip when hovering over the form field with the mouse.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <div>
    <input title="Search" type="text" name="search">
    <button type="button">Search</button>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input title="Search" type="text" name="search">
<button type="submit">Search</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### Note on hiding elements

Screen readers and other assistive technology, as with web browsers, hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`. Use CSS that will display the elements yet make them virtually invisible to hide them visually but keep them active for screen readers and other assistive technology. The CSS code used in the previous examples is provided below:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ css
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Associating labels implicitly using the `label` element
{:.newap}

In some situations an implicit association can be used to indicate label text. For example, an author might not know the `id` of a form field generated by a script, or that script might not add an `id` at all.

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<label>
  First name:
  <input type="text" name="firstname">
</label>
<br>
<label>
  <input type="checkbox" name="subscribe">
  Subscribe to newsletter
</label>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Button labels

When using the `<input>` element to create buttons, the label is set in the `value` attribute of the element. A `<button>` element gives more flexibility as the label is set inside the element and can include markup, providing the possibility for more advanced accessibility hints.

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<input type="submit" value="Submit">
<input type="button" value="Cancel">

<button type="submit">Submit</button>
<button type="button">Cancel</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the image button (`<input type="image">`) is used, the label is set in the `alt` attribute, for example:
`<input type="image" src="searchbutton.png" alt="Search">`.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Visual position of label text
{:.newex}

In left-to-right languages it is customary to visually position labels to the right of radio buttons and checkboxes, and to the left or directly above other form fields. Maintaining this practice increases predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce horizontal scrolling for people using screen magnification and for mobile device users. However, the usefulness of this approach depends on other design aspects, such as the proximity of other nearby form fields and content, and needs to be assessed individually. The aim should be to maintain a close and distinct visual relationship between the label and the form control.

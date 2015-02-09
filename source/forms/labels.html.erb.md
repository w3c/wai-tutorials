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

A label and a form control need to be associated with each other either implicitly or explicitly. Web browsers will provide the label as a larger clickable area, for example to select or activate the control. It also ensures that assistive technology is able to refer to the correct label when presenting a form control.

## Associating labels explicitly
{:.newap}

Whenever possible, use the `label` element to explicitly associate text with form elements. The `for` attribute of the label must exactly match the `id` of the form control.

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
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Hiding label text
{:.newex}

A label for a form control helps everyone better understand its purpose. In some cases the purpose may be clear enough from the context when the content is rendered visually. In such cases a label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users. The method that hides an element visually but keeps it accessible for assistive technologies, that is used in this tutorial (using the `visuallyhidden` class) can be found [below](#note-on-hiding-elements).

In the example below, the search field is positioned directly beside the search button. The purpose of the text input field is evident from the context in most situations.

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

In the example below, a `<label>` element is provided to identify a form control within the code, but it is visually hidden to avoid redundancy for users who can derive the purpose from the other visual cues.

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

The `aria-label` attribute can also be used to identify form controls. This approach is generally well supported by screen readers and other assistive technology, but, unlike the [`title` attribute](#using-the-title-attribute), the information is not conveyed to visual users.
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

The `title` attribute can also be used to identify form control. This approach is generally less reliable and not recommended because some screen readers and assistive technology do not interpret the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information. The information of the `title` attribute is shown to visual users as a tool tip when hovering over the form field with the mouse.

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

Screen readers and other assistive technology, just as web browsers, hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`.

The common approach used to hide information visually but keep them available to screen reader and other assistive technology users, is by using CSS that will keep the information technically visible but practically hidden. For example, it is presented in a 1-by-1 pixel area with a 1-pixel margin. The CSS class `visuallyhidden` (**do not confuse** with CSS `visibility: hidden`) used for the previous examples is provided below:

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

## Associating labels implicitly
{:.newap}

In some situations, form controls cannot be labelled explicitly. For example, an content author might not know the `id` of a form field generated by a script, or that script might not add an `id` at all. In this case the `label` element is used as a container for both the form control and the label text, so that the two are associated implicitly.

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

## Labelling buttons

The label of a `<button>` element is set inside the element and can include markup. It allows to provide more advanced accessibility hints, like marking up language change. When using the `<input>` element to create buttons, the label is set in the `value` attribute of the element.

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~ html
<button type="submit">Submit</button>
<button type="button">Cancel</button>

<input type="submit" value="Submit">
<input type="button" value="Cancel">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** If the image button (`<input type="image">`) is used, the label is set in the `alt` attribute, for example:
`<input type="image" src="searchbutton.png" alt="Search">`, see [Informative Images](/images/functional.html#image-used-in-a-button).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Visual position of label text
{:.newex}

In left-to-right languages it is customary to visually position labels to the right of radio buttons and checkboxes, and to the left or directly above other form fields. Maintaining this practice increases predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce horizontal scrolling for people using screen magnification and for mobile device users. However, the usefulness of this approach depends on other design aspects, such as the proximity of other nearby form fields and content, and needs to be assessed individually. The aim should be to maintain a close and distinct visual relationship between the label and the form control.

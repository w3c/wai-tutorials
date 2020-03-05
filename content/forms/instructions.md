---
title: Form Instructions
permalink: /tutorials/forms/instructions/
ref: /tutorials/forms/instructions/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/forms/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/forms/instructions.md'
metafooter: true

resource:
  ref: /tutorials/forms/
navigation:
  previous: /tutorials/forms/grouping/
  next: /tutorials/forms/validation/


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
  - ARIA1
  - ARIA9
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information.

**Important:** Screen readers often switch to “Forms Mode” when they are processing content within a `<form>` element. In this mode they usually only read aloud form elements such as `<input>`, `<select>`, `<textarea>`, `<legend>`, and `<label>`. It is critical to include form instructions in ways that can be read aloud. This will be explained further below.

## Overall instructions
{:.newex}

Where relevant, provide overall instructions that apply to the entire form. For example, indicate any required and optional input, allowed data formats, and timing limitations. Provide such instructions before the `<form>` element to ensure that it is read aloud by screen readers before they switch to “Forms Mode”.

In the example below, form instructions indicate how required fields are marked, the expected format for the main data fields, and where to find additional help for each input.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

- All fields marked “required” must be completed.
- Dates should all be typed in the format dd/mm/yyyy, (as in 21/07/2013).
- Passwords must contain at least 8 letters and/or numbers.
- Extra help can be found immediately after each field.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## In-line instructions
{:.newex}

In addition to overall instructions, it is also important to provide relevant instructions within the labels of the form controls. For example, to indicate required input fields and data formats in the text of the labels.

### Providing instructions within labels
{:.newex}

For simple use cases, providing instructions within labels may be sufficient. This approach is reliable across different web browsers and assistive technologies, although it may require some additional thought to support some styling needs.

In the example below, the required format for the “Expiration Date” is indicated by “MM/YYYY” within the same label:

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<form method="post" action="#">
	<div>
		<label for="expire">Expiration date (MM/YYYY): </label> <input type="text" name="expire" id="expire">
	</div>
</form>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<label for="expire">Expiration date (MM/YYYY): </label>
<input type="text" name="expire" id="expire">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Providing instructions outside labels
{:.newex}

Providing instructions outside of labels allows more flexible positioning and design, but sometimes it can be missed. It is also not supported by some web browsers (typically older versions) and assistive technologies that don’t implement WAI-ARIA.

#### Using `aria-labelledby`
{:.ap}

One approach is to use the WAI-ARIA `aria-labelledby` attribute to associate instructions with form controls. At the time of writing this tutorial, this approach is not fully supported by all web browsers and assistive technologies, for example, Braille displays. To ensure backward compatibility, the `for` and `id` attributes are also used in this example.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

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
		<label id="expLabel" for="expire4" tabindex="-1">Expiration date:</label>
		<span>
			<input type="text" name="expire" id="expire4" aria-labelledby="expLabel expDesc2">
			<span id="expDesc2" tabindex="-1">MM/YYYY</span>
		</span>
	</div>
</form>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<label id="expLabel" for="expire" tabindex="-1">Expiration date:</label>
<span>
	<input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc">
	<span id="expDesc" tabindex="-1">MM/YYYY</span>
</span>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

{% include ednote.html note="Remove this note" %}

**Note:** At the time of writing those tutorials, it is necessary to add `tabindex="-1"` to elements that are referenced by `aria-labelledby` or `aria-describedby` if those attributes point to _two or more_ elements to make this technique work in Internet Explorer.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

#### Using `aria-describedby`
{:.ap}

Another apporach to associate additional instructions with a form field is to use `aria-describedby`. Information referenced by this attribute is made available to the users after the label and other information is announced.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<label id="expLabel" for="expire">Expiration date:</label>
<span>
	<input type="text" name="expire" id="expire" aria-labelledby="expLabel" aria-describedby="expDesc">
	<span id="expDesc">MM/YYYY</span>
</span>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Placeholder text
{:.newex}

Placeholder text provides instructions or an example of the required data format inside form fields that have not yet been edited by the user. Placeholder text is usually displayed with lower color contrast than text provided by users, and it disappears from form fields when users start entering text. If the placeholder text contains instructional information or examples that disappear, it makes it more difficult for users to check their responses before submitting the form.

While placeholder text provides valuable guidance for many users, **placeholder text is not a replacement for labels**. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing this tutorial, placeholder text is not broadly supported across assistive technologies and not displayed in older web browsers.

Note: Section [Hidden labels](labels.html#hidden) of this tutorial describes how to hide information visually but keep it available to assistive technology. This same approach can be used to avoid visual redundancy of displaying both labels and placeholder text. Be aware that this makes it very hard for users to review the form. To avoid this problem, JavaScript can be used to make labels appear visually (in the associated label element) above or beside the input that has focus.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<form method="post" action="#">
	<div>
		<label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
	</div>
	<div>
		<label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
	</div>
</form>

<style>
::-webkit-input-placeholder {
	 color: #777;
	 opacity: 1;
}

:-moz-placeholder { /* Firefox 18- */
	 color: #777;
	 opacity: 1;
}

::-moz-placeholder {  /* Firefox 19+ */
	 color: #777;
	 opacity: 1;
}

:-ms-input-placeholder {
	 color: #777;
	 opacity: 1;
}
</style>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<div>
	<label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
</div>
<div>
	<label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
</div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

#### Styling

At the time of writing this tutorial, web browsers usually display the placeholder text in a color that does not meet the [minimum contrast requirement of WCAG](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum). This means they are hard to see for many people. Web browsers use a combination of color and opacity to achieve this effect. In most web browsers the color of the placeholder can be styled using proprietary CSS selectors. The following code snippet sets the color to a light gray, which has just enough contrast to meet the contrast requirement, assuming the background of the element is white.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ css
::-webkit-input-placeholder {
	 color: #767676;
	 opacity: 1;
}

:-moz-placeholder { /* Firefox 18- */
	 color: #767676;
	 opacity: 1;
}

::-moz-placeholder {  /* Firefox 19+ */
	 color: #767676;
	 opacity: 1;
}

:-ms-input-placeholder {
	 color: #767676;
	 opacity: 1;
}
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

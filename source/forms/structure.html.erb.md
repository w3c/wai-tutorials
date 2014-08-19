---
title: Form Structure
status: editors-draft
order: 4
wcag_success_criteria:
  - 1.3.1
  - 2.2.1
  - 3.3.2
wcag_techniques:
  - H71
  - G133
  - G180
  - G198
  - SCR1
  - SCR16
---

If a form is more complex than just a couple of form fields or the form fields are ambiguous, some more structuring markup is needed to provide the best experience for users.

## Structuring form content

### Using fieldsets
{:.ex}

Forms should be grouped into groups of logically related form controls to help orientation, using `<fieldset>` and `<legend>` elements. The `<fieldset>` element is needed to establish relationships between groups of form fields, the `<legend>` acts as a heading for this group.

Depending on browser and assistive technology the legend is read out _with every form element_, _once_, or _not at all_. This means that the content of the legend and the labels of individual field sets is very important:

* The legend should be short as a long legend is very tedious if it is read with every label.
* The individual labels should be self-explanatory.
* If all form fields in a fieldset are optional, consider to add this information to the legend. This enables the user to skip those form fields.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<fieldset>
<legend>(Optional) I want to receive</legend>
  <div>
    <input type="checkbox" name="newsletter" id="check_1"> <label for="check_1">The weekly newsletter</label>
  </div>
  <div>
    <input type="checkbox" name="company_offers" id="check_2"> <label for="check_2">Offers from the company</label> <br>
  </div>
  <div>
    <input type="checkbox" name="assoc_offers" id="check_3"> <label for="check_3">Offers from associated companies</label>
  </div>
</fieldset>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<fieldset>
<legend>(Optional) I want to receive</legend>
  <div>
    <input type="checkbox" name="newsletter" id="check_1">
    <label for="check_1">The weekly newsletter</label>
  </div>
  <div>
    <input type="checkbox" name="company_offers" id="check_2">
    <label for="check_2">Offers from the company</label> <br>
  </div>
  <div>
    <input type="checkbox" name="assoc_offers" id="check_3">
    <label for="check_3">Offers from associated companies</label>
  </div>
</fieldset>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Multi-page Forms
{:.newex}

A form that is really long can be split up into several pages to reduce the complexity users have to deal with at once. This makes filling them out easier for everyone, including people with cognitive disabilities.
Information that is important for the complete form, like [overview instructions](instructions.html#overview-instructions), should be repeated on every page.

Form pages should always be split up by the topic of the form fields on the page. For example, in an online shop, shipping and payment information is on separate pages.

It should be easy to skip (pages of) optional form fields. If a page is optional it makes sense to mention this information in the main heading of the page as well.

Don’t give users a time limit to fill out the form, if possible. If you do need a time limit, provide a checkbox that allows the user to extend the time limit

### Providing progress feedback …

The first form page should explain how many pages will follow, and on each page the user should be informed about the progress he is making.

#### … in the title element
{:.ap}

The title element is the first item read to a screen reader user. Changing the title of the page to include the progress gives immediate feedback and can even be an indicator for error messages if the progress doesn’t change.

{::nomarkdown}
<%= sample_start %>

Page 2/4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<title>Page 2/4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop</title>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### … in the main heading
{:.ap}

Using the main heading to inform users is a very good way to provide an update for people scanning the page visually, as the main heading usually is very prominent in the document.

{::nomarkdown}
<%= sample_start %>

<h1 role="presentation">Shipping Address (Page 2/4)</h1>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h1>Shipping Address (Page 2/4)</h1>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

#### … using the HTML5 progress element
{:.ap}

The HTML5 progress element is a good way to inform users about the progress of the form and is especially suited when it is hard to know how many pages there will be. For example, in a survey pages are skipped when questions are answered in a certain way.

{::nomarkdown}
<%= sample_start %>

Survey <progress max="7" value="1">(Page 2 of approx. 7)</progress><br>

Survey <progress max="7" value="3">(Page 3 of approx. 7)</progress><br>

Survey <progress max="7" value="6">(Page 6 of approx. 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html

Survey <progress max="7" value="1">(Page 2 of approx. 7)</progress><br>

Survey <progress max="7" value="3">(Page 3 of approx. 7)</progress><br>

Survey <progress max="7" value="6">(Page 6 of approx. 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>
~~~

{::nomarkdown}

<%= code_end %>
{:/nomarkdown}

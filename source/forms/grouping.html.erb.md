---
title: Grouping Controls
status: draft
order: 3
wcag_success_criteria:
  - 1.3.1
  - 3.3.2
wcag_techniques:
  - H71
---

Group related form controls, both visually and within the code. Use the `<fieldset>` and `<legend>` elements to associate related form controls.

## Associating related controls
{:.newex}

The `<fieldset>` element provides a container for related form elements, and the `<legend>` element acts like a heading to identify the group. In the example below there are three checkboxes that are all part of an opt-in function for receiving different types of information. The legend for this group of controls highlights the action that is common to all controls, and the fact that they are all optional.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<fieldset>
<legend>(Optional) I want to receive</legend>
  <div>
    <input type="checkbox" name="newsletter" id="check_1"> <label for="check_1">The weekly newsletter</label>
  </div>
  <div>
    <input type="checkbox" name="company_offers" id="check_2"> <label for="check_2">Offers from the company</label>
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
    <label for="check_2">Offers from the company</label>
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

**Note:** Depending on the configuration, some screen readers read out the legend either _with every form element_, _once_, or _not at all_. To accommodate this consider the following:

* Make the legend as short as possible for situations in which it is read together with the label each time.
* Make the individual labels sufficiently self-explanatory for situations in which legends are not read aloud.
* Hide the legend visually and provide a heading (`<h1>`–`<h6>`) with the same text. (In some cases the same text may be read aloud twice in a row.)

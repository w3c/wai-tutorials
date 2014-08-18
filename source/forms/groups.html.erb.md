---
title: Groups of Fields
status: editors-draft
order: 4
wcag_success_criteria:
  - 1.3.1
  - 3.3.2
wcag_techniques:
  - H71
---

Entering a piece of more complex information sometimes requires using multiple form fields. Additionally longer forms should be grouped into groups of logically related form controls to help orientation, using `<fieldset>` and `<legend>` elements.

## Using fieldsets
{:.ex}

The fieldset element is needed to establish relationships between groups of form fields. They help users to focus on the particular topic at hand. 

Depending on browser and assistive technology the legend is read out _with every form element_, _once_, or _not at all_. This means that the content of the legend and the labels of individual field sets is very important:

* The legend should be short as a long legend is very tedious if it is read with every label.
* The individual labels should be as self-explanatory as possible.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
<fieldset>
<legend>I want to receive</legend>
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
<legend>I want to receive</legend>
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
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

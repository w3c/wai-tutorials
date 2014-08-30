---
title: Multi-Step Forms
status: editors-draft
order: 7
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

Where possible, divide long forms into multiple smaller forms that constitute a series of logical steps or stages. This helps make long forms less daunting and easier to understand, in particular for people with less computer skills and people with different types of cognitive disabilities. The following basic principles should apply for multi-step forms:

- Repeat [overall instructions](instructions.html#overall-instructions) on every page.
- Split the form up according to the topic of the form fields on a page. For example, in an online shop, shipping and payment information are on separate pages.
- Make is easy to skip (pages of) optional form fields. If a page is optional it makes sense to mention this information in the main heading of the page as well.
- Don’t give users a time limit to fill out the form, if possible. If you do need a time limit, provide a checkbox that allows the user to adjust or extend the time limit.

## Indicating progress
{:.newex}

If possible, the first form page should explain how many pages will follow, and on each page the user should be informed about the progress he is making.

### Using the page title
{:.ap}

The `<title>` element is the first item read by many people, such as screen reader users. Changing the title of the page to include the progress gives immediate feedback. This information should precede other information provided in the title, such as the name of the step or any error notifications.

{::nomarkdown}
<%= sample_start %>

Step 2/4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<title>Step 2/4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop</title>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using the main heading
{:.ap}

Using the main heading to inform users is a good way to provide the same information for people scanning the page visually, as the main heading usually is very prominent in the document.

{::nomarkdown}
<%= sample_start %>

<h1 role="presentation">Shipping Address (Step 2/4)</h1>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h1>Shipping Address (Step 2/4)</h1>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using the HTML5 progress element
{:.ap}

HTML5 provides a `progress` element that be used to inform users about the progress. This can be particularly useful in situations where the number of steps depends on the user input, such as in a survey where steps are skipped depending on how questions were answered.

{::nomarkdown}
<%= sample_start %>

Survey <progress max="7" value="1">(Step 2 of approx. 7)</progress><br>

Survey <progress max="7" value="3">(Step 3 of approx. 7)</progress><br>

Survey <progress max="7" value="6">(Step 6 of approx. 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html

Survey <progress max="7" value="1">(Step 2 of approx. 7)</progress><br>

Survey <progress max="7" value="3">(Step 3 of approx. 7)</progress><br>

Survey <progress max="7" value="6">(Step 6 of approx. 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using step-by-step indicator
{:.ap}

If a form has a known number of steps to be completed, a step-by-step indicator can help users to orient themselves. In the example below, we use an (ordered) list with a list item for every step. Visually hidden text is used to indicate the current and completed steps. If possible, provide a link to steps already completed, so the user can review them. Data that was already entered in the current step should be saved in this case.

{::nomarkdown}
<%= sample_start %>
<div class="tlwrapper">
  <ol class="timeline">
    <li class="timeline-past">
        <span class="visuallyhidden">Completed: </span>
        <a href="billing.html">Billing Address</a>
    </li>
    <li class="timeline-current">
      <span class="visuallyhidden">Current: </span>
      <span>Shipping Address</span>
    </li>
    <li><span>Review Order</span></li>
    <li><span>Payment</span></li>
    <li><span>Finish Purchase</span></li>
  </ol>
</div>
<style>
.tlwrapper {
  display:table;
  width: 100%;
}

.timeline {
  display: table-row;
  counter-reset: timeline;
}

.timeline li {
  display: table-cell;
  width: 20%;
  counter-increment: timeline;
  list-style: none;
  text-align: center;
  padding: .25em .5em;
  overflow:hidden;
  position: relative;
  background-color: #fff;
  padding-left: 25px;
  white-space: nowrap;
}

.timeline li:first-child {
  padding-left: 0;
}

.timeline li:after {
  left: 0;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(151, 204, 237, 0);
  border-left-color: #ccc;
  border-width: 20px;
  margin-top: -20px;
}

.timeline li:first-child:after {
  display: none;
}

.timeline li a, .timeline li > span {
  z-index: 100;
  position: relative;
  display: block;
  color: #555;
}

.timeline li a:before, .timeline li > span:before {
  display: inline-block;
  color: #555;
  content: counter(timeline);
  background-color: none;
  border: 3px solid #555;
  margin-right:.25em;
  border-radius: 5px;
  padding: 0 .25em;
}

.timeline li.timeline-current > span, .timeline li.timeline-current a {
  color: #036;
  font-weight: bold;
}

.timeline li.timeline-current > span:before {
  color: #fff;
  background-color: #036;
  border-color: #036;
}

.timeline li.timeline-past {
  background-color: #ccc;
}

.timeline li.timeline-past a:before {
  color: green;
  content: "\2713";
  background-color: #fff;
  border-color: green;
}

.timeline li.timeline-past a:hover:before,
.timeline li.timeline-past a:focus:before {
  background-color: green;
  color: #fff;
}
</style>
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'HTML') %>
{:/nomarkdown}

~~~html
<div class="tlwrapper">
  <ol class="timeline">
    <li class="timeline-past">
        <span class="visuallyhidden">Completed: </span>
        <a href="billing.html">Billing Address</a>
    </li>
    <li class="timeline-current">
      <span class="visuallyhidden">Current: </span>
      <span>Shipping Address</span>
    </li>
    <li><span>Review Order</span></li>
    <li><span>Payment</span></li>
    <li><span>Finish Purchase</span></li>
  </ol>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.tlwrapper {
  display:table;
  width: 100%;
}

.timeline {
  display: table-row;
  counter-reset: timeline;
}

.timeline li {
  display: table-cell;
  width: 20%;
  counter-increment: timeline;
  list-style: none;
  text-align: center;
  padding: .25em .5em;
  overflow:hidden;
  position: relative;
  background-color: #fff;
  padding-left: 25px;
  white-space: nowrap;
}

.timeline li:first-child {
  padding-left: 0;
}

.timeline li:after {
  left: 0;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(151, 204, 237, 0);
  border-left-color: #ccc;
  border-width: 20px;
  margin-top: -20px;
}

.timeline li:first-child:after {
  display: none;
}

.timeline li a, .timeline li > span {
  z-index: 100;
  position: relative;
  display: block;
  color: #555;
}

.timeline li a:before, .timeline li > span:before {
  display: inline-block;
  color: #555;
  content: counter(timeline);
  background-color: none;
  border: 3px solid #555;
  margin-right:.25em;
  border-radius: 5px;
  padding: 0 .25em;
}

.timeline li.timeline-current > span, .timeline li.timeline-current a {
  color: #036;
  font-weight: bold;
}

.timeline li.timeline-current > span:before {
  color: #fff;
  background-color: #036;
  border-color: #036;
}

.timeline li.timeline-past {
  background-color: #ccc;
}

.timeline li.timeline-past a:before {
  color: green;
  content: "\2713";
  background-color: #fff;
  border-color: green;
}

.timeline li.timeline-past a:hover:before,
.timeline li.timeline-past a:focus:before {
  background-color: green;
  color: #fff;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

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

Where possible, divide long forms into multiple smaller forms that constitute a series of logical steps or stages. This helps make long forms less daunting and easier to understand, in particular for people with less computer skills and people with different types of cognitive disabilities.

- @@@repeat [overall instructions](instructions.html#overview-instructions) on every page
- @@@Form pages should always be split up by the topic of the form fields on the page. For example, in an online shop, shipping and payment information is on separate pages.
- @@@It should be easy to skip (pages of) optional form fields. If a page is optional it makes sense to mention this information in the main heading of the page as well.
- @@@Don’t give users a time limit to fill out the form, if possible. If you do need a time limit, provide a checkbox that allows the user to extend the time limit (@@moved to "instructions" and "user interaction" sections)

## Indicating progress (@@section needs editing)
{:.newex}

The first form page should explain how many pages will follow, and on each page the user should be informed about the progress he is making.

### Using the page title
{:.ap}

The `title` element is the first item read by many people, such as screen reader users. Changing the title of the page to include the progress gives immediate feedback. This information should precede other information provided in the title, such as the name of the step or any error notifications.

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

### Using step-indicator (@@section needs editing)
{:.ap}

@@indicator bar, like the one used for the accessibility support database or WCAG-EM report tool

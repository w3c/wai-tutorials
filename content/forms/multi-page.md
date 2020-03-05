---
title: Multi-page Forms
permalink: /tutorials/forms/multi-page/
ref: /tutorials/forms/multi-page/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/forms/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/forms/multi-page.md'
metafooter: true

resource:
  ref: /tutorials/forms/
navigation:
  previous: /tutorials/forms/validation/
  next: /tutorials/forms/multi-page/


wcag_success_criteria:
  - 1.3.1
  - 2.2.1
  - 2.2.2
  - 3.3.2
wcag_techniques:
  - H71
  - G133
  - G180
  - G198
  - SCR1
  - SCR16
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Where possible, divide long forms into multiple smaller forms that constitute a series of logical steps or stages. This helps make long forms less daunting and easier to understand, particularly for people who are less experienced using computers or who have various cognitive disabilities. The following basic principles should apply for multi-step forms:

- Repeat [overall instructions](/tutorials/forms/instructions/#overall-instructions) on every page.
- Split the form up according to its logical groups of controls. For example, in an online shop, shipping and payment information are typically separated.
- Make it easy to recognize and to skip optional stages. For example, highlight optional steps in the main heading of the web page and provide an option to skip.
- If possible, don’t set a time limit to fill out the form. If a time limit is required, provide a feature that allows the user to adjust or extend the time limit.

## Indicating progress
{:.newex}

If possible, the first step of a form should explain how many steps will follow. Each step should inform the user about the progress they are making.

### Using the page title
{:.ap}

The `<title>` element is the first item read by many people, such as screen reader users. Changing the title of the page to include the progress gives immediate feedback. This information should precede other information provided in the title, such as the name of the step or any error notifications.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

Step 2 of 4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<title>Step 2 of 4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop</title>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using the main heading
{:.ap}

Using the main heading to inform users is a good way to provide the same information for people scanning the page visually, as the main heading usually is prominent in the document.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<h1 role="presentation">Shipping Address (Step 2 of 4)</h1>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
<h1>Shipping Address (Step 2 of 4)</h1>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using the HTML5 progress element
{:.ap}

HTML5 provides a `progress` element that can be used to inform users about the progress. This can be particularly useful in situations where the number of steps depends on user input, such as in a survey where steps are skipped depending on how questions were answered.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

Survey <progress max="7" value="1">(Step 1 of circa 7)</progress><br>

Survey <progress max="7" value="2">(Step 2 of circa 7)</progress><br>

[…]

Survey <progress max="7" value="6">(Step 6 of circa 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>

<style>
progress {
  color: #036;
  font-size: .6em;
  line-height: 1.5em;
  text-indent: .5em;
  width: 15em;
  height: 1em;
  border: 1px solid #036;
  border-radius: 1em;
  background: #fff;
  overflow:hidden;
}

progress::-webkit-progress-bar {
	background-color:#036;
}

progress::-moz-progress-bar {
	background-color:#036;
}
</style>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ html
Survey <progress max="7" value="1">(Step 1 of circa 7)</progress><br>

Survey <progress max="7" value="2">(Step 2 of circa 7)</progress><br>

[…]

Survey <progress max="7" value="6">(Step 6 of circa 7)</progress><br>

Survey <progress max="7" value="7">(Finished)</progress>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

The progress element, like other form elements, is a component from the operating system rendered directly on the website. Those components are animated in some operating systems which would violate WCAG’s [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) success criterion that requires that users are able to disable an animation that starts automatically, lasts more than 5 seconds and is presented in parallel with other content.

The animation can be stopped by using custom styling with browser-specific CSS as shown below.

{::nomarkdown}
{% include box.html type="start" title="Code" class="example" %}
{:/}

~~~ css
/* Microsoft IE */
progress {
  color: #036;
}

/* Apple Safari and Google Chrome */
progress::-webkit-progress-bar {
	background-color: #036;
}

/* Mozilla Firefox */
progress::-moz-progress-bar {
	background-color: #036;
}
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using step-by-step indicator
{:.ap}

If a form has a known number of steps to be completed, a step-by-step indicator can help users orient themselves. In the example below, we use an ordered list with a list item for every step. Visually hidden text is used to indicate the current and completed steps. If possible, provide a link to steps already completed, so the user can review them. In this case, any data already entered in the current step should be saved.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}
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
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code 'HTML" class="example" %}
{:/}

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
{% include box.html type="end" %}
{:/}

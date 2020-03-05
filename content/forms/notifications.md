---
title: User Notification
permalink: /tutorials/forms/notifications/
ref: /tutorials/forms/notifications/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/forms/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/forms/notifications.md'
metafooter: true

resource:
  ref: /tutorials/forms/
navigation:
  previous: /tutorials/forms/validation/
  next: /tutorials/forms/multi-page/


wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
  - ARIA18
  - ARIA19
  - ARIA21
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---

Provide feedback to users about the results of their form submission, whether successful or not. This includes in-line feedback at or near the form controls and overall feedback that is typically provided after form submission.

Notifications have to be concise and clear. In particular, error messages should be easy to understand and should provide simple instructions on how they can be resolved. Success messages are also important to confirm task completion.

## Overall feedback

When a form is submitted, it is important that the user is notified whether the submission was successful or if errors occurred. Several of the following techniques can be combined.

### Using the main heading
{:.ex}

A common way to provide feedback is by using the main heading of the web page, usually, the most prominently displayed `<h1>` or `<h2>` element. This technique is particularly useful when forms are processed by the server, but can also be useful for client-side scripting.

{::nomarkdown}
{% include box.html type="start" title="Code: Error" class="example" %}
{:/}
~~~html
<h1>3 Errors – Billing Address</h1>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: Success" class="example" %}
{:/}
~~~html
<h1>Thank you for submitting your order.</h1>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** The primary purpose of the main heading is still to identify the web page that the user is currently on. When the user is sent back to the same web page because of an error, then a simple indication using the word “error” and possibly the number of errors is helpful.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

###  Using the page title
{:.ex}

The `<title>` element of the web page can be useful to indicate successes and errors. In particular, screen reader users will receive this feedback immediately when the web page is loaded. This can be helpful when the main heading is located deeper within the content, for example, after the navigation menus.

{::nomarkdown}
{% include box.html type="start" title="Code: Error" class="example" %}
{:/}
~~~html
<title>3 Errors – Billing Address</title>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: Success" class="example" %}
{:/}
~~~html
<title>Thank you for submitting your order.</title>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Using dialogs
{:.ex}

A dialog is a common way to inform users of changes. It can be used if other means of informing the user prove to be easily missed. Dialogs are more obtrusive and distracting, which may be the desired effect.

JavaScript provides a very basic alert dialog box that provides proper keyboard navigation and respects the user’s default settings, including font size, colors, and language. A custom dialog implementation has to match that functionality.

The basic example below shows a pop-up that is displayed when the user activates the “save” button. A message is displayed in the dialog box, and the web page is disabled until the user selects “OK”.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<button id="alertconfirm" type="button">Save</button>

<script>
	document.getElementById('alertconfirm').addEventListener('click', function(){ alert('Thanks for submitting the form!'); });
</script>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}
~~~html
<button type="button" id="alertconfirm">Save</button>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: JavaScript" class="example" %}
{:/}
~~~js
document.getElementById('alertconfirm')
	.addEventListener('click', function() {
		/* [… code saving data …] */
		alert('Thanks for submitting the form!');
	});
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

### Listing errors
{:.ex}

When errors occur, it is helpful to list them at the top of the page, before the form. The list should have a distinctive heading so that it is easy to identify. Each error listed should:

- Reference the label of the corresponding form control, to help the user recognize the control;
- Provide a concise description of the error in a way that is easy to understand by everyone;
- Provide an indication of how to correct mistakes, and remind users of any format requirements;
- Include an in-page link to the corresponding form control to make access easier for the users.

Sometimes, for example, when using AJAX techniques, the browser is not loading a new page but shows changes, such as form errors, dynamically on the page. The list of errors should be inserted into a prominent container on the top to inform the user in such a case. In addition to the advice above, this container should have the `role` attribute set to `alert` to make assistive technology users aware of this change.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}
<div role="alert">
  <h4 role="presentation">There are 2 errors in this form</h4>
  <ul>
  	<li>
  		<a href="#firstname">
  			The First name field is empty, it is a required field and must be filled in.
  		</a>
  	</li>
  	<li>
  		<a href="#birthdate">
  			The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year).
  		</a>
  	</li>
  </ul>
</div>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<div role="alert">
  <h4>There are 2 errors in this form</h4>
  <ul>
  	<li>
  		<a href="#firstname" id="firstname_error">
  			The First name field is empty; it is a required field and must be filled in.
  		</a>
  	</li>
  	<li>
  		<a href="#birthdate" id="birthdate_error">
  			The Date field is in the wrong format; it should be similar to 17/09/2013 (use a / to separate day, month, and year).
  		</a>
  	</li>
  </ul>
</div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

Also, form fields can be associated with the corresponding error message using aria-describedby.

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<label for="firstname">First Name:</label>
<input type="text" id="firstname" aria-describedby="firstname_error">
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## In-line feedback
{:.newap#inline}

In addition to overall feedback, more specific feedback at or near the form controls can better help users to use your form. This includes feedback to indicate correctly entered input as well as errors in the input.

Typically a combination of messages and visual cues are used to provide in-line feedback. For example, valid input can be indicated by a checkmark (✓) and green border, while errors can be indicated by an error icon (like a red ✗ or an exclamation mark) and red border. Error messages should also provide guidance on how to correct mistakes. The concepts for such error messages are essentially the same as for providing [instructions](instructions.html).

### After submit
{:.ap}

The example below shows a form with two input fields. The first input field, “username”, is used to register a username. The second input field, “expiry date”, is used to provide a date for when the registration expires.

When the form is submitted, the entries are checked, and feedback is provided to the user. Appropriate success and error messages are displayed for each input field to help the user complete the form.

If the submitted data contains errors, it is convenient to set the focus to the first `<input>` element that contains an error.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<style>
	#ex3 div {margin-bottom:.75em;}
	.error {
		color: #900;
	}
	.error input {
		border: 3px solid #900;
	}
	.success {
		color: #007a00;
	}
	.success input {
		border: 3px solid #007a00;
	}
</style>

<form method="post" action="#ex3" id="ex3">
	<div class="success">
		<label for="username4"><strong>OK:</strong> Username:</label>
			<input type="text" name="username" id="username4" value="spaceteddy13" aria-describedby="userDesc2">
			<span id="userDesc2">✓</span>
	</div>
	<div class="error">
		<label for="expire4"><strong>Error:</strong> Expiry date:</label>
			<input type="text" name="expire" id="expire4" value="03.2015" aria-describedby="expDesc2">
			<span id="expDesc2">Use the format MM/YYYY.</span>
	</div>
	<div class="error">
		<button type="submit">Submit</button>
	</div>
</form>

<script>
var taken_usernames = ['timbl', 'shadi', 'yatil', 'bim', 'shawn', 'slh', 'spacebear13', 'Obelisks', 'Phoenix', 'Imari', 'Henry', 'Zeki', 'Rome', 'Min', ' Kelly', 'Brynn'];
document.getElementById('ex3').addEventListener('submit', function(event){
	function setError(el, msg) {
		el.parentNode.querySelector('strong').innerHTML = "Error:";
		el.parentNode.className='error';
		el.parentNode.querySelector('span').innerHTML = msg;
	}
	function setSuccess(el) {
		el.parentNode.querySelector('strong').innerHTML = "OK:";
		el.parentNode.className='success';
		el.parentNode.querySelector('span').innerHTML = "&check;";
	}
	var exp = document.getElementById('expire4');
	if (exp.value.match(new RegExp('[0-9]{2}\/[0-9]{4}'))) {
		setSuccess(exp);
	} else {
		setError(exp, 'Use the format MM/YYYY.');
	}
	var usr = document.getElementById('username4');
	if (taken_usernames.indexOf(usr.value.trim())+1 == false) {
		setSuccess(usr);
	} else {
		setError(usr, 'Username already taken');
	}
	event.preventDefault();
	return false;
});
</script>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<div class="success">
	<label for="username">
		<strong>OK:</strong> Username:
	</label>
	<input type="text" name="username"
		id="username" value="spaceteddy13"
		aria-describedby="userDesc">
	<span id="userDesc">✓</span>
</div>
<div class="error">
	<label for="expire">
		<strong>Error:</strong>
		Expiry date:
	</label>
	<input type="text" name="expire"
		id="expire" value="03.2015"
		aria-describedby="expDesc">
		<span id="expDesc">Use the format MM/YYYY.</span>
</div>
<div>
	<button type="submit">Submit</button>
</div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code:  'CSS" class="example" %}
{:/}

~~~css
.error   { color: #900; }
.success { color: #007a00; }
.error   input { border: 3px solid #900; }
.success input { border: 3px solid #007a00; }
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

### During typing
{:.ap.newex}

Instant feedback during typing can be extremely helpful. For example, checking the availability of a username in the previous example required the user to resubmit the form -- possibly multiple times. Providing feedback while users are typing allows them to experiment more easily until they find a suitable username. However, client-side scripting is required for such functionality, and not all situations may be appropriate for such feedback.

#### Binary messages
{:.ex.inap}

In the following example, the availability of a username is checked instantly while the user is typing text in the input field. Corresponding success and error messages are displayed without the user needing to submit the form.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<form method="post" action="#">
	<div>
		<label for="ex1_username"><strong></strong> Username:</label>
		<input type="text" name="username" id="ex1_username">
		<span id="username_feedback" aria-live="polite"></span>
	</div>
</form>

<script>
	document.getElementById('ex1_username').addEventListener('keyup', function(){
		function setError(el, msg) {
			el.parentNode.querySelector('strong').innerHTML = "Error:";
			el.parentNode.className='error';
			el.parentNode.querySelector('span').innerHTML = msg;
		}
		function setSuccess(el) {
			el.parentNode.querySelector('strong').innerHTML = "OK:";
			el.parentNode.className='success';
			el.parentNode.querySelector('span').innerHTML = "&check;";
		}
		var val = this.value;
		if (val !== "") {
			if (taken_usernames.indexOf(val.trim())+1) {
				setError(this, '&cross; Sorry, this username is taken.');
			} else {
				setSuccess(this, '&check; You can use this username.');
			}
		} else {
			document.getElementById('username_feedback').innerHTML = '';
			document.getElementById('username_feedback').parentNode.className = '';
			document.querySelector('[for="ex1_username"] strong').innerHTML = '';
		}
	});
</script>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
{::nomarkdown}
{% include box.html type="start" title="Code: HTML" class="example" %}
{:/}

~~~ html
<div>
	<label for="username">Username:</label>
	<input type="text" name="username" id="username">
	<span id="username_feedback" aria-live="polite"></span>
</div>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code:  'JavaScript" class="example" %}
{:/}

~~~ js
document.getElementById('username').addEventListener('keyup', function(){
	function setError(el, msg) {
		el.parentNode.querySelector('strong').innerHTML = "Error:";
		el.parentNode.className='error';
		el.parentNode.querySelector('span').innerHTML = msg;
	}
	function setSuccess(el) {
		el.parentNode.querySelector('strong').innerHTML = "OK:";
		el.parentNode.className='success';
		el.parentNode.querySelector('span').innerHTML = "&check;";
	}
	var val = this.value;
	if (val !== "") {
		if (taken_usernames.indexOf(val.trim())+1) {
			setError(this, '&cross; Sorry, this username is taken.');
		} else {
			setSuccess(this, '&check; You can use this username.');
		}
	} else {
		document.getElementById('username_feedback').innerHTML = '';
		document.getElementById('username_feedback')
			.parentNode.className = '';
		document.querySelector('[for="username"] strong').innerHTML = '';
	}
});
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `polite`. The contents of this so called “live region” are conveyed to screen readers and other assistive technology. The value “polite” de-emphasizes the importance of the message and does not cause screen readers to interrupt their current tasks to read aloud this message. Thus the message is only read once when the user stops typing rather than on every keystroke that the user makes.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

#### Scaled feedback
{:.ex.inap}

The example below illustrates a range of possible types of feedback in addition to success and error messages. In the example, the strength of the password is checked as it is typed by the user. The feedback indicates a scale of how strong the password is. The feedback is indicated using several cues, including color coding, a barometer, and label “Weak”, “Okay”, and “Strong”, as well as the time that would be needed to crack the password.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

No data is sent using the following example input field. The password is shown in plain text for demonstration purposes.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<form method="post" action="#">
	<label for="ex2_password">Password:</label>
	<input type="text" name="password" id="ex2_password">
	<span id="passwordmeter"><span></span></span>
	<span id="passwordmessage" aria-live="polite"></span>
</form>

<style>
	#passwordmeter {
		display:inline-block;
		width:125px;
		height: 20px;
		border: 1px solid #666;
		vertical-align:middle;
	}
	#passwordmeter span {
		display:inline-block;
		height:1em;
		background-color: gray;
		width:25px;
		height: 20px;
	}
</style>

<script>
(function(){var a;a=function(){var a,b;b=document.createElement("script");b.src="{{ "/content-images/wai-tutorials/forms/zxcvbn.js" | relative_url}}";b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("script")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);

document.getElementById('ex2_password').addEventListener('keyup',
		function(){
			var meter = document.querySelector('#passwordmeter span');
			var msg = document.getElementById('passwordmessage');
			var pw = zxcvbn(this.value);
			meter.style.width = (pw.score+1) * 25 + 'px';
			if (pw.score == 0) {
				meter.style.backgroundColor = 'red';
				msg.innerHTML = '<strong>Really Weak</strong> Password';
			} else if (pw.score < 3) {
				meter.style.backgroundColor = 'red';
				msg.innerHTML = '<strong>Weak</strong> Password (cracked in ' + pw.crack_time_display + ')';
			} else if (pw.score == 3) {
				meter.style.backgroundColor = 'yellow';
				msg.innerHTML = '<strong>Good</strong> Password (cracked in ' + pw.crack_time_display + ')';
			} else {
				meter.style.backgroundColor = 'green';
				msg.innerHTML = '<strong>Strong</strong> Password (cracked in ' + pw.crack_time_display + ')';
			}
			if (this.value == "") {
				meter.style.backgroundColor = 'gray';
				msg.innerHTML = ' ';
			}
	});

</script>

{::nomarkdown}
{% include box.html type="end" %}
{:/}
[See commented example code in full.](/tutorials/forms/examples/password/)

### On focus change
{:.ap}

In some cases, it does not make sense to check input as it is being typed by the user because it would display error messages most of the time. This is often the case when data needs to be entered in a particular format, such as a date.

In the example below, the user is expected to provide an expiry date. The input is checked when the user leaves the form field, for example, by using the tab key to move the focus to the next field or by clicking on another field.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
{:/}

<style>
	#ex4 div {margin-bottom:.75em;}
</style>

<form method="post" action="#" id="ex4">
	<div>
		<label for="expire5"><strong></strong> Expiry date:</label>
		<input type="text" name="expire" id="expire5" value="03.2015" aria-describedby="expDesc3">
		<span id="expDesc3" aria-live="assertive"></span>
	</div>
	<div class="error">
		<button type="submit">Submit</button>
	</div>
</form>

<script>
inputs = document.querySelectorAll('#ex4 input');
for (var i = inputs.length - 1; i >= 0; i--) {
	inputs[i].addEventListener('blur', function(event){
		function setError(el, msg) {
			el.parentNode.querySelector('strong').innerHTML = "Error:";
			el.parentNode.className='error';
			el.parentNode.querySelector('span').innerHTML = msg;
		}
		function setSuccess(el) {
			el.parentNode.querySelector('strong').innerHTML = "OK:";
			el.parentNode.className='success';
			el.parentNode.querySelector('span').innerHTML = "&check;";
		}
		if (this.id == 'expire5') {
			if (this.value.match(new RegExp('[0-9]{2}\/[0-9]{4}'))) {
				setSuccess(this);
			} else {
				setError(this, 'Use the format MM/YYYY.');
			}
		} else if (this.id == 'username5') {
			if (taken_usernames.indexOf(this.value.trim())+1 == false) {
				setSuccess(this);
			} else {
				setError(this, 'Username already taken.');
			}
		}
		event.preventDefault();
		return false;
	});
};

</script>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}
~~~html
<div>
	<label for="expire"><strong></strong> Expiry date:</label>
	<input type="text" name="expire" id="expire" value="03.2015" aria-describedby="expDesc3">
	<span id="expDesc3" aria-live="assertive"></span>
</div>
~~~
{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `assertive`. The contents of this so called “live region” is conveyed to screen readers and other assistive technology. The value “assertive” emphasizes the importance of the message and causes screen readers to interrupt their current tasks to read aloud this message. Thus the message is read aloud before the next element that received the focus is announced to the user.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

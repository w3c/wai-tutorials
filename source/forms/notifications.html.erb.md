---
title: User Notifications
order: 6
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
  - ARIA18
  - ARIA19
  - ARIA21
---

Provide feedback to users on the results of their form submission, whether successful or not. This includes in-line feedback at or near the form controls, and overall feedback that is typically provided after form submission.

Notifications need to be concise and clear. In particular, error messages should be easy to understand and should provide simple instructions on how they can be resolved. Success messages are also important to confirm task completion.

## Overall feedback

When a form is submitted, it is important that the user is notified whether the submission was successful or if errors occurred. Several of the following techniques can be combined.

### Using the main heading
{:.ex}

A common way to provide feedback is by using the main heading of the web page, usually the most prominently displayed `<h1>` or `<h2>` element. This technique is particularly useful when forms are processed by the server, but can also be useful for client-side scripting.

{::nomarkdown}
<%= code_start('','Error') %>
{:/nomarkdown}
~~~html
<h1>3 Errors – Billing Address</h1>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','Success') %>
{:/nomarkdown}
~~~html
<h1>Thank you for submitting your order.</h1>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The main purpose of the main heading is still to identify the web page that the user is currently on. When the user is sent back to the same web page because of an error, then a simple indication using the word “error” and possibly the number of errors is helpful.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

###  Using the page title
{:.ex}

It is often useful to also use the `<title>` element of the web page to indicate successes and errors. In particular screen reader users will receive this feedback immediately when the web page is loaded. This can be helpful when the main heading is located deeper within the content, for example, after the navigation menus.

{::nomarkdown}
<%= code_start('','Error') %>
{:/nomarkdown}
~~~html
<title>3 Errors – Billing Address</title>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','Success') %>
{:/nomarkdown}
~~~html
<title>Thank you for submitting your order.</title>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Using a dialog
{:.ex}

A dialog is a moderately prominent way to inform users of changes. It can be used if other means of informing the user prove to be easily missed. Dialogs much more obtrusive and distracting which may be the desired effect.

JavaScript provides a very basic alert dialog box that provides proper keyboard navigation and respects the user’s default settings, including font size, colors, and language. A custom dialog implementation would need to match that functionality.

The basic example below shows a pop-up that is displayed when the user activates the “save” button. A message is displayed in the dialog box, and the web page is disabled until the user selects “OK”.

{::nomarkdown}
<%= sample_start %>

<button id="alertconfirm" type="button">Save</button>

<script>
	document.getElementById('alertconfirm').addEventListener('click', function(){ alert('Thanks for submitting the form!'); });
</script>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}
~~~html
<button type="button" id="alertconfirm">Save</button>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','JavaScript') %>
{:/nomarkdown}
~~~js
document.getElementById('alertconfirm')
	.addEventListener('click', function() {
		/* [… code saving data …] */
		alert('Thanks for submitting the form!');
	});
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Listing errors
{:.ex}

When errors occur, it is helpful to list them at the top of the page, before the form. The list should have a distinctive heading, so that it is easy to identify. Each error listed should:

- Reference the label of the corresponding form control, to help the user recognize the control;
- Provide a concise description of the error in a way that is easy to understand by everyone;
- Provide an indication of how to correct mistakes, and remind users of any format requirements;
- Include an in-page link to the corresponding form control to make access easier for the users.

{::nomarkdown}
<%= sample_start %>

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

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<h4>There are 2 errors in this form</h4>
<ul>
	<li>
		<a href="#firstname">
			The First name field is empty; it is a required field and must be filled in.
		</a>
	</li>
	<li>
		<a href="#birthdate">
			The Date field is in the wrong format; it should be similar to 17/09/2013 (use a / to separate day, month, and year).
		</a>
	</li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## In-line feedback
{:.newap#inline}

In addition to overall feedback, more specific feedback at or near the form controls can better help users to use your form. This includes feedback to indicate correctly entered input as well as errors in the input.

Typically a combination of messages and visual cues are used to provide in-line feedback. For example, valid input can be indicated by a checkmark (✓) and green border, while errors can be indicated by an error icon (like a red ✗ or an exclamation mark) and red border. Error messages should also provide guidance on how to correct mistakes. The concepts for such error messages are essentially the same as for providing [instructions](instructions.html).

### After submit
{:.ap}

The example below shows a form with two input fields. The first input field, “username”, is used to register a username. The second input field, “expiry date”, is used to provide a date for when the registration expires.

When the form is submitted, the entries are checked and feedback is provided to the user. Appropriate success and error messages are displayed for each input field to help the user complete the form.

{::nomarkdown}
<%= sample_start %>

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
<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~css
.error   { color: #900; }
.success { color: #007a00; }
.error   input { border: 3px solid #900; }
.success input { border: 3px solid #007a00; }
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### During typing
{:.ap.newex}

Instant feedback during typing can be extremely helpful. For example, checking the availability of a username in the previous example required the user to resubmit the form -- possibly multiple times. Providing feedback while users are typing allows them to experiment more easily until they find a suitable username. However, client-side scripting is required for such functionality, and not all situations may be suitable for such feedback.

#### Binary messages
{:.ex.inap}

In the following example, the availability of a username is checked instantly while the user is typing text in the input field. Corresponding success and error messages are displayed without the user needing to submit the form.

{::nomarkdown}
<%= sample_start %>

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

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<div>
	<label for="username">Username:</label>
	<input type="text" name="username" id="username">
	<span id="username_feedback" aria-live="polite"></span>
</div>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

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
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `polite`. The contents of this so called “live region” are conveyed to screen readers and other assistive technology. The value “polite” de-emphasizes the importance of the message and does not cause screen readers to interrupt their current tasks to read aloud this message. Thus the message is only read once when the user stops typing rather than on every keystroke that the user makes.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

#### Scaled feedback
{:.ex.inap}

The example below illustrates a range of possible types of feedback in addition to success and error messages. In the example, the strength of the password is checked as it is typed by the user. The feedback indicates a scale of how strong the password is. The feedback is indicated using several cues, including color coding, a barometer, and label “Weak”, “Okay”, and “Strong”, as well as the time that would be needed to crack the password.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

The password is shown in plain text for demonstration purposes.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= sample_start %>

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
(function(){var a;a=function(){var a,b;b=document.createElement("script");b.src="../../javascripts/zxcvbn.js";b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("script")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);

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

<%= sample_end %>
{:/nomarkdown}

[See commented example code in full.](examples/password.html)

### On focus change
{:.ap}

In some cases it does not make sense to check input as it is being typed by the user, because it would display error messages most of the time. This is often the case when data needs to be entered in a particular format, such as a date.

In the example below, the user is expected to provide an expiry date. The input is checked when the user leaves the form field. That is, when the focus is removed from the form field and the “blur” event is triggered for the element, for example, when the tab key is used to move to the focus to the submit button.

{::nomarkdown}
<%= sample_start %>

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
<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}
~~~html
<div>
	<label for="expire"><strong></strong> Expiry date:</label>
	<input type="text" name="expire" id="expire" value="03.2015" aria-describedby="expDesc3">
	<span id="expDesc3" aria-live="assertive"></span>
</div>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `assertive`. The contents of this so called “live region” is conveyed to screen readers and other assistive technology. The value “assertive” emphasizes the importance of the message and causes screen readers to interrupt their current tasks to read aloud this message. Thus the message is read aloud before the next element that received the focus is announced to the user.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

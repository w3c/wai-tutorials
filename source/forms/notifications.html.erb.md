---
title: User Notifications
status: draft
order: 6
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
---

Notifications provide feedback to users about their form entries. In-line notifications provide feedback at or near the controls, typically input fields, while status notifications are typically provided after forms are submitted.

Notifications need to be concise and clear. In particular error messages need to be easy to understand, and to provide simple indications of how to correct mistakes. Success messages are also important to confirm task completion.

## Status Notifications
{:#heading-title}

When a form is submitted, it is important that the user is notified whether the submission was successful or if errors occurred. Several approaches can be used, and in many cases several can be combined.

###  Using the Main Heading
{:.ap}

A common way to provide feedback is by using the main heading of a page, usually the most prominently displayed `<h1>`or `<h2>` element. This technique is particularly useful when forms are processed by the server, but can also be useful for client-side scripting.

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

**Note:** The main purpose of the main heading is still to identify the web page that the user is currently on. When the user is sent back to the same web page because of an error, then a simple indication using the word “error” and possibly the number of errors is sufficient.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

###  Using the Page Title
{:.ap}

In addition to using the main heading it is often useful to also use the `<title>` element to indicate successes and error. In particular screen reader users will get immediate feedback when the web page is loaded, especially when the main heading is placed deeper within the content; for example, after the navigation menus.

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

###  Using Pop-Up Dialogs
{:.ap}

When the web page is not reloaded or when its content does not change after submission, then using pop-up dialogs may be useful to notify users of the status. For example, "save" or "send" functions might not change the content of the web page, but user still need to be notified about the status. Sometimes simple cues, such as disabling the "save" button, might be sufficient. In other situations more prominent messaging may be necessary. This includes messages indicating that the system is busy "loading", "saving", or carrying out another function.

{::nomarkdown}
<%= code_start('','Temporary Pop-Up') %>
{:/nomarkdown}
~~~html
@@@ pop-up using CSS that disappears after a few seconds (eg. wikimedia)
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** @@@ comment about pros and cons of this approach

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','Permanent Pop-Up') %>
{:/nomarkdown}
~~~html
@@@ pop-up box that the user needs to actively confirm
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** @@@ comment about pros and cons of this approach

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','Busy Indicator') %>
{:/nomarkdown}
~~~html
@@@ spinner or other indicator for "loading", "busy", etc
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** @@@ considersations specific to this approach

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

### Listing of Errors
{:.ap}

When errors occur, it is useful list them at the top of the page, before the form. The list should have a distinctive heading, so that it is easy to identify. Each error listed should:
* Reference the label of the corresponding form control, to help the user recognize the control;
* Provide a concise description of the error in a way that is easy to understand by everyone;
* Provide an indication of how to correct mistakes, and remind users of any format requirements;
* Include an in-page link to the corresponding form control to facilitate access for the users.

{::nomarkdown}
<%= sample_start %>

<h4 role="presentation">2 Errors in this form</h4>
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
<h4>2 Errors in this form</h4>
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
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## In-line Messages
{:#inline}

In-line messages are basically special [instructions](instructions.html), so the same concepts apply. They should be clearly distinct from “regular” instructions, if used for successful or erroneous fields. For error messages that can be the word “Error:” in front of the regular label text.

The visual formatting of the field might change as well. An erroneous field could be styled with a wide red border, a verified field could be styled with a green border and a checkmark to show that it’s valid.

Such messages can be presented to the user in a static way after submitting the form, like in the first example below, or dynamically while filling out the form.

Disrupting users with messages is appropriate if it is hard for them to determine if their input is correct or not, for example when entering a username. In those situations, the probability of submitting a form over and over again just to almost certainly receive error messages is frustrating for all users.

Dynamic in-line messages are similar to the messages browsers will give to users if the standard HTML5 form elements are used to [validate user input](validation.html).

### Static in-line message
{:.ex}

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
    color: #090;
  }
  .success input {
    border: 3px solid #090;
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
    console.log(exp);
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
.success { color: #090; }
.error   input { border: 3px solid #900; }
.success input { border: 3px solid #090; }
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Dynamic in-line message as soon as the user leaves a form field
{:.ex}

For form input that can be validated on the client side, like format information, it makes sense to give the user feedback as soon as they leave the form field. The following form fields will be evaluated as soon as the focus leaves the field (“blur”), that is when the user tabs to the next field or clicks somewhere else on the page. In addition to the visual changes, an ARIA live region (`aria-live`) is added to the instruction to inform users of assistive technologies. The `aria-live` value is `assertive` to make sure that screen readers don’t read the label of the next form field instead.

{::nomarkdown}
<%= sample_start %>

<style>
  #ex4 div {margin-bottom:.75em;}
</style>

<form method="post" action="#" id="ex4">
  <div>
    <label for="username5"><strong></strong> Username:</label>
    <input type="text" name="username" id="username5" value="spaceteddy13" aria-describedby="userDesc3">
    <span id="userDesc3" aria-live="assertive"></span>
  </div>
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
    console.log('ohai' + this.id);
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
        console.log(this);
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
  <label for="username"><strong></strong> Username:</label>
  <input type="text" name="username" id="username" value="spaceteddy13" aria-describedby="userDesc3">
  <span id="userDesc3" aria-live="assertive"></span>
</div>
<div>
  <label for="expire"><strong></strong> Expiry date:</label>
  <input type="text" name="expire" id="expire" value="03.2015" aria-describedby="expDesc3">
  <span id="expDesc3" aria-live="assertive"></span>
</div>
~~~
{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Dynamic in-line message while filling out the form
{:.ex}

#### Simple messages

In this example, the notification is done visually as well the live region immediately while typing the text. The error or success message is read by screen readers as the `aria-live` attribute is used with the `polite` value. This makes sure that the notification is read out as soon as the user stops typing instead of every time the user types a character.

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

#### Complex messages

Such immediate and dynamic feedback can also be helpful if more complex feedback is given back to the user. The following example tells users how good the password is by displaying a visual meter and the time needed to crack the password.

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
        msg.innerHTML = '<strong>Weak:</strong> Cracked instantly';
      } else if (pw.score < 3) {
        meter.style.backgroundColor = 'red';
        msg.innerHTML = '<strong>Weak:</strong> Cracked in ' + pw.crack_time_display;
      } else if (pw.score == 3) {
        meter.style.backgroundColor = 'yellow';
        msg.innerHTML = '<strong>Okay:</strong> Cracked in ' + pw.crack_time_display;
      } else {
        meter.style.backgroundColor = 'green';
        msg.innerHTML = '<strong>Strong:</strong> Cracked in ' + pw.crack_time_display;
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

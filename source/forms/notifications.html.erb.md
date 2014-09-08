---
title: User Notifications
status: editors-draft
order: 6
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
---

Notifications provide feedback to users to indicate that the form sent with or without errors. Users might then be required to fill out parts of the form again. Error messages should be clear and easy to understand, and provide guidance to help users correct mistakes.

There are four approaches on how to inform the user about the state of the form, that can work together to provide users the best notifications according to their needs. Notifications can be provided …

1. … through the main [heading and/or page title](#heading-title).
2. … through a [list of erroneous fields](#error-list).
3. … trough [in-line messages](#inline) near the affected form fields.
4. … [instantly](#instant) while entering data into a field.

##  Notifications in the Main Heading and/or Page Title
{:#heading-title}

It is important that the user gets notified of errors or success as soon as possible after he sent the form. A common place to put this information is the main page [heading](/fundamentals/headings.html), usually a `<h1>`or `<h2>` element.

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

As shown above, the message doesn’t necessarily include the word “success” to be clear. The word “error” however is probably most easy to recognize for users.

Screen Reader users need to navigate to the main heading first, which means there is no immediate notification for them. A way around this is to place the number of errors or the message of success in the HTML `<title>` element:

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

## List of Erroneous Fields
{:#error-list}

If errors occur, it is useful to provide a list of error messages on the top of the page, before the form. The list should have a distinctive heading, so they are easy to locate for visual and screen reader users, and provide in-page links to the form with the invalid input.

To help users most efficiently, such notifications should …

* … use the _same wording_ that is used on the label of the erroneous form field as this helps to identify the exact form element that contains the error.
* … describe the _reason for the error message_, for example mention that the field was required or that the format was wrong.
* … tell _how to fix_ the error and may use a more elaborate example, using the additional space.

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

In-line messages are basically special [instructions](instructions.html), so the same concepts apply. In addition, they should be clearly distinct from “regular” instructions, if used for successful or erroneous fields. For error messages that can be the word “Error:” in front of the regular label text.

The visual formatting of the field might change as well. An erroneous field could be styled with a wide red border, a verified field could be styled with a green border and a checkmark to show that it’s valid.

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

<form method="post" action="#" id="ex3">
  <div class="success">
    <label for="username"><strong>OK:</strong> Username:</label>
      <input type="text" name="username" id="username4" value="spaceteddy13" aria-describedby="userDesc2">
      <span id="userDesc2">✓</span>
  </div>
  <div class="error">
    <label for="expire4"><strong>Error:</strong> Expiry date:</label>
      <input type="text" name="expire" id="expire4" value="03.2015" aria-describedby="expDesc2">
      <span id="expDesc2">Use the format MM/YYYY.</span>
  </div>
</form>

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

## Instant Notifications
{:#instant}

Sometimes it makes sense to inform the user instantly if the form can be submitted. This especially affects forms where the user is unable to determine if a certain value is correct, like for usernames or passwords. In those situations, the probability of submitting a form over and over again just to almost certainly receive error messages is frustrating for all users.

### Immediately inform user about the validation of the input
{:.ex}

If users are required to choose a username, they don't know if the username is already taken or not. It makes sense to inform the user immediately about the availability of the username while entering a username. In this example, the notification is done visually (by displaying a checkmark) as well with an ARIA live region: The text is read by screen readers as the `aria-live` attribute is used. The `polite` value makes sure that the notification is read out as soon as the user stops typing.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <label for="ex1_username">Username:</label>
  <input type="text" name="username" id="ex1_username">
  <span id="username_feedback" aria-live="polite"></span>
</form>

<script>
  document.getElementById('ex1_username').addEventListener('keyup', function(){
    var taken_usernames = ['timbl', 'spacebear13', 'Obelisks', 'Phoenix', 'Imari', 'Henry', 'Zeki', 'Rome', 'Min', ' Kelly', 'Brynn'];
    var val = this.value;
    var feedback = document.getElementById('username_feedback');
    feedback.textContent = '';
    if (val !== "") {
      if (taken_usernames.indexOf(val.trim())+1) {
        feedback.innerHTML = '&cross; Sorry, this username is taken.';
        feedback.style.color = "#f00";
      } else {
        feedback.innerHTML = '&check; You can use this username.';
        feedback.style.color = "#0a0";
      }
    }
  });
</script>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<label for="username">Username:</label>
<input type="text" name="username" id="username">
<span id="username_feedback" aria-live="polite"></span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
  document.getElementById('ex1_username').addEventListener('keyup',
    function(){
      var taken_usernames = ['Obelisks', 'Phoenix', 'Imari',
                             'Henry', 'Zeki', 'Rome', 'Min',
                             'Kelly', 'Brynn'];
      var val = this.value;
      var feedback = document.getElementById('username_feedback');
      feedback.textContent = '';
      if (val !== "") {
        if (taken_usernames.indexOf(val.trim())+1) {
          feedback.innerHTML = '&cross; Sorry, this username is taken.';
          feedback.style.color = "#f00";
        } else {
          feedback.innerHTML = '&check; You can use this username.';
          feedback.style.color = "#0a0";
        }
      }
  });
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Immediately display the quality of the input to the user
{:.ex}

To help the user to chose a good passwords, strength meters make it visually clear how good the entered password is while typing it in. Additionally to having a visual meter, displaying the text and having it read to the screen reader by using an WAI-ARIA live region has advantages: It is easier to understand what the meter is for, and it can give additional information. In the example, the time to crack the password is displayed to give the user a more human way to understand how strong the password is.

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

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<label for="password">Password:</label>
<input type="text" name="password" id="password">
<span id="passwordmeter"><span></span></span>
<span id="passwordmessage" aria-live="polite"></span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
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
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
document.getElementById('password').addEventListener('keyup',
    function(){
      // (1) Select the password meter and message elements.
      var meter = document.querySelector('#passwordmeter span');
      var msg = document.getElementById('passwordmessage');

      // (2) Calculate the strength of the password.
      var pw = get_pw_strength(this.value);

      // (3) Set the with of the password meter to a multiple of the score.
      meter.style.width = (pw.score+1) * 25 + 'px';

      /* (4) Set the color of the meter to
             a) red if the score < 3
             b) yellow if the score = 3
             c) green if the score = 4

         (5) Change the text of the passwort message element accordingly. */
      if (pw.score == 0) {
        meter.style.backgroundColor = 'red';
        msg.innerHTML = '<strong>Weak:</strong> Cracked instantly';
      } else if (pw.score < 3) {
        meter.style.backgroundColor = 'red';
        msg.innerHTML = '<strong>Weak:</strong> Cracked in ' + pw.crack_time;
      } else if (pw.score == 3) {
        meter.style.backgroundColor = 'yellow';
        msg.innerHTML = '<strong>Okay:</strong> Cracked in ' + pw.crack_time;
      } else {
        meter.style.backgroundColor = 'green';
        msg.innerHTML = '<strong>Strong:</strong> Cracked in ' + pw.crack_time;
      }

      /* (6) If the input is empty, there is no text output
             and the color of the meter is set to gray. */
      if (this.value == "") {
        meter.style.backgroundColor = 'gray';
        msg.innerHTML = ' ';
      }
  });
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

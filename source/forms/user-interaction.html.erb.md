---
title: User Interaction
status: editors-draft
order: 6
wcag_success_criteria:
  - 3.3.1
  - 3.3.3
wcag_techniques:
  - G83
  - G85
---

Provide feedback to users to indicate errors, successes, and so that they can undo or confirm changes. Make error messages clear and easy to understand, and provide guidance to help users correct mistakes.

## Providing Notifications

Notifications need to be perceivable to the user, both visually and programmatically. They should be visible near the form field and equipped with WAI-ARIA roles that make sure they are discovered by people using assistive technologies.

### Immediately inform user about the validation of the input
{:.ex}

A user can be informed immediately about the availability of a user name while entering a user name into the form field. The JavaScript checks if the user name is in a list of taken user names and updates the notification element with a text. This text is also read by screen readers by using the `aria-live` attribute which transforms the element to a “live region”. The `polite` value makes sure that the notification is put out as soon as the user stops typing.

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
        feedback.innerHTML = '&cross; Sorry, this user name is taken.';
        feedback.style.color = "#f00";
      } else {
        feedback.innerHTML = '&check; You can use this user name.';
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

### Immediately display dynamically created output to the user
{:.ex}

Sometimes, user input results in an output on the page immediately, the result of a calculation, for example. In this case, again, an ARIA live region helps to convey the result to users of assistive technologies. Additionally we use a “yellow fade” effect that draws the attention of visual users to the result and helps to discover it easily.

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
  <fieldset>
    <legend>Additon</legend>
    <label for="num1">First Number:</label>
    <input type="number" value="0" name="num1" id="num1">
    <label for="num2">+ Second Number:</label>
    <input type="number" value="0" name="num2" id="num2">
    <span id="result" aria-atomic="true" aria-live="polite"></span>
  </fieldset>
</form>

<style>
  #result {
    transition: background-color linear .5s;
  }
</style>

<script>
function calculate(num1, num2) {
  var res = document.getElementById('result');
  res.style.backgroundColor = 'rgba(255,255,0,1)';
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (!(isNaN(num1) || isNaN(num2))) {
    var add = num1 + num2;
    var output = 'Result: ' + num1 + ' + ' + num2 + ' = <strong>' + add + '</strong>';
    res.innerHTML = output;
  } else {
    res.innerHTML = '';
  }
  setTimeout('document.getElementById("result").style.backgroundColor = "rgba(255,255,0,0)";', 1000)
}

document.getElementById('num1').addEventListener('keyup',
    function(){
     calculate(this.value, document.getElementById('num2').value);
  });

document.getElementById('num2').addEventListener('keyup',
    function(){
     calculate(document.getElementById('num1').value, this.value);
  });

document.getElementById('num1').addEventListener('change',
    function(){
     calculate(this.value, document.getElementById('num2').value);
  });

document.getElementById('num2').addEventListener('change',
    function(){
     calculate(document.getElementById('num1').value, this.value);
  });

</script>

<%= sample_end %>
{:/nomarkdown}

The HTML is pretty straight forward, just two labeled number inputs and a span which is going to contain the result. Note that we use `aria-atomic` (set to `true`) to make sure the complete result is read. This is necessary as we change the HTML in JavaScript and some assistive technologies have problems picking the change up otherwise.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<label for="num1">First Number:</label>
<input type="number" value="0" name="num1" id="num1">
<label for="num2">+ Second Number:</label>
<input type="number" value="0" name="num2" id="num2">
<span id="result" aria-atomic="true" aria-live="polite"></span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

CSS-wise, a transition of the background color is added to the element. This way we can leave it to the browser to calculate all the color steps in-between, which is a huge performance win.

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
#result { transition: background-color linear .5s; }
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

The JavaScript is pretty straight forward. On `keyup` and `change` events, the function calculate is called. The `change` event is necessary in this example as the buttons that come with the `number` input type can be operated with the mouse.

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
function calculate(num1, num2) {
  // (1) Select result element.
  var res = document.getElementById('result');

  // (2) Set the background color of the result element to yellow (full opacity).
  res.style.backgroundColor = 'rgba(255,255,0,1)';

  // (3) Convert strings to floats.
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // (4) Only calculate if both input values are numbers.
  if (!(isNaN(num1) || isNaN(num2))) {

    // (5) Add.
    var add = num1 + num2;

    // (6) Attach result to the result element.
    res.innerHTML = 'Result: ' + num1 + ' + ' + num2
                  + ' = <strong>' + add + '</strong>';
  } else {

    // (7) if one if the input values is not a number, clear the result
    res.innerHTML = '';
  }

  // (8) After one second, set the background color of the element
  //     to transparent yellow.
  //     The CSS transition will fade the background color out nicely.
  setTimeout('document.getElementById("result").style.backgroundColor = "rgba(255,255,0,0)";', 1000)
}

document.getElementById('num1').addEventListener('keyup',
    function(){
     calculate(this.value, document.getElementById('num2').value);
  });

document.getElementById('num2').addEventListener('keyup',
    function(){
     calculate(document.getElementById('num1').value, this.value);
  });

document.getElementById('num1').addEventListener('change',
    function(){
     calculate(this.value, document.getElementById('num2').value);
  });

document.getElementById('num2').addEventListener('change',
    function(){
     calculate(document.getElementById('num1').value, this.value);
  });
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Indicate that data is loading
{:.ex}

If an action does not result in immediate feedback because data has to be calculated or loaded from the server using AJAX, it is necessary to notify the user that data is loading, and when it finished loading. In the following example, a click on the button simulates loading data from the server.

{::nomarkdown}
<%= sample_start %>

<button id="loadthis" aria-live="polite">Load</button>

<style>
  @keyframes fade {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @-webkit-keyframes fade {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  .indicator>span {
    -webkit-animation: fade 2s infinite;
    -webkit-animation-direction: alternate;
    animation: fade 2s infinite;
    animation-direction: alternate;
    opacity:0;
  }
  .indicator>span:nth-child(2) {
    -webkit-animation-delay: .66s;
    animation-delay: .66s;
  }
  .indicator>span:nth-child(3) {
    -webkit-animation-delay: 1.32s;
    animation-delay: 1.32s;
  }
</style>

<script>
document.getElementById('loadthis').addEventListener('click',
    function(){
      this.innerHTML = 'Loading <span class="indicator"><span>.</span><span>.</span><span>.</span></span>';
      setTimeout('document.getElementById("loadthis").innerHTML = "Loaded";', 6000)
  });
</script>

<%= sample_end %>
{:/nomarkdown}

A CSS animation is used to animate the dots in the text “Loading...” while the data is loading. That text replaces the text “Load” that is on the button before it is clicked. After a while the loading text itself is replaced by the text “Loaded”. Again a live region is used to announce the changes to assistive technologies.

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<button id="loadthis" aria-live="polite">Load</button>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
@keyframes fade {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
.indicator>span {
  animation: fade 2s infinite;
  animation-direction: alternate;
  opacity:0;
}
.indicator>span:nth-child(2) {
  animation-delay: .66s;
}
.indicator>span:nth-child(3) {
  animation-delay: 1.32s;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
document.getElementById('loadthis').addEventListener('click',
    function(){
      this.innerHTML =
        'Loading <span class="indicator"><span>.</span><span>.</span><span>.</span></span>';

      /* Load data here. To simulate this, the text is just changed
         to “Loaded” after six seconds. */
      setTimeout('document.getElementById("loadthis").innerHTML = "Loaded";', 6000)
  });
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Error Messages
{:.newex}

Error messages should be concise yet descriptive and easy to understand to help users to enter the correct data.

### Notification of errors in the page title
{:.ex}

If the submission had errors that weren’t caught by [validating input](validation.html) before sending the form, the title of the page can be a good indicator for the user if there are errors. By prefixing the title with the error count, it is immediately clear for the user that there still is something to do. The user should also be notified in the title if the form was [successfully submitted](#success-messages).

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<title>3 Errors — Spacebear Onlineshop</title>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### Error messages on the top of the page
{:.ex}

A set of error messages on the top of the page should have a distinct heading, so they are easy to locate for visual and screen reader users. Each error should use an in-page link to the respective field. Each error message should consist of the following parts helpful to the user:

* Use the _same wording_ that is used on the label in the error message. This helps users to identify the exact form element that contains the error.
* Describe the _cause of error_, for example mention that the field was required or that the format was wrong.
* Tell the user _how to fix_ the error, consider using a more elaborate example as there is now more space available than in the labels of the form.

{::nomarkdown}
<%= sample_start %>

<h4>2 Errors in this form</h4>
<ul>
  <li>
    <a href="#firstname">
      The First name field is empty, it is a required field and must be filled in.
    </a>
  </li>
  <li>
    <a href="birthdate">
      The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year)
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
    <a href="birthdate">
      The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year).
    </a>
  </li>
</ul>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

### In-line error messages
{:.ex}

For in-line error messages, the same techniques as for [instructions](instructions.html) apply. In addition, the in-line error messages should be clearly distinct from other instructions. Additionally, the label can be prefixed with a symbol or the bold word “Error”. Additionally the color of the label and instruction text should be changed to draw more attention to the field. The field itself can get a wider and also colored border.

{::nomarkdown}
<%= sample_start %>

<style>
  .error {
    color: #900;
  }
  .error input {
    border: 3px solid #900;
  }
</style>

<form method="post" action="#" id="ex3">
  <div class="error">
    <label for="expire4"><strong>Error:</strong> Expiry date:</label>
      <input type="text" name="expire" id="expire4" value="03.2015" aria-describedby="expDesc2">
      <span id="expDesc2">Use the format MM/YYYY.</span>
  </div>
</form>

<%= sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<label for="expire">Expiry date:</label>
<span>
  <input type="text" name="expire" id="expire" aria-describedby="expDesc">
  <span id="expDesc">MM/YYYY</span>
</span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Success Messages
{:.newex}

Assuming it is unambiguous that the input is correct, inform users about successful input

- in **one field**, the [user can be notified immediately, as shown above](#immediately-inform-user-about-the-validation-of-the-input).
- in **all the fields**, an until-then disabled submit button can be enabled.

Regardless if you use one of the above techniques to notify the user, the user also needs a success message after he has sent the form. To make sure the success message is easily findable, it is useful to have the success message in both, the title and the main page heading.

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<title>Order successful — Spacebear Onlineshop</title>
(…)
<h1>Thank you for submitting your order.</h1>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Allow users to undo reversible changes (@@section needs editing)
{:.newex}

If a change by the user can be easily reversible or canceled, it is useful to provide this functionality. For example:

* A Content Management System (CMS) has the ability to delete unwanted comments. Instead of deleting them right away, they get stored in a ”trash” folder and can be easily restored.

* A web email application allows users to “undo” sending of an email for a few seconds. This is useful if the user forget to attach a file or sent the email to the wrong recipient.

* An online shopping website lets users cancel purchases up to 24 hours after the order is submitted. The website explains their policy, and includes a summary of the policy on the purchase receipt emailed to the user. After 24 hours, the purchase will be shipped to the user and can no longer be canceled.

## Allow users to confirm irreversible changes (@@section needs editing)
{:.newex}

Instant and irreversible transactions, especially if carried out on a single page, can provide users with a checkbox or a confirmation dialog box to confirm that they want the requested action to take place.

* In a Content Management System (CMS) comments can be deleted (for good) from the trash folder. When the user clicks on the “Empty trash”, a confirmation dialog box shows up asking the user “Are you sure to delete 42 comments?” The action is only carried out if the user choses the “OK” button.

* A bank won’t be able to revert a currency exchange transaction as charges or changes in exchange rates would burden a cost to the user. After collecting the account and amount data, and before the submit button, a checkbox with a label like “I have checked that the amount I wish to transfer is correct” is placed. The form should then fail to validate unless the checkbox is checked.

* The checkout page on a shopping website includes a form that collects order, shipping and billing information. After submitting the form, the user is taken to another page where the information they have submitted is summarized for review. Below the summary, The user must activate a “complete order” button on the review page to complete the transaction.

## Allow users to disable or extend time limits (@@section needs editing)
{:.newex}

If possible, forms should not be subject to a time limit to allow users to complete the form in their own pace. If a time limit needs to be in place (for example, for security reasons), the user should have the possibility to turn it off, adjust it, or extend it. This does not apply if the time limit is due to a live event (like an auction or a game) or if the time to complete the form is essential for a valid submission.



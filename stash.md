# Examples that don’t have a place to live anymore…

## Immediately display dynamically created output to the user
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

## Indicate that data is loading
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

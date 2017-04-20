---
title: Page Structure Code Example
nav_title: Example
order: 6
type: tips
editors:
- Eric Eggert: "https://www.w3.org/People/yatil/"
- Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
- The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---
{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
…
<body>
  <header>
    <h1>Space Teddy Inc.</h1>
  </header>
  <nav aria-labelledby="mainnavheader">
    <h2 id="mainnavheader">Navigation Menu</h2>
    …
  </nav>
  <main>
    <article>
      <h2>An inside look at the new Space Teddy 6</h2>
      <nav aria-labelledby="tocheader">
        <h3 id="tocheader">Table of Contents</h3>
        …
      </nav>
      <p>…</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>…</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
      </ul>
      <h3>Cotton Fur</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>…</p>
      <aside aria-labelledby="relatedheader">
        <h3 id="relatedheader">Related Articles</h3>
        <ul>
          <li><a href="#">Related Article Title 1</a></li>
          <li><a href="#">Related Article Title 2</a></li>
          <li><a href="#">Related Article Title 3</a></li>
        </ul>
      </aside>
    </article>
    <aside aria-labelledby="latestheader">
      <h3 id="latestheader">Latest Articles</h3>
      <ul>
        <li><a href="#">Latest Article Title 1</a></li>
        <li><a href="#">Latest Article Title 2</a></li>
        <li><a href="#">Latest Article Title 3</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>© SpaceTeddy Inc.</p>
  </footer>
</body>
…
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

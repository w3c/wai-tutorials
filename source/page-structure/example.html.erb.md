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
    <h1>Name of the website</h1>
  </header>
  <nav aria-label="Main Navigation">
    …
  </nav>
  <nav aria-label="Secondary Navigation">
    …
  </nav>
  <main>
    <article>
      <h1>Article headline</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
      <h2>Sub headline</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>
  </main>
  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#">Article Title 1</a></li>
      <li><a href="#">Article Title 2</a></li>
      <li><a href="#">Article Title 3</a></li>
    </ul>
  </aside>
  <footer>
    <p>© ACME.inc</p>
  </footer>
</body>
…
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

---
title: "Tables with One Header"
nav_title: One Header
permalink: /tutorials/tables/one-header/
ref: /tutorials/tables/one-header/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/tables/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/tables/one-header.md'
metafooter: true

resource:
  ref: /tutorials/tables/
navigation:
  previous: /tutorials/tables/
  next: /tutorials/tables/two-headers/

wcag_techniques:
- H51
- H63

editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

{% include image.html src="tables/img-simple.png" class="small right" %} This page covers tables that have one simple header for rows <strong>or</strong> one simple header for columns. Data in such tables is descriptive on its own and unambiguous.

If the table content is ambiguous or has both column and row headings, the `scope` attribute should be used to avoid confusion. For more guidance on such tables, see [tables with two headers](/tutorials/two-headers/).

## Table with header cells in the top row only
{:.ex}

The following table of concerts has the cells in the first row marked up using the `<th>` element. This is only acceptable because it is such a small table and the data itself is distinctly different in each column so that the relationship between the header and data cells is evident.

{::nomarkdown}
{% include box.html type="start" title="Note" class="simple notes" %}
{:/}

{% include ednote.html note="Remove Note: Use of Scope for Simple Data Tables Is Unnecessary" issue="576" repo="wai-tutorials" status="open" %}

Some screen readers will read “Date – Event – Venue” in the “Venue” cell because the direction of the `<th>` elements is ambiguous.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

<p><strong>Concerts:</strong></p>
<table>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Venue</th>
  </tr>
  <tr>
    <td>12 February</td>
    <td>Waltz with Strauss</td>
    <td>Main Hall</td>
  </tr>
  <tr>
    <td>24 March</td>
    <td>The Obelisks</td>
    <td>West Wing</td>
  </tr>
  <tr>
    <td>14 April</td>
    <td>The What</td>
    <td>Main Hall</td>
  </tr>
</table>

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<table>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Venue</th>
  </tr>
  <tr>
    <td>12 February</td>
    <td>Waltz with Strauss</td>
    <td>Main Hall</td>
  </tr>
  […]
</table>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Table with header cells in the first column only
{:.ex}

In the following table, the data from the previous example is laid out with the header column on the left. Also in this situation, it is only acceptable to use this code because it is such a small and straightforward table. The next pages in this tutorial explain how to code more complex tables.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}

<p><strong>Concerts:</strong></p>
<table>
  <tr>
    <th>Date</th>
    <td>12 February</td>
    <td>24 March</td>
    <td>14 April</td>
  </tr>
  <tr>
    <th>Event</th>
    <td>Waltz with Strauss</td>
    <td>The Obelisks</td>
    <td>The What</td>
  </tr>
  <tr>
    <th>Venue</th>
    <td>Main Hall</td>
    <td>West Wing</td>
    <td>Main Hall</td>
  </tr>
</table>

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<table>
  <tr>
    <th>Date</th>
    <td>12 February</td>
    <td>24 March</td>
    <td>14 April</td>
  </tr>
  <tr>
    <th>Event</th>
    <td>Waltz with Strauss</td>
    <td>The Obelisks</td>
    <td>The What</td>
  </tr>
  <tr>
    <th>Venue</th>
    <td>Main Hall</td>
    <td>West Wing</td>
    <td>Main Hall</td>
  </tr>
</table>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Table with ambiguous data
{:.ex}

{% include ednote.html note="Remove Example: Use of Scope for Simple Data Tables Is Unnecessary" issue="576" repo="wai-tutorials" status="open" %}

In this example, the data (first name, last name, and city) can’t be distinguished from one another without knowing which header each corresponds to. The `scope` attribute with the value `col` defines the direction of the header cells and associates them with the corresponding data cells. The `scope` attribute is also needed for larger tables with one header row or column.

{::nomarkdown}
{% include box.html type="start" title="Example" class="example" %}
<table>
  <caption>Teddy bear collectors:</caption>
  <tr>
    <th scope="col">Last Name</th>
    <th scope="col">First Name</th>
    <th scope="col">City</th>
  </tr>
  <tr>
    <td>Phoenix</td>
    <td>Imari</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Zeki</td>
    <td>Rome</td>
    <td>Min</td>
  </tr>
  <tr>
    <td>Apirka</td>
    <td>Kelly</td>
    <td>Brynn</td>
  </tr>
</table>

{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Code Snippet" class="example" %}
{:/}

~~~ html
<table>
  <caption>Teddy bear collectors:</caption>
  <tr>
    <th scope="col">Last Name</th>
    <th scope="col">First Name</th>
    <th scope="col">City</th>
  </tr>
  <tr>
    <td>Phoenix</td>
    <td>Imari</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Zeki</td>
    <td>Rome</td>
    <td>Min</td>
  </tr>
  <tr>
    <td>Apirka</td>
    <td>Kelly</td>
    <td>Brynn</td>
  </tr>
</table>
~~~

{::nomarkdown}
{% include box.html type="end" %}
{:/}

---
title: Functional Images
technologies: HTML5
order: 4
wcag_techniques:
  - H37
  - H36
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zahra: "http://w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Functional images are used to initiate actions rather than to convey information. They are used in buttons, links, and other interactive elements. The text alternative for such images should convey the action that will be initiated (the purpose of the image), rather than a description of the image. For instance, as shown in examples below, the text alternative should be “print this page” rather than “(image of a) printer”, “search” rather than “magnifying lens” or “Example.com homepage” rather than “Example.com logo”.

Missing or empty `alt` values create significant problems for screen reader users because functional images are essential to the functionality of the content. Screen readers will typically announce the image file name, the image URL, or the URL of the link destination, which is unlikely to help users understand the action that will be initated by the image.

## Image used alone as a linked logo
{:.ex}

The following image is the only content of a link that leads to the W3C homepage. It has the text alternative “W3C home” to indicate where the link will take the user. The next example, [“Logo image within link text”](#logo-image-within-link-text), discusses what to do when there is other text in the link to identify the destination:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[![W3C home](w3c.png)](http://www.w3.org/)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="http://www.w3.org/">
  <img src="w3c.png" alt="W3C home">
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** In this situation the logo is also an image of the text “W3C”. But in this case its primary function is to link to the home page, so the word “home” was added to the text alternative.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Logo image within link text
{:.ex}

In this example, the W3C logo is used to supplement text within a link that leads to the W3C home page. The image does not represent different functionality or convey other information than that already provided by in the link text, so a null (empty) value is applied, (`alt=""`), to avoid redundancy and repetition. In effect, the image is a decorative adjunct or visual cue to the link text:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[![](../img/w3c.png){:style="vertical-align: middle; margin-right: 1em;"}W3C Home](http://www.w3.org/)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="http://www.w3.org/">
  <img src="w3c.png" alt=""> W3C Home
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Icon image conveying information within link text
{:.ex}

In this example, the image follows text within a link to inform users that the link will open in a new window. It has the text alternative “new window” to reflect the representation on the image:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[W3C Homepage ![new window](new-window.png)](http://www.w3.org/)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="http://www.w3.org/" target="_blank">
  W3C Homepage <img src="new-window.png" alt="new window">
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** This technique is often used with icons to indicate different file formats such as AVI, ODF, MP3, PDF, Word, and many more. In this case the text alternative should equally convey the format represented by each icon, see [Informative Images](informative.html#images-conveying-file-format).

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Stand-alone icon image that has a function
{:.ex}

The following image is an icon representing a printer to denote print functionality. It has the text alternative “Print this page” because its purpose is to activate the print dialog when it is selected:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

[![Print this page](print.png)](javascript:print())

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<a href="javascript:print()">
  <img src="print.png" alt="Print this page">
</a>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Image used in a button
{:.ex}

The following image is used to give the button a distinct style. In this case it is the button to initiate a search request and is an icon representing a magnifying lens. The text alternative for the image is “search” to convey the purpose of the button:

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

<form action="#" method="post">
  <p>
    <label for="search" style="vertical-align: middle; display:inline-block;">Search:</label>
    <input name="search" id="search" type="text" style="vertical-align: middle; display:inline-block;">
    <input name="submit" src="../../img/searchbutton.png" alt="Search" type="image" style="vertical-align: middle; display:inline-block;">
  </p>
</form>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<input type="image" src="searchbutton.png" alt="Search">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

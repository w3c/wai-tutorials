---
title: Search
status: editors-draft
order: 6
---

## Search Form
{:.risky}

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

This could move to the forms tutorial.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}

Use the WAI-ARIA `role` attribute with the value `search` to identify the main search function of the website that typically appears in the header of all web pages. This is not intended for identifying other search funcationality that only appears on individual web pages, such as searching for an entry in a database.

The element with the `search` role should include the input field as well as the search button and other search options. The example below uses the `search` role on a `<div>` element.

{::nomarkdown}
<%= sample_start %>

<form action="#search">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit" style="float:none;">Search</button>
  </div>
</form>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<form action="…">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit">Search</button>
  </div>
</form>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Search Results

{::nomarkdown}
<%= editors_note_start %>
{:/nomarkdown}

To be added.

{::nomarkdown}
<%= editors_note_end %>
{:/nomarkdown}
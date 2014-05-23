---
title: Tables Concepts
tutorial_title: Tables
wcag_success_criteria: 
  - 1.3.1
status: draft
order: 1
topic_order: 2
type: intro
---

Data tables are used to organize data in grids. They need special HTML markup that indicates the difference between header and data cells, and also ties the two together. This tutorial shows you how to apply appropriate structural markup to tables. 

It includes the following pages:

-   **[Simple tables![ typically have one header row and/or one header column](img-simple.png)](simple.html):** For simple tables, mark up header cells with `<th>` elements.

-   **[Irregular tables![ have some kind of heading cell or row that is expected at a different location](img-irreg.png)](irregular.html):**  For tables where identifying header cells programmatically is ambiguous, markup header cells with the `scope` attribute.

-   **[Multi-level tables![ have multiple header cells per data cell, most of the time header cells have to be associated explicitly to the table cell](img-multi.png)](multi-level.html):**  For multi-level tables where a data cell is related to more than one header cell, markup each header cell with an `id` and each data cell with a `headers` attribute that lists all relevant header cell `id` values.

-   **[Caption & Summary](caption-summary.html):** Most tables benefit from a header-like caption to identify the overall topic of a table, and a summary to provide orientation or navigation hints in complex tables.
{:.withicons.nobullets}


{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Notes:** This tutorial applies to tables used to display data in a grid. It doesn’t apply to layout tables. Tables shouldn’t be used for layout purposes. Instead, use Cascading Style Sheets (CSS) for visual presentation.

Structural coding can also be used to represent data in different ways, for example, by larger or different colored text or backgrounds, Braille, speech, and symbols.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

Some document formats other than HTML, such as PDF, may provide similar mechanisms to markup table structures. Most word processing applications however do not provide mechanisms to markup tables. Tables markup is also often lost when converting from one format to another, though some programs may provide functionality to assist converting table markup.

## Why is this important?

Tables without structural markup to differentiate between header and data cells, and to define the relationship between, them create accessibility barriers. Visual clues only are not sufficient to create an accessible table. With structural markup, headers and data cells can be programmatically determined by software, which means that:

-   **People using screen readers** can have the row and column headers read aloud as they navigate through the table. Screen readers speak one cell at a time and reference the associated header cells, so the user never loses context.

-   **People using custom stylesheets** can have header cells more prominently styled for easy recognition when there is a difference between the  elements used for header and data cells. People may also use stylesheets to present the information to read the data cells as lists below their corresponding headers rather than in a matrix.

{::nomarkdown}<div class="todo">{:/nomarkdown}

## How to make tables accessible 

Accessible tables have their header cells marked up with `<th>` and their data cells marked up with `<td>`. For more complex tables, explicit associations may be needed using `scope` or `id` and `headers` attributes, so that they can be interpreted by assistive technologies.

Many web authoring tools and content management systems (CMS) provide functions to define header cells during table creation without having to manually edit the code.

{::nomarkdown}</div>{:/nomarkdown}

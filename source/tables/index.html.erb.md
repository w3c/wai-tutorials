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

Data tables are used to organize data in grids. Accessible tables need HTML markup that indicates the difference between header cells and data cells, and that indicates the relationship between them.

To make any table accessible, header cells must be marked up with `<th>` and data cells marked up with `<td>`. For more complex tables, explicit associations may be needed using `scope` or `id` and `headers` attributes.

This tutorial shows you how to apply appropriate structural markup to tables. It includes the following pages:

-   **[Basic tables![ typically have one header row and/or one header column](img-simple.png)](basic.html):** For simple tables with content that is easy to distinguish, mark up header cells with `<th>` elements.

-   **[Multi-Directional Tables![ have usually have headers for rows and columns](img-multidir.png)](irregular.html):**  For tables with headings in two directions, define their direction by setting the `scope` attribute to `col` or `row`.

-   **[Irregular tables![](img-irreg.png)](irregular.html):**  For tables where header cells span multiple rows or columns, define column and row groups and set the range of header cells using the `colgroup` and `rowgroup` values of the `scope` attribute.

-   **[Multi-level tables![ have multiple header cells associated per data cell](img-multi.png)](multi-level.html):**  For tables that are so complex that header cells can’t be accociated in a strictly horizontal or vertical way, use `headers` and `id` attributes to explicitly associate header and data cells.

-   **[Caption & Summary![](img-caption.png)](caption-summary.html):** A caption identifies the overall topic of a table and is useful in most situations. A summary provides orientation or navigation hints in complex tables.
{:.withicons.nobullets}

Some document formats other than HTML, such as PDF, may provide similar mechanisms to markup table structures. Word processing applications may also provide mechanisms to markup tables. Tables markup is also often lost when converting from one format to another, though some programs may provide functionality to assist converting table markup.

Many web authoring tools and content management systems (CMS) provide functions to define header cells during table creation without having to manually edit the code.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Notes:** This tutorial provides guidance for creating tables used to display data in a grid. This guidance is not applicable to layout tables. As a general rule, tables aren't meant to be used for layout purposes. Instead, best practice is to use Cascading Style Sheets (CSS) for visual presentation.

Structural coding can also be used to represent data in different ways, for example, by larger or different colored text or backgrounds, Braille, speech, and symbols.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Why is this important?

Tables without structural markup to differentiate between header and data cells, and to define the relationship between them, create accessibility barriers. Visual clues only are not sufficient to create an accessible table. With structural markup, headers and data cells can be programmatically determined by software, which means that:

-   **People using screen readers** can have the row and column headers read aloud as they navigate through the table. Screen readers speak one cell at a time and reference the associated header cells, so the reader doesn’t lose context.

-   **People using custom stylesheets** can have header cells more prominently styled for easer recognition when there is a difference between the  elements used for header and data cells. People may also use stylesheets to present the information to read the data cells as lists below their corresponding headers rather than in a matrix.

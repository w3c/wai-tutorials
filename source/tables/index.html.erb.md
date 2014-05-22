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

Data tables need special HTML markup that shows the difference between header and data cells and also ties the two together. This tutorial shows you how to apply appropriate structural markup to tables. It includes the following pages:

-   **[Simple tables![ typically have one header row and/or one header column](img-simple.png)](simple.html):** Identify the topic of a row or column and denote those header cells with `<th>` elements in the markup.

-   **[Complex Irregular tables![ have some kind of heading cell or row that is expected at a different location](img-irreg.png)](irregular.html):**  For tables where identifying header cells programmatically is not easy, they can be defined using the `scope` attribute.

-   **[Complex Multi-level tables![ have multiple header cells per data cell, most of the time header cells have to be associated explicitly to the table cell.](img-multi.png)](multi-level.html):** If the table structure is so complex that a data cell is required to reference several levels of header cells, each header cell is assigned an `id` and each data cell a `headers` attribute that lists all relevant header cell `id` values.

-   **[Captions & Summary](caption-summary.html):** Most tables benefit from the use of a caption to describe the overall topic of a table, and summaries to provide orientation or navigation hints in complex tables.
{:.withicons.nobullets}


{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The techniques in this tutorial should be applied only when a table is being used to display _data_ in a grid; these techniques don’t apply to layout tables. You shouldn’t use tables for layout purposes. Instead, use Cascading Style Sheets (CSS) for visual presentation.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}


## Why is this important?

Some people can determine the header cells of tabular data from the visual cues. However, screen reader users and people with user stylesheets might not get those visual cues. Therefore, header cells should be explicitly identified in the markup so that they are clear to everyone. Correctly marked up tables mean that:

-   **People using a screen reader** can have the row and column headers read aloud as they navigate through the table. Screen readers speak one cell at a time and can only distinguish header cells from data cells if they are properly marked up.

-   **People using user stylesheets** can style the header cells and data cells differently to make them easier to distinguish.

## How to make tables accessible

Accessible tables have their header cells marked up with `<th>` and their data cells marked up with `<td>`. For more complex tables, explicit associations may be needed using `scope` or `id` and `headers` attributes, so that they can be interpreted by assistive technologies.

The structural coding can also be used to represent data in different ways, for example, by larger or different colored text or backgrounds, Braille, speech, and symbols. Many web authoring tools and content management systems (CMS) provide functions to define header cells during table creation without having to manually edit the code.

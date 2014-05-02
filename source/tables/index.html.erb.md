---
title: Tables Concepts
tutorial_title: Tables
status: editors-draft
order: 1
topic_order: 2
type: intro
---

Data tables need structural markup to distinguish between header and data cells and define the relationships between them. This tutorial shows you how to apply appropriate structural markup to tables. It includes the following pages:

-   **[Simple tables](simple.html):** Identify the topic of a row or column and denote those header cells with `<th>` elements in the markup.

-   **[Ambiguous tables](ambiguous.html):** For tables where identifying header cells programmatically is not easy, they can be defined using the `scope` attribute.

-   **[Multi-level tables](multi-level.html):** If the table structure is so complex that a data cell needs to reference several levels of header cells, each header cell is assigned an `id` and each data cell a `headers` attribute that lists all relevant header cell `id` values.

-   **[Captions & Summary](captions-summary.html):** Most tables benefit from the use of a caption to describe the overall topic of a table, and summaries to provide orientation or navigation hints in complex tables.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The techniques in this tutorial should be applied only when a table is being used to display _data_ in a grid and don’t apply to presentational (layout) tables. You shouldn’t use tables for layout purposes. Instead, use Cascading Style Sheets (CSS) for visual presentation.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}


## Why is this important?

Some people can determine the header cells of tabular data from the visual cues. However, screen reader users and people with user stylesheets might not get those visual cues. Therefore, header cells need to be explicitly identified in the markup so that they are clear to everyone. Correctly marked up tables mean that:

-   **People using a screen reader** can have the row and column headers read aloud as they navigate through the table. Screen readers speak one cell at a time and can only distinguish header cells from data cells if they are properly marked up.

-   **People using personal stylesheets** can have header cells more prominently styled for easy recognition when there is a difference between the elements used for header and data cells.

## How to make tables accessible

Accessible tables have their header cells marked up using `<th>` and their data cells marked up using `<td>`. For more complex tables directional and explicit associations may be needed, using `scope`, `id` and `headers` attributes so that they can be interpreted by assistive technologies.

The structural coding can also be used to represent data in different ways, for example by larger or differently colored text or backgrounds, Braille, speech and symbols. Many web authoring tools and content management systems (CMS) provide functions to define header cells during table creation without having to manually edit the code.


## Relationship to WCAG 2.0

Accessible tables are required by the following WCAG 2.0 Success Criterion:

-   [1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)


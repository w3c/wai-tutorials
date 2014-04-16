---
title: Tables Concepts
tutorial_title: Tables
status: editors-draft
order: 1
topic_order: 2
type: intro
---

All data tables need to have structural markup (coding): elements and attributes that distinguish between header and data cells and define the relationships between them. This tutorial shows you how to apply appropriate structural table markup. It includes the following pages:

-   **[Simple tables](simple.html):** Identify the topic of a row or column and denote those header cells with `<th>`{:.elem} elements in the markup. Also use the `<caption>`{:.elem} element to describe the overall topic of a table.

-   **[Ambiguous tables](ambiguous.html):** For tables where identifying header cells programmatically is not that easy, they can be defined using the `scope`{:.attrib} attribute.

-   **[Multi-level tables](multi-level.html):** If the table structure is so complex that a data cell needs to reference several levels of header cells, each header cell is assigned an `id`{:.attrib} and each data cell a `headers`{:.attrib} attribute that lists all relevant header cell `id`{:.attrib} values.

-   **[Summarize tables](summary.html):** To provide orientation or navigation hints in complex tables, there are different techniques to provide a brief summary for the table’s layout.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**Note:** The techniques in this tutorial should be applied only when a table is being used to display _data_ in a grid and don’t apply to presentational (layout) tables. You shouldn’t use tables for layout purposes.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}


## Why is this important?

When data is presented in tabular format, the position and styling of header cells may be sufficient to let most people know that these contain key information that gives meaning to related data cell content. However, the published style is not available to people who need to use personal stylesheets, and the position alone can't help screen readers identify the cells that contain the header information. The header cells need to be explicitly identified so that correct associations can be made to data cells. Correctly marked up tables mean that:

-   **People using a screen reader** can have the row and column headers read aloud as they navigate through the table. Screen readers speak one cell at a time and can only distinguish header cells from data cells if they are properly marked up.

-   **People using personal stylesheets** can have header cells more prominently styled for easy recognition when there is a difference between the elements used for header and data cells.

## How to make tables accessible

Accessible tables have their header cells marked up using `<th>`{:.elem} and their data cells marked up using `<td>`{:.elem}. For more complex tables directional and explicit associations may be needed, using `scope`{:.attrib}, `id`{:.attrib} and `headers`{:.attrib} attributes so that they can be interpreted by assistive
technologies. The structural coding can also be used to represent data in different ways, for example by larger or differently colored text or backgrounds, Braille, speech and symbols. Many web authoring tools and content management systems (CMS) provide functions to define header cells during table creation without having to manually edit the code.

Other formats available on the Web such as ODF, Word and PDF have similar mechanisms to mark-up table structure.

## Relationship to WCAG 2.0

Accessible tables are required by the following WCAG 2.0 Success
Criterion:

-   [1.3.1 Info and
    Relationships](http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic):
    Information, structure, and relationships conveyed through
    presentation can be programmatically determined or are available in
    text. (Level A)

    More background in: [Understanding Success Criterion
    1.3.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html).


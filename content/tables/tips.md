---
title: "Tips and Tricks"
permalink: /tutorials/tables/tips/
ref: /tutorials/tables/tips/
lang: en
last_updated: 2019-07-27
description:
image: /content-images/wai-tutorials/tables/social.png
github:
  repository: w3c/wai-tutorials
  path: 'content/tables/tips.md'
metafooter: true

resource:
  ref: /tutorials/tables/
navigation:
  previous: /tutorials/tables/caption-summary/


editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - Anna Belle Leiserson
  - the Web Content Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/GL/">WCAG WG</a>)
  - the Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

---

-   **Keep it simple:** Complex tables are more work for content creators as well as being harder to interpret for users. It’s usually better to [break up complex tables into simple individual tables](/tutorials/tables/multi-level/#split-up-multi-level-tables), each containing the data for one sub-topic.

-   **Table separation:** If several tables follow one another, don’t use a single table and put in an additional row of `<th>` cells. Screen readers may read aloud all `<th>` cells in a column, resulting in confusion. [Start a new `<table>` when the topic changes.](/tutorials/tables/multi-level/#split-up-multi-level-tables)

-   **Data separation:**

    - Make sure that each separate piece of data has its cell. Don’t use headers in one column and all data in a second column, as this will make it almost impossible for screen readers to work out the relationships between data across columns.

      {% include image.html src="tables/headers-in-one-column-all-data-in-second.png" alt="On the left, a table with two columns is shown. The header for the first column reads “Shirt” and the header for the second column reads “Sizes and amount in stock”. The second row reads “Blue” in the first column and “S: 6; M: 13, XL: 10”. In the second row, Sizes for a “Red” shirt are “M: 2; L: 9; XL: 10; XXL: 1”. On the right, the table is split up in “Shirt”, “Size” and “Stock” columns." class="" %}

    - Don't use line breaks (`<br>` elements) to create table rows as the data in the pseudo-rows may no longer align correctly when text is resized.

      {% include image.html src="tables/table-text-resize.png" alt="On the top there is a table where the content and header cells are not marked up correctly. Line breaks are used to make items look like they align correctly. When resizing the text (bottom) the items don’t line up anymore" class="" %}

-   **Alignment:** Align text to the left and numeric data to the right (in left-to-right languages), so that people using larger text sizes or smaller screens will be able to find it. This is especially useful if a cell spans more than one column. It’s  helpful to give column headers the same alignment as the data in the cells below.

-   **Styling header cells:** `<th>` elements are used for header cells, using `<td>` elements with different styling will make tables less accessible if not inaccessible. It is also helpful to differentiate `<th>` and `<td>` cells visually. For example, on these tutorial pages, header cells have a dark gray background.

-   **Zebra tables:** Styling even and odd rows in a different way can be helpful to people who have reading difficulties or who enlarge text. It acts as a visual guide. Highlighting the cell (and row/column) on mouseover and keyboard focus to support people to see where they are. Make sure that the contrast ratio between the text and background is good for both headers and data cells. [Here is how to check the contrast ratio.](https://www.w3.org/WAI/eval/preliminary#contrast)

-   **Flexibility:** Due to the layout model of tables, they sometimes don’t fit on small screens small or are too wide if the user is zooming in. In such circumstances, it’s important that the table isn’t cut off (for example by using `overflow: hidden` in CSS). In these tutorials `overflow: scroll` is applied to an element wrapping the table so users can scroll through the table horizontally but there are much more options to display table in such circumstances.

-   **Tables for Layout:** Tables should not be used for layout purposes. Use Cascading Style Sheets (CSS) for layout. If there are already layout tables present, don’t use structural elements (like `<th>` or `<caption>`) and attributes discussed in this tutorial, and do add `role="presentation"` to the `<table>` element.

## Other W3C Resources

-   [Content can be presented in different ways](https://www.w3.org/WAI/intro/people-use-web/principles#adaptable) section of Accessibility Principles in How People with Disabilities Use the Web.

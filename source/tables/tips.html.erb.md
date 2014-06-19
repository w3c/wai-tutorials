---
title: Tips and Frequently Asked Questions (FAQ)
nav_title: Tips and FAQ
status: draft
order: 7
type: tips
---

## Tips

-   **Keep it simple:** Complex tables are more work for you as well as being more confusing for users. It’s usually better to [break up multi-level tables into simple tables](multi-level.html#split-up-multi-level-tables), each containing the data for one sub-topic.

-   **Table separation:** If several tables follow one another, don’t use a single table and put in an additional row of `<th>` cells. Screen readers may read aloud all `<th>` cells in a column, resulting in confusion. [Start a new `<table>` when the topic changes.](multi-level.html#split-up-multi-level-tables)

-   **Data separation:** 

    1.  Make sure that each separate piece of data has its own cell. Don’t use headers in one column and all data in a second column, because it will make it nearly impossible for screen readers to work out the relationships between data across columns.
    
        ![On the left, a table with two columns is shown. The header for the first column reads “Shirt” and the header for the second column reads “Sizes and amount in stock”. The second row reads “Blue” in the first column and “S: 6; M: 13, XL: 10”. In the second row, Sizes for a “Red” shirt are “M: 2; L: 9; XL: 10; XXL: 1”. On the right the table is split up in “Shirt”, “Size” and “Stock” columns.](headers-in-one-column-all-data-in-second.png)

    2. Don‘t use line breaks (`<br>`) to create table rows because the data in the pseudo-rows may no longer align correctly when text is resized.
    
         ![On the top there is a table where the content and header cells are not marked up correctly. Line breaks are usedto make items look like they align correctly. When resizing the text (bottom) the items don’t line up anymore](table-text-resize.png)

-   **Alignment:** Align text to the left and numeric data to the right (in left-to-right languages), so that people using screen magnification, larger text sizes, or smaller screens will be able to find it, especially when a cell spans more than one column. It’s  helpful to give column headings the same alignment as the data in the cells below.

-   **Styling header cells:** You should use `<th>` elements for header cells, not a `<td>` with different styling. It is helpful to differentiate `<th>` and `<td>` cells visually. For example, on these tutorial pages header cells have a dark gray background.

-   **On mobile:** Due to the layout model of tables, they sometimes don’t fit on small screens. In such circumstances it’s important that the table isn’t cut of (for example by using `overflow: hidden` in CSS). By using `overflow: scroll` on a wrapper element, a table that is too wide won’t break the layout of the page while being completely accessible.

{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**A note on layout tables:** You shouldn’t use tables for layout purposes. Use Cascading Style Sheets (CSS) for layout. If you do use layout tables, don’t use any of the structural elements and attributes discussed in this tutorial, and do add `role="presentation"` to the `<table>` element.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Frequently Asked Questions

-   **I’ve used CSS to give a different background color for odd and even rows in my tables. Is this OK?**

    It certainly is. This can be a real help to people who have reading difficulties or who use screen magnification to enlarge text. It acts as a visual guide. You could even consider highlighting the cell (and row/column) on mouseover and keyboard focus to help people see where they are. Make sure that the contrast ratio between the text and background is good for both headers and data cells. [Here is how to check your contrast ratio.](http://www.w3.org/WAI/eval/preliminary#contrast)

-   **My site uses a table layout to position information on pages. A complete redesign using CSS layout is planned for next year. Is there something I can do right now to make the layout tables more accessible?**

    Yes there is. You can give the `<table>` element a WAI-ARIA `role` attribute of `presentation` (`role="presentation"`). This will hide the table markup from most screen readers and browsers that support WAI-ARIA.

## Other W3C Resources

-   [Content can be presented in different ways](http://www.w3.org/WAI/intro/people-use-web/principles#adaptable) secton of Accessibility Principles in How People with Disabilities Use the Web.

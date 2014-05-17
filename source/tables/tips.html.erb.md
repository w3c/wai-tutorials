---
title: Tips and Frequently Asked Questions (FAQ)
nav_title: Tips and FAQ
status: draft
order: 6
type: tips
---

## Tips

-   **Keep it simple:** Complex tables are more work for you as well as being more confusing for users. It’s usually better to [break up multi-level tables into simple tables](multi-level.html#split-up-multi-level-tables), each containing the data for one sub-topic.

-   **Table separation:** If several tables follow one another, don’t use a single table and put in an additional row of `<th>` cells. Screen readers may read aloud all `<th>` cells in a column, resulting in confusion. [Start a new `<table>` when the topic changes.](multi-level.html#split-up-multi-level-tables)

-   **Data separation:** 

    1.  Make sure that each separate piece of data has its own cell. Don’t use headers in one column and all data in a second column as it will make it impossible for screen readers to work out the relationships between data across columns.
    
        ![On the left, a table with two columns is shown. The header for the first column reads “Shirt” and the header for the second column reads “Sizes and amount in stock”. The second row reads “Blue” in the first column and “S: 6; M: 13, XL: 10”. In the second row, Sizes for a “Red” shirt are “M: 2; L: 9; XL: 10; XXL: 1”. On the right the table is split up in “Shirt”, “Size” and “Stock” columns.](headers-in-one-column-all-data-in-second.png)

    2. You should not use line breaks (`<br>`) to create table rows as the data in the pseudo-rows may no longer align correctly when resizing the text.
    
         ![On the top there is a table where the content and header cells are not marked up correctly. Line breaks are usedto make items look like they align correctly. When resizing the text (bottom) the items don’t like up anymore](table-text-resize.png)

-   **Alignment:** Align text to the left and financial data to the right, so that people using screen magnification, larger text sizes, or smaller screens will be able to find it, especially when a cell spans more than one column. It’s  helpful to give column headings the same alignment as the data in the cells below.

-   **Styling header cells:** You should use `<th>` elements for header cells, not a `<td>` with different styling. However it makes sense to distinguish `<th>` and `<td>` cells visually. For example, on these tutorial pages header cells have a dark gray background.


{::nomarkdown}
<%= notes_start %>
{:/nomarkdown}

**A note on layout tables:** You shouldn’t use tables for layout purposes. It’s much better to use Cascading Style Sheets (CSS) for layout. If you do use layout tables, don’t use any of the structural elements and attributes discussed in this tutorial, and do add `role="presentation"` to the `<table>` element.

{::nomarkdown}
<%= notes_end %>
{:/nomarkdown}

## Frequently Asked Questions

-   **My site uses a table layout to position information on pages. A complete redesign using CSS layout is planned for next year. Is there something I can do right now to make the layout tables more accessible?**

    Yes there is. You can give the `<table>` element a WAI-ARIA `role` attribute of `presentation` (`role="presentation"`). This will hide the table markup from most screen readers and browsers that support WAI-ARIA.

-   **I’ve used CSS to give a different background color for odd and even rows in my tables. Is this OK?**

    It certainly is. This can be a real help to people who have reading difficulties or who use screen magnification to enlarge text. It acts as a visual guide, as well as looking cool. You could even consider highlighting the cell (and row/column) on mouseover and keyboard focus to help people see where they are. Make sure that the contrast ratio (“color contrast”) is good for both color combinations though. [Here is how to check your contrast ratio.](http://www.w3.org/WAI/eval/preliminary#contrast)

## Other W3C Resources

-   Further background on [ensuring that information can be presented in different ways](http://www.w3.org/WAI/intro/people-use-web/principles#adaptable) in How People with Disabilities Use the Web.

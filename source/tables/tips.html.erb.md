---
title: Tips and Frequently Asked Questions (FAQ)
nav_title: Tips and FAQ
status: editors-draft
order: 6
type: tips
---

## Tips

-   **Keep it simple:** Complex tables are more work for you as well as being more confusing for users. It’s better to use multiple simple tables, each containing the data for one sub-topic.

-   **Data separation:** 

    1.  *Make sure that each separate piece of data has its own cell.* Don’t use headers in one column and all data in a second column as it will make it impossible for screen readers to work out the relationships between data across columns.
    
        ![On the left, a table with two columns is shown. The header for the first column reads “Shirt” and the header for the second column reads “Sizes and amount in stock”. The second row reads “Blue” in the first column and “S: 6; M: 13, XL: 10”. In the second row, Sizes for a “Red” shirt are “M: 2; L: 9; XL: 10; XXL: 1”. On the right the table is split up in “Shirt”, “Size” and “Stock” columns.](headers-in-one-column-all-data-in-second.png)

-   **Table separation:** If several tables follow one another, don’t use a single table and put in an additional row of `<th>` cells. Screen readers may read aloud all `<th>` cells in a column, resulting in confusion. Start a new `<table>` when the topic changes.

-   **Alignment:** Align text to the left and financial data to the right, so that people using screen magnification, larger text sizes or smaller screens will be able to find it. especially when a cell spans more than one column. It’s also helpful to give column headings the same alignment as the data in the cells below.

-   **Styling header cells:** Consider visually distinguishing the `<th>` cells to make them more obvious.

-   **Layout tables:** If you’re using a table for layout, rather than as a grid to display data with headers, don’t use any of the structural elements and attributes discussed in this tutorial. Using tables for layout is discouraged, it’s much better to use Cascading Style Sheets (CSS) for layout.


## Frequently Asked Questions

-   **My site uses a table layout for pages, a complete redesign using CSS layout is planned for next year, is there something I can do right now to make the layout tables more accessible?**

    Yes there is. You can give the `<table>` element a WAI-ARIA `role` attribute of `presentation` (`role`=`"presentation"`). This will hide it from most screen readers in most modern browsers.

-   **I’ve used CSS to give a different background color for odd and even rows in my tables, is this OK?**

    It certainly is, this can be a real help to people with reading difficulties or who use screen magnification to enlarge text. It acts as a visual guide, as well as  looking cool. You could even consider highlighting the cell (and row/column) on mouseover or keyboard focus to help people see where they are. Make sure that the color contrast is good for both color combinations though.

## Other W3C Resources

-   Further background on [ensuring that information can be presented in different ways](http://www.w3.org/WAI/intro/people-use-web/principles#adaptable) in How People with Disabilities Use the Web.

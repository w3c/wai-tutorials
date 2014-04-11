---
title: Ambiguous Tables
status: editors-draft
order: 3
---

Sometimes it is hard for assistive technology to determine which columns or row to associate with a specific header cell.

`Scope` is the attribute used to define the direction and range of data cells that are covered by a header cell. For example a header cell that spans three columns with the `scope` value “`colgroup`” associates the header with the data cells in all three columns. The `scope` attribute should be used for all `<th>` cells where either the direction or range of data cell coverage needs to be clearly associated.

Possible values for the `scope` attribute are “`row`”, “`col`”, “`rowgroup`” or “`colgroup`”.

## Table with header cells in one column only
{:.ex}

This example has `<th>` elements for all cells in the left column of a
table. The `scope` value “`row`” is used on each `<th>` cell to ensure
that it cannot be mistaken as a header for other cells in the same
column.

{::nomarkdown}<%= sample_start %>{:/nomarkdown}

<table>
  <caption>
    Capital cities
  </caption>
  <tr>
    <th scope="row">Belgium</th>
    <td>Brussels</td>
  </tr>
  <tr>
    <th scope="row">France</th>
    <td>Paris</td>
  </tr>
  <tr>
    <th scope="row">Holland</th>
    <td>Amsterdam</td>
  </tr>
  <tr>
    <th scope="row">Luxembourg</th>
    <td>Luxembourg</td>
  </tr>
  <tr>
    <th scope="row">Spain</th>
    <td>Madrid</td>
  </tr>
  <tr>
    <th scope="row">UK</th>
    <td>London</td>
  </tr>
</table>

{::nomarkdown}<%= sample_end %>{:/nomarkdown}

{::nomarkdown}<%= code_start %>{:/nomarkdown}

~~~ html
<table>
  <caption>Capital cities</caption>
  <tr>
    <th scope="row">Belgium</th> <td>Brussels</td>
  </tr>
  <tr>
    <th scope="row">France</th> <td>Paris</td>
  </tr>
  <tr>
    <th scope="row">Holland</th> <td>Amsterdam</td>
  </tr>
  […]
</table>
~~~

{::nomarkdown}<%= code_end %>{:/nomarkdown}

[Full code Example “Table with header cells in one column only”](examples/scope-simple.html)

## Table with an offset column of header cells
{:.ex}

In this table the row header cells are in the second column rather than the first. The `scope` values “`row`” and has been used on the `<th>` cells in the second column to ensure that data cells in the first column, as well as those in cells to the right of the headers are correctly associated.

{::nomarkdown}<%= sample_start %>{:/nomarkdown}

<table>
  <caption>
    Holidays taken in the last six months
  </caption >

  <thead>

  <tr>
    <th scope="col"><abbr title="Identification Number">ID</abbr></th>
    <th scope="col">Name</th>
    <th scope="col">Jul</th>
    <th scope="col">Aug</th>
    <th scope="col">Sept</th>
    <th scope="col">Oct</th>
    <th scope="col">Nov</th>
    <th scope="col">Dec</th>
  </tr>
  </thead>

  <tbody>
  <tr>
    <td>215</td>
    <th scope="row">Abel</th>
    <td>5</td>
    <td>2</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>3</td>
  </tr>

  <tr>
    <td>231</td>
    <th scope="row">Annette </th>
    <td>0</td>
    <td>5</td>
    <td>3</td>
    <td>0</td>
    <td>0</td>
    <td>6</td>
  </tr>

  <tr>
    <td>173</td>
    <th scope="row">Bernard</th>
    <td>2</td>
    <td>0</td>
    <td>0</td>
    <td>5</td>
    <td>0</td>
    <td>0</td>
  </tr>

  <tr>
    <td>141</td>
    <th scope="row">Gerald</th>
    <td>0</td>
    <td>10</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>8</td>
  </tr>

  <tr>
    <td>99</td>
    <th scope="row">Michael</th>
    <td>8</td>
    <td>8</td>
    <td>8</td>
    <td>8</td>
    <td>&nbsp;</td>
    <td>4</td>
  </tr>
  </tbody>
</table>

{::nomarkdown}<%= sample_end %>{:/nomarkdown}

{::nomarkdown}<%= code_start %>{:/nomarkdown}

~~~ html
[…]
<tr>
  <td>215</td>
  <th scope="row">Abel</th>
  <td>5</td>
  <td>2</td>
  <td>0</td>
  <td>0</td>
  <td>0</td>
  <td>3</td>
</tr>
[…]
~~~

{::nomarkdown}<%= code_end %>{:/nomarkdown}

[Full code for “Table with an offset column of header cells”](examples/scope-offset.html)

## Table with headers spanning multiple rows or columns
{:.ex}

In this example, some of the row header cells span two or more rows of
data cells and one column header spans three columns.

{::nomarkdown}<%= sample_start %>{:/nomarkdown}

<table>
  <caption>
    Poster availability
  </caption>
  <tr>
    <th scope="col">Poster name</th>
    <th scope="col">Color</th>
    <th colspan="3" scope="colgroup">Sizes available</th>
    </tr>
  <tr>
    <th rowspan="3" scope="rowgroup">Zodiac</th>
    <td>Full color</td>
    <td>A2</td>
    <td>A3</td>
    <td>A4</td>
  </tr>
  <tr>
    <td>Black and white</td>
    <td>A1</td>
    <td>A2</td>
    <td>A3</td>
  </tr>
  <tr>
    <td>Sepia</td>
    <td>A3</td>
    <td>A4</td>
    <td>A5</td>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup">Angels</th>
    <td>Black and white</td>
    <td>A1</td>
    <td>A3</td>
    <td>A4</td>
  </tr>
  <tr>
    <td>Sepia</td>
    <td>A2</td>
    <td>A3</td>
    <td>A5</td>
  </tr>
</table>

{::nomarkdown}<%= sample_end %>{:/nomarkdown}

{::nomarkdown}<%= code_start %>{:/nomarkdown}

~~~ html
[…]
<tr>
  <th scope="col">Poster name</th>
  <th scope="col">Color</th>
  <th colspan="3" scope="colgroup">Sizes available</th>
  </tr>
<tr>
  <th rowspan="3" scope="rowgroup">Zodiac</th>
  <td>Full color</td>
  <td>A2</td>
  <td>A3</td>
  <td>A4</td>
</tr>
[…]
~~~

{::nomarkdown}<%= code_end %>{:/nomarkdown}

[Full code for “Table with headers spanning multiple rows or columns”](examples/scope-multiple.html)

## Related WCAG2.0 Techniques

The following WCAG 2.0 technique was used in the examples above:

-   [H63: Using the scope attribute to associate header cells and data
    cells in data tables](http://www.w3.org/TR/WCAG20-TECHS/H63.html)

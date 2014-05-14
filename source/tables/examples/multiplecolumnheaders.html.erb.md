---
title: Complete “Table with multiple column headers in each column” Example
status: draft
source: ../multi-level.html#table-with-multiple-column-headers-in-each-column
layout: fullcode
---

~~~ html

<table>
  <caption>
    Supplier contacts
  </caption>
  <tr>
    <td id="blank">&nbsp;</td>
    <th id="co1" headers="blank">Example 1 Ltd</th>
    <th id="co2" headers="blank">Example 2 Co</th>
    <th id="co3" headers="blank">Example 3 Inc</th>
  </tr>
  <tr>
    <th id="c1" headers="blank">Contact</th>
    <td headers="co1 c1">James Phillips</td>
    <td headers="co2 c1">Marie Beauchamp</td>
    <td headers="co3 c1">Andrew Bruce</td>
  </tr>
  <tr>
    <th id="p1"  headers="blank">Position</th>
    <td headers="co1 p1">Sales Director</td>
    <td headers="co2 p1">Sales Manager</td>
    <td headers="co3 p1">Client Support Officer</td>
  </tr>
  <tr>
    <th id="e1"  headers="blank">Email</th>
    <td headers="co1 e1">jp@example1.co.uk</td>
    <td headers="co2 e1">marie@example2.co.fr</td>
    <td headers="co3 e1">sales@example3.com</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <th id="co4" headers="blank">Example 4 Ltd</th>
    <th id="co5" headers="blank">Example 5 Inc</th>
    <th id="co6" headers="blank">Example 6 Co</th>
  </tr>
  <tr>
    <th id="c2"  headers="blank">Contact</th>
    <td headers="co4 c2">Suzette Jones</td>
    <td headers="co5 c2">Alex Howe</td>
    <td headers="co6 c2">Axel Gaunt</td>
  </tr>
  <tr>
    <th id="p2" headers="blank">Position</th>
    <td headers="co4 p2">Sales Officer</td>
    <td headers="co5 p2">Sales Director</td>
    <td headers="co6 p2">Proprietor</td>
  </tr>
  <tr>
    <th id="e2" headers="blank">Email</th>
    <td headers="co4 e2">Suz@example4.co.uk</td>
    <td headers="co5 e2">howe@example5.com</td>
    <td headers="co6 e2">sales@example6.co.eu</td>
  </tr>
</table>

~~~

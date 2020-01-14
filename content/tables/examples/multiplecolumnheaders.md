---
title: Complete “Table with multiple column headers in each column” Example
lang: en
permalink: /tutorials/tables/examples/multiplecolumnheaders/
ref: /tutorials/tables/examples/multiplecolumnheaders/
---

[Back to page](/tutorials/tables/multi-level/#table-with-multiple-column-headers-in-each-column)

~~~ html

<table>
  <caption>
    Supplier contacts
  </caption>
  <tr>
    <th id="blank">&nbsp;</th>
    <th id="co1" headers="blank">Example 1 Ltd</th>
    <th id="co2" headers="blank">Example 2 Co</th>
  </tr>
  <tr>
    <th id="c1" headers="blank">Contact</th>
    <td headers="co1 c1">James Phillips</td>
    <td headers="co2 c1">Marie Beauchamp</td>
  </tr>
  <tr>
    <th id="p1"  headers="blank">Position</th>
    <td headers="co1 p1">Sales Director</td>
    <td headers="co2 p1">Sales Manager</td>
  </tr>
  <tr>
    <th id="e1"  headers="blank">Email</th>
    <td headers="co1 e1">jp@1ltd.example.com</td>
    <td headers="co2 e1">marie@2co.example.com</td>
  </tr>
  <tr>
    <th>&nbsp;</th>
    <th id="co3" headers="blank">Example 3 Ltd</th>
    <th id="co4" headers="blank">Example 4 Inc</th>
  </tr>
  <tr>
    <th id="c2"  headers="blank">Contact</th>
    <td headers="co3 c2">Suzette Jones</td>
    <td headers="co4 c2">Alex Howe</td>
  </tr>
  <tr>
    <th id="p2" headers="blank">Position</th>
    <td headers="co3 p2">Sales Officer</td>
    <td headers="co4 p2">Sales Director</td>
  </tr>
  <tr>
    <th id="e2" headers="blank">Email</th>
    <td headers="co3 e2">Suz@ltd3.example.com</td>
    <td headers="co4 e2">howe@4inc.example.com</td>
  </tr>
</table>

~~~

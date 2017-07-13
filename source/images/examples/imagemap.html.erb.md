---
title: Complete Image Maps Example
source: ../imagemap.html#an-organizational-chart-with-links-to-individual-pages
layout: fullcode
---

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

![Board of directors and related staff: ](orgchart.png){:usemap="#Map"}

<map name="Map" id="Map">
  <area shape="rect" coords="176,14,323,58" href="../res/beyond" alt="Davy Jones: Chairman">
  <area shape="rect" coords="81,75,226,114" href="../res/beyond" alt="Carole Brewster: Company Secretary">
  <area shape="rect" coords="6,138,155,182" href="../res/beyond" alt="Harry H Brown: Marketing Director (reports to chairman)">
  <area shape="rect" coords="175,138,323,182" href="../res/beyond" alt="Paula Holbein: Sales Director (reports to chairman)">
  <area shape="rect" coords="345,136,496,186" href="../res/beyond" alt="Hugh Howard: Finance Director (reports to chairman)">
</map>

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html

<img src="orgchart.png"
     alt="Board of directors and related staff: "
     usemap="#Map">

<map name="Map" id="Map">
	<area
		shape="rect"
		coords="176,14,323,58"
		href="…"
		alt="Davy Jones: Chairman"
	>
	<area shape="rect" coords="176,14,323,58" href="…"
    alt="Davy Jones: Chairman"
  >
  <area shape="rect" coords="81,75,226,114" href="…"
    alt="Carole Brewster: Company Secretary"
  >
  <area shape="rect" coords="6,138,155,182" href="…"
    alt="Harry H Brown: Marketing Director (reports to chairman)"
  >
  <area shape="rect" coords="175,138,323,182" href="…"
    alt="Paula Holbein: Sales Director (reports to chairman)"
  >
  <area shape="rect" coords="345,136,496,186" href="…"
    alt="Hugh Howard: Finance Director (reports to chairman)"
  >
</map>

~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}
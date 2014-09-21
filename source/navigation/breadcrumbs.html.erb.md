---
title: Breadcrumb Navigation
nav_title: Breadcrumbs
status: editors-draft
order: 5
---

Breadcrumbs help users to know where they are in the structure of the complete website. They are especially important on complex websites that have more than one or two levels of navigation.

Links in a breadcrumb navigation show a trail from the front page to the current page, with a link to every page on the way. Those links are usually separated by arrows. If images or icon fonts are used for the separators, they need to be used in an accessible way.

The title of the current page should be the last item of the breadcrumb navigation, but not linked.

As a navigational region, the `<nav>` element can be used, with an landmark role of `navigation` and a label “You are here:”.

{::nomarkdown}
<%= code_start() %>
{:/nomarkdown}

~~~ html
<nav class="breadcrumb" role="navigation" aria-label="You are here:">

    <a href="…">Home</a>

    &gt;

    <a href="…">SpaceBears</a>

    &gt;

    <span class="current">
        <span class="visuallyhidden">Current: </span>
        Cpt. Space 6 Plus
    </span>

</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}


---
title: Multiple Ways
status: editors-draft
order: 7
wcag_success_criteria:
  - 2.4.8
wcag_techniques:
  - G65
  - G161
  - G63
  - G127
---

Many users benefit from having different ways to access the content of a website. Some may be confused by following a long series of navigation steps to find a specific web page. Others might arrive on a page deep in the hierarchy and want to orient themselves on the website.

## Breadcrumbs

A breadcrumb navigation shows a trail from the front page of a website to the current page, with a link to every level of the hierarchy. They are especially important on complex websites that have more than one or two levels of navigation, and in cases where not every level of the navigation is immediately visible.

Links in breadcrumb navigations are usually separated by arrows. If images are used for those separators, provide an appropriate alternative text. The title of the current page should be the last item of the breadcrumb navigation.

Position the breadcrumb navigation near the top of the page, mark it up as a `nav` region and label it, for example “You are here:”. In the example below a visually hidden label is used to signal the current page to assistive technologies:

{::nomarkdown}
<%= code_start() %>
{:/nomarkdown}

~~~ html
<nav class="breadcrumb" aria-label="You are here:">

		<a href="…">Home</a>
		»
		<a href="…">SpaceBears</a>
		»
		<span class="current">
				<span class="visuallyhidden">Current: </span>
				Cpt. Space 6 Plus
		</span>

</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

Alternatively, you can use the WAI-ARIA attribute `aria-current="location"` to provide the information on the current location to assistive technologies:

{::nomarkdown}
<%= code_start() %>
{:/nomarkdown}

~~~ html
<nav class="breadcrumb" aria-label="You are here:">

		<a href="…">Home</a>
		»
		<a href="…">SpaceBears</a>
		»
		<a href="#main" aria-current="location">
				Cpt. Space 6 Plus
		</a>

</nav>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## Sitemap

A sitemap is a (nested) list of all pages of a website. It can help users understand what the site contains and how content is organized. It can also act as an alternative to complex menus.

If the site map is large, it might be useful to only show certain levels of the site only when the user demands them. A sitemap needs to stay updated when a page is added or deleted, should link to all sections of the site, and represent the organization of the website. See the [W3C <abbr title="Web Accessibility Initiative">WAI</abbr> sitemap](http://www.w3.org/WAI/sitemap.html) for an example.

## Search

In some use cases, searching is a very efficient way to access the content of a website. A search that spell-checks the entered terms and allows for synonyms further increases its usefulness for everyone, including people with disabilities.

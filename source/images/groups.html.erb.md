---
title: Groups of Images
status: draft
technologies: WAI-ARIA, HTML5
wcag_techniques: 
  - G196
  - H67
order: 7
editors:
  - Eric Eggert: "http://w3.org/People/yatil/"
  - Shadi Abou-Zhara: "http://w3.org/People/shadi/"
contributors:
  - Anna Bell Leiserson
  - the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>)
support: <strong>Developed with support</strong> from the <a href="http://www.w3.org/WAI/ACT/">WAI-ACT</a> project, co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme.
---

Depending on the information conveyed, images can be grouped in different ways. Groups of images that communicate one piece of information don’t need each image described individually if the information is outlined in one of the images. If each image in a collection of related images can be used elsewhere on its own, each image should be described individually as well as their relationship in the group.

## Multiple images conveying a single piece of information
{:.ex}

This group of five images combined show a product rating. There are five images (three filled stars, one half-filled star and one empty star) indicating the overall rating. The text alternative for the first image is “Rating: 3.5 out of 5 stars”. All other images have a null (empty) `alt` attribute (`alt=""`).

{::nomarkdown}
<%= sample_start %>
{:/nomarkdown}

Rating: ![3.5 out of 5 stars](star-full.png)![](../img/star-full.png)![](../img/star-full.png)![](star-half.png)![](star-empty.png)

{::nomarkdown}
<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
Rating:
<img src="star-full.jpg"  alt="3.5 out of 5 stars">
<img src="star-full.jpg"  alt="">
<img src="star-full.jpg"  alt="">
<img src="star-half.jpg"  alt="">
<img src="star-empty.jpg" alt="">
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

## A collection of images
{:.ex}

If a collection of images has a caption, a `<figure>` element can be used to group those images. A nested `<figcaption>` element contains the caption for the whole group. The WAI-ARIA attribute `role` with the value of `group` indicates grouping to assistive technologies. If individual images also have captions, additional `<figure>` elements with individual `<figcaption>`s can be nested.

The support for this particular WAI-ARIA attribute and value varies.

{::nomarkdown}
<%= sample_start %>

<figure role="group">
<figcaption>The castle through the ages: 1423, 1756, and 1966 respectively.</figcaption>


<figure role="group">
<img src="../../img/castle-etching.jpg" alt="The castle has one tower, and a tall wall around it.">
<figcaption>Charcoal on  wood. Anonymous, circa 1423.</figcaption>
</figure>
<figure role="group">
<img src="../../img/castle-painting.jpg" alt="The castle now has two towers and two walls.">
<figcaption>Oil-based paint on canvas. Eloisa Faulkner, 1756.</figcaption>
</figure>
<figure role="group">
<img src="../../img/castle-fluro.jpg"
alt="The castle lies in ruins, the original tower all that remains in one piece.">
<figcaption>Film photograph. <span lang="fr">Séraphin Médéric Mieusement</span>, 1936.</figcaption>
</figure>

</figure>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~ html
<figure role="group">
	<figcaption>
		The castle through the ages: 1423, 1756, and 1966 respectively.
	</figcaption>


	<figure role="group">
		<img src="castle-etching.jpg"
			alt="The castle has one tower, and a tall wall around it.">
		<figcaption>Charcoal on  wood. Anonymous, circa 1423.</figcaption>
	</figure>

	<figure role="group">
		<img src="castle-painting.jpg"
			alt="The castle now has two towers and two walls.">
		<figcaption>Oil-based paint on canvas. Eloisa Faulkner, 1756.</figcaption>
	</figure>

	<figure role="group">
		<img src="castle-fluro.jpg"
			alt="The castle lies in ruins, the original tower all that remains in one piece.">
		<figcaption>Film photograph. <span lang="fr">Séraphin Médéric Mieusement</span>, 1936.</figcaption>
	</figure>

</figure>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

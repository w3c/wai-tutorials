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

A grouped collection of images is sometimes used to convey a single piece of information. For instance, five star images are often used to denote a product rating. When images are a grouped collection, the text alternative for one of the images should convey the information for the entire group; all other images should have null (empty) `alt` attributes. For example, as shown in example 1 below, the descriptive text alternative on one image should be “3.5 out of 5 stars”, rather than “1 star”, “half star” or “unfilled star” on each image.

## Group of images for rating
{:.ex}

This group of five images shows a product rating. There are five images (three filled stars, one half-filled star and one empty star) indicating the overall rating. The text alternative for the first image is “Rating: 3.5 out of 5 stars”; all other images have a null (empty) `alt` attribute (`alt=""`).

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

## Captions for Image Groups
{:.ex}

If a group of images has a caption, a `figure` element can be used to group those images. The WAI-ARIA attribute `role` with the value of `group` to indicate grouping to assistive technology. If individual images also have captions, `figure` and `figcaption` elements can be nested.

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

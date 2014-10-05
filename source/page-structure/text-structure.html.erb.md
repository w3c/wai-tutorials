---
title: Text Structure
status: editors-draft
order: 4
wcag_techniques:
  - H40
  - G62
  - H48
  - H49
---
Beside [headings](headings.html), there are a lot of possibilities to structure texts so they can be consumed more easily.

## Paragraphs

The most simple form of text structuring is to write texts in paragraphs, adding rhythm and lightness to the page. The paragraph element (`<p>`) should be used, as it can be styled in a consistent way and also can be used to change the display by assistive technologies.

## Lists

There are ordered and unordered lists in HTML. Use ordered lists if the list needs to be read and done in order, for example how to prepare a meal. They are enumerated automatically by the browser. In an unordered list the order does not matter, for example on an ingredients list, the order buying the ingredients is not relevant. Every list item in unordered lists is marked with a bullet. Both types of lists provide orientation for the user.

List items can contain all kinds of different HTML elements, including paragraphs, headings, and form elements.

### Unordered list
{:.ex}

The unordered list consists of one `<ul>` element and multiple list item (`<li>`) elements:

{::nomarkdown}
<%=sample_start%>
<ul>
    <li>Corn</li>
    <li>Tomatoes</li>
    <li>Beans</li>
    <li>Onions</li>
    <li>Garlic</li>
    …
</ul>
<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<ul>
    <li>Corn</li>
    <li>Tomatoes</li>
    <li>Beans</li>
    <li>Onions</li>
    <li>Garlic</li>
    …
</ul>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

### Ordered list
{:.ex}

The unordered list consists of one `<ol>` element and multiple list item (`<li>`) elements:

{::nomarkdown}
<%=sample_start%>
<ol>
    <li>Cook beans for 45 minutes.</li>
    <li>Cut vegetables in small cubes.</li>
    <li>Sauté onions and garlic.</li>
    <li>Deglaze using the tomatoes.</li>
    <li>Add corn and beans.</li>
    …
</ol>
<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<ol>
    <li>Cook beans for 45 minutes.</li>
    <li>Cut vegetables in small cubes.</li>
    <li>Sauté onions and garlic.</li>
    <li>Deglaze using the tomatoes.</li>
    <li>Add corn and beans.</li>
    …
</ol>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

### Nested lists
{:.ex}

Every list can be nested into another list. In this example, the order of preparation is not important, but it should be done before using them. The information is still easy to digest, assistive technology can inform users about the number of steps easily.

{::nomarkdown}
<%=sample_start%>

<ol>
    <li>
        Prepare ingredients
        <ul>
            <li>Cook beans for 45 minutes.</li>
            <li>Cut vegetables in small cubes.</li>
        </ul>
    </li>
    <li>Sauté onions and garlic.</li>
    <li>Deglaze using the tomatoes.</li>
    <li>Add corn and beans.</li>
    …
</ol>

<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<ol>
    <li>
        Prepare ingredients
        <ul>
            <li>Cook beans for 45 minutes.</li>
            <li>Cut vegetables in small cubes.</li>
        </ul>
    </li>
    <li>Sauté onions and garlic.</li>
    <li>Deglaze using the tomatoes.</li>
    <li>Add corn and beans.</li>
    …
</ol>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

## Definition lists

To provide definitions for one word, definition lists (`<dl>`) can be used. They are different to (un)ordered lists as they don’t use `<li>` elements to mark up list items but `<dt>` (definition term) and `<dd>` (definition description) elements. Each term is put into one `<dt>` element, its definition goes in the `<dd>` element directly following it.

Definition lists are typically used in a glossary and are easiest to use when the definitions are put in alphabetical order.

{::nomarkdown}
<%=sample_start%>

<dl>
  <dt>Knot</dt>
  <dd>
    <p>A <em>knot</em> is a unit of speed equaling 1
      nautical mile per hour (1.15 miles per hour or 1.852
      kilometers per hour).</p>
  </dd>
  <dt>Port</dt>
  <dd>
    <p><em>Port</em> is the nautical term (used on
      boats and ships) that refers to the left side
      of a ship, as perceived by a person facing towards
      the bow (the front of the vessel).</p>
  </dd>
  <dt>Starboard</dt>
  <dd>
    <p><em>Starboard</em> is the nautical term (used
      on boats and ships) that refers to the right
      side of a vessel, as perceived by a person
      facing towards the bow (the front of the vessel).</p>
  </dd>
</dl>

<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<dl>
  <dt>Knot</dt>
  <dd>
    <p>A <em>knot</em> is a unit of speed equaling 1 nautical mile per hour (1.15 miles per hour or 1.852 kilometers per hour).</p>
  </dd>
  <dt>Port</dt>
  <dd>
    <p><em>Port</em> is the nautical term (used on boats and ships) that refers to the left side of a ship, as perceived by a person facing towards the bow (the front of the vessel).</p>
  </dd>
  <dt>Starboard</dt>
  <dd>
    <p><em>Starboard</em> is the nautical term (used on boats and ships) that refers to the right side of a vessel, as perceived by a person facing towards the bow (the front of the vessel).</p>
  </dd>
</dl>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

## Quotes
{:.newex}

Marking up quotes in text is often important to interpret text correctly.

### Blockquote
{:.ex}

For larger quotes, the `<blockquote>` element should be used. It can contain paragraphs, headings, and other text structure elements. The `<cite>` element can be used to refer to the source of the quote.

{::nomarkdown}
<%=sample_start%>

<p>The following is an excerpt from the <cite>The Story of my Life</cite> by Helen Keller</p>
<blockquote>
    <p>Even in the days before my teacher came, I used to feel along the square stiff boxwood hedges, and, guided by the sense of smell, would find the first violets and lilies. There, too, after a fit of temper, I went to find comfort and to hide my hot face  in the cool leaves and grass.</p>
</blockquote>

<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<p>The following is an excerpt from the <cite>The Story of my Life</cite> by Helen Keller</p>
<blockquote>
    <p>Even in the days before my teacher came, I used to feel along the square stiff boxwood hedges, and, guided by the sense of smell, would find the first violets and lilies. There, too, after a fit of temper, I went to find comfort and to hide my hot face  in the cool leaves and grass.</p>
</blockquote>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

### Inline quote
{:.ex}

For shorter inline quotes, the `<q>` element should be used.

{::nomarkdown}
<%=sample_start%>

<p>Helen Keller said, <q>Self-pity is our worst enemy and if we yield to it, we can never do anything good in the world.</q></p>

<%=sample_end%>
{:/nomarkdown}

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<p>Helen Keller said, <q>Self-pity is our worst enemy and if we yield to it, we can never do anything good in the world.</q></p>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

{::nomarkdown}
<%=notes_start%>
{:/nomarkdown}

**Note:** In older browsers adding quotes automatically wasn’t well supported. If such a browser is to be supported, consider adding quotes to the text manually and removing generated quotes in modern browsers:

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~css
q:before { content: ""; }
q:after { content: ""; }
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}

{::nomarkdown}
<%=notes_end%>
{:/nomarkdown}

## Figures

Figures are an addition to HTML5 that allows to add captions to lists, images, tables, and other content that is related to the main text but should be only referenced from there. For example an annual report could reference to table T3, which contains the sales volumes of a product. It allows users to dive deeper in the data or to skip it. The related content is wrapped in a `<figure>` element, a `<figcaption>` element is added that has the description of the content.

At the time of writing, WAI-ARIA attributes `role="group"` and `aria-labelledby` are used to provide the information to assistive technologies in a consistent way.

{::nomarkdown}
<%=code_start%>
{:/nomarkdown}

~~~html
<p>The sales volume of our SpaceBear product was steadily the first three quarters but had a huge success in quarter four with the introduction of SuperBear in time for the holiday season. See table T3 for details.</p>

<figure role="group" aria-labelledby="fig-t3-capt">
    <figcaption id="fig-t3-capt">T3: SpaceBear sales volume</figcaption>
    <table>
        …
    </table>
</figure>
~~~

{::nomarkdown}
<%=code_end%>
{:/nomarkdown}


## Images and illustrations

Using images and illustrations in the text can help guiding users, especially in long texts. They can also help to clarify the text for people with reading disabilities. If images or illustrations are used, proper alternative texts need to be added. See the [Images Tutorial](/images/index.html) for more information on images.

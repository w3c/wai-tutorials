---
title: "Risks: Why No ARIA is Better Than Bad ARIA"
nav_title: Risks
order: 6
status: editors-draft
editors:
  - Matt King (Facebook)
  - Judy Brewer: "https://www.w3.org/People/Brewer/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
  - The ARIA Working Group (<a href="https://www.w3.org/WAI/ARIA/">ARIA</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project, Task 2</a>.
---

## The ARIA Contract

1. ARIA provides a vocabulary for describing the meaning and behavior of elements in a way that can be parsed by assistive technologies.
2. Each word in the ARIA vocabulary has a precise meaning defined in the [ARIA specification](https://www.w3.org/TR/wai-aria-1.1/) and explained in the [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/).
3. ARIA markup does not change visual appearance or responses to input from keyboard, touch, or mouse.

## Costs of Violating the Contract

Incorrect ARIA markup can have devistating effects for users of assistive technologies. 
It gives assistive technologies information about the UI that misleads the user.
Incorrect ARIA ccan not only make learning a UI more difficult but even unintentionally hide information or block interactions.

## Examples of bad ARIA

### Using the wrong role

Never assume the ARIA definition of a role simply based on its name. For example:

~~~HTML
<button role="Search">Search</button>
~~~

While adding the `search` role to a search button may logically seem to be a way of improving accessibility,
it actually makes the search button impossible to operate with some assistive technologies. 
ARIA has three primary classes of roles in the ontology, structures, windows, and widgets. 
The `search` role is a structural role, and a button is a widget. 
So, the above code turns the button into a static structure.

Also consider:

~~~HTML
<ul role="menu">
    <li><a href="p1">Page 1</a></li>
    <li><a href="p2">Page 2</a></li>
    <li><a href="p3">Page 3</a></li>
</ul>
~~~

Many people may refer to a list of links for navigating a site as a menu. However, that does not mean it is an ARIA `menu`.
The ARIA `menu` role, like all ARIA roles, has a very specific meaning. 
It is a composite widget, which means that it is a container that is expected to contain only certain types of widgets, `menuitem` elements, that have specific behaviors.

If the `menu` role is used without following the [ARIA menu pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#menu),
the resulting experience is unpredictable and, with most assistive technologies, much less accessible.  
For example, in the above case, with some screen readers, tabbing to the links would yield silence!

### Misusing `aria-label`

~~~
<a href="url" aria-label="Error Message!">Error 999! You have exceeded the allowed  attempts. Go to reset form.</a>
~~~

Thinking that a little extra information will help out screen reader users? Unfortunately, the above code doesn't give screen reader users extra information. It replaces all the useful information in the link text with the nearly useless information in the `aria-label`.

## The bottom line

ARIA is powerful and good at what it does. In that way, it is like a power saw. Very few people who frame homes from wood for a living would come to work without one. But, in unskilled hands, it isn't difficult to create horrific outcomes with a powerful saw.

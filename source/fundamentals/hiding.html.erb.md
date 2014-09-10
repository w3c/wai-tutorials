---
title: Hiding Content
status: editors-draft
order: 4
type: tips
wcag_techniques:
  - C7: Using CSS to hide a portion of the link text
---

## Why is this important?

* **Screen Reader users** might be able to navigate to content that is hidden from sight or might miss content that was put in place especially for them.
* **Keyboard users** might not see where their current focus is, if content is not hidden properly.

## Decide in what way content should be hidden

### Content that should be hidden from all users

Accordions and tabviews hide part of the content, depending on what is selected. In such cases, the content should be unavailable regardless of the assistive technology used.

The following techniques can be used to hide content from all:

* Entirely remove the content from the <abbr title="Document Object Model">DOM</abbr> (for example by using JavaScript’s `removeChild` method).
* Use the HTML5 `hidden` attribute (in supporting browsers).
* Use `display: none` or `visibility: hidden` in CSS.

### Content that should only be hidden visually

Some content of the page, like skip links, can be hidden visually, as they are not particularly useful to mouse or pointing device users. It often makes sense to reveal hidden content if it receives focus.

* Use `opacity: 0` in CSS.
* Move element outside of the window by using absolute positioning and negative left value

  {::nomarkdown}
  <%= code_start %>
  {:/nomarkdown}
  ~~~css
  selector {
    position:absolute;
    left: -999em;
  }
  ~~~
  {::nomarkdown}
  <%= code_end %>
  {:/nomarkdown}
* Use the `visuallyhidden` class that has found widespread adoption:

  {::nomarkdown}
  <%= code_start %>
  {:/nomarkdown}
  ~~~css
  /*
   * Hide only visually, but have it
   * available for screenreaders: h5bp.com/v
   */

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  ~~~
  {::nomarkdown}
  <%= code_end %>
  {:/nomarkdown}

  This class can also be used with the secondary class `focusable` to show the focused element visually. To be focusable, the element needs to be a link (`a` element), a form element (including `button`) or another element with the `tabindex` value of `0`.

  {::nomarkdown}
  <%= code_start %>
  {:/nomarkdown}
  ~~~css
  /*
   * Extends the .visuallyhidden class to
   * allow the element to be focusable
   * when navigated to via the keyboard: h5bp.com/p
   */

  .visuallyhidden.focusable:active,
  .visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }
  ~~~
  {::nomarkdown}
  <%= code_end %>
  {:/nomarkdown}


### Content that should only be hidden from assistive technology

In some rare situations, it can be useful to hide content from assistive technology only, for example if it is redundant or misleading. In some iconfonts for example, the icon is on the same position in the charset as ordinary letters. Assistive technologies would interpret the icons as those letters and read them out.

* Use `aria-hidden="true"` on an element enclosing the content that should be hidden in the HTML document.

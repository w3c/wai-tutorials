---
title: Keyboard Access
status: editors-draft
order: 5
type: tips
wcag_success_criteria:
  - 2.1.1
  - 2.1.2
  - 2.4.3
  - 2.4.7
wcag_techniques:
  - G202
  - H91
  - G90
  - SCR20
  - SCR35
  - SCR2
  - SCR29
  - G21
  - FLASH17
  - G59
---

Keyboard access is the foundation of websites that are accessible to assistive technology. For example, screen reader users are only able to navigate the page using the keyboard. Other users use other devices that basically translate the user’s instructions into keyboard commands.

The main concept of keyboard navigation on websites is the **focus**, which describes the element of the page that the user is currently operating. Online, the position of the focus is often shown as dotted outline on links or buttons. On a standard keyboard (and without specialized assistive technology), the focus is controlled by using the tabulator key (<kbd>tab ↹</kbd>) which, when pressed, selects the next element that can receive focus. Similarly <kbd>shift ⇧</kbd> + <kbd>tab ↹</kbd> selects the previous element.

There are a couple of elements that can receive focus:

* Links (`<a>` elements) with a valid `href` attribute.
* Form elements like text fields, buttons and radiobuttons (`<input>`, `<button>`, and `<textarea>` elements) if they are not `disabled`.
* Other elements with the `tabinex` attribute.

It is discouraged to use the `tabindex` attribute with positive integer values as this overrides the natural keyboard navigation on the page, an element with a `tabindex` of `1` would always be the first element that would be in focus, no matter of the focusable elements that came before it in the HTML document. This would mean that a keyboard user potentially wouldn’t be able to operate a (large) part of the website which is unacceptable.

Instead using the `tabindex` attribute with a value of `0` brings an arbitrary element in the normal tab flow and makes it focusable by using the <kbd>tab ↹</kbd> key. A value of `-1` makes the element focusable using JavaScript (`document.getElementsByTagName('div')[0].focus();`) only.

Under some circumstances, there are situations where the focus is not leaving a certain element due to how the website is laid out or programmed. This is called a **keyboard trap** and needs to be avoided as it affects the accessibility of the page as a whole. If there are components, like rich-text editors, where the <kbd>tab ↹</kbd> key is used otherwise (in this instance, to create a tab character), the user needs to be informed of a way to leave that element (usually by hitting the <kbd>esc ⎋</kbd> key).



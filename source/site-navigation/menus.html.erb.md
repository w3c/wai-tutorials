---
title: Menus
status: draft
order: 2
subpages: true
wcag_success_criteria:
  - 2.4.3
  - 2.4.5
  - 2.4.7
  - 2.4.8
  - 4.1.2
wcag_techniques:
  - H4
  - SCR26
  - G65
  - G161
  - G63
  - G127
  - ARIA6
  - ARIA11
  - G14
  - G128
  - G182
  - G183
---

Menus are used to browse around web pages (“navigation menus”) or initiate actions inside web applications (“application menus”). Due to their important role to operate web pages and applications, they need to be usable in all circumstances. This tutorial covers the following topics:

* **[Structure](menus/structure.html):** Mark up menus in a way that reflects the structure of its content and makes identification possible.

* **[Styling](menus/styling.html):** Use commonly recognized design patterns to identify menus and indicate the state of menu items.

* **[Fly-out Menus](menus/flyout.html):** Implement fly-out menus to organize menus with branching sub-items.

* **[Web Application Menus](menus/application.html):** Use markup and scripting to define the functionality and alter the behavior of menu items to mimic desktop applications.

## Why is this important?

Navigation menus reflect the underlying structure of websites, individual web pages, and multi-step processes such as check-out forms. Applications menus contain the functionality available. Both types of menus allow users to get an overview on the content and access information and functionality more easily when implemented properly.

* **Screen reader and keyboard users** benefit from keyboard interoperability and markup that allows users to operate the menus in different ways.

* **Users with fine motor difficulties and touch screen users** have larger targets to click or tap on, and fly-out menus do not disappear immediately after the mouse has left the submenu.

* **People with attention and short term memory limitations** benefit from being able to discover where the current focus is located.

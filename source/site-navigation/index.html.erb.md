---
title: Navigation Concepts
tutorial_title: Navigation
nav_title: Concepts
status: editors-draft
order: 1
topic_order: 6
type: intro
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

Structure your page navigation consistently and use the proper structure to allow users to easily access all content on your website.

* **Menus** are used to browse around web pages. Due to their important role to operate web pages and applications, they need to be usable in all circumstances.

  * **[Structure](menus-structure.html):** Mark up menus in a way that reflects the structure of its content and makes identification possible.
  * **[Styling](menus-styling.html):** Use commonly recognized design patterns to identify menus and indicate the state of menu items.
  * **[Fly-out Menus](menus-flyout.html):** Implement fly-out menus to organize menus with branching sub-items.
  * **[Web Application Menus](application-menus.html):** Use special markup and scripting to define a menu for a web application that works like application menus in desktop operating systems.

* **[In-page Navigation](in-page-navigation.html):** Provide mechanisms to navigate between sections of a web page. Consider using a “table of contents” for longer pieces of content.

* **[Multiple Ways](multiple-ways.html):** Most websites benefit from having multiple ways to access content, like a sitemap or search.

## Why is this important?

Navigations reflect the underlying structure of websites, individual web pages, and multi-step processes such as check-out forms.They allow users to get an overview on the content and access information and functionality more easily when implemented properly.

* **Screen reader and keyboard users** benefit from keyboard interoperability and markup that allows them to operate menus in different ways.

* **Users with fine motor difficulties and touch screen users** have larger targets to click or tap on. In fly-out menus, submenus do not disappear immediately after the mouse has left the clickable area.

* **People with limited attention or short term memory** benefit from being able to easily discover the current page in the menu.

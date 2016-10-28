---
title: Menu Concepts
tutorial_title: Menus
status: draft
order: 1
topic_order: 6
type: intro
wcag_success_criteria:
  - 1.4.1
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

Menus are used to browse around websites (“navigation menus”) or initiate actions inside a web application (“application menus”). They are often implemented in the form of fly-out menus. Due to their important role to operate websites and web applications, they need to be usable in all circumstances. This tutorial covers the following topics:

* **[Structure](structure.html):** Mark up menus using lists to enable easy access to all pages of the website.

* **[Styling](styling.html):** Lay out different types of menus, depending on the situation, using commonly recognized design patterns and indicate the current page’s menu item.

* **[Fly-out Menus](flyout.html):** Use fly-out menus to give users quick access to pages further down in the navigation tree.

* **[Web Application Menus](application.html):** By applying special markup and interactive behavior, menus for web applications can act like similar menus in desktop applications.

* **[Multiple Ways](multiple-ways.html):** Many users benefit from alternative ways to traverse through the content of a website, for example by using site maps or breadcrumb trails.

## Why is this important?

Navigation menus reflect the underlying structure of the website content. If that content structure is coherent, users will find what they are looking for more easily, regardless of disability. Application menus are one way to provide functionality for operating web applications.

* **Screen reader and keyboard users** should be aware which link is currently in focus. The menu link to the page the user is currently on should be indicated as well.

* **Screen reader users** expect web application menus to work like desktop menus.

* **Users with fine motor difficulties and touch screen users** need large targets to click or tap on.

* **Users with shaky hands** need fly-out menus to not disappear immediately after the mouse has left the submenu.

* **People with attention limitations, short term memory limitations, or limitations in executive processes** benefit by being able to discover where the focus is located.

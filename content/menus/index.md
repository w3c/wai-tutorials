---
title: Menus Tutorial
lang: en
permalink: /tutorials/menus/
ref: /tutorials/menus/

github:
  repository: w3c/wai-tutorials
  path: 'content/menus/index.md'

resource:
  ref: /tutorials/
navigation:
  next: /tutorials/menus/structure/

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

first_published: "May 2015"


metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
---
Menus are used for navigation and to provide functionality which are critical parts of web page operability.

* **[Structure](/tutorials/menus/structure/):** Mark up menus in a way that reflects their structure and appropriately labels them.

* **[Styling](/tutorials/menus/styling/):** Use commonly recognized design patterns to distinguish menus and the state of menu items.

* **[Fly-out Menus](/tutorials/menus/flyout/):** Ensure fly-out (drop-down) submenus can be used appropriately by mouse and keyboard.

* **[Application Menus](/tutorials/menus/application-menus/):** Add specific markup and keyboard behavior to resemble desktop application menus.

## Why is this important?

Navigation menus reflect the underlying structure of websites. Application menus provide access to the essential functionality of an application. Thus menus are critical parts of web pages and applications and require particular attention during design and development.

* **Screen reader and keyboard users** benefit from keyboard interoperability and markup that allows them to operate menus in different ways.

* **Users with fine motor difficulties and touch screen users** require larger targets to click or tap on. In fly-out menus, submenus should not disappear immediately after the mouse has left the clickable area.

* **People with limited attention or short-term memory** benefit from clear and distinct menus with easily identifiable states, such as the current page.

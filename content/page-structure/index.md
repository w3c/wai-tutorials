---
title: "Page Structure Tutorial"
permalink: /tutorials/page-structure/
ref: /tutorials/page-structure/
lang: en
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
# contributors:
# - name: Contributor 1
# - name: Contributor 2
github:
  repository: w3c/wai-tutorials
  path: content/index.md

navigation:
  next: /tutorials/page-structure/regions/

metafooter: true
first_published: "April 2017"
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.


wcag_success_criteria:
  - 1.3.1
  - 2.4.1
  - 2.4.6
  - 2.4.10
---

Well-structured content allows more efficient navigation and processing. Use HTML and WAI-ARIA to improve navigation and orientation on web pages and in applications.

* **[Page Regions](/tutorials/page-structure/regions/):** Identify and mark up regions on web pages using HTML5 and WAI-ARIA roles.

* **[Labeling Regions](/tutorials/page-structure/labels/):** Label regions to allow users to distinguish and access them.

* **[Headings](/tutorials/page-structure/headings/):** Add headings and nest them logically to label sections of web pages according to their relationships and importance.

* **[Content Structure](/tutorials/page-structure/content/):** Mark up the content on a page in a way that uses appropriate and meaningful elements.

## Why is this important?

Pages with well-structured content are essential for many web users, for example:

* **People with cognitive and learning disabilities** can more easily find and prioritize content on the page.
* **People using screen readers** can skip to the main content directly and navigate to sections that are important to them.
* **Keyboard users** can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple times to navigate through all links in each section.
* **People using software that only shows the main content** of a web page, such as people with cognitive disabilities, will receive better results if the page structure is correctly marked up.
* **People with visual impairments**, including people with low vision, have cues that provide orientation on the page and in the content.
* **Mobile web users** often have access to a so-called “reader” or “reading” mode that will only show the main content of the page if it is correctly marked up.
* **People using certain browser plugins** can use landmark roles to jump to specific sections on a page.
* There are additional benefits to a good, accessible page structure, beyond those experienced by people with disabilities. As an example, search engines can use the data to better index the content of a page.

---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "An alt Decision Tree"
title_html: "An <code>alt</code> Decision Tree"
lang: en  # Change "en" to the translated-language shortcode
last_updated: 2024-01-15  # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators: # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Translator Name Here" # Add one -name: line for every translator
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.md'  # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

resource:
  ref: /tutorials/images/  # Do not change this

navigation:
  previous: /tutorials/images/imagemap/  # Do not change this
  next: /tutorials/images/tips/  # Do not change this

permalink: /tutorials/images/decision-tree/ # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
ref: /tutorials/images/decision-tree/ # Do not change this

# In the footer below:
# Translate the Working Group name. Leave the Working Group acronym in English.
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
update_editors:
  - Brian Elton
contributing_participants:
  - see <a href="/WAI/tutorials/acknowledgements/">Acknowledgements</a>
support: Developed by the Education and Outreach Working Group (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.

# Read Translations Notes for this resource at https://github.com/w3c/wai-tutorials#readme
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Overview" class="full" %}
{:/}

This decision tree describes how to use the `alt` attribute of the `<img>` element in various situations. For some types of images, there are alternative approaches, such as using CSS background images for decorative images or web fonts instead of images of text.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **Does the image contain text?**
  - {:.yes} **Yes:**
    -   **… and the text is also present as *real* text nearby.**
      _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
    -   **… and the text is only shown for visual effects.**
      _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
    -   **… and the text has a specific function, for example is an icon.**
      _Use the `alt` attribute to communicate the function of the image. See [Functional Images](/tutorials/images/functional/)._
    -   **… and the text in the image is not present otherwise.** _Use the `alt` attribute to include the text of the image. See [Images of Text](/tutorials/images/textual/#styled-text-decorative-effect)._
  - {:.no} **No:**
    - Continue.
- **Is the image used in a link or a button, and would it be hard or impossible to understand what the link or the button does, if the image wasn’t there?**
  - {:.yes} **Yes:**
    - _Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](/tutorials/images/functional/)._
  - {:.no} **No:**
    - Continue.
- **Does the image contribute meaning to the current page or context?**
  - {:.yes} **Yes:**
    - **… and it’s a simple graphic or photograph.**
      _Use a brief description of the image in a way that conveys that meaning in the `alt` attribute. See [Informative Images](/tutorials/images/informative/)._
    - **… and it’s a graph or complex piece of information.**
      _Include the information contained in the image elsewhere on the page. See [Complex Images](/tutorials/images/complex/)._
    - **… and it shows content that is redundant to *real* text nearby.**
      _Use an empty `alt` attribute. See (redundant) [Functional Images](/tutorials/images/functional/#logo-image-within-link-text)._
  - {:.no} **No:**
    - Continue.
- **Is the image purely decorative or not intended for users?**
  - {:.yes} **Yes:**
    - _Use an empty `alt` attribute. See [Decorative Images](/tutorials/images/decorative/)._
  - {:.no} **No:**
    - Continue.
- **Is the image’s use not listed above or it’s unclear what `alt` text to provide?**
  - {:.yes} This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Image Concepts Page](/tutorials/images/).
{:.decision-tree}
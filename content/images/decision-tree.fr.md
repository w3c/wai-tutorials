---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Un arbre décisionnel pour l'attribut alt"
title_html: "Un arbre décisionnel pour l'attribut <code>alt</code>"
lang: fr  # Change "en" to the translated-language shortcode
last_updated: 2023-09-20  # Put the date of this translation YYYY-MM-DD (with month in the middle)

translators:
  - name: Rémi Bétin

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.fr.md'  # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

resource:
  ref: /tutorials/images/ # Do not change this

navigation:
  previous: /tutorials/images/imagemap/   # Do not change this
  next: /tutorials/images/tips/   # Do not change this

permalink: /tutorials/images/decision-tree/fr # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
ref: /tutorials/images/decision-tree/ # Do not change this

# In the footer below:
# Translate the Working Group name. Leave the Working Group acronym in English.
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
update_editors:
  - Brian Elton
contributors:
  - Voir <a href="/WAI/tutorials/acknowledgements/">Remerciements</a>
support: Développé avec le groupe de travail Education et Promotion (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Développé avec le soutien du <a href="https://www.w3.org/WAI/ACT/">projet WAI-ACT</a>, co-financé par le <strong>programme <abbr title="Technologies de la Société de l'information">IST</abbr> de la Commission européenne</strong>.
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Vue d'ensemble" class="full" %}
{:/}

Cet arbre décisionnel décrit comment utiliser l'attribut `alt` de l'élément `<img>` dans diverses situations. Pour certains types d'images, des approches alternatives existent, comme utiliser des images CSS d'arrière-plan pour les images décoratives, ou des polices web plutôt que des images de texte.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **Est-ce que l'image contient du texte ?**
  - {:.yes} **Oui :**
    -   **… et le texte est aussi présent à proximité, comme du texte *réel*.**
      _Utilisez un attribut `alt` vide. Voir [Images décoratives](/tutorials/images/decorative/)._
    -   **… et le texte est seulement présenté pour des effets visuels.**
      _Utilisez un attribut `alt` vide. Voir [Images décoratives](/tutorials/images/decorative/)._
    -   **… et le texte a une fonction spécifique : il s'agit d'une icône par exemple.**
      _Utilisez l'attribut `alt` pour communiquer la fonction de l'image. Voir [Images fonctionnelles](/tutorials/images/functional/)._
    -   **… et le texte dans l'image n'est pas présent ailleurs.**
      _Utilisez l'attribut `alt` pour inclure le texte de l'image. Voir [Images de texte](/tutorials/images/textual/#styled-text-decorative-effect)._
  - {:.no} **Non :**
    - Continuez.
- **Est-ce que l'image est utilisée dans un lien ou un bouton, et serait-il difficile voire impossible de comprendre ce que le lien ou le bouton fait, si l'image n'était pas présente ?**
  - {:.yes} **Oui:**
    - _Utilisez l'attribut `alt` pour communiquer la destination du lien ou de l'action réalisée. Voir [Images fonctionnelles](/tutorials/images/functional/)._
  - {:.no} **Non :**
    - Continuez.
- **Est-ce que l'image contribue à comprendre la signification de la page courante ou du contexte ?**
  - {:.yes} **Oui :**
    - **… et c'est une simple illustration ou photographie.**
      _Utilisez une description brève de l'image, d'une manière qui transmette cette signification dans l'attribut `alt`. Voir [Images informatives](/tutorials/images/informative/)._
    - **… et c'est un graphique ou une information complexe.**
      _Incluez l'information contenue dans l'image ailleurs sur la page. Voir [Images complexes](/tutorials/images/complex/)._
    - **… et elle présente du contenu qui est redondant avec le texte *réel* à proximité.**
      _Utilisez un attribut `alt` vide. Voir [Images fonctionnelles](/tutorials/images/functional/#logo-image-within-link-text) (redondantes)._
  - {:.no} **Non :**
    - Continuez.
- **Est-ce que l'image est purement décorative, ou pas destinée à l'utilisateur ?**
  - {:.yes} **Oui :**
    - _Utilisez un attribut `alt` vide. Voir [Images décoratives](/tutorials/images/decorative/)._
  - {:.no} **Non :**
    - Continuez.
- **L'usage de l'image n'est pas listé ci-dessus&nbsp;; ou le texte `alt` à fournir n'est pas clair ?**
  - {:.yes} Cet arbre décisionnel ne couvre **pas** tous les cas. Pour des informations détaillées sur les textes alternatifs à fournir, référez-vous à [la page Concepts - Images](/tutorials/images/).
{:.decision-tree}

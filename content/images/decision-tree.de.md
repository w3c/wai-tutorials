---
title: "Ein alt Entscheidungsbaum"
title_html: "Ein <code>alt</code> Entscheidungsbaum"
lang: de
last_updated: 2023-12-22

translators:
  - name: "Alexej Rotar"
contributors:
  - name: "Jens Oliver Meiert"
    link: "https://meiert.com/de/biography/"
  - name: "Doro Hinrichs"

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.de.md'

resource:
  ref: /tutorials/images/
navigation:
  previous: /tutorials/images/imagemap/
  next: /tutorials/images/tips/

permalink: /tutorials/images/decision-tree/de
ref: /tutorials/images/decision-tree/

metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
update_editors:
  - Brian Elton
contributing_participants:
  - siehe <a href="/WAI/tutorials/acknowledgements/">Danksagung</a>
support: Entwickelt von der Arbeitsgruppe für Bildung und Öffentlichkeitsarbeit (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Entwickelt mit der Unterstützung vom <a href="https://www.w3.org/WAI/ACT/">WAI-ACT-Projekt</a>, kofinanziert vom <strong><abbr title="Information Society Technologies">IST</abbr>-Programm der Europäischen Kommission</strong>.

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Überblick" class="full" %}
{:/}

Dieser Entscheidungsbaum beschreibt, wie man das `alt`-Attribut des `img`-Elements in verschiedenen Situationen verwendet. Für manche Arten von Bildern gibt es Alternativen, etwa CSS-Hintergrundbilder für dekorative Bilder oder Webfonts anstelle von Bildern von Text.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **Enthält das Bild Text?**
  - {:.yes} **Ja:**
    -   **… und der Text ist auch als *richtiger* Text in der Nähe vorhanden.**
      _Nutzen Sie ein leeres `alt`-Attribut. Siehe [Dekorative Bilder](/tutorials/images/decorative/)._
    -   **… und der Text wird nur für visuelle Effekte dargestellt.**
      _Nutzen Sie ein leeres `alt`-Attribut. Siehe [Dekorative Bilder](/tutorials/images/decorative/)._
    -   **… und der Text hat eine bestimmte Funktion, beispielsweise handelt es sich um ein Icon.**
      _Nutzen sie das `alt`-Attribut, um die Funktion des Bildes zu kommunizieren. Siehe [Funktionale Bilder](/tutorials/images/functional/)._
    -   **… und der Text im Bild ist ansonsten nicht vorhanden.** _Nutzen Sie das `alt`-Attribut, um den Text aus dem Bild zu wiederholen. Siehe [Bilder von Text](/tutorials/images/textual/#styled-text-decorative-effect)._
  - {:.no} **Nein:**
    - Fahren Sie fort.
- **Wird das Bild in einem Link oder Button verwendet und wäre es schwer oder unmöglich zu verstehen, was der Link oder Button tut, wenn das Bild fehlen würde?**
  - {:.yes} **Ja:**
    - _Nutzen Sie das `alt`-Attribut, um das Ziel des Links oder die Aktion zu kommunizieren. Siehe [Funktionale Bilder](/tutorials/images/functional/)._
  - {:.no} **Nein:**
    - Fahren Sie fort.
- **Trägt das Bild zur Bedeutung der aktuellen Seite oder des aktuellen Kontexts bei?**
  - {:.yes} **Ja:**
    - **… und es ist eine einfache Grafik oder ein Foto.**
      _Nutzen Sie eine kurze Beschreibung des Bildes im `alt`-Attribut, die diese Bedeutung vermittelt. Siehe [Informative Bilder](/tutorials/images/informative/)._
    - **… und es ist ein Graph oder komplexe Information.**
      _Vermitteln Sie die Information aus dem Bild auch an anderer Stelle auf der Seite. Siehe [Komplexe Bilder](/tutorials/images/complex/)._
    - **… und es zeigt Inhalt, der in *richtigem* Text in der Nähe enthalten ist.**
      _Nutzen Sie ein leeres `alt`-Attribut. Siehe (redundante) [Funktionale Bilder](/tutorials/images/functional/#logo-image-within-link-text)._
  - {:.no} **Nein:**
    - Fahren Sie fort.
- **Ist das Bild rein dekorativ oder nicht für Nutzerinnen und Nutzer gedacht?**
  - {:.yes} **Ja:**
    - _Nutzen Sie ein leeres `alt`-Attribut. Siehe [Dekorative Bilder](/tutorials/images/decorative/)._
  - {:.no} **Nein:**
    - Fahren Sie fort.
- **Ist der Zweck des Bildes nicht in der obigen Auflistung enthalten oder ist es unklar, welcher `alt`-Text zu verwenden ist?**
  - {:.yes} Dieser Entscheidungsbaum deckt **nicht alle** Fälle ab. Für detailierte Informationen über die Bereitstellung von Textalternativen, sehen Sie sich die [Seite zu Bildkonzepten](/tutorials/images/) an.
{:.decision-tree}

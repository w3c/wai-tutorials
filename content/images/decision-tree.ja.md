---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "alt決定木"
title_html: "<code>alt</code>決定木"
lang: ja
last_updated: 2024-02-23 # Put the date of this translation YYYY-MM-DD (with month in the middle)

translators:
  - name: "Hiroya UGA"

github:
  branch: "master-2.0"
  repository: w3c/wai-tutorials
  path: "content/images/decision-tree.ja.md"

resource:
  ref: /tutorials/images/ # Do not change this

navigation:
  previous: /tutorials/images/imagemap/ # Do not change this
  next: /tutorials/images/tips/ # Do not change this

permalink: /tutorials/images/decision-tree/ja
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
  - 詳細：<a href="/WAI/tutorials/acknowledgements/">謝辞</a>
support: 教育・啓発ワーキンググループ（<a href="https://www.w3.org/groups/wg/eowg"><abbr title="Education and Outreach Working Group">EOWG</abbr></a>）によって開発されました。このプロジェクトは<a href="https://www.w3.org/WAI/ACT/">WAI-ACTプロジェクト</a>の支援を受けて開発され、<strong>欧州委員会<abbr title="Information Society Technologies">IST</abbr>プログラム</strong>の共同資金援助を受けています。
# Read Translations Notes for this resource at https://github.com/w3c/wai-tutorials#readme
---

{::nomarkdown}
{% include box.html type="start" h="2" title="概要" class="full" %}
{:/}

この決定木（ディシジョンツリー）は、`<img>`要素の`alt`属性の使い方を状況に合わせて説明するためのものです。装飾目的の画像の代わりにCSS背景画像を用いたり、文字画像の代わりにWebフォントを利用するなど、一部の画像の種類には代替手段が存在します。
{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **その画像は文字を含んでいますか？**
  - {:.yes} **Yes:**
    - **かつ、その文言が*実際の*テキストとして近くに記載されている場合**
      _空の`alt`属性を利用してください。詳細：[[装飾目的の画像]](/tutorials/images/decorative/)_
    - **かつ、その文言が視覚効果のためだけに表示されている場合**
      _空の`alt`属性を利用してください。詳細：[[装飾目的の画像]](/tutorials/images/decorative/)_
    - **かつ、その文言がアイコンなど特定の機能を持つ場合**
      _`alt`属性を、画像の機能を伝えるために利用してください。詳細：[[機能を持つ画像]](/tutorials/images/functional/)_
    - **かつ、画像内のテキストがそれ以外の場所に存在しない場合** _`alt`属性にはその画像内の文言を含めてください。詳細：[[文字画像]](/tutorials/images/textual/#styled-text-decorative-effect)_
  - {:.no} **No:**
    - 次へ
- **その画像はリンクまたはボタンの中で使用されていますか？また、画像が存在しない場合はリンクやボタンがどのような動作をするか理解することが困難あるいは不可能ですか？**
  - {:.yes} **Yes:**
    - _`alt`属性を、リンク先や実行されるアクションを伝えるために利用してください。詳細：[[機能を持つ画像]](/tutorials/images/functional/)_
  - {:.no} **No:**
    - 次へ
- **その画像は現在のページや文脈に意味を与えていますか？**
  - {:.yes} **Yes:**
    - **かつ、その画像が単純なグラフィックや写真の場合**
      _意味が伝わるように画像の簡単な説明を`alt`属性値に利用してください。詳細：[[意味のある画像]](/tutorials/images/informative/)_
    - **かつ、その画像がグラフまたは複雑な情報の一部の場合**
      _その画像に含まれている情報を、そのページ内の別の場所に含めてください。詳細：[[複雑な画像]](/tutorials/images/complex/)_
    - **かつ、その画像が近くに記載されている*実際の*テキストと重複する内容を表している場合**
      _空の`alt`属性を利用してください。詳細：（冗長な）[[機能を持つ画像]](/tutorials/images/functional/#logo-image-within-link-text)_
  - {:.no} **No:**
    - 次へ
- **その画像は純粋な装飾目的、またはユーザー向けではないものですか？**
  - {:.yes} **Yes:**
    - _空の`alt`属性を利用してください。詳細：[[装飾目的の画像]](/tutorials/images/decorative/)_
  - {:.no} **No:**
    - 次へ
- **その画像の用途は上記に記載されていないですか？またはどのような代替テキストを提供するべきか不明ですか？**
  - {:.yes} この決定木はすべてのケースを網羅するわけでは**ありません**。代替テキストの提供に関する詳細については、「[画像チュートリアル](/tutorials/images/)」を参照してください。
{:.decision-tree}

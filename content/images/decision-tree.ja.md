---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "altディシジョンツリー"
title_html: "<code>alt</code>ディシジョンツリー"
lang: ja
last_updated: 2024-02-23 # Put the date of this translation YYYY-MM-DD (with month in the middle)

translators:
  - name: "Hiroya UGA"
  - name: "寄稿者 Naoki Nakamura"

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
contributing_participants:
  - 詳細：<a href="/WAI/tutorials/acknowledgements/">謝辞</a>
support: 教育・啓発ワーキンググループ（<a href="https://www.w3.org/groups/wg/eowg"><abbr title="Education and Outreach Working Group">EOWG</abbr></a>）によって開発されました。このプロジェクトは<a href="https://www.w3.org/WAI/ACT/">WAI-ACTプロジェクト</a>の支援を受けて開発され、<strong>欧州委員会<abbr title="Information Society Technologies">IST</abbr>プログラム</strong>の共同資金援助を受けています。
# Read Translations Notes for this resource at https://github.com/w3c/wai-tutorials#readme
---

{::nomarkdown}
{% include box.html type="start" h="2" title="概要" class="full" %}
{:/}

このディシジョンツリー（決定木）は、`<img>`要素の`alt`属性の使い方を状況に合わせて説明するものです。画像の種類によっては、装飾目的の画像の代わりにCSS背景画像を用いたり、文字画像の代わりにWebフォントを利用するなど、代替手段が存在します。
{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **その画像はテキストを含んでいますか？**
  - {:.yes} **Yes:**
    - **かつ、そのテキストが*実際の*テキストとして近くに記載されている場合**
      _空の`alt`属性を利用します。詳細は[[装飾目的の画像]](/tutorials/images/decorative/)を参照してください。_
    - **かつ、そのテキストが視覚効果のためだけに表示されている場合**
      _空の`alt`属性を利用します。詳細は[[装飾目的の画像]](/tutorials/images/decorative/)を参照してください。_
    - **かつ、そのテキストがアイコンなど特定の機能を持つ場合**
      _`alt`属性を、画像の機能を伝えるために利用します。詳細は[[機能を持つ画像]](/tutorials/images/functional/)を参照してください。_
    - **かつ、画像内のテキストがそれ以外の場所に存在しない場合** _`alt`属性にはその画像内のテキストを含めます。詳細は[[文字画像]](/tutorials/images/textual/#styled-text-decorative-effect)を参照してください。_
  - {:.no} **No:**
    - 次へ
- **その画像はリンクまたはボタンの中で使用されていますか？また、画像が存在しない場合はリンクまたはボタンがどのような動作をするか理解することが困難または不可能ですか？**
  - {:.yes} **Yes:**
    - _`alt`属性を、リンク先または実行されるアクションを伝えるために利用します。詳細は[[機能を持つ画像]](/tutorials/images/functional/)を参照してください。_
  - {:.no} **No:**
    - 次へ
- **その画像は現在のページまたは文脈に意味を与えていますか？**
  - {:.yes} **Yes:**
    - **かつ、その画像が単純なグラフィックまたは写真の場合**
      _意味が伝わるように画像の簡単な説明を`alt`属性値に利用します。詳細は[[意味のある画像]](/tutorials/images/informative/)を参照してください。_
    - **かつ、その画像がグラフまたは複雑な情報の一部の場合**
      _その画像に含まれている情報を、そのページ内の別の場所に含めます。詳細は[[複雑な画像]](/tutorials/images/complex/)を参照してください。_
    - **かつ、その画像が近くに記載されている*実際の*テキストと重複する内容を表している場合**
      _空の`alt`属性を利用します。詳細は（冗長な）[[機能を持つ画像]](/tutorials/images/functional/#logo-image-within-link-text)を参照してください。_
  - {:.no} **No:**
    - 次へ
- **その画像は純粋な装飾目的、またはユーザー向けではないものですか？**
  - {:.yes} **Yes:**
    - _空の`alt`属性を利用します。詳細は[[装飾目的の画像]](/tutorials/images/decorative/)を参照してください。_
  - {:.no} **No:**
    - 次へ
- **その画像の用途は上記に記載されていないですか？またはどのような代替テキストを提供するべきか不明ですか？**
  - {:.yes} この決定木はすべてのケースを網羅するわけでは**ありません**。代替テキストの提供に関する詳細については、「[[画像に関する概念ページ]](/tutorials/images/)」を参照してください。
{:.decision-tree}

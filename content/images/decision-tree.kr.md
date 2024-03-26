---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "alt 의사결정나무"
title_html: "<code>alt</code> 의사결정나무"
lang: ko  # Change "en" to the translated-language shortcode
last_updated: 2024-03-12  # Put the date of this translation YYYY-MM-DD (with month in the middle)

translators:
  - name: "hwahyeon"

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.kr.md'  # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

resource:
  ref: /tutorials/images/  # Do not change this

navigation:
  previous: /tutorials/images/imagemap/  # Do not change this
  next: /tutorials/images/tips/  # Do not change this

permalink: /tutorials/images/decision-tree/kr # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
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
  - <a href="/WAI/tutorials/acknowledgements/">감사의 말</a> 보기
support: 교육 및 원조 워킹 그룹(<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>)에 의해 개발되었습니다.<a href="https://www.w3.org/WAI/ACT/">WAI-ACT 프로젝트</a>의 지원을 받아 개발되었으며, <strong>유럽 위원회 <abbr title="Information Society Technologies">IST</abbr> 프로그램</strong>이 공동 자금을 지원합니다.
# Read Translations Notes for this resource at https://github.com/w3c/wai-tutorials#readme
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Overview" class="full" %}
{:/}

이 의사결정트리는 다양한 상황에서 `<img>` 요소의 `alt` 속성을 사용하는 방법에 대해 설명합니다. 이미지 유형에 따라, 장식용 이미지로 CSS 배경 이미지를 사용하거나 이미지로 된 문자 대신 웹 글꼴을 사용하는 등의 대안이 있습니다.
{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **이미지에 텍스트가 포함되어 있습니까?**
  - {:.yes} **예:**
    -   **동시에, 이 텍스트가 이미지 근처에 *실제* 텍스트로도 표시되고 있는 경우**
      _빈 `alt` 속성을 사용하세요. 자세한 내용은 [장식용 이미지](/tutorials/images/decorative/)를 참조하세요._
    -   **동시에, 이 텍스트가 오로지 시각적 효과를 위해서만 표시되고 있는 경우**
      _빈 `alt` 속성을 사용하세요. 자세한 내용은 [장식용 이미지](/tutorials/images/decorative/)를 참조하세요._
    -   **동시에, 이 텍스트가 아이콘과 같이 특수한 기능을 가지고 있는 경우**
      _`alt` 속성을 사용하여 이미지의 기능을 나타냅니다. [기능적 이미지](/tutorials/images/functional/)를 참조하세요._
    -   **동시에, 이미지 안의 텍스트가 이 이미지를 제외한 다른 방식으로는 제공되지 않는 경우.** _`alt` 속성을 사용하여 이 이미지 안의 텍스트를 포함하십시오. [텍스트 이미지](/tutorials/images/textual/#styled-text-decorative-effect)를 참조하세요._
  - {:.no} **아니요:**
    - 다음 단계로
- **이미지가 링크나 버튼에 사용되며, 만약 이 이미지가 없다면 링크나 버튼의 기능을 이해하기 어렵거나 불가능합니까?**
  - {:.yes} **예:**
    - _`alt` 속성을 사용하여 링크의 대상이나 수행되는 작업의 의미를 전달하세요. [기능적 이미지](/tutorials/images/functional/)를 참조하세요._
  - {:.no} **아니요:**
    - 다음 단계로
- **이미지가 현재 페이지나 맥락에 의미를 부여합니까?**
  - {:.yes} **예:**
    - **동시에, 이미지가 간단한 그래픽이나 사진인 경우**
      _이미지의 간단한 설명을 `alt` 속성값에 넣어 해당 이미지의 의미를 전달하세요. [정보를 제공하는 이미지](/tutorials/images/informative/)를 참조하세요._
    - **동시에, 이미지가 그래프이거나 복잡한 정보인 경우**
      _이미지에 포함된 정보를 페이지의 다른 곳에 포함시킵니다. [복잡한 이미지](/tutorials/images/complex/)를 참조하세요._
    - **동시에, 이미지가 이미지 근처의 *실제* 텍스트와 중복되는 콘텐츠를 표시하는 경우.**
      _빈 `alt` 속성을 사용하세요. (중복) [기능적 이미지](/tutorials/images/functional/#logo-image-within-link-text)를 참조하세요._
  - {:.no} **아니요:**
    - 다음 단계로
- **이미지가 순수하게 장식을 위한 것이거나 혹은 사용자를 위한 목적이 아닙니까?**
  - {:.yes} **예:**
    - _빈 `alt` 속성을 사용하세요. [장식용 이미지](/tutorials/images/decorative/)를 참조하세요._
  - {:.no} **아니요:**
    - 다음 단계로
- **이미지의 용도가 위에 나열되지 않았거나 어떤 `alt` 텍스트를 제공해야 하는지 불분명합니까?**
  - {:.yes} 이 의사결정나무는 모든 경우를 다루지 않습니다. 대체 텍스트 제공에 대한 자세한 내용은 [이미지 개념 페이지](/tutorials/images/)를 참조하십시오.
{:.decision-tree}

---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Pohon Keputusan Penggunaan alt"
title_html: "Pohon Keputusan Penggunaan <code>alt</code>"
lang: id  # Change "en" to the translated-language shortcode
last_updated: 2023-12-05  # Put the date of this translation YYYY-MM-DD (with month in the middle)

translators: # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
- name: "Fri Rasyidi" # Add one -name: line for every translator
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  branch: 'master-2.0'
  repository: w3c/wai-tutorials
  path: 'content/images/decision-tree.id.md'  # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

resource:
  ref: /tutorials/images/  # Do not change this

navigation:
  previous: /tutorials/images/imagemap/  # Do not change this
  next: /tutorials/images/tips/  # Do not change this

permalink: /tutorials/images/decision-tree/id # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
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
  - lihat <a href="/WAI/tutorials/acknowledgements/">Acknowledgements</a>
support: Dikembangkan oleh Kelompok Developed by the Kelompok Kerja Edukasi dan Pendampingan (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Dikembangkan dengan dukungan dari <a href="https://www.w3.org/WAI/ACT/">proyek WAI-ACT</a>, didanai bersama oleh  <strong>Program <abbr title="Teknologi Masyarakat Informasi">IST</abbr> Komisi Eropa</strong>.
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Gambaran Umum" class="full" %}
{:/}

Pohon keputusan ini menjelaskan cara menggunakan atribut `alt` dari elemen `<img>` dalam berbagai situasi. Untuk beberapa jenis gambar, terdapat pendekatan alternatif, seperti menggunakan gambar latar CSS untuk gambar dekoratif atau fon web sebagai pengganti gambar teks.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

- **Apakah gambar tersebut mengandung teks?**
  - {:.yes} **Ya:**
    -   **… dan teks *sungguhan* yang sama tertulis di dekat gambar.**
      _Gunakan atribut `alt` kosong. Lihat [Gambar Dekoratif](/tutorials/images/decorative/)._
    -   **… dan teks tersebut ditampilkan hanya untuk efek visual.**
      _Gunakan atribut `alt` kosong. Lihat [Gambar Dekoratif](/tutorials/images/decorative/)._
    -   **… dan teks tersebut memiliki fungsi yang spesifik, misalnya sebagai icon.**
      _Gunakan atribut `alt` untuk mengkomunikasikan fungsi dari gambar. Lihat [Gambar Fungsional](/tutorials/images/functional/)._
    -   **… dan teks pada gambar tidak tersedia di tempat lain.** _Gunakan atribut `alt` untuk menyertakan teks pada gambar. Lihat [Gambar Teks](/tutorials/images/textual/#styled-text-decorative-effect)._
  - {:.no} **Tidak:**
    - Lanjut.
- **Apakah gambar digunakan dalam tautan atau tombol, dan apakah tidak memungkinkan atau sulit untuk memahami fungsi tautan atau tombol tersebut jika gambar dihilangkan?**
  - {:.yes} **Ya:**
    - _Gunakan atribut `alt` untuk mengkomunikasikan tujuan dari tautan atau aksi yang akan dijalankan. Lihat [Gambar Fungsional](/tutorials/images/functional/)._
  - {:.no} **Tidak:**
    - Lanjut.
- **Apakah gambar tersebut berkontribusi pada makna halaman atau konteks saat ini?**
  - {:.yes} **Ya:**
    - **… dan berupa grafik atau foto yang sederhana.**
      _Gunakan deskripsi singkat tentang gambar dengan cara yang bisa menyampaikan maknanya pada atribut `alt`. Lihat [Gambar Informatif](/tutorials/images/informative/)._
    - **… dan berupa grafik atau penggalan informasi yang kompleks.**
      _Sertakan informasi yang terkandung dalam gambar pada tempat lain di halaman. Lihat [Gambar Kompleks](/tutorials/images/complex/)._
    - **… dan menampilkan konten duplikat pada teks *sungguhan* yang tertulis di dekatnya.**
      _Gunakan atribut `alt` kosong. Lihat (redundant) [Gambar Fungsional](/tutorials/images/functional/#logo-image-within-link-text)._
  - {:.no} **Tidak:**
    - Lanjut.
- **Apakah gambar tersebut murni dekoratif atau tidak ditujukan untuk pengguna?**
  - {:.yes} **Ya:**
    - _Gunakan atribut `alt` kosong. Lihat [Gambar Dekoratif](/tutorials/images/decorative/)._
  - {:.no} **Tidak:**
    - Lanjut.
- **Apakah kegunaan gambar tidak tercantum pada daftar di atas atau tidak jelas `alt` teks apa yang perlu diberikan?**
  - {:.yes} Pohon keputusan ini **tidak** mencakup semua kasus. Untuk informasi lebih rinci mengenai pemberian alternatif teks lihat pada [Halaman Konsep Gambar](/tutorials/images/).
{:.decision-tree}
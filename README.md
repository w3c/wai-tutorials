# W3C WAI Tutorials

[![Netlify Status](https://api.netlify.com/api/v1/badges/18912a88-8e9a-4e29-aa25-bc6f4c0467c3/deploy-status)](https://app.netlify.com/sites/wai-tutorials2/deploys)

## Publication branch

The branch deployed to the website is the `publication` branch. More info on requesting deploys is in [Updating WAI Website Resources](https://wai-website-theme.netlify.app/workflow/)

## Translation Notes

Tutorials resources use a dynamic footer, using specific metadata set in the "front matter" of each page.

Example:
```yaml
metafooter: true
editors:
  - Eric Eggert: "https://www.w3.org/People/yatil/"
  - Shadi Abou-Zahra: "https://www.w3.org/People/shadi/"
update_editors:
  - Brian Elton
contributing_participants:
  - see <a href="/WAI/tutorials/acknowledgements/">Acknowledgements</a>
support: Developed by the Education and Outreach Working Group (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Developed with support from the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT project</a>, co-funded by the <strong>European Commission <abbr title="Information Society Technologies">IST</abbr> Programme</strong>.
```

1. Translate content in `editors`, `update_editors`, `contributing_participants` and `support`.\
Note: Translate the Working Group name and leave the Working Group acronym in English.
2. Add translations for the following terms, used by the footer, in [translations.yml file](https://github.com/w3c/wai-website-data/blob/master/translations.yml) located in [wai-website-data repository](https://github.com/w3c/wai-website-data/):
- "Editors:"
- "Update Editor:"
- "Status"
- "Updated"
- "first published"
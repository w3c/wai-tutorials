---
title: Progressive Enhancement
status: editors-draft
order: 6
type: tips
---

Progressive enhancement is a design principle for software. It describes the process to design for the smallest common denominator first, and enhance for more capable uses afterwards. Web standards are a great example for this in practice: If CSS is not loading as the network has a high latency, the HTML view should present readable content. If a CSS property is not understood by the browser, it is just skipped – no harm done.

When developing websites and web applications, this means that the HTML is written first, then basic CSS is applied. Afterwards more complex CSS, like CSS3, is added to the mix. JavaScript might then enhance the result even more by adding a dash of interaction.

Every mobile-first responsive web site is progressively enhanced as well, as the designer did not make any assumptions on the device the page is used with. It is made sure that it works from the narrow feature phone, on high end smartphones with advanced browsers and on tablets and desktops.

Not assuming with which technology a site is consumed is a key component in accessible web development, as assistive technology is so diverse.

Progressive enhancement is deliberately not being graceful with errors by providing a good experience for everyone instead of a fall-back experience for non-capable user agents. Also, it does not only cover client site design but also backend design. An enhanced form would not rely on AJAX calls and thus JavaScript alone to send the data but have the “traditional” way of submitting a form in mind as well.

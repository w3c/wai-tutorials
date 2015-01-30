(function () {
	'use strict';

	var addclass = function(el, className) {
		if (el.classList)
			el.classList.add(className);
		else
			el.className += ' ' + className;
	};

	var remclass = function(el, className) {
		if (el.classList)
			el.classList.remove(className);
		else
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}

	var hasclass = function(el, className) {
		if (el.classList)
			return el.classList.contains(className);
		else
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}

	// Fragmention script: https://github.com/chapmanu/fragmentions

	// detect native/existing fragmention support
	if (!('fragmention' in window.location)) (function () {
		// populate fragmention
		location.fragmention = location.fragmention || '';

		// return first element in scope containing case-sensitive text
		function getElementByText(scope, text) {
			// iterate descendants of scope
			for (var all = scope.childNodes, index = 0, element; (element = all[index]); ++index) {
				// conditionally return element containing visible, whitespace-insensitive, case-sensitive text (a match)
				if (element.nodeType == 1 && (element.innerText || element.textContent || '').replace(/\s+/g, ' ').indexOf(text) !== -1) {
					return getElementByText(element, text);
				}
			}

			// return scope (no match)
			return scope;
		}

		// on dom ready or hash change
		function onHashChange() {
			// set location fragmention as uri-decoded text (from href, as hash may be decoded)
			location.fragmention = decodeURIComponent((location.href.match(/#(#|%23)(.+)/) || [0,0,''])[2].replace(/\+/g, ' '));


			// conditionally remove stashed element fragmention attribute
			if (element) {
				element.removeAttribute('fragmention');

				// DEPRECATED: trigger style in IE8
				if (element.runtimeStyle) {
					element.runtimeStyle.windows = element.runtimeStyle.windows;
				}
			}

			// if fragmention exists
			if (location.fragmention) {
				// get element containing text (or return document)
				element = getElementByText(document, location.fragmention);

				// if element found
				if (element !== document) {
					// scroll to element
					element.scrollIntoView();

					// set fragmention attribute
					element.setAttribute('fragmention', '');
					element.setAttribute('tabindex', '-1');
					element.focus();

					// DEPRECATED: trigger style in IE8
					if (element.runtimeStyle) {
						element.runtimeStyle.windows = element.runtimeStyle.windows;
					}
				}
				// otherwise clear stashed element
				else {
					element = null;
				}
			}
		}

		// set stashed element
		var element;

		// add listeners
		if ('addEventListener' in window) {
			window.addEventListener('hashchange', onHashChange);
			document.addEventListener('DOMContentLoaded', onHashChange);
		}
		// DEPRECATED: otherwise use old IE attachEvent
		else {
			window.attachEvent('onhashchange', onHashChange);
			document.attachEvent('onreadystatechange', function () {
				if (document.readyState[0] === 'c') {
					onHashChange();
				}
			});
		}
	})();

	document.addEventListener('DOMContentLoaded', function(){

		var spc = document.createTextNode(' ');

		var headings = document.querySelectorAll('.content h2[id], .content h3[id], .content h4[id]');
		var firstheading = headings[0];

		if (firstheading) {
			addclass(firstheading, 'first');

			var toc_elements = headings; // $('.content h2[id], .ap')

			var excount = 1,
			    apcount = 1;

			var toc_outer = document.createElement('figure');
			toc_outer.setAttribute('role', 'navigation');
			toc_outer.setAttribute('aria-describedby', 'toc_desc');
			toc_outer.innerHTML = '<figcaption id="toc_desc">On this page</figcaption><div class="figcontent"></div>';
			if (toc_outer.classList)
				toc_outer.classList.add('toc');
			else
				toc_outer.className += ' ' + ('toc');
			var toc_wrap = document.createElement('ul');
			var toc_elem = document.createElement('li');
			var nesting = false;
			var subnesting = false;
			var sub_wrap, sub_sub_wrap, last_elem, last_sub_elem;
			Array.prototype.forEach.call(toc_elements, function(el, i){ // … .each(…)
				// console.log(el.localName + ': ' + el.textContent + ' // ' + nesting);
				var cur_elem = toc_elem.cloneNode(true);
				if ((el.localName==="h4") && (subnesting===false)) {
					sub_sub_wrap = toc_wrap.cloneNode(false);
				}
				if ((el.localName==="h3") && (nesting===false)) {
					sub_wrap = toc_wrap.cloneNode(false);
				}
				if ((el.localName==="h3") && (subnesting===true)) {
					last_sub_elem.appendChild(sub_sub_wrap);
					subnesting = false;
				}
				if ((el.localName==="h2") && (nesting===true)) {
					if (subnesting===true) {
						last_sub_elem.appendChild(sub_sub_wrap);
						subnesting = false;
					}
					last_elem.appendChild(sub_wrap);
					nesting = false;
				}

				if (hasclass(el,"ex")) {
					el.insertAdjacentHTML('afterbegin', "<b>Example " + excount + ":</b> ");
					excount++;
					if (!hasclass(el, "inap")) {
						apcount = 1;
					}
				}
				if (hasclass(el,"ap")) {
					el.insertAdjacentHTML('afterbegin', "<b>Approach " + apcount + ":</b> ");
					apcount++;
				}
				if (hasclass(el,"newex")) {
					excount = 1;
				}
				if (hasclass(el,"newap")) {
					apcount = 1;
				}

				cur_elem.innerHTML = '<a class="' + el.getAttribute('class') + '" href="#' + el.getAttribute('id') + '">' + el.innerHTML + '</a>';

				// console.log(cur_elem);
				if (el.localName==="h4") {
					sub_sub_wrap.appendChild(cur_elem);
					subnesting = true;
				} else if (el.localName==="h3") {
					sub_wrap.appendChild(cur_elem);
					nesting = true;
					last_sub_elem = cur_elem;
				} else {
					toc_wrap.appendChild(cur_elem);
					last_elem = cur_elem;
				}
			});

			if (nesting===true) {
				last_elem.appendChild(sub_wrap);
				nesting = false;
			}

			toc_outer.querySelectorAll('.figcontent')[0].innerHTML = toc_wrap.outerHTML;

			var inner = document.querySelectorAll('.inner > :first-child')[0];
			inner.insertAdjacentHTML('beforebegin', toc_outer.outerHTML);

		}

		var plel = document.createElement('a');
		//addclass(plel, 'permalink');
		plel.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024"><path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path></svg> SHARE';
		plel.setAttribute('title', "Permalink");

		var plwrapdiv = document.createElement('div')
		addclass(plwrapdiv, 'permalink');

		var sharebox = document.createElement('div');
		addclass(sharebox, 'sharebox');
		var shareboxtext = '<p><label>Link to this section:<input type="url" value="%s" readonly> <span>Shortcut to copy the link: <kbd>ctrl</kbd> + <kbd>C</kbd>/<kbd>⌘</kbd><kbd>C</kbd></span></label></p><p><a href="mailto:?subject=Web%20Accessibility%20Tutorials&body=Hi!%0AYou%20might%20be%20interested%20in%20this%20section%20of%20W3C%20WAI%E2%80%99s%20Web%20Accessibility%20Tutorials%3A%0A%0A%s">Email a link to this section</a><button>Close</button></p>';

		var url = window.location.origin + window.location.pathname;

		var elements = headings;
		Array.prototype.forEach.call(elements, function(el, i){ // … .each(…)

			var cplel = plel.cloneNode(true);
			cplel.setAttribute('href', '#' + el.id);

			var csbtext = shareboxtext.replace("%s", url + '#' + el.id).replace("%s", url + '#' + el.id);
			var csb = sharebox.cloneNode(true);
			csb.innerHTML = csbtext;

			var cplwrapdiv = plwrapdiv.cloneNode(true);
			cplwrapdiv.appendChild(cplel);
			cplwrapdiv.appendChild(csb);
			addclass(cplwrapdiv, el.localName);

			cplel.addEventListener('click', function(e){
				var sbox = this.nextSibling;
				if (hasclass(sbox, 'open')) {
					remclass(this.nextSibling, 'open');
				} else {
					addclass(this.nextSibling, 'open');
					this.nextSibling.querySelector('input').select();
				}
				e.preventDefault();

			});

			el.parentNode.insertBefore(cplwrapdiv, el);
		});

		var sbbuttons = document.querySelectorAll('.sharebox button');
		Array.prototype.forEach.call(sbbuttons, function(el, i){ // … .each(…)
			el.addEventListener('click', function(){
				var openboxes = document.querySelectorAll('.sharebox.open');
		  	for (var i = openboxes.length - 1; i >= 0; i--) {
		  		remclass(openboxes[i], 'open');
		  	};
		  	el.parentNode.parentNode.parentNode.querySelector('a').focus();
			});
		});

		document.addEventListener('click', function(event){
		  var hasParent = false;
		    for(var node = event.target; node != document.body; node = node.parentNode)
		    {
		      if(hasclass(node, 'permalink')) {
		        hasParent = true;
		        break;
		      }
		    }
		  if(!hasParent) {
		  	var openboxes = document.querySelectorAll('.sharebox.open');
		  	for (var i = openboxes.length - 1; i >= 0; i--) {
		  		remclass(openboxes[i], 'open');
		  	};
		  }
		});

		if ((window.location.hostname !== 'www.w3.org') || (window.location.hostname !== 'w3.org')) {
			var notification = document.createElement('div');
			notification.className = 'not-w3c-notification';
			notification.innerHTML = 'This is an Editor’s draft, for <em>preview purposes only</em>. Please see, and link to, released tutorials at <a href="http://w3.org/WAI/tutorials">w3.org/WAI/tutorials/</a>.';
			document.getElementsByClassName('w3c-wai-header')[0].insertAdjacentHTML('beforebegin', notification.outerHTML);

			document.getElementsByTagName('title')[0].innerHTML = '[PREVIEW] ' + document.getElementsByTagName('title')[0].innerHTML;
		}


	});
}());

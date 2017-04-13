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
			toc_outer.innerHTML = '<figcaption id="toc_desc">On this page <a href="#skipotp" class="visuallyhidden focusable">(skip)</a></figcaption><div class="figcontent"></div>';
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
			inner.insertAdjacentHTML('beforebegin', toc_outer.outerHTML + '<span id="skipotp" class="visuallyhidden"></span>');

		}

		var plel = document.createElement('a');
		//addclass(plel, 'permalink');
		plel.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024"><path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path></svg> SHARE';

		var plwrapdiv = document.createElement('div')
		addclass(plwrapdiv, 'permalink');

		var sharebox = document.createElement('div');
		addclass(sharebox, 'sharebox');
		var shareboxtext = '<p><label>Link to this section:<input type="url" value="%s" readonly> Shortcut to copy the link: <kbd>ctrl</kbd>+<kbd>C</kbd> <em>or</em> <kbd>⌘</kbd><kbd>C</kbd></label></p><p><a href="mailto:?subject=Web%20Accessibility%20Tutorials&body=Hi!%0AYou%20might%20be%20interested%20in%20this%20section%20of%20W3C%20WAI%E2%80%99s%20Web%20Accessibility%20Tutorials%3A%0A%0A%s">E-mail a link to this section</a><button>Close</button></p>';

		var url = window.location.origin + window.location.pathname;

		var elements = headings;
		Array.prototype.forEach.call(elements, function(el, i){ // … .each(…)

			var cplel = plel.cloneNode(true);
			cplel.setAttribute('href', '#' + el.id);
			cplel.setAttribute('aria-label', 'Share Link to the section “' + el.textContent + '”');

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

		if ((window.location.hostname !== 'www.w3.org') && (window.location.hostname !== 'w3.org')) {
			var notification = document.createElement('div');
			notification.className = 'not-w3c-notification';
			notification.innerHTML = 'This is an Editor’s draft, for <em>preview purposes only</em>. Please see, and link to, released tutorials at <a href="http://w3.org/WAI/tutorials">w3.org/WAI/tutorials/</a>.';
			document.getElementsByClassName('w3c-wai-header')[0].insertAdjacentHTML('beforebegin', notification.outerHTML);

			document.getElementsByTagName('title')[0].innerHTML = '[PREVIEW] ' + document.getElementsByTagName('title')[0].innerHTML;
		}


	});
}());

/* fontfaceobserver Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
(function(){'use strict';function f(a){this.a=k;this.b=void 0;this.d=[];var b=this;try{a(function(a){l(b,a)},function(a){m(b,a)})}catch(c){m(b,c)}}var k=2;function n(a){return new f(function(b,c){c(a)})}function p(a){return new f(function(b){b(a)})}
function l(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise resolved with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||l(a,b);c=!0},function(b){c||m(a,b);c=!0});return}}catch(e){c||m(a,e);return}a.a=0;a.b=b;q(a)}}function m(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise rejected with itself.");a.a=1;a.b=b;q(a)}}
function q(a){setTimeout(function(){if(a.a!==k)for(;a.d.length;){var b=a.d.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(g){b(g)}}},0)}f.prototype.e=function(a){return this.c(void 0,a)};f.prototype.c=function(a,b){var c=this;return new f(function(d,e){c.d.push([a,b,d,e]);q(c)})};
function r(a){return new f(function(b,c){function d(c){return function(d){g[c]=d;e+=1;e===a.length&&b(g)}}var e=0,g=[];0===a.length&&b(g);for(var h=0;h<a.length;h+=1)a[h].c(d(h),c)})}function s(a){return new f(function(b,c){for(var d=0;d<a.length;d+=1)a[d].c(b,c)})};window.Promise||(window.Promise=f,window.Promise.resolve=p,window.Promise.reject=n,window.Promise.race=s,window.Promise.all=r,window.Promise.prototype.then=f.prototype.c,window.Promise.prototype["catch"]=f.prototype.e);}());
(function(){'use strict';function e(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function r(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
function s(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function t(a,b){a.b.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);s(a)};function u(a,b){this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"stretch";this.featureSettings=b.featureSettings||"normal"}var v=null;
u.prototype.a=function(a){a=a||"BESbswy";var b="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",c=document.createElement("div"),k=new e(a),l=new e(a),m=new e(a),f=-1,d=-1,g=-1,n=-1,p=-1,q=-1,h=this;r(k,"sans-serif",b);r(l,"serif",b);r(m,"monospace",b);c.appendChild(k.a);c.appendChild(l.a);
c.appendChild(m.a);document.body.appendChild(c);n=k.a.offsetWidth;p=l.a.offsetWidth;q=m.a.offsetWidth;return new Promise(function(a,y){function w(){null!==c.parentNode&&document.body.removeChild(c)}function x(){if(-1!==f&&-1!==d&&-1!==g&&f===d&&d===g){if(null===v){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);v=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}v?f===n&&d===n&&g===n||f===p&&d===p&&g===p||f===q&&d===q&&g===q||(w(),a(h)):(w(),
a(h))}}setTimeout(function(){w();y(h)},3E3);t(k,function(a){f=a;x()});r(k,h.family+",sans-serif",b);t(l,function(a){d=a;x()});r(l,h.family+",serif",b);t(m,function(a){g=a;x()});r(m,h.family+",monospace",b)})};window.FontFaceObserver=u;window.FontFaceObserver.prototype.check=u.prototype.a;}());

(function( w ){
  // if the class is already set, we're good.
  if( w.document.documentElement.className.indexOf( "vollkorn-loaded" ) > -1 ){
    return;
  }
  // var fontA = new w.FontFaceObserver( "Vollkorn", {
  //   weight: 400
  // });
  // var fontB = new w.FontFaceObserver( "Vollkorn", {
  //   weight: 600
  // });
	var fontC = new w.FontFaceObserver( "Noto Sans", {
    weight: 400
  });
  var fontD = new w.FontFaceObserver( "Noto Sans", {
    weight: 600
  });
	var fontE = new w.FontFaceObserver( "Noto Sans", {
    weight: 400,
		style: "italic"
  });
  var fontF = new w.FontFaceObserver( "Noto Sans", {
    weight: 600,
		style: "italic"
  });
  /*var fontC = new w.FontFaceObserver( "Vollkorn", {
    weight: 400,
    style: "italic"
  });
  var fontD = new w.FontFaceObserver( "Vollkorn", {
    weight: 600,
    style: "italic"
  });*/
  w.Promise
    .all([fontC.check(), fontD.check(), fontE.check(), fontF.check()])
    .then(function(){
      w.document.documentElement.className += " fonts-loaded";
    });
}( this ));

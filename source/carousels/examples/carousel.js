var myCarousel = (function() {

  var carousel, slides, index, slidenav, settings, timer;

  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }

  var parseHTML = function(str) {
    var el =
    el.innerHTML = str;
    return el;
  };

  function init(set) {
    settings = set;
    carousel = document.getElementById(settings.id);
    slides = carousel.querySelectorAll('.slide');

    carousel.className = 'active carousel';

    var ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML = '<li>' +
        '<button type="button" class="btn-prev"><img src="/img/chevron-left.png" alt="Previous Slide"></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><img src="/img/chevron-right.png" alt="Next Slide"></button>' +
      '</li>';

    ctrls.querySelector('.btn-prev').addEventListener('click', function(){
      prevSlide();
    });

    ctrls.querySelector('.btn-next').addEventListener('click', function(){
      nextSlide();
    });

    carousel.appendChild(ctrls);

    if (settings.slidenav || settings.automate) {
      slidenav = document.createElement('ul');

      slidenav.className = 'slidenav';

      if (settings.automate) {
        var li = document.createElement('li');
        li.innerHTML = '<button data-stop=true><span class="visuallyhidden">Stop Animation </span>￭</button>';
         slidenav.appendChild(li);
      }

      if (settings.slidenav) {
        forEachElement(slides, function(el, i){
          var li = document.createElement('li');
          var klass = (i===0) ? 'class="current" ' : '';
          var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Slide)</span>' : '';

          li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="visuallyhidden">News</span> ' + (i+1) + kurrent + '</button>';
          slidenav.appendChild(li);
        });
      }

      slidenav.addEventListener('click', function(event) {
        var button = event.target;
        if (button.localName == 'button') {
          if (button.getAttribute('data-slide')) {
            stopAutomation();
            setSlides(button.getAttribute('data-slide'), true);
          } else if (button.getAttribute('data-stop')) {
            stopAutomation();
          } else if (button.getAttribute('data-start')) {
            startAutomation();
          }
        }
      }, true);

      carousel.className = 'active carousel with-slidenav';
      carousel.appendChild(slidenav);
    }

    index = 0;
    setSlides(index);

     if (settings.automate) {
      timer = setTimeout(function () {
        nextSlide();
      }, 5000);
    }
  }

  function setSlides(new_current, setFocus, transition) {
    setFocus = typeof setFocus !== 'undefined' ? setFocus : false;
    transition = typeof transition !== 'undefined' ? transition : 'none';

    new_current = parseFloat(new_current);

    var length = slides.length;
    var new_next = new_current+1;
    var new_prev = new_current-1;

    if(new_next === length) {
      new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    for (var i = slides.length - 1; i >= 0; i--) {
      slides[i].className = "slide";
    }

    slides[new_next].className = 'next slide';
    slides[new_prev].className = 'prev slide';

    if (transition == 'prev') {
      slides[new_prev].className = 'prev slide in-transition';
      slides[new_prev].style.zIndex = '0';
    }

    if (transition == 'next') {
      slides[new_next].className = 'next slide in-transition';
      slides[new_next].style.zIndex = '0';
    }

    slides[new_current].className = 'current slide';

    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = "";
      }
      buttons[new_current].className = "current";
    }

    index = new_current;

    setTimeout(function () {
      carousel.querySelector('.slide.prev').classList.remove('in-transition');
      carousel.querySelector('.slide.next').classList.remove('in-transition');
      if (setFocus) {
        slides[new_current].setAttribute('tabindex', '-1');
        slides[new_current].focus();
      }
    }, 610);

  }

  function nextSlide() {

    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    setSlides(new_current, false, 'prev');

    if (settings.automate) {
      timer = setTimeout(function () {
        nextSlide();
      }, 5000);
    }

  }

  function prevSlide() {
    var length = slides.length,
    new_current = index - 1;

    if(new_current < 0) {
      new_current = length-1;
    }

    setSlides(new_current, false, 'next');

  }

  function stopAutomation() {
    clearTimeout(timer);
    settings.automate = false;
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
    _this.removeAttribute('data-stop');
    _this.setAttribute('data-start', 'true');
  }

  function startAutomation() {
    settings.automate = true;
    timer = setTimeout(function () {
      nextSlide();
    }, 5000);
    _this = carousel.querySelector('[data-stop], [data-start]');
    _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
    _this.setAttribute('data-stop', 'true');
    _this.removeAttribute('data-start');
  }

  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides,
    stop:stopAutomation,
    start:startAutomation
  };
});

var c = new myCarousel();
c.init({
  id: 'c',
  slidenav: true,
  automate: true
});

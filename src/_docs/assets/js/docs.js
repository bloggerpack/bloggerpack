/*!
 * {{ base.1.name }} Docs ({{ base.1.homepage }})
 * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 */

(function() {
  'use strict';

  var nav = document.getElementById('navDoc');
  var navToggle = document.getElementById('navDocToggle');
  var navAnchor = nav.getElementsByTagName('a');
  var navActive = nav.getElementsByClassName('active');
  var navCurrent = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

  for (var i = 0; i < navAnchor.length; i++) {
    var navHref = navAnchor[i].href.substring(navAnchor[i].href.lastIndexOf('/')+1);
    if ((navHref == navCurrent) && (navHref != '')) {
      navAnchor[i].classList.add('active');
    }
    if ((navCurrent == '') && (navHref == 'index.html')) {
      navAnchor[i].classList.add('active');
    }
  }

  nav.scroll(0, (navActive[0].offsetTop - 45));

  navToggle.addEventListener('click', function() {
    document.body.classList.toggle('show-nav');
    document.body.classList.remove('show-toc');
  }, false);

  // ===

  var tocToggle = document.getElementById('tocDocToggle');
  var tocOverlay = document.getElementById('tocDocOverlay');

  tocToggle.addEventListener('click', function() {
    document.body.classList.toggle('show-toc');
    document.body.classList.remove('show-nav');
  }, false);

  tocOverlay.addEventListener('click', function() {
    document.body.classList.remove('show-toc');
  }, false);

  // ===

  anchors.options = {
    icon: '#'
  }
  anchors.add('.doc-content > h2, .doc-content > h3, .doc-content > h4, .doc-content > h5');

  // ===

  tocbot.init({
    tocSelector: '.doc-toc',
    contentSelector: '.doc-content',
    headingSelector: 'h2, h3, h4, h5',
  });
})();

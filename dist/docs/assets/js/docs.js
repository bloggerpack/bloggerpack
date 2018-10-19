/*!
 * Theme name Docs
 * Based on Bloggerable
 */
/*!
 * Bloggerable Docs (https://blogger-starter.github.io/bloggerable)
 * Copyright 2017-2018 Igoy Nawamreh (https://twitter.com/igoynawamreh)
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 */
!function(){"use strict";for(var t=document.getElementById("docNav"),e=document.getElementById("docNavToggle"),o=t.getElementsByTagName("a"),c=t.getElementsByClassName("active"),n=window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),s=0;s<o.length;s++){var d=o[s].href.substring(o[s].href.lastIndexOf("/")+1);d==n&&""!=d&&o[s].classList.add("active"),""==n&&"index.html"==d&&o[s].classList.add("active")}t.scroll(0,c[0].offsetTop-45),e.addEventListener("click",function(){document.body.classList.toggle("show-nav"),document.body.classList.remove("show-toc")},!1),document.getElementById("docTocToggle").addEventListener("click",function(){document.body.classList.toggle("show-toc"),document.body.classList.remove("show-nav")},!1),document.getElementById("docOverlay").addEventListener("click",function(){document.body.classList.remove("show-nav"),document.body.classList.remove("show-toc")},!1),anchors.options={icon:"#"},anchors.add(".doc-content > h2, .doc-content > h3, .doc-content > h4, .doc-content > h5"),tocbot.init({tocSelector:".doc-toc",contentSelector:".doc-content",headingSelector:"h2, h3, h4, h5"})}();
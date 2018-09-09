/*!
 * Bloggerable Docs (https://blogger-starter.github.io/bloggerable)
 * Copyright 2017-2018 Igoy Nawamreh (https://twitter.com/igoynawamreh)
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 */
!function(){"use strict";for(var t=document.getElementById("navDoc"),n=document.getElementById("navDocToggle"),e=t.getElementsByTagName("a"),o=t.getElementsByClassName("active"),a=window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),c=0;c<e.length;c++){var s=e[c].href.substring(e[c].href.lastIndexOf("/")+1);s==a&&""!=s&&e[c].classList.add("active"),""==a&&"index.html"==s&&e[c].classList.add("active")}t.scroll(0,o[0].offsetTop-45),n.addEventListener("click",function(){document.body.classList.toggle("show-nav")},!1),anchors.options={icon:"#"},anchors.add(".doc-content > h2, .doc-content > h3, .doc-content > h4, .doc-content > h5")}();
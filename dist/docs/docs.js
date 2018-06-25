/*!
 * Bloggerable Docs (https://blogger-starter.github.io/bloggerable)
 * Copyright 2017-2018 Igoy Nawamreh (https://twitter.com/igoynawamreh)
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 */
!function(){"use strict";for(var e=document.getElementById("navDoc"),t=document.getElementById("navDocToggle"),n=e.getElementsByTagName("a"),a=e.getElementsByClassName("active"),s=window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),o=0;o<n.length;o++){var c=n[o].href.substring(n[o].href.lastIndexOf("/")+1);c==s&&""!=c&&n[o].classList.add("active"),""==s&&"index.html"==c&&n[o].classList.add("active")}e.scroll(0,a[0].offsetTop-45),t.addEventListener("click",function(){document.body.classList.toggle("show-nav")},!1)}();
/*!
 * Name         : Theme name
 * Version      : 1.0
 * Package name : test
 */
!function e(t,r,n){function o(u,l){if(!r[u]){if(!t[u]){var c="function"==typeof require&&require;if(!l&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=r[u]={exports:{}};t[u][0].call(s.exports,(function(e){return o(t[u][1][e]||e)}),s,s.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t,r){"use strict";console.log("Example")},{}],2:[function(e,t,r){"use strict";e("./example"),e("./js-in-template")},{"./example":1,"./js-in-template":3}],3:[function(e,t,r){"use strict";console.log("JS in template 1"),console.log("JS in template 2")},{}]},{},[2]);
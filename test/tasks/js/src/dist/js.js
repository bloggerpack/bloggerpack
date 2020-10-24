/*!
 * Name         : Theme name
 * Version      : 1.0
 * Package name : test
 */
!function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!c&&f)return f(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";console.log("JS in template 1"),console.log("JS in template 2")},{}],2:[function(e,t,r){"use strict";console.log("Example")},{}],3:[function(e,t,r){"use strict";e("./example"),e("./auto-extract")},{"./auto-extract":1,"./example":2}]},{},[3]);
// ==UserScript==
// @name         MSDocsInEnglish
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Force microsoft docs to US
// @author       Xadizyj
// @match        https://docs.microsoft.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var regex    = /^\/(?!en-us)[a-zA-Z-]*\/(.+)/;
    var location = window.location;
    var path     = location.pathname;

    if(path.match(regex))
    {
        var redirectTo = path.replace(regex, "/en-us/$1");
        window.location.pathname = redirectTo;
    }
})();

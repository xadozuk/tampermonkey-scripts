// ==UserScript==
// @name         MSDocsInEnglish
// @namespace    xadozuk.msdocsinenglish
// @version      1.0
// @description  Force microsoft docs to US
// @author       Xadozuk
// @match        https://docs.microsoft.com/*
// @match        https://learn.microsoft.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/xadozuk/tampermonkey-scripts/refs/heads/main/msdocs_in_english.js
// @updateURL    https://raw.githubusercontent.com/xadozuk/tampermonkey-scripts/refs/heads/main/msdocs_in_english.js
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

// ==UserScript==
// @name         LSS-FME-Icons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Einsatzicons im FME-Stil
// @author       Jan (KBOE2) & JuMaHo
// @match        https://www.leitstellenspiel.de/*
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @include      *://www.meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/
// ==/UserScript==

$("head").append('<script id="lss_fmeIcons" src="https://kboe2.github.io/LSS-FMEIcons/fme-icons.dev.js" type="text/javascript"></script>');

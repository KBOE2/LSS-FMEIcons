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

(function() {
    'use strict';

    I18n.translations.de.fmeIcons = {
        bma: "Brandmeldeanlage"
    }

    // If we are on the main-page
    if (document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        // Icons in Missionlist
        $('.missionSideBarEntry').each(function() {
            let bma = !!$(this).text().match(I18n.t("fmeIcons.bma"));;
            console.log(bma);
        });
    }
})();

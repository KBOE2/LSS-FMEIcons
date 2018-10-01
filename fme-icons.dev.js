(function (I18n, $) {

    I18n.translations.de.fmeIcons = {
        bma: "Brandmeldeanlage"
    };

    // If we are on the main-page
    if (document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        // Icons in Missionlist
        $('.missionSideBarEntry').each(function () {
            let bma = !!$(this).text().match(I18n.t("fmeIcons.bma"));
            console.log(bma);
        });
    }
})(I18n, jQuery);

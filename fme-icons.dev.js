(function (I18n, $) {

    I18n.translations.de.fmeIcons = {
        bma: "Brandmeldeanlage"
    };

    // If we are on the main-page
    if (document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        // Icons in Missionlist
        $('.missionSideBarEntry').each(function () {
            let bma = !!$(this).text().match(I18n.t("fmeIcons.bma"));
            let missionId = $(this).attr('mission_id');
            let missionType = $(this).attr('mission_type_id');
            let missionStatus = $(this).children().hasClass('mission_panel_green') ? "green" : $(this).children().hasClass('mission_panel_yellow') ? "yellow": "red";
            console.log(missionStatus);
        });
    }
})(I18n, jQuery);

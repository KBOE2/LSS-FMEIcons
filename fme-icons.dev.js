(function (I18n, $) {

    let svg_template = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" height="1000.0" viewBox="0 0 1000.0 1000.0" width="1000.0" version="1.1" id="{{fmeIconId}}"><g><circle r="500" cx="50%" cy="50%" stroke="{{color}}" fill="{{color}}"/></g></svg>';

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
            $(this).find('.mission_vehicle_state').remove();
            $(this).find('.col-xs-1').append(svg_template.replace(/{{color}}/g, missionStatus));
        });
    }
})(I18n, jQuery);

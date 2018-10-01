(function (I18n, $) {

    let svg_template = '<svg xmlns="http://www.w3.org/2000/svg" class="mission_vehicle_state" height="1000.0" viewBox="0 0 1000.0 1000.0" width="1000.0" version="1.1" id="{{id}}"><g><circle r="500" cx="50%" cy="50%" stroke="{{color}}" fill="{{color}}"/></g></svg>';

    let colors = {
        "red": "#C9302C",
        "yellow": "#FEDC32",
        "green": "#32CD32"
    };

    I18n.translations.de.fmeIcons = {
        bma: "Brandmeldeanlage",
        bmaKeyword: "BMA"
    };

    function missionList() {
        $('.missionSideBarEntry').each(function () {
            let bma = !!$(this).text().match(I18n.t("fmeIcons.bma"));
            let missionId = $(this).attr('mission_id');
            let missionType = $(this).attr('mission_type_id');
            let missionStatus = $(this).children().hasClass('mission_panel_green') ? "green" : $(this).children().hasClass('mission_panel_yellow') ? "yellow": "red";
            $(this).find('.mission_vehicle_state').remove();
            $(this).find('.col-xs-1').append(svg_template.replace(/{{id}}/g, "mission_vehicle_state_" + missionId).replace(/{{color}}/g, colors[missionStatus]));
        });
    }

    // If we are on the main-page
    if (document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        // Icons in Missionlist
        missionList();
    }

    let missionMarkerAddOrig = missionMarkerAdd;

    missionMarkerAdd = function() {
        missionMarkerAddOrig();
        missionList();
    };
})(I18n, jQuery);

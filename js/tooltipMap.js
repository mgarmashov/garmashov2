//Show and Hide tooltip with Map in Home section

function tooltip() {
    var tooltopId;
    $('.tooltip__item').css({'visibility': 'hidden', 'display':'none'})

    //show tooltip
    $('.tooltip__link').click(function (event) {
        event.preventDefault();
        tooltopId = $(this).attr('data-tooltipId');
        if ( $('#' + tooltopId).css('visibility') == 'hidden' ) {
            $('#' + tooltopId).css('visibility', 'visible');
            $('#' + tooltopId).show('slow');
        }
        else {
            $('#' + tooltopId).css('visibility', 'hidden');
            $('#' + tooltopId).hide('slow');
        }


        //initMap();


    });

    //Hide tooltip, if we click 1)not a link 2)not a map
    $(document).click(function (event) {
        if ($(event.target).closest($('.tooltip__link[data-tooltipId =' + tooltopId + ']')).length) {
            return;
        }
        if ($(event.target).closest($('#' + tooltopId)).length) {
            return;
        }
        $('#' + tooltopId).css('visibility', 'hidden');
        $('#' + tooltopId).hide('slow');
        event.stopPropagation();
    });
}







//
//initMap()
//function initMap() {
//    var myLatLng = {lat: 56.837706, lng: 60.601060};
//
//    // Create a map object and specify the DOM element for display.
//    var map = new google.maps.Map(document.getElementById('yekb1'), {
//        center: myLatLng,
//        scrollwheel: false,
//        zoom: 15
//    });
//
//    // Create a marker and set its position.
//    var marker = new google.maps.Marker({
//        map: map,
//        position: myLatLng,
//        title: 'Yekaterinburg, Russia'
//    });
//}
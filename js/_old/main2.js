//$(function() {
//    $.scrollify({
//        section : "section"
//    });
//});

$(document).ready(function() {
    $('#content').fullpage({
        sectionSelector: 'section',
        scrollBar: true,
        //continuousVertical: true,
        scrollOverflow: false,
        paddingTop: '80px',
        paddingBottom: '80px',
        fixedElements: ' footer, .topLine',
        verticalCentered: true,

        //Navigation
        menu: '#navmenu',
        lockAnchors: false,
        anchors:['s0', 's1', 's2', 's3'],
        //navigation: true,
        //navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        //showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
    });
});


$(".rotate").textrotator({
    animation: "dissolve",
    separator: "|",
    speed: 3000
});
//==============
//=======Scroll with navbar links
//==============




//this code describes, how to scroll after clicking in navbar




function navigation(breakpointXL, allLinks, paddingTop) {
    allLinks.click(function (event) {
        event.preventDefault(); //block link-direction
        $('#navmenu li').removeClass('active');
        var sectID = jQuery(this).attr('href');
        $(this).parent().addClass('active');

        var i;
        ($(window).width() > breakpointXL) && (isChrome==true) ? (i = ($(sectID).offset().top - paddingTop)) : (i = $(sectID).offset().top);

        $('html, body').animate({
            scrollTop: i
        }, 700);


        return false;
    });
}





function navMarking(allLinks, sections, sectTops, sectBottoms, breakpointXL){

    //=================================
    //Change active button in NavBar


        newScrollTop = document.documentElement.scrollTop;
        if (($(window).width() > breakpointXL) && (isChrome==true)){
            newScrollTop = (jQuery("body").scrollTop());
        }
        setTimeout(function () {

            var middleLine = newScrollTop + ($(window).height() / 2); //count NEW position of middle line
            //console.log(middleLine)
            for (i = 0; i < sections.length; i++) {


                sectTops[i] = ($(sections[i]).offset().top); // count NEW top position of every section
                sectBottoms[i] = $(sections[i]).offset().top + $(sections[i]).height(); // count NEW bottom position of every section
                //console.log('блок '+ i+' расстояния '+sectTops[i]+','+sectBottoms[i])


                if (sectTops[i] < middleLine && sectBottoms[i] > middleLine) { //find, which section keeps MiddleLine between Bottom and Top
                    $('#navmenu li').removeClass('active');
                    $(allLinks[i]).parent().addClass('active');
                    return 0;
                }
            }
        }, 300);

}

//$(".rotate").textrotator({
//    animation: "dissolve",
//    separator: "|",
//    speed: 3000
//});



$(".home__specialization").typed({
    strings: ["System Analyst",  "IT Architect", "Web-developer", "UX Designer", "Project Manager"],
    typeSpeed: 100,
    backDelay: 1500,
    loop: true,
    cursorChar: "|"
    //showCursor: false
});

new WOW(
    {
        offset: 200,
        mobile: false
    }
).init();

$('.tooltip').tooltipster();


// Turn On map tooltip
tooltip();






var navbarW = '150px';


$('#headerButton').click(function(event){
    event.preventDefault();
    if ($(this).hasClass('is-active')){
        //$('#headerButton, #header, #content').removeClass('smallHeader--opened');
        $('#headerButton').removeClass('is-active');
        $('#header').animate({left: "-"+navbarW}, { duration: 500, queue: false });
        $('#content, #headerButton').animate({left: "0px"}, { duration: 500, queue: false });
    } else{
        //$('#headerButton, #header, #content').addClass('smallHeader--opened');
        $('#headerButton').addClass('is-active');
        $('#header').animate({left: "0px"}, { duration: 500, queue: false });
        $('#content, #headerButton').animate({left: navbarW}, { duration: 500, queue: false });
    }
});
$(document).click(function (event) {
    if ($(event.target).closest($('#header')).length) {
        return;
    }
    if ($(event.target).closest($('#headerButton')).length) {
        return;
    }
    //$('#headerButton, #header, #content').removeClass('smallHeader--opened');
    $('#headerButton, #header, #content').removeClass('is-active');
    $('#header').animate({left: "-"+navbarW}, { duration: 500, queue: false });
    $('#content, #headerButton').animate({left: "0px"}, { duration: 500, queue: false });
    event.stopPropagation();
});





var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);





$(document).ready(function() {


    //Config and variables
    var skillsTabsWidth = 80;
    var sections=$("section"); // count section-blocks
    var paddingTop = $('section:nth-child(1)').offset().top;

    var sectTops = [];
    var sectBottoms = [];

    var allLinks=$('#navmenu li a, a[href="#home"]');
    var breakpointXL = 1080;

    var contentHeight = sections.last().offset().top + sections.last().height() - paddingTop;

    //var newScrollTop = (jQuery("body").scrollTop());
    var newScrollTop = document.documentElement.scrollTop;


//=============================================================================



    navigation(breakpointXL,allLinks, paddingTop);
    leavesInit(breakpointXL);




    if (($(window).width() > breakpointXL) && (isChrome==true)) {
        prepareLargeScroll(paddingTop,  sections, newScrollTop);
        //leavesInit(breakpointXL);
    }



    $(window).resize(function() {
        if (($(window).width() > breakpointXL) && (isChrome==true)){
            //paddingTop = $('section:nth-child(1)').offset().top;
            //if(!$("section").is("#tempsect")) {
            //    $('.content').append('<section id="tempsect" style="height: 10%"></section>');
            //}
            prepareLargeScroll(paddingTop, sections, newScrollTop);
            //leavesInit(breakpointXL);
        }
        else {
            $('body').css('height', 'inherit');
            $(sections).css({"transform": "none"});
        }

    });





    jQuery(document).scroll(function(event) {
        navMarking(allLinks, sections, sectTops, sectBottoms, breakpointXL);

        if (($(window).width() > breakpointXL) && (isChrome==true)) {
            scrollBigScreen(sections, newScrollTop, paddingTop);
        }
    });





    /* ---------------------------------------------- /*
     * E-mail validation
     /* ---------------------------------------------- */

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };


    /* ---------------------------------------------- /*
     * Contact form ajax
     /* ---------------------------------------------- */

    $("#contact-form").submit(function(e) {

        e.preventDefault();

        var c_name = $("#c_name").val();
        var c_email = $("#c_email").val();
        var c_message = $("#c_message ").val();
        var responseMessage = $('.ajax-response');

        if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
            responseMessage.fadeIn(500);
            responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
        }

        else {
            $.ajax({
                type: "POST",
                url: "assets/contactForm.php",
                dataType: 'json',
                data: {
                    c_email: c_email,
                    c_name: c_name,
                    c_message: c_message
                },
                beforeSend: function(result) {
                    $('#contact-form button').empty();
                    $('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
                },
                success: function(result) {
                    if(result.sendstatus == 1) {
                        responseMessage.html(result.message);
                        responseMessage.fadeIn(500);
                        $('#contact-form').fadeOut(500);
                    } else {
                        $('#contact-form button').empty();
                        $('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
                        responseMessage.html(result.message);
                        responseMessage.fadeIn(1000);
                    }
                }
            });
        }

        return false;

    });


    /* ---------------------------------------------- /*
     * Slider Testimonails - bxSlider
     /* ---------------------------------------------- */

    $('.testimonials__slider').bxSlider({
        //slideWidth: 200,
        //useCSS: true,
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        autoHover: true,
        controls: false,
        //speed: 500,
        pause: 500,
        infiniteLoop: true

        //autoControls: true
        //slideMargin: 10
    });

});















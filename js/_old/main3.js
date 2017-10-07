$(".rotate").textrotator({
    animation: "dissolve",
    separator: "|",
    speed: 3000
});



//Config
var paddingTop = $('section:nth-child(1)').offset().top;
var paddingBottom = 5;
var paddingRight = 5;
var scrollSpeed=1.3;


//$('body').prependTo(endOfSections)



//Global variables
var lastSection=$('section:nth-last-child(1)');
//var endOfSections = lastSection.offset().top + lastSection.height()/2 - $('section:nth-child(1)').offset().top*2;
var endOfSections = lastSection.offset().top + lastSection.height();
var contentHeight = lastSection.offset().top + lastSection.height() - paddingTop;
var delay=100


var newScrollTop = 0;
var previousScrollTop = 0;
var screenHeight = $(window).height();
var contentBlockHeight = $('.content').height();
var contTop = $('.content').offset().top;
var contBot = contTop+contentBlockHeight;
console.log('Screen height: '+screenHeight);
console.log('Content height: '+contentBlockHeight);
console.log('Text height: '+contentHeight);
console.log('Padding Top: '+paddingTop);
console.log('Content Block Top: '+contTop);
console.log('Content Block Bottom: '+contBot);

var currentScrollTop = $(window).scrollTop();
var direction = 'down'
var target;
var scrollTimer;
var animating = false;



var sections=$("section"); // count section-blocks
//for (var j = 0; j < sections.length; j++) { //find position of sections of every section
//    sections[j]=$(sections[j]).offset().top;
//}


//=========================================

$('body').css('height', (contentHeight+(paddingTop*2)+1) +'px');
sections.css({"transform": "translateY(-" + (newScrollTop) + "px)"});

//=========================================

// check the direction
function updateDirection() {
    if ($(window).scrollTop() >= currentScrollTop)
        direction = 'down';
    else
        direction = 'up';
    currentScrollTop = $(window).scrollTop();
}

// return the closest element (depending on direction)
function getClosestElement() {
    var $list = sections
        , wt = contTop
        , wh = contentBlockHeight
        , refY = wh
        , wtd = wt + refY - 1
        ;

    if (direction == 'down') {
        $list.each(function() {
            var st = $(this).position().top;
            if ((st > wt) && (st <= wtd)) {
                target = $(this);
                //console.log($target);
                return false; // just to break the each loop
            }
        });
    } else {
        wtd = wt - refY + 1;
        $list.each(function() {
            var st = $(this).position().top;
            if ((st < wt) && (st >= wtd)) {
                target = $(this);
                //console.log($target);
                return false; // just to break the each loop
            }
        });
    }

    return target;

}

// snap
function snap() {
    var curEl = getClosestElement();
    if (curEl) {
        animating = true;
        console.log(curEl)
        console.log('!!!!!!! '+curEl.offset().top)
        $('body').animate({
            scrollTop: (curEl.offset().top)
        }, 100, function() {

            window.clearTimeout(scrollTimer);
            animating = false;
        });
        newScrollTop = (jQuery("body").scrollTop());
        $('section').css({"transform": "translateY(-" + (newScrollTop) + "px)"});
    }
}





//console.log(newScrollTop);

jQuery(document).scroll(function(event) {
    //if (animating)
    //    return;

    newScrollTop = (jQuery("body").scrollTop());
    $('section').css({"transform": "translateY(-" + (newScrollTop) + "px)"});
    previousScrollTop = (jQuery("body").scrollTop());
    //updateDirection()
    //console.log(direction);
    //getClosestElement();
    //console.log(getClosestElement());


    //if(newScrollTop < previousScrollTop-screenHeight/3 || newScrollTop > previousScrollTop+screenHeight/3) {

        //newScrollTop = (jQuery("body").scrollTop());
        //scrollNew(newScrollTop);


    //window.clearTimeout(scrollTimer);
    //scrollTimer = window.setTimeout(snap, delay);


    //}
    //console.log('previous: '+previousScrollTop);
    //console.log('current: '+newScrollTop);


    //for (i=0; i<sections.length; i++){
    //    var t=$(sections[i]).offset().top;
    //    var b=$(sections[i]).offset().top+contentBlockHeight;
    //    //console.log("t: "+t);
    //    //console.log("contTop: "+contTop);
    //    //console.log("b: "+b);
    //    //console.log("contBot: "+contBot);
    //    if (t>=contTop+20 && b<=contBot-20){
    //        console.log("Текущий экран: "+i);
    //    }
    //}






















});


//$(function() {
//    $.scrollify({
//        section : "section"
//    });
//});

//$("#content").sectionsnap();



//==============
//=======Scroll mouse wheel
//==============

function scrollNew(newScrollTop){

    $('section').css({"transform": "translateY(-" + (newScrollTop) + "px)"});





    var tmp = $('section:nth-last-child(1)').attr("style").split('transform: translateY(')[1].split('px')[0];
    console.log('Вырезанная позиция: ' + tmp);
    console.log('Обновленная позиция: ' + newScrollTop);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}





//=========================================


jQuery(document).ready(function() {


   //==============
   //=======Scroll with navbar links
   //==============



    $('.navmenu li a').click(function(event) {
        event.preventDefault(); //block link-direction
        //var sectName=jQuery(this).attr('section-number'); //check number of link
        $('#navmenu li').removeClass('active');
        var sectID=jQuery(this).attr('href');
        $(this).parent().addClass('active');
        $('body').animate({
            scrollTop: ($(sectID).offset().top-paddingTop)}, 700);




        //var scrollLenght = sections[sectName];
        //$('section').css({"transform": "translateY(-" + (scrollLenght-paddingTop) + "px)", "transition-duration": "1000ms"});

        //console.log('Выполнена перемотка на '+($(sectID).offset().top-paddingTop)+'. Раздел '+jQuery(this).attr('href'));
        //console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        return false;
    });


});


















//==============
//=======Scroll to next section
//==============

function checkNextSection() {

    var wScroll = $('html').height();
    console.log(wScroll);
    if (wScroll>1){}
}
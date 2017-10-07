

//Config
var paddingTop = 80;
var paddingBottom = 80;
var scrollSpeed=100;






//Global variables
var currentPosition = $('section:nth-of-type(1)').attr("style");

// count section-blocks
var tops=$("section");
//find position of Tops of every section
for (var i = 0; i < tops.length; i++) {
    tops[i]=$(tops[i]).offset().top;
}
//console.log(tops);
//console.log('Services = '+servicesTop);
//console.log('Resume = '+resumeTop);






jQuery(document).ready(function() {


   //==============
   //=======Scroll with navbar links
   //==============



    $('.navmenu li a').click(function() {
        event.preventDefault(); //block link-direction
        var sectName=jQuery(this).attr('section-number'); //check number of link

        var scrollLenght = tops[sectName];
        $('section').css({"transform": "translateY(-" + (scrollLenght-paddingTop) + "px)", "transition-duration": "1000ms"});

        console.log('Выполнена перемотка на '+(scrollLenght-paddingTop)+'. Раздел '+jQuery(this).attr('href'));
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    });


});










//==============
//=======Scroll mouse wheel
//==============

$('body').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
    scrollDown(event);
});


function scrollDown(event) {


//just for info - get current style rules
    var currentPosition = $('section:nth-of-type(1)').attr("style");
    console.log('Полный текст стиля: ' + currentPosition);




//get location of bottom of last section
    var lastSection = $('section:nth-last-child(1)');
    var endOfSections = lastSection.offset().top + lastSection.height();
    console.log('Последняя координата: '+endOfSections);
    var wScroll = $('html').height();



//Verify if some style translateY exists. Or make set it up manually.
    if (currentPosition) {
        currentPosition = Number(currentPosition.split('transform: translateY(')[1].split('px')[0]);
        console.log('Вырезанная позиция: ' + currentPosition);
    } else {
        currentPosition = -1;
        console.log('Нет позиции: ' + currentPosition);
    }




//change TranslateY with scroll
    var i = (event.deltaY) * scrollSpeed; //speed of scrolling (100px / 1 step of wheel)
    currentPosition = currentPosition + i; //add scroll-size to current value



//check if user don't scroll over existing content. Learn first section and last section
    if (currentPosition < 0) {  //validate top border of scroll

        if(endOfSections>wScroll+lastSection.height()/2) {  //validate bottom border od scroll

            $('section').css({"transform": "translateY(" + (currentPosition) + "px)", "transition-duration": "1000ms"});
            console.log('Обновленная позиция: ' + currentPosition);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

        }else{
            $('section').css({"transform": "translateY(" + (currentPosition+Math.abs(1.1*i)) + "px)", "transition-duration": "1000ms"}); //come back to previous position
            return 0;
        }

    }else{
        return 0;
    }
}



$(document).on("scrollstart",function(){
    alert("Started scrolling!");
});







//==============
//=======Scroll to next section
//==============

function checkNextSection() {

    var wScroll = $('html').height();
    console.log(wScroll);
    if (wScroll>1){}
}
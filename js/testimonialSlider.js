
//====================
//====================//Slider
//====================

var slides = $('.testimonials__slide');
var timer = null,
    interval = 6000,
    value = 0;
var currentSlide = 0;


$( document ).ready(function(){
    //setTimeout(function(){changeSliderHeight();}, 150);
    //changeSlides();
    //$(slides[currentSlide]).show('drop', {'direction':'right'}, 700);
});








//==========
//define Highest block. Set up height for container.
//==========
function changeSliderHeight(){
    var mh = 0;
    slides.each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
            mh = h_block;
        }
        //console.log(h_block)
    });
    $(".testimonials__slider").height(mh);
}






//==========
//Slide changing
//==========
function changeSlides() {
    if (timer !== null) return;

    timer = setInterval(function () {
        $(slides[currentSlide]).hide('drop', {'direction':'left'}, 300);
        currentSlide=currentSlide+1;
        if (currentSlide==slides.length){currentSlide=0}
        setTimeout(function(){
            $(slides[currentSlide]).show('drop', {'direction':'right'}, 700);
        },400);

    }, interval);
}

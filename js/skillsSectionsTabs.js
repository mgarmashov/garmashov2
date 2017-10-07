//==============
//=======Animation of tab "Skills"
//==============

var width = 120;
if ($(window).width()<=540-18){
    width = 2/3*width;
}

//console.log(width)
$('#toolsPageBtn').animate({"left": "-"+width+"px"}, 100); //show Tools button after page opening


$('#toolsPageBtn').click(function(event) {
    event.preventDefault();
    $('#skills').css({"margin-left": "-100%"}); //show "Tools" section
    var $this = $(this);
    setTimeout(function(){
        $('#skillsPageBtn').show();
        $('#skillsPageBtn').animate({right: "-"+width+"px"}, 0);
        $($this).hide();
        $($this).animate({left: "0px"}, 400);
    }, 700);

});
$('#skillsPageBtn').click(function(event) {
    event.preventDefault();
    $('#skills').css({"margin-left": "0"}); //show "Tools" section
    var $this = $(this);
    setTimeout(function(){
        $('#toolsPageBtn').show();
        $('#toolsPageBtn').animate({left: "-"+width+"px"}, 0);
        $($this).animate({right: "0px"}, 400);
        $($this).hide();
    }, 700);

});



function prepareLargeScroll(paddingTop, sections, newScrollTop){
    //=========================================
    var sections=$("section");
    var contentHeight = sections.last().offset().top + sections.last().height() + paddingTop*2;
    //console.log(sections.last().offset().top)
    $('body').css('height', (contentHeight+(paddingTop*(sections.length - 4))) +'px');

    $(sections).css({"transform": "translateY(-" + ( newScrollTop - 1) + "px)"});
    //console.log("translateY(-" + ( newScrollTop - 1) + "px)")


//=========================================
}



//function scrollBigScreen(sections,newScrollTop, paddingTop){
//        //var contentHeight = sections.last().offset().top + sections.last().height() - paddingTop;
//        //$('body').css('height', (contentHeight+(paddingTop*(sections.length - 4))) +'px');
//
//        newScrollTop = document.documentElement.scrollTop;
//        console.log(newScrollTop)
//        var n;
//            sections.css({"transform": "translateY(-" + (newScrollTop-1) + "px)"});
//        if ()
//        previousScrollTop = document.documentElement.scrollTop;
//        if (newScrollTop < sections[0].height/3){
//            $('section').css({"transform": "translateY(1px)"});
//        }
//}


function scrollBigScreen(){
    var pageTop = document.documentElement.scrollTop;
    if (pageTop == 0){
        pageTop = $('body').scrollTop();
    }
    var sections = $('section');

    //console.log(sections);
    sections.css({"transform": "translateY(-" + (pageTop-1) + "px)"});
    //$('section').transition({ transform: "translateY(-" + (pageTop-1) + "px)" }, 0, 'in');
    //$('section').transition({ Y: "-"+(pageTop-1)+"px" }, 0, 'in');
    //move(sections).to(0,2000);
    //$('section').animate({top: "-" + (pageTop-1) + "px"}, 0);
    //console.log(pageTop);
    //console.log($(sections[0]).height()/3)
    if (pageTop < 90 ){
        $('section').css({"transform": "translateY(1px)"});
        $('section').transition({y: "1px"});
        //console.log('меньше!!')
    }
}
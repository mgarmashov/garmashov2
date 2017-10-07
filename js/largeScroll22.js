


function prepareLargeScroll(){
    //=========================================
    var sections = $('section');

    var contentHeight2;
    setTimeout(function(){
        contentHeight2 = sections.last().offset().top + sections.last().height()/* - paddingTop*/;

        //console.log(sections[i])
        var contentHeight = 0;
        var m = 0;
        $(sections).each(function(){
            contentHeight = contentHeight + $(this).height();
            console.log('элемент '+$(this).height())
            //console.log(sections.length)
            //m++

        })
        //console.log(m);
        console.log(contentHeight)
        console.log(contentHeight2)
        console.log(sections.last().offset().top)
        //for (i=0;i<sections.length;i++){
        //
        //}
        //console.log(sections.last().offset().top)
        //$('body').css('height', (contentHeight +(paddingTop*(sections.length - 4))) +'px');
        $('body').height(contentHeight2 + $('section:nth-child(1)').offset().top*2 );

        $(sections).css({"transform": "translateY(-" + ( (jQuery("body").scrollTop()) - 1) + "px)"});

    }, 500)





//=========================================
}



function scrollBigScreen(sections,newScrollTop, paddingTop){
        //var contentHeight = sections.last().offset().top + sections.last().height() - paddingTop;
        //$('body').css('height', (contentHeight+(paddingTop*(sections.length - 4))) +'px');
        newScrollTop = (jQuery("body").scrollTop());
        sections.css({"transform": "translateY(-" + (newScrollTop-1) + "px)"});
        previousScrollTop = (jQuery("body").scrollTop());
        if (newScrollTop < sections[0].height/3){
            $('section').css({"transform": "translateY(1px)"});
        }
}
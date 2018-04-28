/* global $,window */

$(function () {

    'use strict';

    //variables 
    var body=$('body'),
    header=$('.header'),
    bxSlider=$('.bxslider'),
    navbar=$('.navbar'),
    scrollButton=$('#scroll-top');

    //nice scroll plugin
    body.niceScroll();  
    /* smoth scroll*/
    $('.navbar .collapse ul li a').click(function () {
        var ddddd =($('#' + $(this).data('value')))
            $('html,body').animate({
                scrollTop: $(ddddd).offset().top
            }, 2000);
            //collapse the menu after clicking 
            $('#bs-navbar-collapse').removeClass("in");
    });
    //action when click the scroll button
    scrollButton.click(function(){
        $('body,html').animate({
            scrollTop:0
        },2000);
    });
    /* make the height of header equal to window height*/
    header.height($(window).height());
    header.width($(window).width());
    //make the width of the overlay div the same with parent
    $('.pro .pro-overlay').css('width',$('.projects .pro').width());
    /*make the height of the header equal to window's height when resizing*/
    $(window).resize(function () { 
        header.height($(window).height());
        header.width($(window).width());
        //make the slider come to middel of the screen 
        $('.bx-viewport').css('top',($(window).height()-150)/2);
        //make the width of the overlay div the same with parent when resize 
        $('.pro .pro-overlay').css('width',$('.projects .pro').width());
        if($(window).width()>767&&$(window).width()<991){    //give nav menu position on resizing screen 
            $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'-1px'})
        }
        else if ($(window).width()>991){//give nav menu position on resizing screen 
            $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'20px'})
        } 
    });

    //give nav menu position
    $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'38px'})
    //change position and background of the navbar when scroll down or up
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >=180) {
            //give navbar new css properties
            navbar.addClass("navbar-scroll");
            if($(this).resize()&&($(this).width()>767)&&($(this).width()<991)){     
                $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'-1px'})
            }
            else if ($(this).resize()&&$(this).width()>991){
                $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'20px'})
            } 
            $(".navbar-header .brand-logo,.navbar .navbar-brand").addClass("brand-scroll");
            $(".navbar-default .navbar-nav a, .navbar .navbar-brand").addClass("color-scroll");
            }
            else if($(this).scrollTop() <10){ //give navbar new css properties
            navbar.removeClass("navbar-scroll");
            $(".navbar-default .navbar-collapse, .navbar-default .navba-form").css({top:'38px'})
            $(".navbar-header .brand-logo,.navbar .navbar-brand").removeClass("brand-scroll");
            $(".navbar-default .navbar-nav a, .navbar .navbar-brand").removeClass("color-scroll");
        }
        //show scroll top button
        $(this).scrollTop() >=1000 ? scrollButton.show() : scrollButton.hide()
       
        
    });

    //run bxslider  
    bxSlider.bxSlider({
        auto: true
    });
    
    //make the slider come to middel of the screen 
    $('.bx-viewport').css('top',($(window).height()-150)/2);

    //change active div when hover
    $('.team .row>div').hover(function(){
        $(this).addClass('team-hover').siblings().removeClass('team-hover');
    });
    
  


});
$(window).on('load', function () {
    $(".looding .spinner").fadeOut(1000, function() {
       $(this).parent().fadeOut(2000);
    });
});

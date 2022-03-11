$(document).ready(function () {
    "use strict";
    
    $(".header_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".back_modal").toggleClass("active");
        $(".header_dropdown").toggleClass("active");
        $("html").toggleClass("no_scroll");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".header_mobile_top_btn").removeClass("active");
        $(".header_dropdown").removeClass("active");
        $("html").removeClass("no_scroll");
    });

    $(".footer_block_top_mob_btn").click(function() {
        $(this).toggleClass("active");
        $(".footer_dropdown").toggleClass("active");
    });

    $('.main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    });

    $('.main_slider_item').addClass('fadeInUpSD');

    $(".main_slider").on("beforeChange", function() {

        $('.main_slider_item').addClass('fadeInUpSD');
        setTimeout(() => {    
          $('.main_slider_item').removeClass('fadeInUpSD');
        }, 500);
    
    });

    $('.product_block_main_mobile_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.product_block_main_desktop_block_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    
    if($(window).width() < 1199) {
        $('.activities_slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            prevArrow: $('.activities_title_btns_prev'),
            nextArrow: $('.activities_title_btns_next')
        });
    } else {
        $('.activities_slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            prevArrow: $('.activities_title_btns_prev'),
            nextArrow: $('.activities_title_btns_next')
        });
    }

    $(".equipment_content_top_mobile_left_btn").click(function() {
        $(this).toggleClass("active");
        $(".equipment_category").toggleClass("active");
        $(".equipment_content_top_mobile_right_btn").removeClass("active");
        $(".equipment_brands").removeClass("active");
    });

    $(".equipment_content_top_mobile_right_btn").click(function() {
        $(this).toggleClass("active");
        $(".equipment_brands").toggleClass("active");
        $(".equipment_content_top_mobile_left_btn").removeClass("active");
        $(".equipment_category").removeClass("active");
    });


    $(".product_block_top_mobile_left_btn").click(function() {
        $(this).toggleClass("active");
        $(".product_category").toggleClass("active");
        $(".product_block_top_mobile_right_btn").removeClass("active");
        $(".product_brands").removeClass("active");
    });

    $(".product_block_top_mobile_right_btn").click(function() {
        $(this).toggleClass("active");
        $(".product_brands").toggleClass("active");
        $(".product_block_top_mobile_left_btn").removeClass("active");
        $(".product_category").removeClass("active");
    });
    
});
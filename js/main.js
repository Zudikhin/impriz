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
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.accordion_block').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.accordion_btns_prev'),
        nextArrow: $('.accordion_btns_next')
    });

    // const slider = $(".accordion_block");

    // slider.on('wheel', (function(e) {
    //     e.preventDefault();
    //     if (e.originalEvent.deltaY < 0) {
    //         $(this).slick('slickPrev');
    //     } else {
    //         $(this).slick('slickNext');
    //     }
    // }));

    $('.achievement_block_mobile_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $('.achievement_block_mobile_btns_left'),
        nextArrow: $('.achievement_block_mobile_btns_right')
    });

    $('.work_block_mobile_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $('.work_block_mobile_btns_left'),
        nextArrow: $('.work_block_mobile_btns_right'),
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
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
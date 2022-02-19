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
        autoplaySpeed: 1000,
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

    const slider = document.querySelector('.brands');
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
        mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { 
        return; 
    }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);



    const category = document.querySelector('.equipment_content_top_desktop');
    let mouseDownCat = false;
    let startXcat, scrollLeftcat;

    let startDraggingCat = function (e) {
        mouseDownCat = true;
        startXcat = e.pageX - category.offsetLeft;
        scrollLeftcat = category.scrollLeft;
    };
    let stopDraggingCat = function (event) {
        mouseDownCat = false;
    };

    category.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDownCat) { 
        return; 
    }
        const x = e.pageX - slider.offsetLeft;
        const scrollCat = x - startX;
        category.scrollLeft = scrollLeft - scrollCat;
    });

    // Add the event listeners
    category.addEventListener('mousedown', startDraggingCat, false);
    category.addEventListener('mouseup', stopDraggingCat, false);
    category.addEventListener('mouseleave', stopDraggingCat, false);


    var acc = document.getElementsByClassName("button_drop");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
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

    var block = document.getElementsByClassName("accordion_block_item_title");
    var j;

    for (j = 0; j < block.length; j++) {
        block[j].addEventListener("click", function() {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }


    var btnHide = document.getElementsByClassName("accordion_block_item_block_other_hide");
    var k;

    for (k = 0; k < btnHide.length; k++) {
        btnHide[k].addEventListener("click", function() {
            console.log(this.parentElement.previousElementSibling);
            this.parentElement.previousElementSibling.classList.toggle("active");
            this.parentElement.parentElement.classList.toggle("active");
            var panel = this.parentElement;
            panel.style.maxHeight = null;
            // this.parentElement.prevElementSibling.classList.toggle("active");
        });
    }

});
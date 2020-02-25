$(document).ready(function(){


    $('main').scrollspy({
        target: '#menu',
        offset: 100,
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>10) {
            $("#menu-mob").addClass("active-scroll");
        }
        else {$("#menu-mob").removeClass("active-scroll")
        }
    });


    //slider
    $('.slider-phone').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,

    });


    $('.main-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow:"<button type='button' class='slick-prev'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-aleft</title><polygon class=\"cls-1\" points=\"192.5 0 0 193.13 192.5 386.26 192.5 0\"/></svg></button>" ,
        nextArrow: "<button type='button' class='slick-next'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-right</title><polygon class=\"cls-1\" points=\"0 386.26 192.5 193.13 0 0 0 386.26\"/></svg></button>",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
});

    //show, hide modal

    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $('.modals-form__confirm').click(function() {
        $('.popup-fade').fadeOut();
        return false;
    });

    //menu
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            $('.list-group-item').removeClass('menu_black');
            $('.list-group-item').addClass('menu_white');
            $('.white-div').each(function(){
                var light_pos = $(this).offset().top;
                var light_height = $(this).height();

                $('.list-group-item').each(function(index , element){
                    var menu_pos = $(element).offset().top;
                    var menu_height = $(element).height();

                    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
                        $(element).addClass('menu_black');
                        $(element).removeClass('menu_white');
                    }
                })
            })
        })
    })

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    (function($){
        $(function() {
            $('.menu-mob__icon').on('click', function() {
                $(this).closest('.menu-mob')
                    .toggleClass('menu-mob_state_open');
            });

            $('.menu-mob__links-item').on('click', function() {
                // do something

                $(this).closest('.menu-mob')
                    .removeClass('menu-mob_state_open');
            });
        });
    })(jQuery);

    var divId = $('#menu a');

    $('.menu-mob__links-item').click(function(){
        divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 50
        }, 100);
    });
});
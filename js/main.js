$(document).ready(function(){

    //slider

    $('.main-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow:"<button type='button' class='slick-prev'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-aleft</title><polygon class=\"cls-1\" points=\"192.5 0 0 193.13 192.5 386.26 192.5 0\"/></svg></button>" ,
        nextArrow: "<button type='button' class='slick-next'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-right</title><polygon class=\"cls-1\" points=\"0 386.26 192.5 193.13 0 0 0 386.26\"/></svg></button>",
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

    // let header = $('.header-wrapper').offset().top;
    // $(window).on("scroll", function() {
    //     console.log(header);
    //     if ($(window).scrollTop() > header) $('.menu-items__item').addClass('active');
    //     else $('.menu-items__item').removeClass('active');
    // });

    $(window).on("scroll", function() {

        let win = $(window).scrollTop();
        console.log(win)

       $('.section').each(function () {
            let top = $(this).offset().top;
            let id = $(this).attr('id');
            // console.log(id);
            // console.log(top);
           if (win > top) {

               $('.section').removeClass('active');
               $(this).addClass('active');
           }
       })

    });



});
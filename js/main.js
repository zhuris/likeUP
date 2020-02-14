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

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }



});
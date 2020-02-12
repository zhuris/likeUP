$(document).ready(function(){
    $('.main-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow:"<button type='button' class='slick-prev'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-aleft</title><polygon class=\"cls-1\" points=\"192.5 0 0 193.13 192.5 386.26 192.5 0\"/></svg></button>" ,
        nextArrow: "<button type='button' class='slick-next'><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192.5 386.26\"><defs><style>.cls-1{fill:#fb9a50;}</style></defs><title>down-right</title><polygon class=\"cls-1\" points=\"0 386.26 192.5 193.13 0 0 0 386.26\"/></svg></button>",
});
});
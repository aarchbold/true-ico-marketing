$.fn.exampleFunction = function() {
    
}

$(function(){
    console.log('Hello Marketing!');
    console.log($);

    var $win = $(window);

    $('div.home-parallax').each(function(){
        console.log($(this));
        var scroll_speed = 3;
        if ($(this).hasClass('header-bg-4')) {
            scroll_speed = 4;
        } else if ($(this).hasClass('header-bg-3')) {
            scroll_speed = 5;
        } else if ($(this).hasClass('header-bg-2')) {
            scroll_speed = 6;
        }
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = (($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var layerPosition = bgScroll + 'px';
            //var bgPosition = '20% '+ bgScroll + 'px';
            $this.css({ transform: 'translateY(' + layerPosition + ')' });
        });
    });
});

$(document).ready(function(){
    $('#newsCarousel').slick({
        prevArrow: $('.news-carousel__nav.-previous'),
        nextArrow: $('.news-carousel__nav.-next'),
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 815,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    });
});
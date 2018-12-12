$.fn.localizr = function() {
    var $context = $(this),
        $current = $('.language-selector__current', $context),
        $arrow = $('.language-selector__arrow', $context),
        $layer = $('.language-selector__layer', $context),
        $languages = $('.language-selector__item', $context);

    function toggleLayer() {
        if ($layer.hasClass('-active')) {
            $arrow.removeClass('-active');
            $layer.removeClass('-active');
            $layer.hide();
        } else {
            $layer.show();
            setTimeout(function() {
                $arrow.addClass('-active');
                $layer.addClass('-active');
            },100)
        }
    }

    $current.click(function() {
        toggleLayer();
    });

    $languages.click(function(e) {
        // var currentLang = $(e.target).data('language');
        // localStorage.setItem('trueLanguage2',currentLang);
        // handleLocalizaion(currentLang);
        toggleLayer();
    });
}

$.fn.handleNav = function() {
    var $topnavLinks = $('.top-nav__link');
    var $footerLinks = $('.footer-link');

    function scrollToElement(clickedElement) {
        var idAttr = '#' + clickedElement.attr('data-scroll-to');
        //console.log(idAttr);
        $([document.documentElement, document.body]).animate({
            scrollTop: $(idAttr).offset().top - 80
        }, 800);
    }

    $topnavLinks.click(function(e) {
        e.preventDefault();
        scrollToElement($(this));
    });
    $footerLinks.click(function(e) {
        e.preventDefault();
        scrollToElement($(this));
    });
}

$.fn.fadeOnScroll = function() {
    console.log($(this));
    var $element = $(this);
    var $win = $(window);
    // var $countdown = $('#countdownContainer');
    $(window).scroll(function(){
        // console.log($countdown.offset().top - $win.scrollTop());
        // if ($countdown.offset().top - $win.scrollTop() < 300) {
        //     $countdown.css('transform','translateX(0)');
        // }
        $element.css({
            'opacity': 1 - $(window).scrollTop() / 400,
            // 'transform': 'translateY('+($win.scrollTop() - $element.offset().top) / -4+'px)'
        });
    });
}

$.fn.rotateGraphs = function() {
    var $leftGraph = $('.roadmap-graphs__svg.-left-graph'),
        $rightGraph = $('.roadmap-graphs__svg.-right-graph'),
        rotation = 0, 
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";
        $leftGraph.css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
        $rightGraph.css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
}

$(function(){
    $('.language-selector').localizr();
    $('body').handleNav();
    $('.home-header-scroller').fadeOnScroll();
    $('.roadmap-graphs').rotateGraphs();

    var $win = $(window);

    $('div.home-parallax').each(function(){
        console.log($(this));
        var scroll_speed = 2;
        if ($(this).hasClass('header-bg-4')) {
            scroll_speed = 3;
        } else if ($(this).hasClass('header-bg-3')) {
            scroll_speed = 4;
        } else if ($(this).hasClass('header-bg-2')) {
            scroll_speed = 5;
        }
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = (($win.scrollTop() - $this.offset().top) / scroll_speed);
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
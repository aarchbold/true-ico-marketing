$.fn.handlePhoneCarousel = function() {
    var $container = $(this),
        $phones = $('.phone-item',$container),
        delay = 3000,
        start = 1;
    
    function resetPhones() {
        $phones.each(function(i,e) {
            $(e).removeClass('phone-bring-to-front');
        })
    }

    function bringToFront() {
        $('.phone-'+start,$container).addClass('phone-bring-to-front');
        if (start === 5) {
            start = 1;
        } else {
            start = start+1;
        }
    }

    window.setInterval(function() {
        resetPhones();
        bringToFront();
    }, delay);

}


$(document).ready(function(){
    $('.phone-carousel').handlePhoneCarousel();
});
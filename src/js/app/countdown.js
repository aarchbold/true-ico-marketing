$.fn.initCountdown = function() {
    var $context = $(this),
        $counterDays = $('#counterDays',$context),
        $counterHours = $('#counterHours',$context),
        $counterMinutes = $('#counterMinutes',$context),
        $counterSeconds = $('#counterSeconds',$context),
        countDownDate = new Date("Jan 27, 2019 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
    
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
    
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the result in the element with id="demo"
        $counterDays.text(days < 10 ? '0'+days : days);
        $counterHours.text(hours < 10 ? '0'+hours : hours);
        $counterMinutes.text(minutes < 10 ? '0'+minutes : minutes);
        $counterSeconds.text(seconds < 10 ? '0'+seconds : seconds);
    
        // If the count down is finished, write some text 
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

$(function(){
    console.log('Hello Countdown!');
    console.log($);
    $('#countdownContainer').initCountdown();
});
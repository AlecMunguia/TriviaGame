$(document).ready(function() {

var counter = 0;
var timeLeft = 60;

function convertSeconds(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ':' + sec;
}

var timer = $('#timer');
timer.html(convertSeconds('0'));

function timeIt() {
    counter++
    timer.html(convertSeconds(timeLeft - counter));
}

setInterval(timeIt, 1000);
});
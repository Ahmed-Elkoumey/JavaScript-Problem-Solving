var start, stp, timer, reset;

start = document.getElementById("start");
stp = document.getElementById("stop");
reset = document.getElementById("reset");


var secs = document.getElementById('secs');
var mins = document.getElementById('mins');
var hrs = document.getElementById('hrs');

function startTimer() {
    var seconds = 0;
    timer = setInterval(function () {

        seconds++;
        secs.innerText =
            seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;

        mins.innerText =
            Math.round((seconds % 3600) / 60) < 10
                ? '0' + Math.floor((seconds % 3600) / 60)
                : Math.floor((seconds % 3600) / 60);

        hrs.innerText =
            Math.round(seconds / 3600) < 10
                ? '0' + Math.floor(seconds / 3600)
                : Math.floor(seconds / 3600);
    }, 1000);
}

start.addEventListener("click", startTimer);

stp.addEventListener("click", function () {
    clearInterval(timer);
});

reset.addEventListener("click", function () {
    clearInterval(timer);
    secs.innerText="00"
    mins.innerText="00"
    hrs.innerText="00"

});

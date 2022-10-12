// 1 - Optimized Code:
var workHrs, workMnts, workSec, breakHrs, breakMnts, breakSec, startWBtn, startBBtn, resumeWBtn, endWBtn;

workHrs = document.getElementById('workHrs');
workMnts = document.getElementById('workMins');
workSec = document.getElementById('workSec');
breakHrs = document.getElementById('breakHrs');
breakMnts = document.getElementById('breakMnts');
breakSec = document.getElementById('breakSec');
startWBtn = document.getElementById('start-w');
startBBtn = document.getElementById('start-b');
resumeWBtn = document.getElementById('res-w');
endWBtn = document.getElementById('end-w');

function valueFormatter(value) { return value < 10 ? "0" + value : value; }
function activeBtn(btn) { btn.disabled = false; btn.className = 'active'; }
function deActiveBtn(btn) { btn.disabled = true; btn.className = 'deactive'; }
var intervalsFlags = [];

function startTimer(hrsDom, minsDom, secsDom, flagIndex, startTime) {
    var seconds = startTime;
    intervalsFlags[flagIndex] = setInterval(function () {
        seconds++;
        hrsDom.innerText = valueFormatter(Math.floor(seconds / 3600));
        minsDom.innerText = valueFormatter(Math.floor((seconds % 3600) / 60));
        secsDom.innerText = valueFormatter(seconds % 60);
    }, 1000);
}
startWBtn.addEventListener('click', function () {
    startTimer(workHrs, workMnts, workSec, 0, 0);
    deActiveBtn(startWBtn);
    activeBtn(startBBtn);
    activeBtn(endWBtn);
});
startBBtn.addEventListener('click', function () {
    clearInterval(intervalsFlags[0]);
    var sentTime = +breakHrs.innerText * 3600 + +breakMnts.innerText * 60 + +breakSec.innerText;
    startTimer(breakHrs, breakMnts, breakSec, 1, sentTime);
    deActiveBtn(startBBtn);
    activeBtn(resumeWBtn);
});

resumeWBtn.addEventListener('click', function () {
    clearInterval(intervalsFlags[1]);
    var sentTime = +workHrs.innerText * 3600 + +workMnts.innerText * 60 + +workSec.innerText;
    startTimer(workHrs, workMnts, workSec, 0, sentTime);
    deActiveBtn(resumeWBtn);
    activeBtn(startBBtn);
});
endWBtn.addEventListener('click', function () {
    clearInterval(intervalsFlags[0]);
    clearInterval(intervalsFlags[1]);
    deActiveBtn(endWBtn);
    deActiveBtn(resumeWBtn);
    deActiveBtn(startBBtn);
    activeBtn(startWBtn);
    alert('Your Work Time : ' + workHrs.innerText + ' : Hrs - ' + workMnts.innerText + ' : Mins - ' + workSec.innerText + ' : Secs' + '\n' +
        'Your Break Time : ' + breakHrs.innerText + ' : Hrs - ' + breakMnts.innerText + ' : Mins - ' + breakSec.innerText + ' : Secs');
    workHrs.innerText = workMnts.innerText = workSec.innerText = '00';
    breakHrs.innerText = breakMnts.innerText = breakSec.innerText = '00';
});
var sec, mnts, hrs, dayNight, date,claender;

sec = document.getElementById("sec");
mnts = document.getElementById("mnts");
hrs = document.getElementById("hrs");
dayNight = document.getElementById("dayNight");
claender=document.getElementById("claender");

var Montes=["January", "February", "March", 'April', 'May', "June", "July", "August", "September", "October", "November",  "December"]

setInterval(function () {
    date = new Date();

    sec.innerText = date.getSeconds();
    mnts.innerText = date.getMinutes();
    hrs.innerText = date.getHours();
    
    if (hrs.innerText > 12) {
        hrs.innerText = date.getHours() - 12;
        dayNight.innerText = "PM";

    } else {

        hrs.innerText = date.getHours();
        dayNight.innerText = "AM";

    }
    claender.innerText=date.getUTCDate()+" "+Montes[date.getMonth()]+" "+date.getFullYear();
},1000)
console.log(sec);
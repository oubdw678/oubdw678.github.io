var timeee;
var loga;
var per2;
var elem = document.getElementById("myBar");
var width = 0;
var finishTime = setInterval(frame, 1000);
var timer = 1;
var percent = document.getElementById("per");
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
function frame() {
    if (timer > 120) {
        clearInterval(finishTime);
    }
    else {
        per2 = (Math.log(timer) / Math.log(120)) * 100;
        width = per2.toFixed(0);
        elem.style.width = width + '%';
        // console.log(timer+" "+width);
        timer++;
    }
    // console.log(timer);
    percent.innerHTML = width + ' %';
}

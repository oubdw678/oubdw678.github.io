let timeee;
let loga;
let per2;
let elem = document.getElementById("myBar");
let width = 0; 
let finishTime = setInterval(frame, 1000);
let timer = 1;
let percent = document.getElementById("per");

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function frame() {
    if (timer > 120) {
        clearInterval(finishTime);
    }
    else{
        timeee = 120+1-timer;
        loga = getBaseLog(120,timeee);
        per2 = 100+(1-(loga*100));
        
        width = per2.toFixed(0);
        if(width>100){
            width = 100;
        } 
        elem.style.width = width + '%';
        // console.log(timer+" "+width);
        timer++;
    }
    // console.log(timer);
     
    percent.innerHTML = width + '%';
}

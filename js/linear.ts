let elem = document.getElementById("myBar");   
let width = 0;
let id = setInterval(frame, 1200);
let percent = document.getElementById("per");


function frame() {
    if (width >= 100) {
        clearInterval(id);
    }
    else{
        width++; 
        elem.style.width = width + '%';
    } 
    percent.innerHTML = width + '%';
}
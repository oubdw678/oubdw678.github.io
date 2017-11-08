var elem = document.getElementById("myBar");
var width = 0;
var id = setInterval(frame, 1200);
var percent = document.getElementById("per");
function frame() {
    if (width >= 100) {
        clearInterval(id);
    }
    else {
        width++;
        elem.style.width = width + '%';
    }
    percent.innerHTML = width + '%';
}

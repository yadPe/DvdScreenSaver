function resizeEventHandler() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById("status").innerHTML = "Resizing..";
}

$(document).ready(resizeEventHandler);

$(window).resize(resizeEventHandler);


var dvdArray = [];
//var audio = new Audio('https://jukehost.co.uk/api/audio/p/b638bcdddb5972279b215014171a65a34bf42cea/65b2b457b7a');

// function generateDvdArray(numOfDvd){
//     for (var i = 0; i < numOfDvd; i++) {
//         var x = Math.random() * (window.innerWidth - 500) + 200;
//         var y = Math.random() * (window.innerHeight - 300) + 150;
//         var dx = 3;
//         var dy = 1.5;
//         var size = 0.4;
//         dvdArray.push(new EpicDvdLogo(x, y, dx, dy, size, speedRatio))
//     }
// }

var speedRatio = 1;
var logoSize = 0.4;
function generateDvdLogo() {
    var x = Math.random() * (window.innerWidth - 1000 * logoSize) + 400 * logoSize;
    var y = Math.random() * (window.innerHeight - 600 * logoSize) + 300 * logoSize;
    var dx = 2.5;
    var dy = 1.5;
    var size = logoSize;
    var speed = speedRatio;
    dvdArray.push(new EpicDvdLogo(x, y, dx, dy, size, speed))
}
generateDvdLogo();

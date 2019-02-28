window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(function () {

                callback(+performance.now());
            }, 1000 / 150); //max fps but capped to screen refreshRate
        };
})();

var currentFrame = 0;
var lastRun;//performance.now();
var game_running = false;

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!lastRun) {
        lastRun = performance.now();
        requestAnimFrame(animate);
        return;
    }
    var delta = (performance.now() - lastRun) / 1000;
    lastRun = performance.now();
    var FPS = Math.round(1 / delta);
    if (game_running) {
        requestAnimFrame(animate);
    } else {
        var FPS = "PAUSED";
    }
    currentFrame++;
    document.getElementById("fps").innerHTML = FPS;

    for (var i = 0; i < dvdArray.length; i++) {
        dvdArray[i].run();
    }
}
animate();





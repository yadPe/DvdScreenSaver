const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var dvdLogo;
var loaded = false;
var dvdQuantity = 1;
var overallBorderHit = 0;
var overallCornerHit = 0;
var CornerHitTolerance = 2;

class EpicDvdLogo {
    constructor(x, y, dx, dy, size, speed) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.speed = speed;
    }

    run() {
        this.draw();
        this.update();
    }

    draw() {
        document.getElementById("status").innerHTML = "Drawing..";
        if (!dvdLogo) {
            loadDvdPng();
        }
        ctx.beginPath();
        ctx.drawImage(dvdLogo, this.x, this.y, dvdLogo.width * this.size, dvdLogo.height * this.size);
    }

    update() {
        document.getElementById("status").innerHTML = "Moving..";
        if (this.x +  dvdLogo.width * this.size > window.innerWidth -CornerHitTolerance && this.y + dvdLogo.height * this.size > window.innerHeight -CornerHitTolerance){
            overallCornerHit++;
            document.getElementById("cornerHit").innerHTML = overallCornerHit;
        }
        if (this.x < CornerHitTolerance && this.y < CornerHitTolerance){
            overallCornerHit++;
            document.getElementById("cornerHit").innerHTML = overallCornerHit;
        }
        if (this.x +  dvdLogo.width * this.size > window.innerWidth || this.x < 0) {
            this.dx = -this.dx;
            overallBorderHit++;
            //audio.play();
        }
        if (this.y +dvdLogo.height * this.size > window.innerHeight || this.y < 0) {
            this.dy = -this.dy;
            overallBorderHit++;
            //audio.play();
        }

        document.getElementById("hit").innerHTML = overallBorderHit;
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed; 
        //console.log("dvd X = " + this.x + ", dvd Y = " + this.y);
    }
}

function loadDvdPng() {
    //Load dvdLogo svg
    document.getElementById("status").innerHTML = "Loading..";
    dvdLogo = new Image();
    dvdLogo.src = document.getElementById("dvdLogo").src;
    //https://i.ibb.co/b6bzpd7/DVD-logo.png
    dvdLogo.onload = function () {
        game_running = true;
        animate();
        loaded = true;
        document.getElementById("loaded").innerHTML = loaded;
    }
};



// test 
//generateDvdArray(150);



/*
function computeDvdSizeRatio(size){

    var okikoki = size 

    var ratioX = dvdLogo.width
    var ratioY = dvdLogo.height
}
*/
//setup canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = '#000000';

//resize canvas onload and when resized
var myWidth = window.innerWidth;
var myHeight = window.innerHeight;
window.addEventListener('resize', loadCanvas, false);
window.onload = function () {
    loadCanvas();
    drawImage();
};
var scale = 200;
var centerX;
var centerY;


function loadCanvas() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    ctx.canvas.width = myWidth;
    ctx.canvas.height = myHeight;
    centerX = myWidth / 2;
    centerY = myHeight / 2;
    scale = myHeight / 4;
    drawImage();
}

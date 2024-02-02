
document.addEventListener("DOMContentLoaded", start, false);

function drawLine(x, y, _x, _y, size, color) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(_x, _y);
    ctx.stroke();
    ctx.closePath();
}

function drawRectangle(x, y, width, height, color, size) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
}

function start() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 380, 280);
    ctx.lineWidth = 10;
    drawRectangle(10, 10, 20, 40, "black", 1);
}
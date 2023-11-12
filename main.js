canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_X,last_Y;

color="red";
line_width=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_X=e.clientX-canvas.offsetLeft;
 current_Y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    ctx.moveTo(last_X,last_Y);
    ctx.lineTo(current_X,current_Y)
    ctx.stroke()
 }

last_X=current_X;
last_Y=current_Y

}




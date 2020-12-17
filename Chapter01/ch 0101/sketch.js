/// <reference path="../../lib/p5.global-mode.d.ts"/>

function setup()
{
    createCanvas(800,600);
    textSize(24);
    textAlign(CENTER);
}

function draw()
{
   background(96,96,96);
   stroke(255,0,0);
   line(mouseX,0,mouseX,height);
   stroke(0,0,255);
   line(0,mouseY,width,mouseY);
   stroke(0,0,0);
   textSize(18);
   textAlign(CENTER);
   text("y좌표"+parseInt(mouseY),50,mouseY);
   textSize(18);
   textAlign(CENTER);
   text("x좌표"+parseInt(mouseX),mouseX,20);
}

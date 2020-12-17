/// <reference path="../../lib/p5.global-mode.d.ts"/>

function setup()
{
    createCanvas(800,600);
    background(96,96,96);
}

function draw()
{

}

function mousePressed()
{
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    stroke(r,g,b);
    fill(r,g,b);
    circle(mouseX,mouseY,32);
}
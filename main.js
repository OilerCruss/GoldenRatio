var slide = document.getElementById("range");
let a = parseInt(slide.value);
let b = 0;

function setup(){
    createCanvas(800, 800);
    b = a*((sqrt(5)-1)/2);
}

function draw(){
    background(100);
    
    a = parseInt(slide.value);
    b = a*((sqrt(5)-1)/2);
    
    push();
    rectMode(CENTER);
    strokeWeight(1);
    fill(200, 50);
    rect(width/2+a/2, height/2, b, a);
    rect((width/2)-b/2, height/2, a, a);
    pop();    
    
    push();
    //noStroke();
    fill(255);
    ellipseMode(RADIUS);
    arc((width/2)-b/2+a/2, (height/2)+a/2, a, PI, HALF_PI+PI);
    pop();
    
}
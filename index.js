let x = -400;
let y = -400;
let count = 0;
let total = 0;
let pie = document.getElementById('pi');

function setup(){
    createCanvas(810, 810);
    background(0);
    noFill();
    stroke(255);
    translate(405, 405);
    rectMode(CENTER);
    rect(0, 0, 800, 800)
    ellipse(0, 0, 800, 800);
}

function draw(){
    translate(405, 405);
    

    for( let i = 0 ; i<1000 ; i++){
        let dist2 = x*x+y*y

        if(dist2 < 400*400){
            stroke(100, 255, 0);
            count++;
        }else{
            stroke(255, 100, 0);
        }
        point(x, y);
        total++;
        x++;
        if(x>400){
            x=-400;
            y++;
        }
        if(y>400){
            noLoop();
        }
    }
    pie.innerHTML = 4*(count/total);
}
function preload() {

}

function setup() {

    createCanvas(400, 400);

}

function draw() {
    background(0);
    textSize(35);
    fill("red");
    text("x:" + mouseX, 50, 50);
    text("y:" + mouseY, 50, 90);
    //drawSprites();
}
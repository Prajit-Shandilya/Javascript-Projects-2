var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    line1 = createSprite(400, 650, 200, 20);
    line1.shapeColor = color(255, 0, 0);
    line2 = createSprite(300, 610, 20, 100);
    line2.shapeColor = color(255, 0, 0);
    line3 = createSprite(500, 610, 20, 100);
    line3.shapeColor = color(255, 0, 0);







    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2




    packageSprite.visible = false;

    helicopterSprite = createSprite(-3, 200, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6

    groundSprite = createSprite(width / 2, height - 35, width, 10);
    groundSprite.shapeColor = color(255)


    engine = Engine.create();
    world = engine.world;




    packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.8, isStatic: true });
    World.add(world, packageBody);


    //Create a Ground
    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
    World.add(world, ground);


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
    packageSprite.x = packageBody.position.x
    packageSprite.y = packageBody.position.y
    helicopterSprite.velocityX = 5;
    drawSprites();

}

function keyPressed() {
    if (keyCode === 32) {
        packageSprite.visible = true;

        Matter.Body.setStatic(packageBody, false);


    }
}
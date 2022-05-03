const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, slingshot;


function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    roof = new Roof(400, 350, 400, 50);

    bobObject1 = new Bob(260, 600);
    bobObject2 = new Bob(310, 600);
    bobObject3 = new Bob(350, 600);
    bobObject4 = new Bob(390, 600);
    bobObject5 = new Bob(440, 600);

    rope1 = new Rope(bobObject1.body, roof.body, bob.diameter * 2, 0);
    rope2 = new Rope(bobObject2.body, roof.body, bob.diameter * 2, 0);
    rope3 = new Rope(bobObject3.body, roof.body, bob.diameter * 2, 0);
    rope4 = new Rope(bobObject4.body, roof.body, bob.diameter * 2, 0);
    rope5 = new Rope(bobObject5.body, roof.body, bob.diameter * 2, 0);


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);

    roof.display();
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

    drawSprites();

}
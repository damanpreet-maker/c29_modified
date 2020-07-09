const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  platform = new Ground(390,200,10,10);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  platform.display();
  drawSprites();
}
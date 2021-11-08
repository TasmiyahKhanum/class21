const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground1,ground2,ground3,ground4;
var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground1 = new Ground(200,390,400,20);
  ground2 = new Ground(200,10,400,20);
  ground3 = new Ground(390,200,20,400);
  ground4 = new Ground(10,200,20,400);

  var ballop = {
    restitution : 0.75
  }
   
  ball = Bodies.circle(200,100,20,ballop);
  World.add(world,ball);

  button1=createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(Hforce);
  button2=createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(Vforce);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();

  ellipse(ball.position.x,ball.position.y,20);
}

function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
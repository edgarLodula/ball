const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up;
var right;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball=Bodies.circle(200,200,50)
  World.add(world,ball)
  up=createImg("up.png")
  up.position(370,370)
  up.size(60,60)
  up.mouseClicked(
    cima
  )
  right=createImg("right.png")
    right.position(30,30)
    right.size(60,60)
    right.mouseClicked(
      direita
    )

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,50,50)
}

function cima(){
  Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.5})
}
function direita(){
  Matter.Body.applyForce(ball,ball.position,{x:0.5,y:0})
}
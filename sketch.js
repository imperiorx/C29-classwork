const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let rope1;
let fruit;
let fruCon;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  ground1=new ground(200,690,600,20)
  rope1=new Rope(8,{x:245,y:30})
  var fruitOptions={
    density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruitOptions);
  Matter.Composite.add(rope1.body,fruit);
  fruCon=new link(rope1,fruit)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.show();
  rope1.show();
  ellipse(fruit.position.x,fruit.position.y,15,15)
   
}






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var engine

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
      isStatic:false,
      restitution:0.3,
	  friction:0,
	  density:1.2 

	}
    ball=Matter.Bodies.circle(200,100,30,ball_options)
	World.add(world,ball)

  ground=new Ground(width/2,670,width,20)
  leftside=new Ground(600,600,20,120)
  rightside=new Ground(750,600,20,120)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
  ground.display()
  leftside.display()
  rightside.display()
}

function keyPressed() {
if(keyIsDown(UP_ARROW)){
  console.log(6)
  Matter.Body.applyForce(ball,ball.position,{x:7,y:30})
}
}


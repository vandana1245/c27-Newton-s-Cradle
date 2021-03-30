
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ceiling;
var joint1,joint2,joint3,joint4,joint5,joint6;
var bob1,bob2,bob3,bob4,bob5,bob6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,20);

	ceiling = new Ceiling(400,200,290,5);
	
	joint1 = new Ceiling(270,180,5,35);
	joint2 = new Ceiling(320,180,5,35);
	joint3 = new Ceiling(370,180,5,35);
	joint4 = new Ceiling(420,180,5,35);
	joint5 = new Ceiling(470,180,5,35);
	joint6 = new Ceiling(520,180,5,35);

	bob1 = new Bob(280,250,60,60);
	bob2 = new Bob(320,250,60,60);
	bob3 = new Bob(360,250,60,60);
	bob4 = new Bob(400,250,60,60);
	bob5 = new Bob(440,250,60,60);
	bob6 = new Bob(480,250,60,60);

	rope1 = new Rope(bob1.x,bob1.y,{x:270,y:180});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  ceiling.display();

  joint1.display();
  joint2.display();
  joint3.display();
  joint4.display();
  joint5.display();
  joint6.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();


  drawSprites();
 
}




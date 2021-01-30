
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,plane,stone,rubber
function preload()
{
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
     hammer = new Hammer(100,100,100,45);
	 plane = new Plane(300,695,5000,10);
	 stone = new Stone(100,500,100,100);
	 rubber = new Rubber(200,600,50);
	 sand = new Sand(200,600,5)
	 sand2 = new Sand(200,600,5)
	 sand3 = new Sand(200,600,5)
	 sand4 = new Sand(200,600,5)
	 sand5 = new Sand(200,600,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,255,0);
  drawSprites();
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
}




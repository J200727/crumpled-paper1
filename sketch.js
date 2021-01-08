const Engine=Matter.Engine;
constWorld=Matter.World;
constBodies=Matter.Body;
constRender=Matter.Render;
var dustbinObj,dustbinObject,groundObject
var world;

function setup()
{
	createCanvas(1600,700);
	rectMode(CENTER);

	engine=Engine.create();
	world=engine.world;
	paperObject=new paper(200,0,20);
	dustbinObj=new dustbin(1200,650);
	groundObject=new ground(width/2,690,1600,20);
	

	

}

function draw(){
	rectMode(CENTER);
	background("lightblue");
	Matter.Engine.update(engine)
	paperObject.display();
	dustbinObj.display();
	groundObject.display();
}
function keyPressed()
{
	if(keyCode==UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}
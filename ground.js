class ground
{
	constructor(alyssa,angela,sanjo,evanjo)
	{
		var options={
			isStatic:true			
			}
		this.x=alyssa;
		this.y=angela;
		this.w=sanjo
		this.h=evanjo
		this.body=Matter.Bodies.rectangle(alyssa,angela,sanjo,evanjo,options);
 		Matter.World.add(world, this.body);
			
	}
	display()
	{

			var groundPosition=this.body.position;		

			push()
		
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(this.body.position.x,this.body.position.y,this.w, this.h);
			pop()

	}

} 
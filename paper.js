class paper
{
	constructor(alyssa,angela,r)
	{
		this.img=loadImage("paper.png")
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			
			}
		this.alyssa=alyssa;
		this.angela=angela;
		this.r=r
		this.body=Matter.Bodies.circle(this.alyssa, this.angela, this.r, options)
		Matter.World.add(world, this.body);
		console.log(this.body)
	}
	display()
	{
			
			var paperposition=this.body.position;		
			push()
			ellipseMode(RADIUS)
			rectMode(CENTER)
			strokeWeight(4);
			
			fill(255,0,255)
		//	ellipse(this.body.position.x,this.body.position.y,this.r)
			imageMode(CENTER)
			image(this.img,this.body.position.x,this.body.position.y,this.r*4,this.r*4)
	}
}
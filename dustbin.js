class dustbin
{
	constructor(alyssa,angela)
	{
		this.img=loadImage("dustbin.png")
		this.w=100;
		this.h=20;
		this.body=Matter.Bodies.rectangle(alyssa,angela,this.w,this.h,{isStatic:true})
		this.body1=Matter.Bodies.rectangle(alyssa-60,angela-40,this.h,this.w,{isStatic:true})
		this.body2=Matter.Bodies.rectangle(alyssa+60,angela-40,this.h,this.w,{isStatic:true})
		Matter.World.add(world,[this.body,this.body1,this.body2])
	
	}
	display()
	{
		imageMode(CENTER)
		image(this.img,this.body.position.x,this.body.position.y-50,130,150)
		rectMode(CENTER)
		noFill()
		noStroke()
		rect(this.body.position.x,this.body.position.y,this.w,this.h)
		rect(this.body1.position.x,this.body1.position.y,this.h,this.w)
		rect(this.body2.position.x,this.body2.position.y,this.h,this.w)
			
			
	}
}
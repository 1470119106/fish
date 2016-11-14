var momObj=function(){
	this.x;
	this.y;
	this.angle;

	//this.bigEye=new Image();
	//this.bigBody=new Image();
	//this.bigTail=new Image();

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;

	this.momBodyCount=0;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	//this.bigEye.src='src/bigEye0.png';
	//this.bigBody.src='src/bigSwim0.png';
	//this.bigTail.src='src/bigTail0.png';
}
momObj.prototype.draw=function(){

	this.x =lerpDistance(mx,this.x,0.98);
	this.y =lerpDistance(my,this.y,0.99);

	var deltaY=my-this.y;
	var daltaX=mx-this.x;
	var beta=Math.atan2(deltaY,daltaX)+Math.PI;

	this.angle=lerpAngle(beta,this.angle,0.6);
	this.momTailTimer+=deltaTime;
	if(this.momTailTimer>50){
		this.momTailCount=(this.momTailCount+1)%8;
		this.momTailTimer%50;
	}
	this.momEyeTimer+=deltaTime;
	if(this.momEyeTimer>this.momEyeInterval){
		this.momEyeCount=(this.momEyeCount+1)%2;
		this.momEyeTimer%=this.momEyeInterval;
		if (this.momEyeCount==0) {
			this.momEyeInterval=Math.random()*1500+2000;
		}else{
			this.momEyeInterval=200;
		}
	}
	txt1.save();
	txt1.translate(this.x,this.y);
	txt1.rotate(this.angle);
	var momTailCount=this.momTailCount;
	txt1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
	var momBodyCount=this.momBodyCount;
	if (data.double==1) {
		txt1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
	}else{
		txt1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);
	}
	var momEyeCount=this.momEyeCount;
	txt1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
	txt1.restore();
	//console.log(this.y);
}
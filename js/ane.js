var aneObj=function(){
		this.rootx=[];
		this.headx=[];
		this.heady=[];
		this.amp=[];
		this.alpha=0;
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<=this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+50;
		//console.log(1);
	}
}
aneObj.prototype.draw=function(){
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);
	txt2.save();
	txt2.globalAlpha=0.6;
	txt2.lineWidth=20;
	txt2.lineCap='round';
	txt2.strokeStyle='#3b154e';
	for(var i=0;i<this.num;i++){
		txt2.beginPath();
		txt2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		txt2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		txt2.stroke();
	}
	txt2.restore();
}
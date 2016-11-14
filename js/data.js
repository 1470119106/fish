var dataObj=function () {
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
// dataObj.prototype.reset=function(){
// 	this.fruitNum=0;
// 	this.double=1;
// }
dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	txt1.save();
	txt1.shadowBlur=10;
	txt1.shadowColor="#fff";
	txt1.fillStyle='#fff';

	//txt1.fillText("num" + this.fruitNum,w*0.5,h-50);
	//txt1.fillText("double" + this.double,w*0.5,h-80);
	txt1.fillText("SCORE:"+this.score,w*0.5,h-20);

	if(this.gameOver){
		this.alpha+=deltaTime*0.0005;
		if(this.alpha>1){
			this.alpha=1;
		}
		txt1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		txt1.fillText("GANEOVER",w*0.5,h*0.5);
	}
	txt1.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}
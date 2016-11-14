var waveObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];

}
waveObj.prototype.num=10;
waveObj.prototype.init=function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.r[i]=0;
	}
}
waveObj.prototype.draw=function(){
	txt1.save();
	txt1.lineWidth=2;
	txt1.shadowBlur=10;
	txt1.shadowColor="#fff";
	for (var i = 0; i < this.num; i++) {
			if(this.alive[i]){
				//draw
				this.r[i]+=deltaTime*0.05;
				if (this.r[i]>50) {
					this.alive[i]=false;
					break;
				}
				var alpha=1-this.r[i]/50;
				txt1.beginPath();
				txt1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
				//console.log("draw");
				txt1.closePath();

				txt1.strokeStyle="rgba(255,255,255,"+alpha+")";
				txt1.stroke();
				//console.log("draw");
			}
	}
	txt1.restore();
}
waveObj.prototype.born=function(x,y){
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			//born
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}
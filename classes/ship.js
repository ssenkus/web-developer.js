function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
  this.shot = false;
  this.posx = 30;
}

Ship.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.lineWidth = 1;
  context.strokeStyle = "#000";
/*  context.beginPath();
  context.moveTo(10, 0);
  context.lineTo(-10, 10);
  context.lineTo(-5, 0);
  context.lineTo(-10, -10);
  context.lineTo(10, 0);
        context.fillStyle = '#fff';
      context.fill(); */
	  
	  
	  // DRAW SPIDER BODY PARTS
	  //body
	  context.beginPath();
      context.arc(0, 0, 15, 0, 2 * Math.PI, false);
      context.fillStyle = '#ddd';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#ddd';
      context.stroke();	
	  //head
      context.beginPath();
      context.arc(20,0, 5, 0, 2 * Math.PI, false);
      context.fillStyle = '#ddd';
      context.fill();
      context.lineWidth = 2;
	  context.fillStyle = "#aaa";
	  context.fill();
      context.strokeStyle = '#aaa';
      context.stroke();		  
	  
	  //eyes
      context.beginPath();
      context.arc(24,-4, 1, 0, 2 * Math.PI, false);
      context.fillStyle = '#0f0';
      context.fill();
      context.lineWidth = 2;
	  context.fillStyle = "#0f0";
	  context.fill();
      context.strokeStyle = '#0f0';
      context.stroke();		  	  

		//eyes
      context.beginPath();
      context.arc(24,4, 1, 0, 2 * Math.PI, false);
      context.fillStyle = '#0f0';
      context.fill();
      context.lineWidth = 2;
	  context.fillStyle = "#0f0";
	  context.fill();
      context.strokeStyle = '#0f0';
      context.stroke();		  	  	  
	  
	  //mouth
     context.beginPath();
      context.arc(30, 0, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#777	';
      context.stroke();		  	  	  	  
	  
	  //arms
     context.beginPath();
      context.arc(0, -20, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();		  
     context.beginPath();
      context.arc(-5, -20, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();	  
     context.beginPath();
      context.arc(-10, -17, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();	  

	  //arms
     context.beginPath();
      context.arc(0, 20, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();		  
     context.beginPath();
      context.arc(-5, 20, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();	  
     context.beginPath();
      context.arc(-10, 17, 4, 	-0.6 * Math.PI, 0.6	 * Math.PI, 15, false);
      context.lineWidth = 2;	  
      context.strokeStyle = '#222';
      context.stroke();	  

	  
  //context.stroke();


  if (this.showFlame) {
    context.beginPath();
      context.strokeStyle = '#f60';	
	        context.lineWidth = 5;	  
    context.moveTo(-20, -5);
    context.lineTo(-25, 0);
    context.lineTo(-20, 5);	
    //context.lineTo(-20, 5);
	
	      context.fillStyle = '#f60';
      context.fill();
    context.stroke();
	
	
  }
  if (this.showFlameFront) {
    context.beginPath();
	context.strokeStyle = "#ddd";
    context.moveTo(10, 0);
    context.lineTo(20, 20);
    context.lineTo(30, 20);
	context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(20, -20);
    context.lineTo(30, -20);
    context.stroke();	
      context.beginPath();
      context.arc(30, 20, 2, 0, 2 * Math.PI, false);
      context.fillStyle = '#ddd';
      context.fill();	
      context.beginPath();
      context.arc(30, -20, 2, 0, 2 * Math.PI, false);
      context.fillStyle = '#ddd';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#ddd';
      context.stroke();	
  }  
  
  if (this.shot) {
	context.beginPath();

	
	 context.arc(45, 0, 5, 0, 2 * Math.PI, false);
	context.fillStyle="#f60";
	context.fill();	
	context.lineWidth = 10;
		context.strokeStyle="#ff0";
	context.stroke;
	
  
  }
  
  context.restore();
};

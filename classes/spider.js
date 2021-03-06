function Spider() {
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 20;
    this.rotation = Math.PI * 0.5;
    this.showFlame = false;
    this.shot = false;
    this.posx = 30;
    this.fireballCounter = 0;
}



Spider.prototype.draw = function(context) {
    function Body() {
        this.width = 10;
        this.height = 10;
        this.circum = Math.max(this.width, this.height);
        this.scaleX = this.width / this.circum;
        this.scaleY = this.height / this.circum;
        this.radius = 10;
    }


    var body = new Body();
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    context.beginPath();
    // 
    // DRAW SPIDER BODY PARTS
    //body
    context.scale(body.scaleX, body.scaleY);
    context.beginPath();
    context.arc(0, 0, body.radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#000';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#000';
    context.stroke();

    //mouth
    context.beginPath();
    context.arc(14, 0, 2, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.fillStyle = "#fff";
    context.fill();
    context.strokeStyle = '#fff';
    context.stroke();
    context.closePath();


    //eyes
    context.beginPath();
    context.arc(6, 6, 3, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.fillStyle = "#f00";
    context.strokeStyle = '#f00';
    context.fill();
    context.stroke();

    //eyes
    context.beginPath();
    context.arc(6, -6, 3, 0, 2 * Math.PI, false);
    context.fillStyle = '#f00';
    context.lineWidth = 1;
    context.strokeStyle = '#f00';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(7, -5, 1, 0, 2 * Math.PI, false);
    context.fillStyle = '#000';
    context.lineWidth = 1;
    context.strokeStyle = '#000';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(7, 5, 1, 0, 2 * Math.PI, false);
    context.fillStyle = '#000';
    context.lineWidth = 1;
    context.strokeStyle = '#000';
    context.fill();
    context.stroke();


    //arms

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(2, -10);
    context.lineTo(10, -17);
    context.lineTo(16, -10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(2, 10);
    context.lineTo(10, 17);
    context.lineTo(16, 10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(0, -10);
    context.lineTo(4, -20);
    context.lineTo(16, -20);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(-4, -10);
    context.lineTo(-10, -17);
    context.lineTo(-16, -10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(-7, -8);
    context.lineTo(-9, -15);
    context.lineTo(-15, -8);
    context.stroke();


    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(2, 10);
    context.lineTo(10, 17);
    context.lineTo(16, 10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(2, 10);
    context.lineTo(10, 17);
    context.lineTo(16, 10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(0, 10);
    context.lineTo(4, 20);
    context.lineTo(16, 20);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(-4, 10);
    context.lineTo(-10, 17);
    context.lineTo(-16, 10);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#000';
    context.moveTo(-7, 8);
    context.lineTo(-9, 15);
    context.lineTo(-15, 8);
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
    if (this.showQuit) {

        context.beginPath();
        context.font = "30px Arial";
        context.strokeText("I quit!", 50, 50);
    }

    context.restore();
};








function Ball(radius, color, spider,vx,vy) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = "#ff0000";
    }
    var startCoordsX = spider.x;
    var startCoordsY = spider.y;
    this.x = startCoordsX;
    this.y = startCoordsY + 10 * ((spider.rotation > 0) ? 1: -1) ;
    this.dirX = vx;
    this.dirY = vy;
    this.radius = radius;
    this.rotation = spider.rotation;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.lineWidth = 3;
}

Ball.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);

    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    //x, y, radius, start_angle, end_angle, anti-clockwise
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
};













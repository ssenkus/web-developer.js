<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Web Developer</title>
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/webdev/css/style.css">
        <style>
            #canvas {
                background-color: #fff;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas" width="1200" height="500"></canvas>
        <aside>left arrow/right arrow: rotate web dev, up to thrust, down to quit job, spacebar to toggle useless fireball.</aside>

		<script src="<?php echo base_url(); ?>assets/webdev/js/utils.js"></script>
        <script src="<?php echo base_url(); ?>assets/webdev/classes/spider.js"></script>
        <script>
            window.onload = function() {
                var canvas = document.getElementById('canvas'),
                        context = canvas.getContext('2d'),
                        spider = new Spider(),
                        vr = 0,
                        vx = 0,
                        vy = 0,
                        thrust = 0,
                        friction = 0.99;

                spider.x = canvas.width / 2;
                spider.y = canvas.height / 2;



                window.addEventListener('keydown', function(event) {
                    switch (event.keyCode) {
                        case 37:      //left
                            vr = -13;
                            break;
                        case 39:      //right
                            vr = 13;
                            break;
                        case 38:      //up
                            thrust = 0.05;
                            spider.showFlame = true;
                            break;
                        case 40:	//down
                            spider.showQuit = true;
                            break;
                        case 32: // spacebar
                            counter = 6;
                            spider.shot = true;
                            break;
                    }

                }, false);

                window.addEventListener('keyup', function() {
                    vr = 0;
                    thrust = 0;
                    spider.showFlame = false;   
                    spider.showQuit = false;
                                        
                }, false);
var counter = 700;
                (function drawFrame() {
                    window.requestAnimationFrame(drawFrame, canvas);
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    spider.rotation += vr * Math.PI / 180;
                    var angle = spider.rotation,
                            ax = Math.cos(angle) * thrust,
                            ay = Math.sin(angle) * thrust,
                            left = 0,
                            right = canvas.width,
                            top = 0,
                            bottom = canvas.height;
                            
                    vx += ax;
                    vy += ay;
                    vx *= friction;
                    vy *= friction;
                    spider.x += vx;
                    spider.y += vy;

                    //screen wrapping
                    if (spider.x - spider.width / 2 > right) {
                        spider.x = left - spider.width / 2;
                    } else if (spider.x + spider.width / 2 < left) {
                        spider.x = right + spider.width / 2;
                    }
                    if (spider.y - spider.height / 2 > bottom) {
                        spider.y = top - spider.height / 2;
                    } else if (spider.y < top - spider.height / 2) {
                        spider.y = bottom + spider.height / 2;
                    }
                    spider.draw(context);



                    if (spider.shot === true && spider.fireballCounter < 50) { spider.fireballCounter++; } else { spider.shot = false; spider.fireballCounter = 0;}
                }());
            };
        </script>
    </body>
</html>

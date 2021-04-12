var car, wall;
var speed, weight;

function setup(){
createCanvas(1600,400)

speed = random(55,90);
weight = random(400,1500);
car = createSprite(50,200,50,50);
car.velocityX=speed;
}

function draw(){
background("black")
  car = createSprite(50,200,50,50);

  wall = (1500,200,60,height/2)

if(wall.x-car < (car.width + wall.width)/2)
{
car.velocityX=0;
var deformation = 0.5 * weight * speed * speed/22500;
}
if(deformation<100)
{
    car.shapeColor=color("green");
}
if(deformation<100 && deformation>100)
{   
    car.shapeColor=color("yellow");
}
if(deformation<100)
{
    car.shapeColor = color("red");
}

drawSprites();
}

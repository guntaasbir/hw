

function setup() {
  createCanvas(500,700);

  createSprite(300, 700, 30, 300);
  createSprite(100, 700, 30, 300);
 
  ground = createSprite(250, 700, 2000, 20);
  createSprite(250, 0, 2000, 20);
  createSprite(0, 350, 10, 2000);
  createSprite(500, 350, 10, 2000);
  ball= createSprite (400, 200, 50, 50);
  ball2= createSprite (400, 200, 50, 50);
  ball3= createSprite (200, 200, 50, 50);
  ball4= createSprite (200, 200, 50, 50);

}
function draw() {
  background(0,0,0)
  if(keyDown("space")){
    ball.velocity.y=5
    ball2.velocity.y=3
    ball3.velocity.y=5
    ball4.velocity.y=3
  }
  drawSprites();
}
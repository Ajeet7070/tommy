var cat, cat1I, catA, cat4I;
var garden, gardenI;
var mouse,mouse1I, mouseA, mouse4I
function preload() 
{
    cat1I = loadImage("images/cat1.png");
    cat4I = loadImage("images/cat4.png");
    mouse1I = loadImage("images/mouse1.png");
    mouse4I = loadImage("images/mouse4.png");

    gardenI = loadImage("images/garden.png");

    catA = loadAnimation("images/cat2.png","images/cat3.png");
    mouseA = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(450,300);
    garden.addImage(gardenI);
    

    cat = createSprite(730,500);
    cat.addImage(cat1I);
    cat.scale = 0.15;

    mouse = createSprite(250,500);
    mouse.addImage(mouse1I);
    mouse.scale = 0.15;


}

function draw() {

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation("lastImg",cat4I);
        cat.changeAnimation("lastImg");
        cat.velocityX = 0;

        mouse.addAnimation("lastImg",mouse4I);
        mouse.changeAnimation("lastImg");
        
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  background(255);
  if(keyCode===LEFT_ARROW)
  {
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catA);
      cat.changeAnimation("catRunning");
      cat.scale = 0.15;

      mouse.addAnimation("jumping",mouseA);
      mouse.changeAnimation("jumping");
  }

}

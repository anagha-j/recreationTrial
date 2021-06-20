var bg, backgroundImage, gb, gbImage, rbImage, blB, blBImage, pb, pbImage, bow, bowImage, arrowImage,redGroup, blueGroup, greenBlue, pinkGroup, arrowGroup;
var score=0;


function preload(){
  backgroundImage = loadImage("background0.png");
  gbImage = loadImage("green_balloon0.png");
  rbImage = loadImage ("rb.png");
  blBImage =loadImage ("blB.png");
  pbImage = loadImage ("pb.png");
  bowImage = loadImage ("bow0.png");
  arrowImage = loadImage ("arrow0.png");
  
}

function setup() {
  createCanvas(400,400)
  
  
  //create background
  bg = createSprite(300,-200,50,600);
  bg.addImage("background",backgroundImage);
  bg.velocityX = -1;
  bg.scale =3.5;
  
  redGroup = new Group();
  greenGroup = new Group();
  blueGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
  //create balloons
  //for(var i = 160; i < 360; i=i+50){
   // gb = createSprite(60,i,20,20);
  //gb.addImage("greenBalloon",gbImage);
  //gb.scale = 0.06;}
  
 // for(var i = 100; i < 400; i=i+50){
   // rb = createSprite(20,i,20,20);
  //rb.addImage("redBalloon",rbImage);
  //rb.scale = 0.06;}
  
 // for(var i = 180; i < 310; i=i+50){
  //  blB = createSprite(100,i,20,20);
 // blB.addImage("blueBalloon",blBImage);
 // blB.scale = 0.06;}
  
  //for(var i = 200; i < 300; i=i+50){
 // pb = createSprite(140,i,20,20);
 // pb.addImage("pinkBalloon",pbImage);
 // pb.scale = 0.7;}
  
  bow = createSprite(370,220,20,20);
  bow.addImage("bow",bowImage);
  
  camera.position.x = background.x-1
  camera.position.y = 400/2
  
}

function draw() {
    background("red"); 
  
  drawSprites();
  
  text ("Score:"+score,270,30)
  
  bow.y = World.mouseY;
  
  var selectBalloon = round (random(1,4));
  console.log(selectBalloon);
  
  if (World.frameCount % 80==0){
    if (selectBalloon ==1){
      redBalloon();
    }else if (selectBalloon ==2){
      greenBalloon();
    }else if (selectBalloon ==3){
     blueBalloon();
    }else {
     pinkBalloon();
    }
  }
  
  
  //if (bg.x < 0){
  //  bg.x = bg.width/2;
 // }
  
  
  if (keyDown("space")){
    var arrow = createArrow();
    //arrow.addImage("arrow");
    //arrow.y = bow.y; 
  }
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+5;
  } 
  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+7;
  }
  
}
  
function createArrow(){
  arrow = createSprite (360,220,5,10);
  arrow.addImage("arrow",arrowImage);
  arrow.velocityX=-6;
  arrow.scale = 0.3
  arrow.y = bow.y; 
  //arrow.debug=true; 
  arrow.setCollider("rectangle",0,0,10,10);
  //return arrow;
  arrowGroup.add(arrow);
}

function redBalloon(){
  var rb = createSprite (10,Math.round(random(20,370)),10,10);
  rb.addImage(rbImage);
  rb.velocityX=3;
  rb.lifetime = 150;
  rb.scale = 0.1;
  redGroup.add(rb);
}

function greenBalloon(){
  var gb = createSprite (50,Math.round(random(20,370)),10,10);
  gb.addImage(gbImage);
  gb.velocityX=3;
  gb.lifetime = 150;
  gb.scale = 0.1;
  greenGroup.add(gb);
}
function blueBalloon(){
  var blB = createSprite (100,Math.round(random(20,370)),10,10);
  blB.addImage(blBImage);
  blB.velocityX=3;
  blB.lifetime = 150;
  blB.scale = 0.1;
  blueGroup.add(blB);
}
function pinkBalloon(){
  var pb = createSprite (150,Math.round(random(20,370)),10,10);
  pb.addImage(pbImage);
  pb.velocityX=3;
  pb.lifetime = 150;
  pb.scale = 1.5;
  pinkGroup.add(pb);
}

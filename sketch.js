var database,ref,balloonPosition;
var balloon;

function setup() {
  createCanvas(1350,650);
  balloon = createSprite(400, 200, 50, 50);

  database = firebase.database();
  ref = database.ref('balloon/position')
  ref.on("value",readPosition,showError);

}

function draw() {
  background(0);  

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
  }

  drawSprites();
}

function writePosition(x,y){
 
  database.ref('balloon/position').set({
      x : balloonPosition.x + x,
      y : balloonPosition.y + y
  });

}

function readPosition(data)
{

  balloonPosition = data.val();
  balloon.x = balloonPosition.x;
  balloon.y = balloonPosition.y;

}

function showError()
{

console.log("Error is occured")

}
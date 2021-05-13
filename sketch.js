var hball;
var database;
//var ballPosition;


function setup(){
    createCanvas(500,500);   
     database=firebase.database();

    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";
    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition);




}

function draw(){
    background("white");
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
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })

}

function readPosition(data){
      position=data.val();
      hball.x= position.x; //read x position from database and assign to ball 
      hball.y=position.y; // read y position from database and assignt to ball


}

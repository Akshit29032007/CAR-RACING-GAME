// var ball,database,position;

// // Gamestate 0 - WAIT - display form
// // Gamestate 1 - PLAY - 4 no of players registered
// // Gamestate 2 = END - Display the leaderboard - gameover

// // Database - Gamestate - 0/1/2 && playerCount - 1/2/3/4



 
// function setup(){

//     // Connect with database

//     database = firebase.database();
//     createCanvas(800,500);
//     ball = createSprite(250,250,20,20);
//     ball.shapeColor = "red";    

//     // .ref() - used to refer to the database value we need  ball----position---x & y
//     var ballposition = database.ref('ball/position');

//     // .on() -  listener - checks if the value in that node changes 
//     ballposition.on("value",readPosition);



// }

// function draw(){
//     background("white");
//     if(keyDown(LEFT_ARROW)){
//         writeposition(-1,0);
//     }
//     else if(keyDown(RIGHT_ARROW)){
//         writeposition(1,0);
//     }
//     else if(keyDown(UP_ARROW)){
//         writeposition(0,-1);
//     }
//     else if(keyDown(DOWN_ARROW)){
//         writeposition(0,+1);
//     }
//     drawSprites();
// }


// function readPosition(data){
//     position = data.val();
//     ball.x = position.x;
//     ball.y = position.y;
// }

// options = {
//     rest : 10,
//     abc : 30
// }

// // playerpaddle.x = playerpaddle.x + 1;
  
// function writeposition(x,y){
//     // -1,0
//     database.ref('ball/position').set({
//         'x' : position.x + x, 
//         'y' : position.y + y
//     })
// }


// function changePosition(x,y){
//     ball.x = ball.x + x;
//     ball.y = ball.y + y;
// }

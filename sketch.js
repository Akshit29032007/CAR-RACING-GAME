var ball,database,position;

var gameState= 0;
var playerCount;

var form,game,player;

function setup(){
 // Connect with database
    database = firebase.database();
    createCanvas(800,500);

    game= new Game()
    game.getState();
    game.start();
   
    



}

function draw(){
    background("white");
    
    drawSprites();
}




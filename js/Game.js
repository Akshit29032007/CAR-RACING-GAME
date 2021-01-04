class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');

        // anonymous functions
        gameStateRef.on("value",function(data){
            gameState = data.val(); // this is the variable gameState
        })
    }
      
    update(state){
        database.ref('/').update({
            gameState : state // this is the dtabase node gameState
        })
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount()
            form = new Form();
            form.display();

        }
    }
}



class Player {
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');

        // anonymous functions
        playerCountRef.on("value",function(data){
            playerCount = data.val(); // this is the variable playerCount
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count // this is the database node gameState
        })
    }


    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name :name                 // this is the database node gameState
        })
    }
    
}
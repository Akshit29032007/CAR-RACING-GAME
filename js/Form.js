class Form {
    constructor(){

    }

 // HTML elements - input,button,checkbox,radio button,h,h2,h3..etc
    display(){
        var title = createElement('h1');
        title.html('Car Racing Game');
        title.position(650,150);

        var input = createInput("Name");
        input.position(650,250);
         var button = createButton("START");
         button.position(700,300);
         
         var greeting = createElement('h2');
          
         // anonymous function - not called anywhere else - hence doesn't have a specific name
         button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name = input.value();
            
              playerCount+=1;
              player.update(name);
              player.updateCount(playerCount);
              greeting.html('hello '+name +'!');
              greeting.position(650,400);



         }); 

    }
}

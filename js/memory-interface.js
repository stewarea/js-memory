var Game = require("./../js/memory.js").gameModule;
$(function(){

  var div1;
  var div2;
  var card1;
  var card2;
  var clickCount = 0;
  var game = new Game();

  $("div").click(function(){

    $(this).children().show();

    if (clickCount === 0){
      card1 = $(this).children().attr('src');
      div1 = $(this);
      clickCount +=1;
    }
    else{

      card2 = $(this).children().attr('src');
      div2 = $(this);
      clickCount = 0;

      var result = game.findMatch(card1, card2);
      if(result){
        if(game.matchCount === 5){
          alert("hurray");
          $("div").children().hide();
          game.matchCount = 0;
        }
      }
      else{
        div1.children().hide(400);
        div2.children().hide(400);
      }
    }





  });
});

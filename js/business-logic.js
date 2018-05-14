$(document).ready(function () {
    var player_one = new DicePlayer("Player I", true,0,0,0,[],false);
    var player_two = new DicePlayer("Player II", false,0,0,0,[],false);
    
  $('#roll-dice').on('click',function () {
      console.log("Dice rolled");
     if(player_one.currentPlayer() == true)
     {
       var score =  player_one.rollDice();
       if(score <= 1){
           player_one.holdGame();
           alert("You have scored 1. The turn to play has been passed to player II");
           player_two.setCurrentPlayer();
       }
       $("#player-one-results").val(player_one.getScore());
  
     }
     else{
         var score = player_two.rollDice();  
         if(score <= 1){
           player_two.holdGame();
           alert("You have scored 1. The turn to play has been passed to player I");
          player_one.setCurrentPlayer();
      } 
         $("#player-two-results").val(player_two.getScore());
      }
     var winner = declareWinningPlayer(player_one,player_two);
     if(winner != null)
     {
         alert("The winner of this game is: "+winner.playerNumber);
         player_one.setCurrentPlayer();
         player_two.holdGame();
     } 
  });
  
  
  $('#hold-play').click(function () {
      if(player_one.isCurrentPlayer() == true)
      {
          player_one.holdGame();
      }
      else{
          player_two.holdGame();
  
       }
   });
  
  });
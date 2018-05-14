  
 var player_one = DicePlayer("Player I", true,0,0,0,null,false);
 var player_two = DicePlayer("Player II", false,0,0,0,null,false);

$('#roll-dice').on("click",function () {
    console.log("Dice rolled");
   if(player_one.isCurrentPlayer() == true)
   {
     var score =  player_one.rollDice();
     if(score <= 1){
         player_one.holdGame();
         alert("You have score 1. The turn to play has been passed to player II");
     }
     $("#player-one-results").val(player_one.getScore());

   }
   else{
       var score = player_two.rollDice();  
       if(score <= 1){
         player_two.holdGame();
         alert("You have score 1. The turn to play has been passed to player I");

    } 
       $("#player-one-results").val(player_two.getScore());
    }
});


$('#hold-play').on("click",function () {
    if(player_one.isCurrentPlayer() == true)
    {
        player_one.holdGame();
    }
    else{
        player_two.holdGame();

     }
 });